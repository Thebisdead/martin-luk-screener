export const config = { maxDuration: 60 };

const WATCHLIST = {
  "量子计算": ["IONQ", "RGTI", "QBTS", "QUBT", "ARQQ"],
  "人工智能": ["PLTR", "AI", "BBAI", "SOUN", "GFAI"],
  "AI基础设施": ["NVDA", "AMD", "SMCI", "MRVL", "ARM"],
  "加密/区块链": ["MSTR", "COIN", "MARA", "RIOT", "CLSK"],
  "太空/国防": ["RKLB", "ASTS", "LUNR", "KTOS", "RDW"],
  "金融科技": ["HOOD", "SOFI", "AFRM", "UPST", "MQ"],
  "核能/能源": ["SMR", "NNE", "OKLO", "BWXT", "LEU"],
};

function ema(arr, period) {
  const k = 2 / (period + 1);
  let result = [];
  let prev = arr.slice(0, period).reduce((a, b) => a + b, 0) / period;
  result[period - 1] = prev;
  for (let i = period; i < arr.length; i++) {
    prev = arr[i] * k + prev * (1 - k);
    result[i] = prev;
  }
  return result;
}

async function fetchYahoo(ticker) {
  const end = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * 130; // 130 days
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${start}&period2=${end}&includePrePost=false`;

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json",
    },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const result = json?.chart?.result?.[0];
  if (!result) return null;

  const timestamps = result.timestamp;
  const q = result.indicators.quote[0];
  const closes = q.close;
  const highs = q.high;
  const lows = q.low;
  const volumes = q.volume;

  // Filter out null values
  const valid = timestamps.map((t, i) => ({
    t, c: closes[i], h: highs[i], l: lows[i], v: volumes[i]
  })).filter(d => d.c && d.h && d.l && d.v);

  return valid;
}

async function fetchWeekly(ticker) {
  const end = Math.floor(Date.now() / 1000);
  const start = end - 60 * 60 * 24 * 365;
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1wk&period1=${start}&period2=${end}`;
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) return null;
  const json = await res.json();
  const result = json?.chart?.result?.[0];
  if (!result) return null;
  return result.indicators.quote[0].close.filter(Boolean);
}

function calcADR(highs, lows, n = 20) {
  const sliceH = highs.slice(-n);
  const sliceL = lows.slice(-n);
  const avgH = sliceH.reduce((a, b) => a + b, 0) / sliceH.length;
  const avgL = sliceL.reduce((a, b) => a + b, 0) / sliceL.length;
  return ((avgH - avgL) / avgL) * 100;
}

function calcAVWAP(data, lookback = 60) {
  const window = data.slice(-lookback);
  let minLow = Infinity, anchorIdx = 0;
  window.forEach((d, i) => { if (d.l < minLow) { minLow = d.l; anchorIdx = i; } });
  const after = window.slice(anchorIdx);
  let cumPV = 0, cumV = 0;
  after.forEach(d => {
    const tp = (d.h + d.l + d.c) / 3;
    cumPV += tp * d.v;
    cumV += d.v;
  });
  return cumPV / cumV;
}

function calcVolSurge(volumes, n = 20) {
  const avg = volumes.slice(-n - 5, -5).reduce((a, b) => a + b, 0) / n;
  const maxRecent = Math.max(...volumes.slice(-5));
  return maxRecent / avg;
}

function calcConsolidation(data, n = 25) {
  const recent = data.slice(-n);
  const hi = Math.max(...recent.map(d => d.h));
  const lo = Math.min(...recent.map(d => d.l));
  const rangePct = ((hi - lo) / lo) * 100;
  const priorHi = data.length >= 60
    ? Math.max(...data.slice(-60, -25).map(d => d.h))
    : hi;
  const isConsolidating = rangePct < 25 && data[data.length - 1].c < priorHi * 1.08;
  return { rangePct: +rangePct.toFixed(1), isConsolidating };
}

function scoreStock(d) {
  let s = 0;
  if (d.emaBull) s += 25;
  if (d.weeklyUp) s += 15;
  if (d.avwapSupport) s += 15;
  if (d.volSurge >= 1.8) s += 15;
  if (d.adr >= 8) s += 15; else if (d.adr >= 5) s += 8;
  if (d.isConsolidating) s += 15;
  return Math.min(s, 100);
}

async function screenTicker(ticker, sector) {
  try {
    const [daily, weekly] = await Promise.all([fetchYahoo(ticker), fetchWeekly(ticker)]);
    if (!daily || daily.length < 60) return null;

    const closes = daily.map(d => d.c);
    const highs = daily.map(d => d.h);
    const lows = daily.map(d => d.l);
    const volumes = daily.map(d => d.v);

    const price = closes[closes.length - 1];
    if (price < 3 || price > 500) return null;

    const e9 = ema(closes, 9);
    const e21 = ema(closes, 21);
    const e50 = ema(closes, 50);
    const last = closes.length - 1;

    const emaBull = e9[last] > e21[last] && e21[last] > e50[last];
    const ema9SlopeUp = e9[last] > e9[last - 5];

    const adr = +calcADR(highs, lows).toFixed(1);
    if (adr < 3) return null;

    const avwap = calcAVWAP(daily);
    const avwapSupport = price > avwap;
    const volSurge = +calcVolSurge(volumes).toFixed(2);
    const { rangePct, isConsolidating } = calcConsolidation(daily);

    // Weekly EMA9 slope
    let weeklyUp = false;
    if (weekly && weekly.length >= 12) {
      const we9 = ema(weekly, 9);
      weeklyUp = we9[we9.length - 1] > we9[we9.length - 4];
    }

    const chg1d = +(((closes[last] / closes[last - 1]) - 1) * 100).toFixed(2);
    const chg1mo = closes.length >= 22
      ? +(((closes[last] / closes[last - 22]) - 1) * 100).toFixed(1)
      : 0;

    const result = {
      ticker, sector, price: +price.toFixed(2),
      chg1d, chg1mo, adr,
      volSurge,
      ema9: +e9[last].toFixed(2),
      ema21: +e21[last].toFixed(2),
      ema50: +e50[last].toFixed(2),
      avwap: +avwap.toFixed(2),
      emaBull, ema9SlopeUp, avwapSupport, weeklyUp,
      isConsolidating, rangePct,
    };
    result.score = scoreStock(result);
    return result;
  } catch (e) {
    return null;
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const sector = req.query.sector || "all";
  const tickers = sector === "all"
    ? Object.entries(WATCHLIST).flatMap(([s, ts]) => ts.map(t => ({ t, s })))
    : (WATCHLIST[sector] || []).map(t => ({ t, s: sector }));

  const results = await Promise.allSettled(
    tickers.map(({ t, s }) => screenTicker(t, s))
  );

  const data = results
    .map(r => r.status === "fulfilled" ? r.value : null)
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  res.status(200).json({ data, updatedAt: new Date().toISOString() });
}
