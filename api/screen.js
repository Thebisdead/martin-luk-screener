export const config = { maxDuration: 60 };

const SECTOR_TICKERS = {
  "信息技术": [
    "AAPL","MSFT","NVDA","AVGO","AMD","QCOM","TXN","AMAT","LRCX","KLAC",
    "MU","INTC","ADI","MCHP","NXPI","ON","STX","WDC","ARM","SMCI",
    "DELL","HPQ","HPE","NTAP","PSTG","PLTR","SNOW","CRM","NOW","ORCL",
    "SAP","ADBE","INTU","ANSS","CDNS","SNPS","TEAM","HUBS","DDOG","ZS",
    "CRWD","PANW","FTNT","CYBR","S","TENB","MDB","GTLB","CFLT","OKTA",
    "ZI","DOCS","VEEV","WDAY","SMAR","TTD","MGNI","APPS","CDAY","PCOR",
    "PEGA","APPF","SLAB","IIVI","COHR","IPGP","AMBA","SITM","POWI","DIOD",
    "ACLS","AEHR","CEVA","FORM","RMBS","SIMO","SMTC","VIAV","XPER",
    "RELY","BRZE","ZETA","BILL","COUP","PATH","ALTR","PTC","AZPN","EPAM",
    "GLOB","NVEI","FLYW","FOUR","REPAY","CWAN","MTTR","AI","BBAI","SOUN",
    "GFAI","IREN","VRNS","UPWK","COGN","IONQ","RGTI","QBTS","QUBT","ARQQ"
  ],
  "通信服务": [
    "GOOGL","GOOG","META","NFLX","DIS","CMCSA","T","VZ","TMUS","CHTR",
    "SNAP","PINS","RDDT","MTCH","IAC","ZM","TWLO","BAND","SIRI","LBRDA",
    "WBD","PARA","FOX","NWSA","IPG","OMC","ZETA","BRZE","TTGT",
    "BIDU","IQ","HUYA","DOYU","YY","GENI","LYV","IHRT","ETM","GTN",
    "NXST","SBGI","AMCX","LUMN","DISH","ATUS","CABO","WOW","CNSL","NTELOS"
  ],
  "非必需消费": [
    "AMZN","TSLA","HD","MCD","NKE","SBUX","LOW","TJX","BKNG","MAR",
    "HLT","RCL","CCL","NCLH","MGM","WYNN","LVS","CZR","PENN","DKNG",
    "ABNB","UBER","LYFT","DASH","EXPE","TRIP","EBAY","ETSY","CHWY","CPNG",
    "SE","MELI","VTEX","GLOB","F","GM","RIVN","LCID","NKLA","GOEV",
    "WKHS","CVNA","KMX","AN","PAG","SAH","LAD","ABG","GPI","RUSHA",
    "WHR","POOL","TREX","AZEK","FBHS","MHK","SWK","LESL","LULU","PVH",
    "RL","GOOS","COLM","UA","UAA","SKX","CROX","DECK","WWW","BOOT",
    "DRI","YUM","QSR","WEN","JACK","SHAK","RRGB","CAKE","TXRH","BJRI",
    "XPOF","PLNT","PTON","SPOT","WMG","SEAT","MSGM","BURL","FIVE","OLLI",
    "PRTY","CATO","SCVL","BOOT","HIBB","SPWH","BGFV","SNBR","TPX","PRPL"
  ],
  "医疗健康": [
    "LLY","UNH","JNJ","ABBV","MRK","TMO","ABT","DHR","SYK","BSX",
    "ISRG","EW","ZBH","BAX","BDX","A","IDXX","IQV","CRL","MEDP",
    "AMGN","GILD","BIIB","REGN","VRTX","MRNA","BNTX","NVAX","ALNY","INCY",
    "EXEL","FATE","KYMR","AGEN","ARQT","BEAM","EDIT","NTLA","CRSP","BLUE",
    "BMRN","DNLI","FOLD","IMVT","KROS","MRUS","RCKT","SAGE","YMAB","ACAD",
    "ACET","ADMA","ADUS","AFMD","AGIO","ALVR","APLS","APLT","ARCT","ARDX",
    "ARHS","ARWR","ASND","ASRT","ASXC","ATAI","ATEC","ATHA","ATRC","AUPH",
    "AVDL","AVEO","AVID","AVIR","AVNS","AXNX","AXSM","AYTU","BCAB","BCYC",
    "HIMS","TDOC","VEEV","DOCS","PHR","ACCD","LFST","GH","NVCR","RXRX",
    "SDGR","CERT","TALK","TMDX","INVA","PGNY","GDRX","ONEM","MTTR","NARI"
  ],
  "金融": [
    "JPM","BAC","WFC","GS","MS","C","USB","TFC","PNC","COF",
    "AXP","DFS","SYF","ALLY","CACC","OMF","ENVA","QFIN","UPST","AFRM",
    "SOFI","LC","DAVE","MQ","PSFE","PAYO","OPEN","UWMC","V","MA",
    "PYPL","SQ","FIS","FISV","GPN","WEX","EVTC","PAGS","HOOD","IBKR",
    "SCHW","AMTD","MKTX","LPLA","RJF","SF","PIPR","BLK","IVZ","AMG",
    "WDR","VRTS","WETF","APAM","GCMG","STEP","HLNE","ICE","CME","CBOE",
    "NDAQ","MKTX","TW","MSCI","SPGI","MCO","FDS","MET","PRU","LNC",
    "GL","PFG","VOYA","BHF","FG","RBBN","CLOV","PGR","TRV","ALL",
    "CB","HIG","WRB","AIG","MKL","RNR","ACGL","COIN","MSTR","SI",
    "SLM","NAVI","NCNO","PNFP","TCBI","IBCP","FFBC","SBCF","BANF","FBIZ"
  ],
  "工业": [
    "GE","HON","UPS","RTX","LMT","NOC","GD","BA","TXT","HEI",
    "CAT","DE","EMR","ROK","AME","PH","IR","GWW","MSC","FAST",
    "FDX","UNP","CSX","NSC","WAB","JBHT","ODFL","XPO","SAIA","ECHO",
    "WM","RSG","CLH","CWST","GFL","SRCL","ADSW","ITW","SWK","PNR",
    "XYL","RXO","GNRC","HUBB","AOS","LII","CARR","OTIS","TT","JCI",
    "NDSN","BW","ACCO","ACM","EXPO","MYRG","RKLB","ASTS","LUNR","RDW",
    "KTOS","AJRD","SPCE","ASTR","MNTS","BKSY","ACHR","JOBY","BLDE","SKYH",
    "AXON","CACI","LDOS","SAIC","BAH","MRCY","DRS","FLIR","KBR","VSAT",
    "PRLB","DXC","LDOS","ACN","EPAM","GLOB","EXLS","KFRC","MAN","RHI"
  ],
  "必需消费": [
    "WMT","PG","KO","PEP","COST","PM","MO","MDLZ","KHC","GIS",
    "K","CPB","CAG","SJM","MKC","HRL","TSN","PPC","SAFM","CALM",
    "CELH","MNST","KDP","STZ","SAM","TAP","FIZZ","COKE","PRMW","SFM",
    "KR","ACI","GO","CASY","MUSA","ARKO","ELF","ULTA","COTY","IPAR",
    "HIMS","PRPL","CENT","FLXS","EDUC","SMPL","FRPT","BYND","TTCF","BRBS"
  ],
  "能源": [
    "XOM","CVX","COP","EOG","PXD","OXY","DVN","FANG","MRO","APA",
    "HES","VLO","PSX","MPC","DK","DINO","CVI","CLMT","PARR","SLB",
    "HAL","BKR","NOV","OIS","PTEN","NE","VAL","DO","RIG","KMI",
    "WMB","ET","EPD","MPLX","PAA","TRGP","OKE","LNG","AR","EQT",
    "CNX","RRC","SWN","CTRA","GPOR","TELL","CQP","NFE","SMR","NNE",
    "OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG","FLNC","PLUG",
    "FCEL","BLDP","BE","NEE","ENPH","SEDG","ARRY","RUN","NOVA","STEM",
    "SHLS","SPWR","MAXN","CSIQ","JKS","DAQO","SOL","HASI","CWEN","AY"
  ],
  "原材料": [
    "LIN","APD","SHW","ECL","DD","DOW","LYB","EMN","HUN","RPM",
    "NEM","GOLD","AEM","KGC","AU","PAAS","HL","CDE","EXK","MAG",
    "FCX","SCCO","TECK","HBM","CMMC","MP","LITE","CRUS","FSLR","ALB",
    "SQM","PLL","LAC","LTHM","LIVENT","SGML","X","NUE","STLD","CLF",
    "MT","VALE","RIO","BHP","ARCH","AMR","BALL","SEE","PKG","IP",
    "WRK","SLVM","BERY","CROWN","GPK","IFF","FMC","CE","OLN","ASH"
  ],
  "房地产": [
    "PLD","AMT","EQIX","CCI","DLR","SBAC","WELL","VTR","PEAK","HR",
    "SPG","O","VICI","GLPI","CUZ","EXR","CUBE","LSI","NSA","SST",
    "AVB","EQR","ESS","MAA","CPT","UDR","NHI","OHI","LTC","SBRA",
    "ARE","BXP","VNO","SLG","HIW","CIO","OFC","JBGS","KRC","DEI",
    "RDFN","Z","OPEN","EXPI","HOUS","RKT","UWMC","PFSI","COOP","ONIT"
  ],
  "公用事业": [
    "NEE","DUK","SO","AEP","EXC","SRE","D","PCG","ED","ES",
    "XEL","WEC","DTE","CMS","ETR","PPL","NI","AEE","LNT","EVRG",
    "AWK","WTR","YORW","MSEX","ARTNA","CTWS","GWRS","SJW","UTMD","CNP"
  ],
  "量子计算": [
    "IONQ","RGTI","QBTS","QUBT","ARQQ","MSFT","GOOGL","AMZN","IBM","INTC"
  ],
  "人工智能": [
    "PLTR","AI","BBAI","SOUN","GFAI","IREN","PATH","VRNS","UPWK","COGN",
    "TSLA","NVDA","MSFT","GOOGL","META","AMZN","IBM","ORCL","CRM","NOW",
    "ADBE","INTU","SNOW","DDOG","MDB","CFLT","C3AI","AITX","AIXI","GFAI"
  ],
  "加密/区块链": [
    "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","CIFR","WULF","BTCS",
    "BKKT","MKTY","IREN","SDIG","CORZ","BTDR","HIVE","BITF","DMGI","MGTI"
  ],
  "太空/国防": [
    "RKLB","ASTS","LUNR","RDW","KTOS","SPCE","ASTR","MNTS","BKSY","LMT",
    "NOC","RTX","GD","BA","HEI","TDG","AXON","CACI","LDOS","SAIC",
    "BAH","CSIQ","DRS","FLIR","KBR","MOOG","MRCY","PLTR","VSAT","JOBY"
  ],
  "核能/清洁能源": [
    "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG",
    "FLNC","PLUG","FCEL","BLDP","BE","ENPH","SEDG","ARRY","RUN","NOVA",
    "STEM","SHLS","SPWR","MAXN","CSIQ","JKS","DAQO","SOL","HASI","CWEN"
  ],
  "金融科技": [
    "HOOD","SOFI","AFRM","UPST","LC","DAVE","MQ","PSFE","PAYO","OPEN",
    "SQ","PYPL","BILL","RELY","QFIN","LU","FUTU","TIGR","WEX","EVTC",
    "PAGS","FOUR","FLYW","PCOR","RPAY","STNE","VTEX","EEFT","NRDS","CURO"
  ],
};

// Deduplicated flat list
const ALL_PAIRS = [];
const seen = new Set();
for (const [sector, tickers] of Object.entries(SECTOR_TICKERS)) {
  for (const t of tickers) {
    if (!seen.has(t)) {
      seen.add(t);
      ALL_PAIRS.push({ t, s: sector });
    }
  }
}

function ema(arr, period) {
  if (arr.length < period) return arr.map(() => null);
  const k = 2 / (period + 1);
  const out = new Array(arr.length).fill(null);
  let prev = arr.slice(0, period).reduce((a, b) => a + b, 0) / period;
  out[period - 1] = prev;
  for (let i = period; i < arr.length; i++) { prev = arr[i] * k + prev * (1 - k); out[i] = prev; }
  return out;
}

async function fetchDaily(ticker) {
  const end = Math.floor(Date.now() / 1000);
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${end - 86400 * 130}&period2=${end}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return null;
    const j   = await r.json();
    const res = j?.chart?.result?.[0];
    if (!res) return null;
    const q = res.indicators.quote[0];
    return res.timestamp
      .map((t, i) => ({ t, c: q.close[i], h: q.high[i], l: q.low[i], v: q.volume[i] }))
      .filter(d => d.c && d.h && d.l && d.v);
  } catch { return null; }
}

async function fetchWeeklyClose(ticker) {
  const end = Math.floor(Date.now() / 1000);
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1wk&period1=${end - 86400 * 365}&period2=${end}`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return [];
    const j = await r.json();
    return (j?.chart?.result?.[0]?.indicators?.quote?.[0]?.close ?? []).filter(Boolean);
  } catch { return []; }
}

function calcADR(data, n = 20) {
  const w = data.slice(-n);
  return ((w.reduce((s, d) => s + d.h, 0) / w.length) - (w.reduce((s, d) => s + d.l, 0) / w.length))
    / (w.reduce((s, d) => s + d.l, 0) / w.length) * 100;
}

function calcAVWAP(data, lookback = 60) {
  const w  = data.slice(-lookback);
  const ai = w.reduce((mi, d, i) => d.l < w[mi].l ? i : mi, 0);
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
  const priorHi  = data.length >= 60 ? Math.max(...data.slice(-60, -25).map(d => d.h)) : hi;
  return { rangePct: +rangePct.toFixed(1), isConsolidating: rangePct < 25 && data.at(-1).c < priorHi * 1.08 };
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

async function screenTicker(ticker, sector) {
  try {
    const [daily, weekly] = await Promise.all([fetchDaily(ticker), fetchWeeklyClose(ticker)]);
    if (!daily || daily.length < 60) return null;
    const closes = daily.map(d => d.c);
    const last   = closes.length - 1;
    const price  = closes[last];
    if (price < 2 || price > 5000) return null;
    const e9  = ema(closes, 9);
    const e21 = ema(closes, 21);
    const e50 = ema(closes, 50);
    if (!e9[last] || !e21[last] || !e50[last]) return null;
    const emaBull     = e9[last] > e21[last] && e21[last] > e50[last];
    const ema9SlopeUp = last >= 5 && e9[last] > e9[last - 5];
    const adr         = +calcADR(daily).toFixed(1);
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
      avwap: +avwap.toFixed(2), emaBull, ema9SlopeUp, avwapSupport, weeklyUp, isConsolidating, rangePct,
    };
    out.score = scoreStock(out);
    return out;
  } catch { return null; }
}

async function pLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let idx = 0;
  async function worker() {
    while (idx < tasks.length) { const i = idx++; results[i] = await tasks[i](); }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const sector = req.query.sector;
    const pairs  = sector
      ? (SECTOR_TICKERS[sector] ?? []).map(t => ({ t, s: sector }))
      : ALL_PAIRS;
    const tasks   = pairs.map(({ t, s }) => () => screenTicker(t, s));
    const settled = await pLimit(tasks, 12);
    const data    = settled.filter(Boolean).sort((a, b) => b.score - a.score);
    res.status(200).json({ data, total: pairs.length, updatedAt: new Date().toISOString() });
  } catch (e) {
    console.error("screen error:", e);
    res.status(500).json({ error: e.message, data: [], total: 0, updatedAt: new Date().toISOString() });
  }
}
