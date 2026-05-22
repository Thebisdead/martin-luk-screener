export const config = { maxDuration: 60 };

// ── Dynamic ticker loading ────────────────────────────────────
// Fetch S&P 500 from Wikipedia, NASDAQ 100 from GitHub CSV
// + hardcoded thematic / Russell 2000 high-volume names

const THEMATIC = [
  // Quantum
  "IONQ","RGTI","QBTS","QUBT","ARQQ",
  // AI
  "PLTR","AI","BBAI","SOUN","GFAI","IREN","PATH","VRNS","UPWK","COGN",
  // Crypto
  "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","CIFR","WULF","BTCS","BKKT","MKTY","HIVE","BITF",
  // Space/Defense
  "RKLB","ASTS","LUNR","RDW","KTOS","SPCE","ASTR","MNTS","BKSY","JOBY","ACHR","BLDE",
  // Nuclear/Clean
  "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG","FLNC","PLUG","FCEL","BE",
  // Fintech
  "HOOD","SOFI","AFRM","UPST","LC","DAVE","MQ","PSFE","PAYO","BILL","RELY","FUTU","TIGR","FOUR","FLYW",
  // EV/Mobility
  "RIVN","LCID","NKLA","WKHS","GOEV","FSR","CHPT","EVGO","BLNK","PTRA",
  // Biotech momentum
  "HIMS","ACAD","SAVA","RXRX","BEAM","EDIT","NTLA","CRSP","ARWR","NVAX",
  "AGEN","ARQT","KYMR","FATE","BLUE","BMRN","DNLI","FOLD","SAGE","IMVT","MRUS","RCKT","AXSM","AUPH",
  // Growth SaaS
  "SNOW","DDOG","CRWD","ZS","PANW","TEAM","HUBS","MDB","GTLB","CFLT","OKTA","WDAY","TTD",
  "BRZE","ZETA","BILL","ALTR","CWAN","PCOR","SMAR","APPF","PEGA","VEEV","DOCS",
  // Retail / consumer
  "CVNA","OLLI","BURL","FIVE","PRPL","PTON","SPOT","ABNB","DASH","LYFT",
  // Small-cap momentum
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

// Fetch S&P 500 tickers from GitHub (reliable CSV source)
async function fetchSP500() {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/datasets/s-and-p-500-companies/main/data/constituents.csv",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!r.ok) return [];
    const text  = await r.text();
    const lines = text.split("\n").slice(1); // skip header
    return lines
      .map(l => l.split(",")[0].replace(/"/g, "").trim())
      .filter(t => /^[A-Z]{1,5}$/.test(t));
  } catch (e) {
    console.error("fetchSP500 error:", e.message);
    return [];
  }
}

// Fetch NASDAQ 100 tickers
async function fetchNASDAQ100() {
  try {
    const r = await fetch(
      "https://raw.githubusercontent.com/datasets/nasdaq-listings/main/data/nasdaq-listed-symbols.csv",
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );
    if (!r.ok) return [];
    const text  = await r.text();
    const lines = text.split("\n").slice(1);
    // Only take symbols — first column, pure alpha, max 5 chars
    return lines
      .map(l => l.split(",")[0].replace(/"/g, "").trim())
      .filter(t => /^[A-Z]{1,5}$/.test(t))
      .slice(0, 600); // top 600 by listing order
  } catch (e) {
    console.error("fetchNASDAQ100 error:", e.message);
    return [];
  }
}

// ── EMA & indicators ─────────────────────────────────────────
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
    const j = await r.json();
    const res = j?.chart?.result?.[0];
    if (!res) return null;
    const q = res.indicators.quote[0];
    return res.timestamp
      .map((t, i) => ({ c: q.close[i], h: q.high[i], l: q.low[i], v: q.volume[i] }))
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
  return ((w.reduce((s,d)=>s+d.h,0)/w.length)-(w.reduce((s,d)=>s+d.l,0)/w.length))/(w.reduce((s,d)=>s+d.l,0)/w.length)*100;
}
function calcAVWAP(data, lookback = 60) {
  const w = data.slice(-lookback);
  const ai = w.reduce((mi,d,i)=>d.l<w[mi].l?i:mi,0);
  let cumPV=0,cumV=0;
  w.slice(ai).forEach(d=>{const tp=(d.h+d.l+d.c)/3;cumPV+=tp*d.v;cumV+=d.v;});
  return cumPV/cumV;
}
function calcVolSurge(data, n = 20) {
  const avg=data.slice(-n-5,-5).reduce((s,d)=>s+d.v,0)/n;
  return avg>0?Math.max(...data.slice(-5).map(d=>d.v))/avg:1;
}
function calcConsolidation(data, n = 25) {
  const recent=data.slice(-n);
  const hi=Math.max(...recent.map(d=>d.h)),lo=Math.min(...recent.map(d=>d.l));
  const rangePct=((hi-lo)/lo)*100;
  const priorHi=data.length>=60?Math.max(...data.slice(-60,-25).map(d=>d.h)):hi;
  return {rangePct:+rangePct.toFixed(1),isConsolidating:rangePct<25&&data.at(-1).c<priorHi*1.08};
}
function scoreStock(d) {
  let s=0;
  if(d.emaBull)s+=25;if(d.weeklyUp)s+=15;if(d.avwapSupport)s+=15;
  if(d.volSurge>=1.8)s+=15;if(d.adr>=8)s+=15;else if(d.adr>=5)s+=8;
  if(d.isConsolidating)s+=15;
  return Math.min(s,100);
}

async function screenTicker(ticker, sector) {
  try {
    const [daily,weekly]=await Promise.all([fetchDaily(ticker),fetchWeeklyClose(ticker)]);
    if(!daily||daily.length<60)return null;
    const closes=daily.map(d=>d.c),last=closes.length-1,price=closes[last];
    if(price<2||price>5000)return null;
    const e9=ema(closes,9),e21=ema(closes,21),e50=ema(closes,50);
    if(!e9[last]||!e21[last]||!e50[last])return null;
    const emaBull=e9[last]>e21[last]&&e21[last]>e50[last];
    const ema9SlopeUp=last>=5&&e9[last]>e9[last-5];
    const adr=+calcADR(daily).toFixed(1);
    if(adr<2)return null;
    const avwap=calcAVWAP(daily),avwapSupport=price>avwap;
    const volSurge=+calcVolSurge(daily).toFixed(2);
    const {rangePct,isConsolidating}=calcConsolidation(daily);
    let weeklyUp=false;
    if(weekly.length>=12){const we9=ema(weekly,9),wl=we9.length-1;weeklyUp=we9[wl]!=null&&we9[wl-3]!=null&&we9[wl]>we9[wl-3];}
    const chg1d=last>=1?+(((closes[last]/closes[last-1])-1)*100).toFixed(2):0;
    const chg1mo=last>=22?+(((closes[last]/closes[last-22])-1)*100).toFixed(1):0;
    const out={ticker,sector,price:+price.toFixed(2),chg1d,chg1mo,adr,volSurge,
      ema9:+e9[last].toFixed(2),ema21:+e21[last].toFixed(2),ema50:+e50[last].toFixed(2),
      avwap:+avwap.toFixed(2),emaBull,ema9SlopeUp,avwapSupport,weeklyUp,isConsolidating,rangePct};
    out.score=scoreStock(out);
    return out;
  } catch{return null;}
}

async function pLimit(tasks, limit) {
  const results=new Array(tasks.length);let idx=0;
  async function worker(){while(idx<tasks.length){const i=idx++;results[i]=await tasks[i]();}}
  await Promise.all(Array.from({length:limit},worker));
  return results;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin","*");
  try {
    const reqSector = req.query.sector;

    let pairs = [];

    if (reqSector) {
      // Single sector — use thematic hints or just scan all thematic for that sector
      const sectorTickers = THEMATIC.filter(t => SECTOR_HINTS[t] === reqSector);
      // Also include from sp500 but we don't know their sectors — just use thematic
      pairs = (sectorTickers.length > 0 ? sectorTickers : THEMATIC)
        .map(t => ({ t, s: reqSector }));
    } else {
      // Full scan: dynamic S&P500 + NASDAQ + thematic, deduplicated
      const [sp500Tickers, nasdaqTickers] = await Promise.allSettled([fetchSP500(), fetchNASDAQ100()]);
      const sp500 = sp500Tickers.status === "fulfilled" ? sp500Tickers.value : [];
      const nasdaq = nasdaqTickers.status === "fulfilled" ? nasdaqTickers.value : [];

      const seen = new Set();
      // S&P500 — label as their GICS sector (unknown = "美股")
      for (const t of sp500) {
        if (!seen.has(t)) { seen.add(t); pairs.push({ t, s: SECTOR_HINTS[t] ?? "美股" }); }
      }
      // NASDAQ extra
      for (const t of nasdaq) {
        if (!seen.has(t)) { seen.add(t); pairs.push({ t, s: SECTOR_HINTS[t] ?? "美股" }); }
      }
      // Thematic (may overlap, deduped)
      for (const t of THEMATIC) {
        if (!seen.has(t)) { seen.add(t); pairs.push({ t, s: SECTOR_HINTS[t] ?? "美股" }); }
      }
    }

    console.log(`Scanning ${pairs.length} tickers...`);
    const tasks = pairs.map(({t,s}) => () => screenTicker(t,s));
    const settled = await pLimit(tasks, 15);
    const data = settled.filter(Boolean).sort((a,b) => b.score - a.score);

    res.status(200).json({ data, total: pairs.length, updatedAt: new Date().toISOString() });
  } catch(e) {
    console.error("screen error:", e);
    res.status(500).json({ error: e.message, data: [], total: 0, updatedAt: new Date().toISOString() });
  }
}
