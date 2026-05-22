export const config = { maxDuration: 60 };

// ─────────────────────────────────────────────────────────────
// TICKER LISTS
// ─────────────────────────────────────────────────────────────
const THEMATIC = [
  "IONQ","RGTI","QBTS","QUBT","ARQQ",
  "PLTR","AI","BBAI","SOUN","GFAI","IREN","PATH","VRNS","UPWK","COGN",
  "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","CIFR","WULF","BTCS","BKKT","MKTY","HIVE","BITF",
  "RKLB","ASTS","LUNR","RDW","KTOS","SPCE","ASTR","MNTS","BKSY","JOBY","ACHR","BLDE",
  "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG","FLNC","PLUG","FCEL","BE",
  "HOOD","SOFI","AFRM","UPST","LC","DAVE","MQ","PSFE","PAYO","BILL","RELY","FUTU","TIGR","FOUR","FLYW",
  "RIVN","LCID","NKLA","WKHS","GOEV","FSR","CHPT","EVGO","BLNK","PTRA",
  "HIMS","ACAD","SAVA","RXRX","BEAM","EDIT","NTLA","CRSP","ARWR","NVAX",
  "AGEN","ARQT","KYMR","FATE","BLUE","BMRN","DNLI","FOLD","SAGE","IMVT","MRUS","RCKT","AXSM","AUPH",
  "SNOW","DDOG","CRWD","ZS","PANW","TEAM","HUBS","MDB","GTLB","CFLT","OKTA","WDAY","TTD",
  "BRZE","ZETA","ALTR","CWAN","PCOR","SMAR","APPF","PEGA","VEEV","DOCS",
  "CVNA","OLLI","BURL","FIVE","PRPL","PTON","SPOT","ABNB","DASH","LYFT",
  "ACLS","AEHR","AMBA","SITM","POWI","DIOD","CEVA","FORM","RMBS","SIMO","SMTC","VIAV","XPER",
  "LSPD","NCNO","JAMF","PCTY","PAYC","MAXR","SPIR","SWIR","CALX","CIEN","INFN","LITE","NPTN",
  "FIVN","ALRM","SPSC","PRGS","CLFD","WSTS","XPEL",
  "FOXF","LCII","PATK","DORM","MODG","GOLF","BOOT","HIBB","SPWH","BGFV","SNBR","TPX",
  "GIII","EXPR","JWN","ANF","AEO","URBN","ARHAUS","LOVE","TLYS","CULP","KIRK",
  "NATH","PTLO","DINE","EAT","CHUY","FRSH","KRUS","LOCO","JACK","CAKE","BJRI",
  "TREX","AZEK","FBHS","MHK","LESL","POOL","GNRC","HUBB","AOS","LII",
  "ECHO","SAIA","XPO","ODFL","JBHT","SRCL","CLH","CWST","GFL",
  "GPRE","REX","ALTO","GEVO","CLNE","AMRC",
  "TROX","VNTR","KRO","HWKN","MEOH","MTRN","KALU","CENX","ZEUS","USAP","HAYN","ATI","CRS",
  "COLD","STAG","EFC","RC","GPMT","TRTX","KREF","FBRT","MFA","NLY","AGNC","TWO","IVR","ARR","ORC",
  "HBAN","RF","KEY","CFG","FITB","MTB","ZION","CMA","BOKF","FNB","UMBF","WSFS","TOWN","HOPE",
  "NBTB","TRMK","RNST","MOFG","BUSE","CCBG","FFIN","INDB","LKFN","MBWM",
  "MAN","RHI","KELYA","TBI","HIRE","HSII","AMN","ASGN","BGSF","HURN","KFRC","RCMT","VOLT",
  "ENPH","SEDG","ARRY","RUN","NOVA","STEM","SHLS","SPWR","MAXN","CSIQ","JKS","DAQO","SOL","HASI","CWEN",
  "RDDT","MTCH","SNAP","PINS","ZM","TWLO","SIRI","WBD","PARA","NWSA","IPG","OMC","LYV","IHRT","GTN","NXST","SBGI","LUMN",
  "CZR","PENN","DKNG","MGM","WYNN","LVS","RCL","CCL","NCLH","MAR","HLT",
  "EBAY","ETSY","CHWY","CPNG","SE","MELI","VTEX","F","GM",
  "PXD","OXY","DVN","FANG","MRO","APA","HES","VLO","PSX","MPC","DK","DINO","CVI","CLMT","PARR",
  "SLB","HAL","BKR","NOV","PTEN","NE","VAL","DO","RIG","KMI","WMB","ET","EPD","MPLX","PAA","TRGP","OKE","LNG",
  "AR","EQT","CNX","RRC","SWN","CTRA","GPOR","TELL","CQP","NFE",
  "NEM","GOLD","AEM","KGC","AU","PAAS","HL","CDE","EXK","MAG",
  "FCX","SCCO","TECK","HBM","MP","ALB","SQM","PLL","LAC","LTHM","SGML",
  "X","NUE","STLD","CLF","MT","VALE","RIO","BHP","ARCH","AMR",
  "PLD","AMT","EQIX","CCI","DLR","SBAC","WELL","VTR","SPG","VICI","GLPI","EXR","CUBE",
  "AVB","EQR","ESS","MAA","CPT","UDR","NHI","OHI","LTC","SBRA","ARE","BXP","VNO","SLG",
  "RDFN","Z","OPEN","EXPI","RKT","UWMC","PFSI","COOP",
  "NEE","DUK","SO","AEP","EXC","SRE","PCG","ED","XEL","WEC","DTE","CMS","ETR","PPL","NI","AEE","AWK","CNP","ATO",
  "AXON","CACI","LDOS","SAIC","BAH","MRCY","DRS","KBR","VSAT",
];

const SECTOR_HINTS = {
  "IONQ":"量子计算","RGTI":"量子计算","QBTS":"量子计算","QUBT":"量子计算","ARQQ":"量子计算",
  "PLTR":"人工智能","AI":"人工智能","BBAI":"人工智能","SOUN":"人工智能","GFAI":"人工智能","PATH":"人工智能","VRNS":"人工智能","UPWK":"人工智能","COGN":"人工智能",
  "IREN":"加密/区块链","MSTR":"加密/区块链","COIN":"加密/区块链","MARA":"加密/区块链","RIOT":"加密/区块链","CLSK":"加密/区块链","HUT":"加密/区块链","BTBT":"加密/区块链","CIFR":"加密/区块链","WULF":"加密/区块链","BTCS":"加密/区块链","BKKT":"加密/区块链","MKTY":"加密/区块链","HIVE":"加密/区块链","BITF":"加密/区块链",
  "RKLB":"太空/国防","ASTS":"太空/国防","LUNR":"太空/国防","RDW":"太空/国防","KTOS":"太空/国防","SPCE":"太空/国防","ASTR":"太空/国防","MNTS":"太空/国防","BKSY":"太空/国防","JOBY":"太空/国防","ACHR":"太空/国防","BLDE":"太空/国防",
  "SMR":"核能/清洁能源","NNE":"核能/清洁能源","OKLO":"核能/清洁能源","BWXT":"核能/清洁能源","LEU":"核能/清洁能源","LTBR":"核能/清洁能源","CCJ":"核能/清洁能源","UEC":"核能/清洁能源","DNN":"核能/清洁能源","URG":"核能/清洁能源","FLNC":"核能/清洁能源","PLUG":"核能/清洁能源","FCEL":"核能/清洁能源","BE":"核能/清洁能源",
  "HOOD":"金融科技","SOFI":"金融科技","AFRM":"金融科技","UPST":"金融科技","LC":"金融科技","DAVE":"金融科技","MQ":"金融科技","PSFE":"金融科技","PAYO":"金融科技","BILL":"金融科技","RELY":"金融科技","FUTU":"金融科技","TIGR":"金融科技","FOUR":"金融科技","FLYW":"金融科技",
  "RIVN":"非必需消费","LCID":"非必需消费","NKLA":"非必需消费","WKHS":"非必需消费","GOEV":"非必需消费","FSR":"非必需消费",
  "CHPT":"能源","EVGO":"能源","BLNK":"能源","PTRA":"能源","ENPH":"能源","SEDG":"能源","ARRY":"能源","RUN":"能源","NOVA":"能源","STEM":"能源","SHLS":"能源","SPWR":"能源","MAXN":"能源","CSIQ":"能源","JKS":"能源","DAQO":"能源","SOL":"能源","HASI":"能源","CWEN":"能源",
};

// ─────────────────────────────────────────────────────────────
// DYNAMIC TICKER FETCHERS
// ─────────────────────────────────────────────────────────────
async function fetchSP500() {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/datasets/s-and-p-500-companies/main/data/constituents.csv",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!r.ok) return [];
    return r.text().then(text =>
      text.split("\n").slice(1)
        .map(l => l.split(",")[0].replace(/"/g,"").trim())
        .filter(t => /^[A-Z]{1,5}$/.test(t))
    );
  } catch { return []; }
}

async function fetchNASDAQ() {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/datasets/nasdaq-listings/main/data/nasdaq-listed-symbols.csv",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!r.ok) return [];
    return r.text().then(text =>
      text.split("\n").slice(1)
        .map(l => l.split(",")[0].replace(/"/g,"").trim())
        .filter(t => /^[A-Z]{1,5}$/.test(t))
        .slice(0, 800)
    );
  } catch { return []; }
}

// ─────────────────────────────────────────────────────────────
// YAHOO FINANCE DATA — FIX: use meta for realtime price/chg
// ─────────────────────────────────────────────────────────────
async function fetchTickerData(ticker) {
  // One request for 130 days of daily OHLCV + realtime meta fields
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 86400 * 130;
  const url   = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${start}&period2=${end}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return null;
    const j   = await r.json();
    const res = j?.chart?.result?.[0];
    if (!res) return null;

    const meta = res.meta ?? {};
    const q    = res.indicators?.quote?.[0] ?? {};
    const ts   = res.timestamp ?? [];

    // Build clean bar array (historical closes for EMA/AVWAP)
    const bars = ts.map((_, i) => ({
      c: q.close?.[i],
      h: q.high?.[i],
      l: q.low?.[i],
      v: q.volume?.[i],
    })).filter(d => d.c != null && d.h != null && d.l != null && d.v != null);

    // ✅ REALTIME price from meta (Yahoo updates this intraday)
    const realtimePrice    = meta.regularMarketPrice ?? bars.at(-1)?.c;
    const prevClose        = meta.chartPreviousClose ?? meta.previousClose ?? bars.at(-2)?.c;

    // ✅ REALTIME today's change % — from meta, not computed from daily bars
    const realtimeChg1d    = prevClose
      ? +((realtimePrice - prevClose) / prevClose * 100).toFixed(2)
      : 0;

    // ✅ REALTIME today's volume from meta
    const realtimeVolume   = meta.regularMarketVolume ?? bars.at(-1)?.v ?? 0;

    // Replace last bar's close+volume with realtime values so EMA/AVWAP use current price
    if (bars.length > 0) {
      bars[bars.length - 1].c = realtimePrice;
      bars[bars.length - 1].v = realtimeVolume;
      // today's high/low: use meta if available, else keep bar values
      if (meta.regularMarketDayHigh) bars[bars.length - 1].h = meta.regularMarketDayHigh;
      if (meta.regularMarketDayLow)  bars[bars.length - 1].l = meta.regularMarketDayLow;
    }

    return { bars, realtimePrice, realtimeChg1d, realtimeVolume, prevClose, meta };
  } catch { return null; }
}

async function fetchWeeklyClose(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 86400 * 365;
  const url   = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1wk&period1=${start}&period2=${end}`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return [];
    const j = await r.json();
    return (j?.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? []).filter(Boolean);
  } catch { return []; }
}

// ─────────────────────────────────────────────────────────────
// INDICATORS
// ─────────────────────────────────────────────────────────────
function ema(arr, period) {
  if (arr.length < period) return arr.map(() => null);
  const k = 2 / (period + 1);
  const out = new Array(arr.length).fill(null);
  let prev = arr.slice(0, period).reduce((a, b) => a + b, 0) / period;
  out[period - 1] = prev;
  for (let i = period; i < arr.length; i++) { prev = arr[i] * k + prev * (1 - k); out[i] = prev; }
  return out;
}

function calcADR(bars, n = 20) {
  const w = bars.slice(-n);
  if (!w.length) return 0;
  const avgH = w.reduce((s, d) => s + d.h, 0) / w.length;
  const avgL = w.reduce((s, d) => s + d.l, 0) / w.length;
  return avgL > 0 ? ((avgH - avgL) / avgL) * 100 : 0;
}

function calcAVWAP(bars, lookback = 60) {
  const w  = bars.slice(-lookback);
  if (!w.length) return bars.at(-1)?.c ?? 0;
  // Anchor at the lowest low in the window
  const ai = w.reduce((mi, d, i) => d.l < w[mi].l ? i : mi, 0);
  let cumPV = 0, cumV = 0;
  w.slice(ai).forEach(d => {
    const tp = (d.h + d.l + d.c) / 3;
    cumPV += tp * d.v;
    cumV  += d.v;
  });
  return cumV > 0 ? cumPV / cumV : bars.at(-1)?.c ?? 0;
}

function calcVolSurge(bars, n = 20) {
  // avg volume of bars BEFORE the last 5 (avoid partial today)
  const histBars = bars.slice(-n - 5, -5);
  if (!histBars.length) return 1;
  const avg = histBars.reduce((s, d) => s + d.v, 0) / histBars.length;
  // Today's volume is realtime (already replaced in bars[last])
  const todayVol = bars.at(-1)?.v ?? 0;
  return avg > 0 ? todayVol / avg : 1;
}

function calcConsolidation(bars, n = 25) {
  if (bars.length < n) return { rangePct: 100, isConsolidating: false };
  const recent  = bars.slice(-n);
  const hi      = Math.max(...recent.map(d => d.h));
  const lo      = Math.min(...recent.map(d => d.l));
  const rangePct= lo > 0 ? ((hi - lo) / lo) * 100 : 100;
  // Prior high = bars before the consolidation window
  const priorWindow = bars.slice(-Math.min(bars.length, 90), -n);
  const priorHi = priorWindow.length > 0
    ? Math.max(...priorWindow.map(d => d.h))
    : hi;
  // Consolidating = tight range AND hasn't broken out above prior high by >8%
  const isConsolidating = rangePct < 25 && bars.at(-1).c < priorHi * 1.08;
  return { rangePct: +rangePct.toFixed(1), isConsolidating };
}

function scoreStock(d) {
  let s = 0;
  if (d.emaBull)         s += 25;
  if (d.weeklyUp)        s += 15;
  if (d.avwapSupport)    s += 15;
  if (d.volSurge >= 1.8) s += 15;
  if (d.adr >= 8)        s += 15; else if (d.adr >= 5) s += 8;
  if (d.isConsolidating) s += 15;
  return Math.min(s, 100);
}

// ─────────────────────────────────────────────────────────────
// SCREEN ONE TICKER
// ─────────────────────────────────────────────────────────────
async function screenTicker(ticker, sector) {
  try {
    const [data, weekly] = await Promise.all([
      fetchTickerData(ticker),
      fetchWeeklyClose(ticker),
    ]);
    if (!data) return null;
    const { bars, realtimePrice, realtimeChg1d, realtimeVolume, meta } = data;
    if (bars.length < 60) return null;

    const price = realtimePrice;
    if (!price || price < 2 || price > 5000) return null;

    const closes = bars.map(d => d.c);
    const last   = closes.length - 1;

    const e9  = ema(closes, 9);
    const e21 = ema(closes, 21);
    const e50 = ema(closes, 50);
    if (!e9[last] || !e21[last] || !e50[last]) return null;

    const emaBull     = e9[last] > e21[last] && e21[last] > e50[last];
    const ema9SlopeUp = last >= 5 && e9[last] > e9[last - 5];

    const adr = +calcADR(bars).toFixed(1);
    if (adr < 2) return null;

    const avwap        = calcAVWAP(bars);
    const avwapSupport = price > avwap;
    const volSurge     = +calcVolSurge(bars).toFixed(2);
    const { rangePct, isConsolidating } = calcConsolidation(bars);

    // Weekly EMA9 slope
    let weeklyUp = false;
    if (weekly.length >= 12) {
      const we9 = ema(weekly, 9);
      const wl  = we9.length - 1;
      weeklyUp  = we9[wl] != null && we9[wl - 3] != null && we9[wl] > we9[wl - 3];
    }

    // ✅ chg1d = realtime from meta
    // ✅ chg1mo = (realtimePrice / close 22 bars ago) — accurate
    const chg1mo = last >= 22
      ? +(((price / closes[last - 22]) - 1) * 100).toFixed(1)
      : 0;

    const out = {
      ticker, sector,
      price:   +price.toFixed(2),
      chg1d:   realtimeChg1d,       // ✅ realtime
      chg1mo,
      adr,
      volSurge,                     // ✅ uses realtime today volume
      ema9:    +e9[last].toFixed(2),
      ema21:   +e21[last].toFixed(2),
      ema50:   +e50[last].toFixed(2),
      avwap:   +avwap.toFixed(2),
      emaBull, ema9SlopeUp, avwapSupport, weeklyUp,
      isConsolidating, rangePct,
    };
    out.score = scoreStock(out);
    return out;
  } catch { return null; }
}

// ─────────────────────────────────────────────────────────────
// CONCURRENCY POOL
// ─────────────────────────────────────────────────────────────
async function pLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let idx = 0;
  async function worker() {
    while (idx < tasks.length) { const i = idx++; results[i] = await tasks[i](); }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

// ─────────────────────────────────────────────────────────────
// HANDLER
// ─────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const reqSector = req.query.sector;
    let pairs = [];

    if (reqSector) {
      // Single sector scan
      const sectorTickers = THEMATIC.filter(t => SECTOR_HINTS[t] === reqSector);
      pairs = (sectorTickers.length > 0 ? sectorTickers : THEMATIC)
        .map(t => ({ t, s: reqSector }));
    } else {
      // Full scan: S&P500 + NASDAQ + thematic, deduplicated
      const [sp500Res, nasdaqRes] = await Promise.allSettled([fetchSP500(), fetchNASDAQ()]);
      const sp500  = sp500Res.status  === "fulfilled" ? sp500Res.value  : [];
      const nasdaq = nasdaqRes.status === "fulfilled" ? nasdaqRes.value : [];
      const seen   = new Set();
      for (const t of [...sp500, ...nasdaq, ...THEMATIC]) {
        if (!seen.has(t)) { seen.add(t); pairs.push({ t, s: SECTOR_HINTS[t] ?? "美股" }); }
      }
    }

    const tasks   = pairs.map(({ t, s }) => () => screenTicker(t, s));
    const settled = await pLimit(tasks, 15);
    const data    = settled.filter(Boolean).sort((a, b) => b.score - a.score);

    res.status(200).json({ data, total: pairs.length, updatedAt: new Date().toISOString() });
  } catch (e) {
    console.error("screen error:", e);
    res.status(500).json({ error: e.message, data: [], total: 0, updatedAt: new Date().toISOString() });
  }
}
