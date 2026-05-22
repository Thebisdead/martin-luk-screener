export const config = { maxDuration: 60 };

// ── Ticker list inlined (no cross-file import needed) ──────────
const SECTOR_TICKERS = {
  "信息技术": [
    "AAPL","MSFT","NVDA","AVGO","AMD","QCOM","TXN","AMAT","LRCX","KLAC",
    "MU","INTC","ADI","MCHP","NXPI","ON","STX","WDC","ARM","SMCI",
    "DELL","HPQ","HPE","NTAP","PSTG","PLTR","SNOW","CRM","NOW","ORCL",
    "ADBE","INTU","ANSS","CDNS","SNPS","TEAM","HUBS","DDOG","ZS","CRWD",
    "PANW","FTNT","CYBR","MDB","GTLB","OKTA","WDAY","TTD","SLAB","AMBA"
  ],
  "通信服务": [
    "GOOGL","META","NFLX","DIS","CMCSA","T","VZ","TMUS","CHTR",
    "SNAP","PINS","RDDT","MTCH","ZM","TWLO","SIRI","WBD","PARA",
    "NWSA","IPG","OMC","ZETA","BRZE","LYV","BIDU","IQ","HUYA","DOYU"
  ],
  "非必需消费": [
    "AMZN","TSLA","HD","MCD","NKE","SBUX","LOW","TJX","BKNG","MAR",
    "HLT","RCL","CCL","NCLH","MGM","WYNN","LVS","DKNG","ABNB","UBER",
    "LYFT","DASH","EXPE","EBAY","ETSY","CHWY","F","GM","RIVN","LCID",
    "CVNA","KMX","WHR","POOL","LULU","PVH","NKE","SKX","CROX","DECK",
    "DRI","YUM","QSR","WEN","SHAK","TXRH","XPOF","PLNT","PTON","SPOT"
  ],
  "医疗健康": [
    "LLY","UNH","JNJ","ABBV","MRK","TMO","ABT","DHR","SYK","BSX",
    "ISRG","EW","ZBH","BDX","IDXX","IQV","AMGN","GILD","BIIB","REGN",
    "VRTX","MRNA","BNTX","NVAX","INCY","EXEL","BEAM","EDIT","CRSP","BLUE",
    "BMRN","DNLI","FOLD","SAGE","ACAD","APLS","ARWR","ASXC","AUPH","AVDL"
  ],
  "金融": [
    "JPM","BAC","WFC","GS","MS","C","USB","TFC","PNC","COF",
    "AXP","DFS","SYF","ALLY","UPST","AFRM","SOFI","LC","DAVE","MQ",
    "V","MA","PYPL","SQ","FIS","FISV","GPN","HOOD","IBKR","SCHW",
    "BLK","IVZ","ICE","CME","CBOE","NDAQ","MSCI","SPGI","MCO","COIN",
    "MET","PRU","LNC","PGR","TRV","ALL","CB","HIG","AIG","MSTR"
  ],
  "工业": [
    "GE","HON","UPS","RTX","LMT","NOC","GD","BA","TXT","HEI",
    "CAT","DE","EMR","ROK","AME","PH","IR","GWW","FDX","UNP",
    "CSX","NSC","JBHT","ODFL","XPO","SAIA","WM","RSG","CLH",
    "RKLB","ASTS","LUNR","KTOS","AXON","CACI","LDOS","SAIC","BAH","ITW"
  ],
  "必需消费": [
    "WMT","PG","KO","PEP","COST","PM","MO","MDLZ","KHC","GIS",
    "K","CPB","CAG","SJM","MKC","HRL","TSN","CELH","MNST","KDP",
    "STZ","SAM","FIZZ","SFM","KR","ELF","ULTA","COTY","HIMS"
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
    "X","NUE","STLD","CLF","MT","VALE","RIO","BHP","BALL","PKG"
  ],
  "房地产": [
    "PLD","AMT","EQIX","CCI","DLR","SBAC","WELL","VTR","SPG","O",
    "VICI","GLPI","EXR","CUBE","AVB","EQR","ESS","MAA","UDR","ARE",
    "BXP","VNO","SLG","RDFN","Z","OPEN","RKT","UWMC","PFSI","COOP"
  ],
  "公用事业": [
    "NEE","DUK","SO","AEP","EXC","SRE","D","PCG","ED","ES",
    "XEL","WEC","DTE","CMS","ETR","PPL","NI","AEE","AWK","EVRG"
  ],
  "量子计算": [
    "IONQ","RGTI","QBTS","QUBT","ARQQ"
  ],
  "人工智能": [
    "PLTR","AI","BBAI","SOUN","GFAI","IREN","PATH","VRNS","UPWK","COGN"
  ],
  "加密/区块链": [
    "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","IREN","CIFR","WULF",
    "BTCS","BKKT","MKTY"
  ],
  "太空/国防": [
    "RKLB","ASTS","LUNR","RDW","KTOS","SPCE","ASTR","MNTS","BKSY",
    "LMT","NOC","RTX","GD","BA","HEI","TDG","AXON","CACI","LDOS"
  ],
  "核能/清洁能源": [
    "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG",
    "FLNC","PLUG","FCEL","BE","ENPH","SEDG","ARRY","RUN","NOVA","STEM"
  ],
  "金融科技": [
    "HOOD","SOFI","AFRM","UPST","LC","DAVE","MQ","OPEN","SQ","PYPL",
    "BILL","RELY","QFIN","FUTU","TIGR","WEX","EVTC","PAGS","FOUR","FLYW"
  ],
};

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function fetchBatchQuotes(symbols) {
  const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${encodeURIComponent(symbols.join(','))}&fields=regularMarketPrice,regularMarketChangePercent,regularMarketVolume,averageDailyVolume20Day,fiftyTwoWeekHigh,regularMarketDayHigh,regularMarketDayLow,marketCap`;
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0", "Accept": "application/json" },
    });
    if (!r.ok) {
      console.error(`Yahoo batch fetch failed: ${r.status} for ${symbols.slice(0,3).join(',')}`);
      return [];
    }
    const j = await r.json();
    return j?.quoteResponse?.result ?? [];
  } catch (e) {
    console.error("fetchBatchQuotes error:", e.message);
    return [];
  }
}

function scoreSector(quotes, name) {
  const valid = quotes.filter(q => q && q.regularMarketPrice > 0);
  if (!valid.length) return null;

  const avgChg = valid.reduce((s, q) => s + (q.regularMarketChangePercent ?? 0), 0) / valid.length;

  const volRatios = valid
    .filter(q => (q.averageDailyVolume20Day ?? 0) > 0)
    .map(q => (q.regularMarketVolume ?? 0) / q.averageDailyVolume20Day);
  const avgVolRatio = volRatios.length
    ? volRatios.reduce((s, v) => s + v, 0) / volRatios.length : 1;

  const breadth     = valid.filter(q => (q.regularMarketChangePercent ?? 0) > 0).length / valid.length;
  const nearHighPct = valid.filter(q => q.fiftyTwoWeekHigh && q.regularMarketPrice >= q.fiftyTwoWeekHigh * 0.80).length / valid.length;

  const adrs    = valid.filter(q => (q.regularMarketDayLow ?? 0) > 0)
                       .map(q => ((q.regularMarketDayHigh - q.regularMarketDayLow) / q.regularMarketDayLow) * 100);
  const avgAdr  = adrs.length ? adrs.reduce((s, v) => s + v, 0) / adrs.length : 0;

  const heat = Math.min(Math.round(
    Math.min((avgVolRatio - 1) / 3, 1) * 35 +
    breadth * 20 +
    Math.min(Math.max(avgChg / 5, 0), 1) * 20 +
    nearHighPct * 15 +
    Math.min(avgAdr / 10, 1) * 10
  ), 100);

  // Top movers by absolute % change
  const topMovers = [...valid]
    .filter(q => q.regularMarketChangePercent != null)
    .sort((a, b) => Math.abs(b.regularMarketChangePercent) - Math.abs(a.regularMarketChangePercent))
    .slice(0, 3)
    .map(q => ({
      ticker:   q.symbol,
      chg:      +(q.regularMarketChangePercent).toFixed(2),
      price:    +(q.regularMarketPrice).toFixed(2),
      volRatio: (q.averageDailyVolume20Day ?? 0) > 0
        ? +((q.regularMarketVolume ?? 0) / q.averageDailyVolume20Day).toFixed(1) : 1,
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
    // Collect all unique tickers
    const allTickers = [...new Set(Object.values(SECTOR_TICKERS).flat())];

    // Batch 50 per request, all in parallel
    const chunks  = chunkArray(allTickers, 50);
    const results = await Promise.allSettled(chunks.map(c => fetchBatchQuotes(c)));

    // Build ticker → quote map
    const quoteMap = {};
    let totalFetched = 0;
    for (const r of results) {
      if (r.status === "fulfilled") {
        for (const q of r.value) {
          if (q?.symbol) { quoteMap[q.symbol] = q; totalFetched++; }
        }
      }
    }

    if (totalFetched === 0) {
      // Return diagnostic info so we can debug
      return res.status(200).json({
        data: [],
        totalQuotes: 0,
        debug: `Fetched 0 quotes from ${chunks.length} batches. Yahoo may be rate-limiting.`,
        updatedAt: new Date().toISOString(),
      });
    }

    // Score each sector
    const data = Object.entries(SECTOR_TICKERS)
      .map(([name, tickers]) => {
        const quotes = tickers.map(t => quoteMap[t]).filter(Boolean);
        return scoreSector(quotes, name);
      })
      .filter(Boolean)
      .sort((a, b) => b.heat - a.heat);

    res.status(200).json({ data, totalQuotes: totalFetched, updatedAt: new Date().toISOString() });

  } catch (e) {
    console.error("sectors handler error:", e);
    res.status(500).json({ error: e.message, data: [], updatedAt: new Date().toISOString() });
  }
}
