// screen.js — Martin Luk individual stock screener
// Supports ?sector= param to filter by sector
// Uses historical daily data for EMA/AVWAP calculation
// Batches parallel requests; stays within Vercel 60s limit

export const config = { maxDuration: 60 };

import { SECTOR_TICKERS, TICKER_SECTOR_MAP, ALL_TICKERS } from './tickers.js';

// ── EMA ──────────────────────────────────────────────────────
function ema(arr, period) {
  if (arr.length < period) return arr.map(() => null);
  const k = 2 / (period + 1);
  const result = new Array(arr.length).fill(null);
  let prev = arr.slice(0, period).reduce((a, b) => a + b, 0) / period;
  result[period - 1] = prev;
  for (let i = period; i < arr.length; i++) {
    prev = arr[i] * k + prev * (1 - k);
    result[i] = prev;
  }
  return result;
}

// ── Yahoo Finance history (daily) ─────────────────────────────
async function fetchDaily(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * 130;
  const url   = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${start}&period2=${end}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) return null;
    const j  = await r.json();
    const res = j?.chart?.result?.[0];
    if (!res) return null;
    const q = res.indicators.quote[0];
    return res.timestamp.map((t, i) => ({
      t, c: q.close[i], h: q.high[i], l: q.low[i], v: q.volume[i]
    })).filter(d => d.c && d.h && d.l && d.v);
  } catch { return null; }
}

async function fetchWeeklyClose(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * 365;
  const url   = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1wk&period1=${start}&period2=${end}`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) return [];
    const j = await r.json();
    return (j?.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? []).filter(Boolean);
  } catch { return []; }
}

// ── Indicators ────────────────────────────────────────────────
function calcADR(data, n = 20) {
  const w = data.slice(-n);
  return ((w.reduce((s, d) => s + d.h, 0) / w.length) -
          (w.reduce((s, d) => s + d.l, 0) / w.length)) /
         (w.reduce((s, d) => s + d.l, 0) / w.length) * 100;
}

function calcAVWAP(data, lookback = 60) {
  const w   = data.slice(-lookback);
  const ai  = w.reduce((mi, d, i) => d.l < w[mi].l ? i : mi, 0);
  let cumPV = 0, cumV = 0;
  w.slice(ai).forEach(d => { const tp = (d.h + d.l + d.c) / 3; cumPV += tp * d.v; cumV += d.v; });
  return cumPV / cumV;
}

function calcVolSurge(data, n = 20) {
  const avg = data.slice(-n - 5, -5).reduce((s, d) => s + d.v, 0) / n;
  return avg > 0 ? Math.max(...data.slice(-5).map(d => d.v)) / avg : 1;
}

function calcConsolidation(data, n = 25) {
  const recent   = data.slice(-n);
  const hi       = Math.max(...recent.map(d => d.h));
  const lo       = Math.min(...recent.map(d => d.l));
  const rangePct = ((hi - lo) / lo) * 100;
  const priorHi  = data.length >= 60
    ? Math.max(...data.slice(-60, -25).map(d => d.h)) : hi;
  return {
    rangePct:        +rangePct.toFixed(1),
    isConsolidating: rangePct < 25 && data[data.length - 1].c < priorHi * 1.08,
  };
}

function scoreStock(d) {
  let s = 0;
  if (d.emaBull)          s += 25;
  if (d.weeklyUp)         s += 15;
  if (d.avwapSupport)     s += 15;
  if (d.volSurge >= 1.8)  s += 15;
  if (d.adr >= 8)         s += 15; else if (d.adr >= 5) s += 8;
  if (d.isConsolidating)  s += 15;
  return Math.min(s, 100);
}

// ── Single ticker ─────────────────────────────────────────────
async function screenTicker(ticker, sector) {
  try {
    const [daily, weekly] = await Promise.all([fetchDaily(ticker), fetchWeeklyClose(ticker)]);
    if (!daily || daily.length < 60) return null;

    const closes = daily.map(d => d.c);
    const last   = closes.length - 1;
    const price  = closes[last];
    if (price < 2 || price > 1000) return null;

    const e9  = ema(closes, 9);
    const e21 = ema(closes, 21);
    const e50 = ema(closes, 50);
    if (!e9[last] || !e21[last] || !e50[last]) return null;

    const emaBull      = e9[last] > e21[last] && e21[last] > e50[last];
    const ema9SlopeUp  = last >= 5 && e9[last] > e9[last - 5];
    const adr          = +calcADR(daily).toFixed(1);
    if (adr < 2) return null;

    const avwap        = calcAVWAP(daily);
    const avwapSupport = price > avwap;
    const volSurge     = +calcVolSurge(daily).toFixed(2);
    const { rangePct, isConsolidating } = calcConsolidation(daily);

    let weeklyUp = false;
    if (weekly.length >= 12) {
      const we9 = ema(weekly, 9);
      const wl  = we9.length - 1;
      weeklyUp  = we9[wl] != null && we9[wl - 3] != null && we9[wl] > we9[wl - 3];
    }

    const chg1d  = last >= 1  ? +(((closes[last] / closes[last - 1])  - 1) * 100).toFixed(2) : 0;
    const chg1mo = last >= 22 ? +(((closes[last] / closes[last - 22]) - 1) * 100).toFixed(1) : 0;

    const out = {
      ticker, sector, price: +price.toFixed(2), chg1d, chg1mo, adr, volSurge,
      ema9: +e9[last].toFixed(2), ema21: +e21[last].toFixed(2), ema50: +e50[last].toFixed(2),
      avwap: +avwap.toFixed(2),
      emaBull, ema9SlopeUp, avwapSupport, weeklyUp, isConsolidating, rangePct,
    };
    out.score = scoreStock(out);
    return out;
  } catch { return null; }
}

// ── Concurrency limiter ───────────────────────────────────────
async function pLimit(tasks, concurrency) {
  const results = [];
  let idx = 0;
  async function worker() {
    while (idx < tasks.length) {
      const i = idx++;
      results[i] = await tasks[i]();
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

// ── Handler ───────────────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const sector = req.query.sector; // optional
  let pairs;
  if (sector) {
    const tickers = SECTOR_TICKERS[sector] ?? [];
    pairs = tickers.map(t => ({ t, s: sector }));
  } else {
    // All tickers — use TICKER_SECTOR_MAP for sector labels
    pairs = ALL_TICKERS.map(t => ({ t, s: TICKER_SECTOR_MAP[t] ?? 'Other' }));
  }

  // Deduplicate
  const seen = new Set();
  const unique = pairs.filter(({ t }) => { if (seen.has(t)) return false; seen.add(t); return true; });

  // Run with concurrency=12 to stay within Vercel limits
  const tasks   = unique.map(({ t, s }) => () => screenTicker(t, s));
  const settled = await pLimit(tasks, 12);

  const data = settled
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  res.status(200).json({ data, total: unique.length, updatedAt: new Date().toISOString() });
}
