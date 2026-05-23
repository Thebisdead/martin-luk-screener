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
    const r = await fetch("https://raw.githubusercontent.com/datasets/s-and-p-500-companies/main/data/constituents.csv", { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return [];
    const text = await r.text();
    return text.split("\n").slice(1).map(l => l.split(",")[0].replace(/"/g,"").trim()).filter(t => /^[A-Z]{1,5}$/.test(t));
  } catch { return []; }
}

async function fetchNASDAQ() {
  try {
    const r = await fetch("https://raw.githubusercontent.com/datasets/nasdaq-listings/main/data/nasdaq-listed-symbols.csv", { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return [];
    const text = await r.text();
    return text.split("\n").slice(1).map(l => l.split(",")[0].replace(/"/g,"").trim()).filter(t => /^[A-Z]{1,5}$/.test(t)).slice(0, 800);
  } catch { return []; }
}

// ─────────────────────────────────────────────────────────────
// YAHOO FINANCE — realtime price via meta
// ─────────────────────────────────────────────────────────────
async function fetchTickerData(ticker) {
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
    const bars = (res.timestamp ?? []).map((_, i) => ({
      c: q.close?.[i], h: q.high?.[i], l: q.low?.[i], v: q.volume?.[i],
    })).filter(d => d.c != null && d.h != null && d.l != null && d.v != null);

    const realtimePrice  = meta.regularMarketPrice ?? bars.at(-1)?.c;
    const realtimeVolume = meta.regularMarketVolume ?? bars.at(-1)?.v ?? 0;

    // Use Yahoo's own changePercent — avoids stale prevClose bugs causing fake -19% etc
    let realtimeChg1d = 0;
    if (meta.regularMarketChangePercent != null) {
      realtimeChg1d = +meta.regularMarketChangePercent.toFixed(2);
    } else {
      const prevClose = meta.chartPreviousClose ?? bars.at(-2)?.c;
      if (prevClose > 0) {
        const raw = (realtimePrice - prevClose) / prevClose * 100;
        realtimeChg1d = Math.abs(raw) < 50 ? +raw.toFixed(2) : 0;
      }
    }

    // Replace last bar with realtime values
    if (bars.length > 0) {
      bars[bars.length - 1].c = realtimePrice;
      bars[bars.length - 1].v = realtimeVolume;
      if (meta.regularMarketDayHigh) bars[bars.length - 1].h = meta.regularMarketDayHigh;
      if (meta.regularMarketDayLow)  bars[bars.length - 1].l = meta.regularMarketDayLow;
    }
    return { bars, realtimePrice, realtimeChg1d, realtimeVolume };
  } catch { return null; }
}

async function fetchWeeklyClose(ticker) {
  const end = Math.floor(Date.now() / 1000);
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1wk&period1=${end - 86400*365}&period2=${end}`;
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

// AVWAP — Martin Luk anchors at a KEY EVENT, best approximated as:
// the lowest point BEFORE the episodic surge (the base before the big move).
// We detect the surge start by finding where the biggest 30-day rally begins,
// then anchor AVWAP at the low just before that rally.
function calcAVWAP(bars) {
  if (bars.length < 20) return bars.at(-1)?.c ?? 0;

  // Step 1: find the episodic surge start index
  // Look in bars[-90..-10], find the bar whose close is the lowest
  // in the window before the highest peak — that's the surge origin
  const searchWindow = bars.slice(-90, -5);
  if (searchWindow.length < 10) {
    // Fallback: anchor at 60-day low
    const w  = bars.slice(-60);
    const ai = w.reduce((mi, d, i) => d.l < w[mi].l ? i : mi, 0);
    let cumPV = 0, cumV = 0;
    w.slice(ai).forEach(d => { const tp = (d.h + d.l + d.c) / 3; cumPV += tp * d.v; cumV += d.v; });
    return cumV > 0 ? cumPV / cumV : bars.at(-1)?.c ?? 0;
  }

  // Find the peak in search window
  const peakIdx = searchWindow.reduce((mi, d, i) => d.h > searchWindow[mi].h ? i : mi, 0);
  // Find the lowest low BEFORE that peak (the base/launch point)
  const beforePeak = searchWindow.slice(0, Math.max(peakIdx, 1));
  const anchorIdx  = beforePeak.reduce((mi, d, i) => d.l < beforePeak[mi].l ? i : mi, 0);

  // Map back to full bars index
  const fullAnchorIdx = bars.length - 90 + 5 + anchorIdx; // approx offset
  const anchorBar     = Math.max(0, fullAnchorIdx);

  // Step 2: compute AVWAP from anchor to now
  const afterAnchor = bars.slice(anchorBar);
  let cumPV = 0, cumV = 0;
  afterAnchor.forEach(d => {
    const tp = (d.h + d.l + d.c) / 3;
    cumPV += tp * d.v;
    cumV  += d.v;
  });
  return cumV > 0 ? cumPV / cumV : bars.at(-1)?.c ?? 0;
}

// Also compute a secondary AVWAP anchored at the consolidation high
// (Martin uses this for resistance reference on the pullback)
function calcAVWAPFromHigh(bars) {
  if (bars.length < 20) return bars.at(-1)?.c ?? 0;
  // Find the recent peak (after the surge, during consolidation start)
  const w   = bars.slice(-60);
  const ai  = w.reduce((mi, d, i) => d.h > w[mi].h ? i : mi, 0);
  const after = w.slice(ai);
  let cumPV = 0, cumV = 0;
  after.forEach(d => { const tp = (d.h + d.l + d.c) / 3; cumPV += tp * d.v; cumV += d.v; });
  return cumV > 0 ? cumPV / cumV : bars.at(-1)?.c ?? 0;
}

function calcVolSurge(bars, n = 20) {
  const hist = bars.slice(-n - 5, -5);
  if (!hist.length) return 1;
  const avg = hist.reduce((s, d) => s + d.v, 0) / hist.length;
  return avg > 0 ? (bars.at(-1)?.v ?? 0) / avg : 1;
}

// ─────────────────────────────────────────────────────────────
// MARTIN LUK CORE CONDITIONS
// ─────────────────────────────────────────────────────────────

/**
 * Condition 1: Prior episodic surge (放量大涨)
 * The stock must have had a big run-up in the past 20–90 days.
 * We look for a move of at least +30% from any point in that window to its peak.
 */
function hadEpisodicSurge(bars) {
  const window = bars.slice(-90, -10); // look 90 to 10 bars ago
  if (window.length < 20) return false;
  const lowestLow  = Math.min(...window.map(d => d.l));
  const highestHigh = Math.max(...window.map(d => d.h));
  const surgeRatio  = (highestHigh - lowestLow) / lowestLow;
  return surgeRatio >= 0.30; // at least +30% episodic move
}

/**
 * Condition 2: EMA bull alignment (多头排列)
 * EMA9 > EMA21 > EMA50, and EMA9 sloping up
 */
function checkEmaBull(e9, e21, e50, last) {
  if (!e9[last] || !e21[last] || !e50[last]) return false;
  const aligned   = e9[last] > e21[last] && e21[last] > e50[last];
  const slopeUp   = last >= 5 && e9[last] > e9[last - 5];
  return aligned && slopeUp;
}

/**
 * Condition 3: EMA9, EMA21, AVWAP converging — 三线收敛 (关键区形成)
 * The gap between EMA9 and AVWAP has narrowed to < 3% of price.
 * This is what Martin calls "关键区收窄".
 */
function isKeyZoneNarrow(e9Last, e21Last, avwap, price) {
  const zoneTop = Math.max(e9Last, e21Last, avwap);
  const zoneBot = Math.min(e9Last, e21Last, avwap);
  const zoneWidth = (zoneTop - zoneBot) / price;
  return zoneWidth < 0.03; // key zone width < 3% of price = converging
}

/**
 * Condition 4: Price inside or just above the key zone (价格回调到关键区)
 * Price should be within +5% above or touching the key zone.
 * This means the stock has pulled back FROM its high toward the EMA9/21/AVWAP cluster.
 */
function isPriceAtKeyZone(price, e9Last, e21Last, avwap) {
  const zoneTop = Math.max(e9Last, e21Last, avwap);
  const zoneBot = Math.min(e9Last, e21Last, avwap);
  // Price is at or near the key zone: within 5% above zone top, or inside zone
  const nearZone = price <= zoneTop * 1.05 && price >= zoneBot * 0.97;
  return nearZone;
}

/**
 * Condition 5: Consolidation after the surge (横盘整理)
 * Recent 15–30 bars have a tight range (< 20% swing) = stock is resting.
 */
function isConsolidating(bars, n = 20) {
  const recent   = bars.slice(-n);
  if (recent.length < 10) return { isConsolidating: false, rangePct: 100 };
  const hi       = Math.max(...recent.map(d => d.h));
  const lo       = Math.min(...recent.map(d => d.l));
  const rangePct = lo > 0 ? ((hi - lo) / lo) * 100 : 100;
  // Also confirm price hasn't made new highs (still consolidating, not breaking out)
  const priorPeak = bars.length >= 60 ? Math.max(...bars.slice(-90, -n).map(d => d.h)) : hi;
  const notBrokenOut = bars.at(-1).c < priorPeak * 1.10;
  return { isConsolidating: rangePct < 20 && notBrokenOut, rangePct: +rangePct.toFixed(1) };
}

/**
 * Condition 6: Weekly EMA9 sloping up (周线趋势向上)
 */
function checkWeeklyUp(weekly) {
  if (weekly.length < 12) return false;
  const we9 = ema(weekly, 9);
  const wl  = we9.length - 1;
  return we9[wl] != null && we9[wl - 3] != null && we9[wl] > we9[wl - 3];
}

/**
 * Condition 7: Distance from recent high (how deep is the pullback)
 * Price should have pulled back from recent peak but not crashed.
 * Ideal: -5% to -25% from the recent 20-bar high.
 */
function getPullbackPct(bars) {
  // Martin Luk pullback = from the EPISODIC SURGE HIGH (not just recent 20 bars)
  // Look for the peak in the past 10-90 bars (the surge top)
  const surgeWindow = bars.slice(-90, -5);
  const surgeHigh   = surgeWindow.length > 0
    ? Math.max(...surgeWindow.map(d => d.h))
    : Math.max(...bars.slice(-20).map(d => d.h));
  const price = bars.at(-1).c;
  return +((price - surgeHigh) / surgeHigh * 100).toFixed(1); // negative = pulled back from surge high
}

// ─────────────────────────────────────────────────────────────
// SCORING — weighted by Martin Luk priority
// ─────────────────────────────────────────────────────────────
function scoreStock(d) {
  let s = 0;

  // Core structural conditions (must-haves)
  if (d.hadSurge)          s += 20; // prior big move — sets up the trade
  if (d.emaBull)           s += 20; // EMA9>21>50 bull alignment
  if (d.keyZoneNarrow)     s += 20; // 三线收敛 — key zone formed
  if (d.priceAtKeyZone)    s += 15; // price pulled back INTO the key zone ← THE MISSING PIECE
  if (d.isConsolidating)   s += 10; // tight range / resting

  // Supporting conditions
  if (d.weeklyUp)          s += 10; // weekly trend confirmation
  if (d.volSurge >= 1.8)   s +=  5; // recent volume surge (the initial episodic move had volume)
  // ADR scoring: Martin targets high ADR names (5%+ preferred, 8%+ ideal)
  if (d.adr >= 8)           s +=  8;
  else if (d.adr >= 5)      s +=  5;
  // ADR 4-5% still passes the hard filter but scores lower
  // Pullback depth bonus: -5% to -20% is ideal
  if (d.pullbackPct >= -20 && d.pullbackPct <= -3) s += 5;

  return Math.min(s, 100);
}

// ─────────────────────────────────────────────────────────────
// SCREEN ONE TICKER
// ─────────────────────────────────────────────────────────────
async function screenTicker(ticker, sector) {
  try {
    const [data, weekly] = await Promise.all([fetchTickerData(ticker), fetchWeeklyClose(ticker)]);
    if (!data) return null;
    const { bars, realtimePrice, realtimeChg1d } = data;
    if (bars.length < 60) return null;

    const price = realtimePrice;
    if (!price || price < 2 || price > 5000) return null;

    const closes = bars.map(d => d.c);
    const last   = closes.length - 1;
    const e9arr  = ema(closes, 9);
    const e21arr = ema(closes, 21);
    const e50arr = ema(closes, 50);
    if (!e9arr[last] || !e21arr[last] || !e50arr[last]) return null;

    const e9Last  = e9arr[last];
    const e21Last = e21arr[last];
    const e50Last = e50arr[last];
    // AVWAP anchored at surge origin (support reference — Martin's primary AVWAP)
    const avwap        = calcAVWAP(bars);
    // AVWAP anchored at consolidation peak (resistance/secondary reference)
    const avwapHigh    = calcAVWAPFromHigh(bars);
    // Price above surge-origin AVWAP = market still respects the original move
    const avwapSupport = price > avwap;

    // ── All Martin Luk conditions ──────────────────────────
    const hadSurge       = hadEpisodicSurge(bars);
    const emaBull        = checkEmaBull(e9arr, e21arr, e50arr, last);
    const keyZoneNarrow  = isKeyZoneNarrow(e9Last, e21Last, avwap, price);
    const priceAtKeyZone = isPriceAtKeyZone(price, e9Last, e21Last, avwap);
    const { isConsolidating: consolidating, rangePct } = isConsolidating(bars);
    const weeklyUp       = checkWeeklyUp(weekly);
    const volSurge       = +calcVolSurge(bars).toFixed(2);
    const adr            = +calcADR(bars).toFixed(1);
    const pullbackPct    = getPullbackPct(bars);

    // Martin Luk: ADR is a HARD PREREQUISITE — must be >= 4% for viable R/R
    // Low ADR stocks can't give 3-5R with 1.5-3% stops
    if (adr < 4) return null;

    // Key zone bounds for display
    const keyZoneTop = +Math.max(e9Last, e21Last, avwap).toFixed(2);
    const keyZoneBot = +Math.min(e9Last, e21Last, avwap).toFixed(2);

    const chg1mo = last >= 22
      ? +(((price / closes[last - 22]) - 1) * 100).toFixed(1) : 0;

    // ── Stop loss & targets (Martin uses 1.5–3% SL, 3–5R TP) ──────────────
    // Stop = key zone bottom - 0.5 ADR buffer (gives it room but not too wide)
    const keyZoneBot_ = Math.min(e9Last, e21Last, avwap);
    const adrDollar   = price * (adr / 100);
    const suggestedSL = +(keyZoneBot_ - adrDollar * 0.3).toFixed(2);   // just below key zone
    const slPct       = +((price - suggestedSL) / price * 100).toFixed(1);
    const tp1         = +(price + (price - suggestedSL) * 3).toFixed(2); // 3R
    const tp2         = +(price + (price - suggestedSL) * 5).toFixed(2); // 5R

    const out = {
      ticker, sector,
      price:   +price.toFixed(2),
      chg1d:   realtimeChg1d,
      chg1mo,
      adr,
      volSurge,
      ema9:    +e9Last.toFixed(2),
      ema21:   +e21Last.toFixed(2),
      ema50:   +e50Last.toFixed(2),
      avwap:   +avwap.toFixed(2),       // AVWAP from surge low (support)
      avwapHigh: +avwapHigh.toFixed(2),   // AVWAP from peak (resistance)
      avwapSupport,                        // price > surge-AVWAP
      suggestedSL, slPct, tp1, tp2,       // trade plan
      keyZoneTop, keyZoneBot,
      // Martin Luk specific flags
      hadSurge,
      emaBull,
      keyZoneNarrow,
      priceAtKeyZone,
      isConsolidating: consolidating,
      weeklyUp,
      pullbackPct,
      rangePct,
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
      const sectorTickers = THEMATIC.filter(t => SECTOR_HINTS[t] === reqSector);
      pairs = (sectorTickers.length > 0 ? sectorTickers : THEMATIC).map(t => ({ t, s: reqSector }));
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
    const settled = await pLimit(tasks, 15);
    const data    = settled.filter(Boolean).sort((a, b) => b.score - a.score);

    res.status(200).json({ data, total: pairs.length, updatedAt: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ error: e.message, data: [], total: 0, updatedAt: new Date().toISOString() });
  }
}
