export const config = { maxDuration: 60 };

const SECTOR_TICKERS = {
  "信息技术": [
    "AAPL","MSFT","NVDA","AVGO","AMD","QCOM","TXN","AMAT","LRCX","KLAC",
    "MU","INTC","ADI","MCHP","NXPI","ON","STX","WDC","ARM","SMCI",
    "DELL","HPQ","HPE","NTAP","PSTG","PLTR","SNOW","CRM","NOW","ORCL",
    "ADBE","INTU","ANSS","CDNS","SNPS","TEAM","HUBS","DDOG","ZS","CRWD",
    "PANW","FTNT","CYBR","MDB","GTLB","OKTA","WDAY","TTD","SLAB","AMBA"
  ],
  "通信服务": [
    "GOOGL","GOOG","META","NFLX","DIS","CMCSA","T","VZ","TMUS","CHTR",
    "SNAP","PINS","RDDT","MTCH","ZM","TWLO","SIRI","WBD","PARA","NWSA",
    "IPG","OMC","ZETA","BRZE","LYV","BIDU","IQ","HUYA","DOYU","LUMN"
  ],
  "非必需消费": [
    "AMZN","TSLA","HD","MCD","NKE","SBUX","LOW","TJX","BKNG","MAR",
    "HLT","RCL","CCL","NCLH","MGM","WYNN","LVS","DKNG","ABNB","UBER",
    "LYFT","DASH","EXPE","EBAY","ETSY","CHWY","F","GM","RIVN","LCID",
    "CVNA","KMX","WHR","POOL","LULU","SKX","CROX","DECK","DRI","YUM",
    "QSR","WEN","SHAK","TXRH","XPOF","PLNT","PTON","SPOT","BURL","FIVE"
  ],
  "医疗健康": [
    "LLY","UNH","JNJ","ABBV","MRK","TMO","ABT","DHR","SYK","BSX",
    "ISRG","EW","ZBH","BDX","IDXX","IQV","AMGN","GILD","BIIB","REGN",
    "VRTX","MRNA","BNTX","NVAX","INCY","EXEL","BEAM","EDIT","CRSP","BLUE",
    "BMRN","DNLI","FOLD","SAGE","ACAD","APLS","ARWR","AUPH","AVDL","AXSM",
    "HIMS","TDOC","VEEV","DOCS","PHR","ACCD","LFST","ONEM","GH","NVCR"
  ],
  "金融": [
    "JPM","BAC","WFC","GS","MS","C","USB","TFC","PNC","COF",
    "AXP","DFS","SYF","ALLY","UPST","AFRM","SOFI","LC","DAVE","MQ",
    "V","MA","PYPL","SQ","FIS","FISV","GPN","HOOD","IBKR","SCHW",
    "BLK","IVZ","ICE","CME","CBOE","NDAQ","MSCI","SPGI","MCO","COIN",
    "MET","PRU","PGR","TRV","ALL","CB","HIG","AIG","MSTR","ACGL"
  ],
  "工业": [
    "GE","HON","UPS","RTX","LMT","NOC","GD","BA","TXT","HEI",
    "CAT","DE","EMR","ROK","AME","PH","IR","GWW","FDX","UNP",
    "CSX","NSC","JBHT","ODFL","XPO","SAIA","WM","RSG","CLH","ITW",
    "SWK","PNR","GNRC","HUBB","AOS","LII","CARR","OTIS","TT","JCI",
    "AXON","CACI","LDOS","SAIC","BAH","KTOS","MRCY","DRS","FLIR","KBR"
  ],
  "必需消费": [
    "WMT","PG","KO","PEP","COST","PM","MO","MDLZ","KHC","GIS",
    "K","CPB","CAG","SJM","MKC","HRL","TSN","CELH","MNST","KDP",
    "STZ","SAM","FIZZ","SFM","KR","ELF","ULTA","COTY","HIMS","PRPL"
  ],
  "能源": [
    "XOM","CVX","COP","EOG","OXY","DVN","FANG","MRO","APA","HES",
    "VLO","PSX","MPC","SLB","HAL","BKR","NOV","PTEN","KMI","WMB",
    "ET","EPD","MPLX","LNG","AR","EQT","CNX","RRC","SWN","CTRA",
    "SMR","NNE","OKLO","BWXT","LEU","CCJ","UEC","DNN","ENPH","SEDG"
  ],
  "原材料": [
    "LIN","APD","SHW","ECL","DD","DOW","LYB","NEM","GOLD","AEM",
    "KGC","PAAS","FCX","SCCO","TECK","MP","ALB","SQM","PLL","LAC",
    "X","NUE","STLD","CLF","MT","VALE","RIO","BHP","BALL","PKG",
    "LTHM","SGML","NOVS","CMMC","HBM","EMN","HUN","RPM","IFF","FMC"
  ],
  "房地产": [
    "PLD","AMT","EQIX","CCI","DLR","SBAC","WELL","VTR","SPG","O",
    "VICI","GLPI","EXR","CUBE","AVB","EQR","ESS","MAA","UDR","ARE",
    "BXP","VNO","SLG","RDFN","Z","RKT","UWMC","PFSI","COOP","OPEN"
  ],
  "公用事业": [
    "NEE","DUK","SO","AEP","EXC","SRE","D","PCG","ED","ES",
    "XEL","WEC","DTE","CMS","ETR","PPL","NI","AEE","AWK","EVRG"
  ],
  "量子计算": [
    "IONQ","RGTI","QBTS","QUBT","ARQQ","QTUM","MSFT","GOOGL","IBM","AMZN"
  ],
  "人工智能": [
    "PLTR","AI","BBAI","SOUN","GFAI","IREN","PATH","VRNS","UPWK","COGN",
    "TSLA","NVDA","MSFT","GOOGL","META","AMZN","IBM","ORCL","CRM","NOW"
  ],
  "加密/区块链": [
    "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","CIFR","WULF","BTCS","BKKT"
  ],
  "太空/国防": [
    "RKLB","ASTS","LUNR","RDW","KTOS","SPCE","ASTR","LMT","NOC","RTX",
    "GD","BA","HEI","TDG","AXON","CACI","LDOS","SAIC","BAH","VSAT"
  ],
  "核能/清洁能源": [
    "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG",
    "PLUG","FCEL","BE","ENPH","SEDG","RUN","NOVA","STEM","ARRY","SHLS"
  ],
  "金融科技": [
    "HOOD","SOFI","AFRM","UPST","LC","DAVE","MQ","SQ","PYPL","BILL",
    "RELY","FUTU","TIGR","WEX","EVTC","PAGS","FOUR","FLYW","PSFE","STNE"
  ],
};

// Use the same v8 chart API as screen.js — more reliable than v7 quote
async function fetchOneDayChart(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 86400 * 5; // last 5 trading days is enough
  const url   = `https://query2.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${start}&period2=${end}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      "Referer": "https://finance.yahoo.com/",
    } });
    if (!r.ok) return null;
    const txt = await r.text();
    if (!txt || txt[0] !== "{") return null;
    const j = JSON.parse(txt);
    const res = j?.chart?.result?.[0];
    if (!res) return null;
    const meta = res.meta;
    const q    = res.indicators.quote[0];
    const ts   = res.timestamp ?? [];
    if (!ts.length) return null;
    // Most recent bar
    const last = ts.length - 1;
    return {
      symbol:        ticker,
      price:         meta.regularMarketPrice ?? q.close?.[last],
      prevClose:     meta.chartPreviousClose ?? meta.previousClose,
      high:          q.high?.[last],
      low:           q.low?.[last],
      volume:        q.volume?.[last],
      avgVolume:     meta.regularMarketVolume ? null : null, // not in v8, compute below
      fiftyTwoHigh:  meta.fiftyTwoWeekHigh,
      // Compute 20-day avg volume from bars we have
      bars: ts.map((t, i) => ({ v: q.volume?.[i] ?? 0, c: q.close?.[i], h: q.high?.[i], l: q.low?.[i] })).filter(b => b.c),
    };
  } catch { return null; }
}

// Fetch 30 days to get proper avg volume
async function fetchMultiDayChart(ticker) {
  const end   = Math.floor(Date.now() / 1000);
  const start = end - 86400 * 30;
  const url   = `https://query2.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&period1=${start}&period2=${end}&includePrePost=false`;
  try {
    const r = await fetch(url, { headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      "Accept": "application/json, text/plain, */*",
      "Accept-Language": "en-US,en;q=0.9",
      "Referer": "https://finance.yahoo.com/",
    } });
    if (!r.ok) return null;
    const txt = await r.text();
    if (!txt || txt[0] !== "{") return null;
    const j = JSON.parse(txt);
    const res = j?.chart?.result?.[0];
    if (!res) return null;
    const meta = res.meta;
    const q    = res.indicators.quote[0];
    const ts   = res.timestamp ?? [];
    if (!ts.length) return null;
    const bars = ts.map((t, i) => ({
      v: q.volume?.[i] ?? 0,
      c: q.close?.[i],
      h: q.high?.[i],
      l: q.low?.[i],
    })).filter(b => b.c);
    const last    = bars.length - 1;
    const avgVol  = bars.slice(0, -1).reduce((s, b) => s + b.v, 0) / Math.max(bars.length - 1, 1);
    const prevClose = bars.length >= 2 ? bars[last - 1].c : meta.chartPreviousClose;
    const chgPct  = prevClose ? ((bars[last].c - prevClose) / prevClose) * 100 : 0;
    const volRatio = avgVol > 0 ? bars[last].v / avgVol : 1;
    const todayADR = bars[last].l > 0 ? ((bars[last].h - bars[last].l) / bars[last].l) * 100 : 0;
    const hi52     = meta.fiftyTwoWeekHigh;
    const nearHigh = hi52 && bars[last].c >= hi52 * 0.80;
    return { symbol: ticker, chgPct, volRatio, todayADR, nearHigh, price: bars[last].c };
  } catch { return null; }
}

// Concurrency limiter
async function pLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let idx = 0;
  async function worker() {
    while (idx < tasks.length) { const i = idx++; results[i] = await tasks[i](); }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

function scoreSector(quotes, name) {
  const valid = quotes.filter(Boolean);
  if (!valid.length) return null;

  const avgChg     = valid.reduce((s, q) => s + q.chgPct, 0) / valid.length;
  const avgVolRatio= valid.reduce((s, q) => s + q.volRatio, 0) / valid.length;
  const breadth    = valid.filter(q => q.chgPct > 0).length / valid.length;
  const nearHighPct= valid.filter(q => q.nearHigh).length / valid.length;
  const avgAdr     = valid.reduce((s, q) => s + q.todayADR, 0) / valid.length;

  const heat = Math.min(Math.round(
    Math.min((avgVolRatio - 1) / 3, 1) * 35 +
    breadth * 20 +
    Math.min(Math.max(avgChg / 5, 0), 1) * 20 +
    nearHighPct * 15 +
    Math.min(avgAdr / 10, 1) * 10
  ), 100);

  const topMovers = [...valid]
    .sort((a, b) => Math.abs(b.chgPct) - Math.abs(a.chgPct))
    .slice(0, 3)
    .map(q => ({
      ticker:   q.symbol,
      chg:      +q.chgPct.toFixed(2),
      price:    +q.price.toFixed(2),
      volRatio: +q.volRatio.toFixed(1),
    }));

  return {
    sector:      name,
    heat,
    avgChg:      +avgChg.toFixed(2),
    avgVolRatio: +avgVolRatio.toFixed(2),
    breadth:     Math.round(breadth * 100),
    nearHighPct: Math.round(nearHighPct * 100),
    avgAdr:      +avgAdr.toFixed(1),
    tickerCount: valid.length,
    topMovers,
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    // Flatten unique tickers
    const allTickers = [...new Set(Object.values(SECTOR_TICKERS).flat())];

    // Fetch all in parallel with concurrency=15
    const tasks   = allTickers.map(t => () => fetchMultiDayChart(t));
    const results = await pLimit(tasks, 15);

    // Build map
    const quoteMap = {};
    let fetched = 0;
    results.forEach((r, i) => {
      if (r) { quoteMap[allTickers[i]] = r; fetched++; }
    });

    if (fetched === 0) {
      return res.status(200).json({
        data: [], totalQuotes: 0,
        debug: "Fetched 0 quotes. Yahoo Finance may be unavailable.",
        updatedAt: new Date().toISOString(),
      });
    }

    const data = Object.entries(SECTOR_TICKERS).map(([name, tickers]) => {
      const quotes = tickers.map(t => quoteMap[t]).filter(Boolean);
      return scoreSector(quotes, name);
    }).filter(Boolean).sort((a, b) => b.heat - a.heat);

    res.status(200).json({ data, totalQuotes: fetched, updatedAt: new Date().toISOString() });
  } catch (e) {
    console.error("sectors error:", e);
    res.status(500).json({ error: e.message, data: [], updatedAt: new Date().toISOString() });
  }
}
