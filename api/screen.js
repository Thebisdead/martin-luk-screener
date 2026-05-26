export const config = { maxDuration: 60 };

// ─────────────────────────────────────────────────────────────
// TICKER LISTS
// ─────────────────────────────────────────────────────────────
const THEMATIC = [
  "IONQ","RGTI","QBTS","QUBT","ARQQ",
  "PLTR","AI","BBAI","SOUN","GFAI","IREN","PATH","VRNS","UPWK","COGN",
  "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","CIFR","WULF","BTCS","BKKT","HIVE","BITF",
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
  "AAPL","MSFT","NVDA","AVGO","AMD","QCOM","TXN","AMAT","LRCX","KLAC","MU","INTC","ADI","MCHP","NXPI","ON",
  "GOOGL","META","NFLX","DIS","CMCSA","T","VZ","TMUS","CHTR",
  "AMZN","TSLA","HD","MCD","NKE","SBUX","LOW","TJX","BKNG","MAR",
  "LLY","UNH","JNJ","ABBV","MRK","TMO","ABT","DHR","SYK","BSX","ISRG","AMGN","GILD","BIIB","REGN","VRTX","MRNA","BNTX",
  "JPM","BAC","WFC","GS","MS","C","USB","TFC","PNC","COF","AXP","V","MA","PYPL","SQ","FIS","FISV","GPN",
  "GE","HON","UPS","RTX","LMT","NOC","GD","BA","CAT","DE","EMR","ROK","AME","PH","IR","GWW","FDX","UNP","CSX","NSC",
  "WMT","PG","KO","PEP","COST","PM","MO","MDLZ","KHC","GIS",
  "XOM","CVX","COP","EOG",
  "LIN","APD","SHW","ECL","DD","DOW","LYB",
  "BLK","ICE","CME","CBOE","NDAQ","MSCI","SPGI","MCO",
  "ADBE","INTU","ANSS","CDNS","SNPS","CRM","NOW","ORCL","SAP",
  "DELL","HPQ","HPE","NTAP","PSTG","SNOW","ARM","SMCI",
];

const SECTOR_HINTS = {
  "IONQ":"量子计算","RGTI":"量子计算","QBTS":"量子计算","QUBT":"量子计算","ARQQ":"量子计算",
  "PLTR":"人工智能","AI":"人工智能","BBAI":"人工智能","SOUN":"人工智能","GFAI":"人工智能","PATH":"人工智能","VRNS":"人工智能","UPWK":"人工智能","COGN":"人工智能",
  "IREN":"加密/区块链","MSTR":"加密/区块链","COIN":"加密/区块链","MARA":"加密/区块链","RIOT":"加密/区块链","CLSK":"加密/区块链","HUT":"加密/区块链","BTBT":"加密/区块链","CIFR":"加密/区块链","WULF":"加密/区块链","BTCS":"加密/区块链","BKKT":"加密/区块链","HIVE":"加密/区块链","BITF":"加密/区块链",
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
    const r = await fetch("https://raw.githubusercontent.com/datasets/s-and-p-500-companies/main/data/constituents.csv", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (!r.ok) return [];
    const text = await r.text();
    return text.split("\n").slice(1).map(l => l.split(",")[0].replace(/"/g,"").trim()).filter(t => /^[A-Z]{1,5}$/.test(t));
  } catch { return []; }
}

async function fetchNASDAQ() {
  try {
    const r = await fetch("https://raw.githubusercontent.com/datasets/nasdaq-listings/main/data/nasdaq-listed-symbols.csv", {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    if (!r.ok) return [];
    const text = await r.text();
    return text.split("\n").slice(1).map(l => l.split(",")[0].replace(/"/g,"").trim()).filter(t => /^[A-Z]{1,5}$/.test(t)).slice(0, 800);
  } catch { return []; }
}

// ─────────────────────────────────────────────────────────────
// YAHOO FINANCE DATA FETCH
// ─────────────────────────────────────────────────────────────
const YAHOO_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "Accept": "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://finance.yahoo.com/",
};

async function safeJson(response) {
  try {
    const text = await response.text();
    if (!text || text[0] !== "{") return null;
    return JSON.parse(text);
  } catch { return null; }
}

async function fetchDaily(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 86400 * 130;
  const url   = `https://query2.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${start}&period2=${end}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: YAHOO_HEADERS });
    if (!r.ok) return null;
    const j = await safeJson(r);
    const res = j?.chart?.result?.[0];
    if (!res) return null;
    const meta = res.meta ?? {};
    const q    = res.indicators?.quote?.[0] ?? {};
    const bars = (res.timestamp ?? []).map((_, i) => ({
      c: q.close?.[i], h: q.high?.[i], l: q.low?.[i], v: q.volume?.[i],
    })).filter(d => d.c != null && d.h != null && d.l != null && d.v != null);

    // Use meta for realtime price/volume/high/low
    const realtimePrice  = meta.regularMarketPrice  ?? bars.at(-1)?.c;
    const realtimeVolume = meta.regularMarketVolume ?? bars.at(-1)?.v ?? 0;
    if (bars.length > 0) {
      bars[bars.length - 1].c = realtimePrice;
      bars[bars.length - 1].v = realtimeVolume;
      if (meta.regularMarketDayHigh) bars[bars.length - 1].h = meta.regularMarketDayHigh;
      if (meta.regularMarketDayLow)  bars[bars.length - 1].l = meta.regularMarketDayLow;
    }
    return { bars, price: realtimePrice, volume: realtimeVolume };
  } catch { return null; }
}

async function fetchWeeklyClose(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 86400 * 365;
  const url   = `https://query2.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1wk&period1=${start}&period2=${end}`;
  try {
    const r = await fetch(url, { headers: YAHOO_HEADERS });
    if (!r.ok) return [];
    const j = await safeJson(r);
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
  for (let i = period; i < arr.length; i++) {
    prev = arr[i] * k + prev * (1 - k);
    out[i] = prev;
  }
  return out;
}

function calcADR(bars, n = 20) {
  const w = bars.slice(-n);
  if (w.length < 5) return 0;
  const avgH = w.reduce((s, d) => s + d.h, 0) / w.length;
  const avgL = w.reduce((s, d) => s + d.l, 0) / w.length;
  return avgL > 0 ? ((avgH - avgL) / avgL) * 100 : 0;
}

// AVWAP anchored at the bottom of the episodic surge (before the big move)
function calcAVWAP(bars) {
  // Find the surge: biggest % move in a 30-day rolling window
  // The anchor is the LOW just before that surge starts
  let bestSurge = 0, surgeStartIdx = 0;
  for (let i = 20; i < bars.length - 10; i++) {
    const lo = Math.min(...bars.slice(i - 20, i).map(d => d.l));
    const hi = Math.max(...bars.slice(i, i + 30 < bars.length ? i + 30 : bars.length).map(d => d.h));
    const surge = lo > 0 ? (hi - lo) / lo : 0;
    if (surge > bestSurge) {
      bestSurge = surge;
      surgeStartIdx = i - 20; // anchor at the LOW before the surge
    }
  }
  // If no meaningful surge found, anchor at 60-day low
  if (bestSurge < 0.20) {
    const w  = bars.slice(-60);
    const ai = w.reduce((mi, d, i) => d.l < w[mi].l ? i : mi, 0);
    surgeStartIdx = bars.length - 60 + ai;
  }
  const anchorIdx = Math.max(0, surgeStartIdx);
  const after = bars.slice(anchorIdx);
  let cumPV = 0, cumV = 0;
  after.forEach(d => {
    const tp = (d.h + d.l + d.c) / 3;
    cumPV += tp * d.v;
    cumV  += d.v;
  });
  return cumV > 0 ? cumPV / cumV : bars.at(-1)?.c ?? 0;
}

function calcVolSurge(bars, n = 20) {
  const hist = bars.slice(-n - 5, -5);
  if (hist.length < 5) return 1;
  const avg = hist.reduce((s, d) => s + d.v, 0) / hist.length;
  return avg > 0 ? (bars.at(-1)?.v ?? 0) / avg : 1;
}

// ─────────────────────────────────────────────────────────────
// MARTIN LUK CONDITIONS — hard filters, all must be verified
// ─────────────────────────────────────────────────────────────

/*
 * STEP 1: Episodic surge — stock must have had a big run-up
 * AND price must now be BELOW that surge high (already pulled back)
 * "放量大涨后开始横盘整理" — the big move already happened, now resting
 */
function checkEpisodicSurge(bars) {
  // Look for a +30% move within any 40-day window in the past 20–100 bars
  const searchBars = bars.slice(-100, -5); // exclude last 5 bars (consolidation zone)
  if (searchBars.length < 30) return { pass: false, surgeHighPrice: 0, surgeHighIdx: -1 };

  let bestMove = 0, surgeHighPrice = 0, surgeHighIdx = -1;
  for (let i = 0; i < searchBars.length - 5; i++) {
    const windowLow  = searchBars[i].l;
    const windowEnd  = Math.min(i + 40, searchBars.length);
    for (let j = i + 5; j < windowEnd; j++) {
      const move = windowLow > 0 ? (searchBars[j].h - windowLow) / windowLow : 0;
      if (move > bestMove) {
        bestMove     = move;
        surgeHighPrice = searchBars[j].h;
        surgeHighIdx   = bars.length - 100 + 5 + j; // map back to full bars index
      }
    }
  }

  const pass = bestMove >= 0.30; // at least +30% episodic move
  return { pass, surgeHighPrice, surgeHighIdx, surgeMovePct: +(bestMove * 100).toFixed(0) };
}

/*
 * STEP 2: EMA bull alignment — HARD FILTER, must pass to proceed
 * EMA9 > EMA21 > EMA50, AND EMA9 sloping upward
 */
function checkEmaBull(closes) {
  const e9  = ema(closes, 9);
  const e21 = ema(closes, 21);
  const e50 = ema(closes, 50);
  const last = closes.length - 1;
  if (!e9[last] || !e21[last] || !e50[last]) return { pass: false, e9: null, e21: null, e50: null };
  const aligned   = e9[last] > e21[last] && e21[last] > e50[last];
  const slopeUp   = last >= 5 && e9[last] > e9[last - 5];
  return { pass: aligned && slopeUp, e9: e9[last], e21: e21[last], e50: e50[last] };
}

/*
 * STEP 3: Three-line convergence — EMA9, EMA21, AVWAP must be close together
 * Martin: "均线和AVWAP线的区间已经收敛的很窄"
 * Key zone width < 4% of price
 */
function checkKeyZone(e9, e21, avwap, price) {
  const zoneTop = Math.max(e9, e21, avwap);
  const zoneBot = Math.min(e9, e21, avwap);
  const width   = price > 0 ? (zoneTop - zoneBot) / price * 100 : 999;
  return {
    pass:     width < 4.0,         // tight convergence
    zoneTop:  +zoneTop.toFixed(2),
    zoneBot:  +zoneBot.toFixed(2),
    width:    +width.toFixed(1),
  };
}

/*
 * STEP 4: Price pulled back INTO the key zone
 * Martin: "等他们回调到关键位置"
 * Price must be INSIDE the zone (between zoneBot and zoneTop)
 * NOT above it, NOT below it
 * Allow small tolerance: zoneBot * 0.98 to zoneTop * 1.01
 */
function checkPriceAtZone(price, zoneTop, zoneBot) {
  const inZone   = price >= zoneBot * 0.98 && price <= zoneTop * 1.01;
  const aboveZone = price > zoneTop * 1.01;
  const belowZone = price < zoneBot * 0.98;
  return { pass: inZone, aboveZone, belowZone };
}

/*
 * STEP 5: Consolidation after surge
 * Martin: "放量大涨后已经开始震荡盘整"
 * Recent 15-25 bars have tight range < 20%
 * AND volume is lower than during the surge (volume contracting)
 */
function checkConsolidation(bars, n = 20) {
  const recent   = bars.slice(-n);
  if (recent.length < 10) return { pass: false, rangePct: 999 };
  const hi       = Math.max(...recent.map(d => d.h));
  const lo       = Math.min(...recent.map(d => d.l));
  const rangePct = lo > 0 ? (hi - lo) / lo * 100 : 999;
  return { pass: rangePct < 20, rangePct: +rangePct.toFixed(1) };
}

/*
 * STEP 6: Weekly EMA9 sloping upward — big picture trend must be up
 * Martin: "切换到周线图，确保股价在周线的EMA九和EMA二一上方，并且EMA九必须是倾斜向上"
 */
function checkWeeklyUp(weekly) {
  if (weekly.length < 12) return false;
  const we9 = ema(weekly, 9);
  const we21 = ema(weekly, 21);
  const wl  = we9.length - 1;
  if (!we9[wl] || !we21[wl]) return false;
  const priceAboveEmas = weekly[wl] > we9[wl] && weekly[wl] > we21[wl];
  const ema9SlopingUp  = we9[wl] > we9[Math.max(0, wl - 3)];
  return priceAboveEmas && ema9SlopingUp;
}

/*
 * Pullback % — from the surge high to current price
 * Martin wants to see the stock has pulled back from its surge high
 * Ideal range: -5% to -30% from surge high
 */
function calcPullback(price, surgeHighPrice) {
  if (!surgeHighPrice || surgeHighPrice <= 0) return 0;
  return +((price - surgeHighPrice) / surgeHighPrice * 100).toFixed(1);
}

// ─────────────────────────────────────────────────────────────
// SCORING — only adds bonus points on top of hard filters
// ─────────────────────────────────────────────────────────────
function scoreStock(d) {
  // All hard filters must pass — if any fail, score 0
  // (they're already filtered out before scoring, but just in case)
  if (!d.emaBull)       return 0;
  if (!d.hadSurge)      return 0;
  if (!d.priceAtZone)   return 0;

  let s = 60; // base score for passing all 3 hard filters

  // Bonus conditions
  if (d.keyZoneNarrow)    s += 15; // 三线收敛越窄越好
  if (d.isConsolidating)  s += 10; // 盘整形态
  if (d.weeklyUp)         s += 10; // 周线向上
  if (d.adr >= 8)         s +=  5; // 高ADR更好
  else if (d.adr >= 5)    s +=  3;
  // Pullback sweet spot: -5% to -25% from surge high
  if (d.pullbackPct >= -25 && d.pullbackPct <= -5) s += 5;
  // Volume surge confirmation
  if (d.volSurge >= 2.0)  s +=  5;

  return Math.min(s, 100);
}

// ─────────────────────────────────────────────────────────────
// SCREEN ONE TICKER
// ─────────────────────────────────────────────────────────────
async function screenTicker(ticker, sector) {
  try {
    const [dailyData, weekly] = await Promise.all([
      fetchDaily(ticker),
      fetchWeeklyClose(ticker),
    ]);
    if (!dailyData) return null;
    const { bars, price } = dailyData;
    if (bars.length < 60 || !price || price < 2 || price > 5000) return null;

    // ── HARD FILTER 1: ADR >= 4% ─────────────────────────────
    const adr = +calcADR(bars).toFixed(1);
    if (adr < 4) return null;

    const closes = bars.map(d => d.c);

    // ── HARD FILTER 2: EMA bull alignment ────────────────────
    const emaResult = checkEmaBull(closes);
    if (!emaResult.pass) return null; // ← strict hard filter, skip ticker

    // ── HARD FILTER 3: Episodic surge that already happened ──
    const surgeResult = checkEpisodicSurge(bars);
    if (!surgeResult.pass) return null; // ← no big move, skip

    // ── Pullback from surge high ──────────────────────────────
    const pullbackPct = calcPullback(price, surgeResult.surgeHighPrice);
    // Price must be BELOW the surge high (has pulled back)
    if (pullbackPct >= 0) return null; // still at or above surge high = not a setup yet

    // ── AVWAP from surge origin ───────────────────────────────
    const avwap = +calcAVWAP(bars).toFixed(2);

    // ── Key zone: EMA9/21/AVWAP convergence ──────────────────
    const kz = checkKeyZone(emaResult.e9, emaResult.e21, avwap, price);

    // ── HARD FILTER 4: Price must be IN the key zone ─────────
    const zoneCheck = checkPriceAtZone(price, kz.zoneTop, kz.zoneBot);
    if (!zoneCheck.pass) return null; // ← price above zone = not a setup yet

    // ── Remaining checks (bonus conditions) ──────────────────
    const consolResult = checkConsolidation(bars);
    const weeklyUp     = checkWeeklyUp(weekly);
    const volSurge     = +calcVolSurge(bars).toFixed(2);

    // Monthly change
    const last   = closes.length - 1;
    const chg1mo = last >= 22 ? +(((price / closes[last - 22]) - 1) * 100).toFixed(1) : 0;

    // Stop loss & targets based on ADR
    const adrDollar   = price * (adr / 100);
    const suggestedSL = +(kz.zoneBot - adrDollar * 0.3).toFixed(2);
    const slPct       = price > 0 ? +((price - suggestedSL) / price * 100).toFixed(1) : 0;
    const tp1         = +(price + (price - suggestedSL) * 3).toFixed(2);
    const tp2         = +(price + (price - suggestedSL) * 5).toFixed(2);

    const out = {
      ticker, sector,
      price:   +price.toFixed(2),
      chg1mo,
      adr,
      volSurge,
      ema9:    +emaResult.e9.toFixed(2),
      ema21:   +emaResult.e21.toFixed(2),
      ema50:   +emaResult.e50.toFixed(2),
      avwap,
      keyZoneTop:      kz.zoneTop,
      keyZoneBot:      kz.zoneBot,
      keyZoneWidth:    kz.width,
      // Martin Luk conditions
      hadSurge:        surgeResult.pass,
      surgeMovePct:    surgeResult.surgeMovePct,
      emaBull:         emaResult.pass,
      keyZoneNarrow:   kz.pass,
      priceAtZone:     zoneCheck.pass,
      isConsolidating: consolResult.pass,
      weeklyUp,
      pullbackPct,     // from surge high, always negative here
      rangePct:        consolResult.rangePct,
      suggestedSL, slPct, tp1, tp2,
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
      const st = THEMATIC.filter(t => SECTOR_HINTS[t] === reqSector);
      pairs = (st.length > 0 ? st : THEMATIC).map(t => ({ t, s: reqSector }));
    } else {
      const [sp500Res, nasdaqRes] = await Promise.allSettled([fetchSP500(), fetchNASDAQ()]);
      const sp500  = sp500Res.status  === "fulfilled" ? sp500Res.value  : [];
      const nasdaq = nasdaqRes.status === "fulfilled" ? nasdaqRes.value : [];
      const seen   = new Set();
      for (const t of [...sp500, ...nasdaq, ...THEMATIC]) {
        if (!seen.has(t)) { seen.add(t); pairs.push({ t, s: SECTOR_HINTS[t] ?? "美股" }); }
      }
    }

    const tasks   = pairs.map(({ t, s }) => () => screenTicker(t, s));
    const settled = await pLimit(tasks, 12);
    const data    = settled.filter(Boolean).sort((a, b) => b.score - a.score);

    res.status(200).json({ data, total: pairs.length, updatedAt: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ error: e.message, data: [], total: 0, updatedAt: new Date().toISOString() });
  }
}
