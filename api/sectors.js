// sectors.js — Real-time sector heat scoring using Yahoo Finance batch quote API
// Covers ALL sectors from tickers.js, batching 50 tickers per request

export const config = { maxDuration: 60 };

import { SECTOR_TICKERS } from './tickers.js';

// Yahoo Finance batch quote — up to 50 symbols per call, very fast
async function fetchBatchQuotes(symbols) {
  const joined = symbols.join(',');
  const fields = [
    'regularMarketPrice','regularMarketChangePercent','regularMarketVolume',
    'averageDailyVolume20Day','fiftyTwoWeekHigh','fiftyTwoWeekLow',
    'regularMarketDayHigh','regularMarketDayLow','marketCap'
  ].join(',');
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(joined)}&fields=${fields}`;
  try {
    const r = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
    });
    if (!r.ok) return [];
    const j = await r.json();
    return j?.quoteResponse?.result ?? [];
  } catch { return []; }
}

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

function scoreSectorFromQuotes(quotes) {
  if (!quotes.length) return null;

  const valid = quotes.filter(q => q.regularMarketPrice > 0);
  if (!valid.length) return null;

  // 1. Average 1-day change %
  const avgChg = valid.reduce((s, q) => s + (q.regularMarketChangePercent ?? 0), 0) / valid.length;

  // 2. Volume ratio
  const volRatios = valid
    .filter(q => q.averageDailyVolume20Day > 0)
    .map(q => (q.regularMarketVolume ?? 0) / q.averageDailyVolume20Day);
  const avgVolRatio = volRatios.length
    ? volRatios.reduce((s, v) => s + v, 0) / volRatios.length : 1;

  // 3. Breadth
  const upCount  = valid.filter(q => (q.regularMarketChangePercent ?? 0) > 0).length;
  const breadth  = upCount / valid.length;

  // 4. Near 52-week high
  const nearHighCount = valid.filter(q =>
    q.fiftyTwoWeekHigh && q.regularMarketPrice >= q.fiftyTwoWeekHigh * 0.80
  ).length;
  const nearHighPct = nearHighCount / valid.length;

  // 5. Today ADR proxy
  const adrs = valid
    .filter(q => q.regularMarketDayLow > 0)
    .map(q => ((q.regularMarketDayHigh - q.regularMarketDayLow) / q.regularMarketDayLow) * 100);
  const avgAdr = adrs.length ? adrs.reduce((s, v) => s + v, 0) / adrs.length : 0;

  // Composite heat score (0-100)
  const volScore      = Math.min((avgVolRatio - 1) / 3, 1) * 35;
  const breadthScore  = breadth * 20;
  const chgScore      = Math.min(Math.max(avgChg / 5, 0), 1) * 20;
  const nearHighScore = nearHighPct * 15;
  const adrScore      = Math.min(avgAdr / 10, 1) * 10;
  const heat          = Math.round(volScore + breadthScore + chgScore + nearHighScore + adrScore);

  return {
    avgChg:      +avgChg.toFixed(2),
    avgVolRatio: +avgVolRatio.toFixed(2),
    breadth:     +(breadth * 100).toFixed(0),
    nearHighPct: +(nearHighPct * 100).toFixed(0),
    avgAdr:      +avgAdr.toFixed(1),
    heat:        Math.min(heat, 100),
    tickerCount: valid.length,
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Collect all unique tickers across all sectors
  const allTickers = [...new Set(Object.values(SECTOR_TICKERS).flat())];

  // Batch fetch all quotes in parallel (50 per batch)
  const chunks  = chunkArray(allTickers, 50);
  const results = await Promise.allSettled(chunks.map(fetchBatchQuotes));

  // Build a map: ticker → quote
  const quoteMap = {};
  for (const r of results) {
    if (r.status === 'fulfilled') {
      for (const q of r.value) {
        if (q.symbol) quoteMap[q.symbol] = q;
      }
    }
  }

  // Score each sector
  const sectorScores = Object.entries(SECTOR_TICKERS).map(([sector, tickers]) => {
    const quotes = tickers.map(t => quoteMap[t]).filter(Boolean);
    const score  = scoreSectorFromQuotes(quotes);
    if (!score) return null;

    // Top movers in this sector
    const sorted = quotes
      .filter(q => q.regularMarketChangePercent != null)
      .sort((a, b) => Math.abs(b.regularMarketChangePercent) - Math.abs(a.regularMarketChangePercent));
    const topMovers = sorted.slice(0, 3).map(q => ({
      ticker: q.symbol,
      chg:    +(q.regularMarketChangePercent ?? 0).toFixed(2),
      price:  +(q.regularMarketPrice ?? 0).toFixed(2),
      volRatio: q.averageDailyVolume20Day > 0
        ? +((q.regularMarketVolume ?? 0) / q.averageDailyVolume20Day).toFixed(1)
        : 1,
    }));

    return { sector, ...score, topMovers };
  }).filter(Boolean).sort((a, b) => b.heat - a.heat);

  res.status(200).json({
    data:       sectorScores,
    totalQuotes:Object.keys(quoteMap).length,
    updatedAt:  new Date().toISOString(),
  });
}
