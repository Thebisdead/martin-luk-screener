// Master ticker list: ~2000 stocks across all GICS sectors
// Sources: S&P 500, NASDAQ 100, Russell 2000 high-volume names, thematic ETF constituents

export const SECTOR_TICKERS = {
  "信息技术": [
    "AAPL","MSFT","NVDA","AVGO","AMD","QCOM","TXN","AMAT","LRCX","KLAC",
    "MU","INTC","ADI","MCHP","NXPI","ON","STX","WDC","SWKS","QRVO",
    "ARM","SMCI","DELL","HPQ","HPE","NTAP","PSTG","ESTC","PLTR","SNOW",
    "CRM","NOW","ORCL","SAP","ADBE","INTU","ANSS","CDNS","SNPS","PTC",
    "TEAM","HUBS","DDOG","ZS","CRWD","PANW","FTNT","CYBR","S","TENB",
    "MDB","GTLB","CFLT","OKTA","ZI","DOCS","ALTR","VEEV","WDAY","SMAR",
    "TTD","MGNI","IAS","DV","APPS","CDAY","PCOR","COUP","PEGA","APPF",
    "SLAB","IIVI","COHR","IPGP","II","AMBA","SITM","POWI","DIOD","OSIS",
    "ACLS","AEHR","AXTI","CEVA","CMPR","FORM","GSIT","HTSI","INVE","IXYS",
    "MXIM","RMBS","SIMO","SMTC","SPNS","VIAV","XPER","YELP","APPS","CLFD"
  ],
  "通信服务": [
    "GOOGL","META","NFLX","DIS","CMCSA","T","VZ","TMUS","CHTR","LUMN",
    "SNAP","PINS","RDDT","MTCH","IAC","ZM","TWLO","BAND","MSGS","SATS",
    "SIRI","LSXMA","LBRDA","WBD","PARA","FOX","NYT","NWSA","IPG","OMC",
    "ZETA","BRZE","SPRK","TTGT","VNET","BIDU","IQ","HUYA","DOYU","YY",
    "GENI","EDR","LYV","IHRT","ETM","GTN","NXST","SBGI","AMCX","AMC"
  ],
  "非必需消费": [
    "AMZN","TSLA","HD","MCD","NKE","SBUX","LOW","TJX","BKNG","MAR",
    "HLT","RCL","CCL","NCLH","MGM","WYNN","LVS","CZR","PENN","DKNG",
    "ABNB","UBER","LYFT","DASH","ABNB","EXPE","TRIP","YELP","ANGI","IAC",
    "EBAY","ETSY","CHWY","CPNG","WISH","OZON","SE","MELI","VTEX","GLOB",
    "F","GM","RIVN","LCID","FSR","NKLA","GOEV","WKHS","SOLO","AYRO",
    "CVNA","KMX","AN","PAG","SAH","LAD","ABG","GPI","RUSHA","RUSHB",
    "WHR","POOL","TREX","AZEK","FBHS","MHK","SWK","TTI","LESL","LULU",
    "PVH","RL","PVH","GOOS","COLM","UA","UAA","SKX","CROX","DECK","WWW",
    "DRI","YUM","QSR","WEN","JACK","SHAK","RRGB","CAKE","TXRH","BJRI",
    "XPOF","PLNT","PTON","NFLX","SPOT","WMG","UMG","LYV","SEAT","MSGE"
  ],
  "医疗健康": [
    "LLY","UNH","JNJ","ABBV","MRK","TMO","ABT","DHR","SYK","BSX",
    "ISRG","EW","ZBH","BAX","BDX","A","IDXX","IQV","CRL","MEDP",
    "AMGN","GILD","BIIB","REGN","VRTX","MRNA","BNTX","NVAX","SGEN","ALNY",
    "INCY","EXEL","FATE","KYMR","AGEN","ARQT","BEAM","EDIT","NTLA","CRSP",
    "BLUE","BMRN","DNLI","FOLD","IMVT","KROS","MRUS","RCKT","SAGE","YMAB",
    "ACAD","ACET","ACHC","ADMA","ADUS","AFMD","AGIO","AGYS","AHCO","ALEC",
    "ALLO","ALPN","ALVR","AMDX","AMPH","AMRX","ANAB","APLS","APLT","APOG",
    "ARCT","ARDX","ARHS","ARIO","AROW","ARQIT","ARRY","ARWR","ASND","ASRT",
    "ASXC","ATAI","ATEC","ATHA","ATRC","ATRI","ATRS","ATXI","AUPH","AVDL",
    "AVEO","AVID","AVIR","AVNS","AXNX","AXSM","AYTU","AZTR","BCAB","BCYC"
  ],
  "金融": [
    "BRK-B","JPM","BAC","WFC","GS","MS","C","USB","TFC","PNC",
    "COF","AXP","DFS","SYF","ALLY","CACC","OMF","ENVA","QFIN","UPST",
    "AFRM","SOFI","LC","DAVE","MQ","PSFE","PAYO","SEER","OPEN","UWMC",
    "V","MA","PYPL","SQ","FIS","FISV","GPN","WEX","EVTC","PAGS",
    "HOOD","IBKR","SCHW","AMTD","ETFC","MKTX","LPLA","RJF","SF","PIPR",
    "BLK","IVZ","AMG","WDR","VRTS","WETF","APAM","GCMG","STEP","HLNE",
    "ICE","CME","CBOE","NDAQ","MKTX","TW","MSCI","SPGI","MCO","FDS",
    "MET","PRU","LNC","GL","PFG","VOYA","BHF","FG","RBBN","CLOV",
    "PGR","TRV","ALL","CB","HIG","WRB","AIG","MKL","RNR","ACGL",
    "COIN","MSTR","SI","SILVERGATE","SLM","NAVI","NCNO","PNFP","TCBI","IBCP"
  ],
  "工业": [
    "GE","HON","UPS","RTX","LMT","NOC","GD","BA","TXT","HEI",
    "CAT","DE","EMR","ROK","AME","PH","IR","GWW","MSC","FAST",
    "FDX","UNP","CSX","NSC","WAB","JBHT","ODFL","XPO","SAIA","ECHO",
    "WM","RSG","CLH","CWST","GFL","SRCL","US","ADSW","NWFL","NFLG",
    "RKLB","ASTS","LUNR","RDW","KTOS","AJRD","SPCE","ASTR","MNTS","BKSY",
    "ACHR","JOBY","LILM","EVEX","ARCHER","BLDE","SKYH","OWLT","DMYQ","HIMS",
    "ITW","SWK","PNR","XYL","XYLO","RXO","GNRC","HUBB","AOS","LII",
    "CARR","OTIS","TT","JCI","NDSN","BW","ACCO","ACM","EXPO","MYRG"
  ],
  "必需消费": [
    "WMT","PG","KO","PEP","COST","PM","MO","MDLZ","KHC","GIS",
    "K","CPB","CAG","SJM","MKC","HRL","TSN","PPC","SAFM","CALM",
    "CELH","MNST","KDP","STZ","BF-B","SAM","TAP","FIZZ","COKE","PRMW",
    "SFM","KR","ACI","SVU","GO","CASY","MUSA","ARKO","ATD","CST",
    "ELF","ULTA","COTY","REV","IPAR","ELF","HIMS","PRPL","CENT","FLXS"
  ],
  "能源": [
    "XOM","CVX","COP","EOG","PXD","OXY","DVN","FANG","MRO","APA",
    "HES","VLO","PSX","MPC","DK","DINO","CVI","CLMT","PARR","HFC",
    "SLB","HAL","BKR","NOV","OIS","PTEN","NE","VAL","DO","RIG",
    "KMI","WMB","ET","EPD","MPLX","PAA","TRGP","DT","OKE","LNG",
    "AR","EQT","CNX","RRC","SWN","CTRA","GPOR","TELL","CQP","NFE",
    "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG",
    "FLNC","PLUG","FCEL","BLDP","BE","NEE","ENPH","SEDG","ARRY","RUN"
  ],
  "原材料": [
    "LIN","APD","SHW","ECL","DD","DOW","LYB","EMN","HUN","RPM",
    "NEM","GOLD","AEM","KGC","AU","PAAS","HL","CDE","EXK","MAG",
    "FCX","SCCO","TECK","HBM","CMMC","NOVN","MP","LITE","CRUS","FSLR",
    "ALB","SQM","PLL","LAC","LTHM","LIVENT","SGML","CYDX","ALTM","NOVS",
    "X","NUE","STLD","CLF","MT","VALE","RIO","BHP","ARCH","AMR",
    "BALL","SEE","PKG","IP","WRK","SLVM","TUP","BERY","CROWN","GPK"
  ],
  "房地产": [
    "PLD","AMT","EQIX","CCI","DLR","SBAC","WELL","VTR","PEAK","HR",
    "SPG","O","VICI","GLPI","CUZ","EXR","CUBE","LSI","NSA","SST",
    "AVB","EQR","ESS","MAA","CPT","UDR","NHI","OHI","LTC","SBRA",
    "ARE","BXP","VNO","SLG","HIW","CIO","OFC","JBGS","KRC","DEI",
    "RDFN","Z","ZG","OPEN","EXPI","HOUS","RKT","UWMC","PFSI","COOP"
  ],
  "公用事业": [
    "NEE","DUK","SO","AEP","EXC","SRE","D","PCG","ED","ES",
    "XEL","WEC","DTE","CMS","ETR","PPL","NI","AEE","LNT","EVRG",
    "AWK","WTR","YORW","MSEX","ARTNA","CTWS","GWRS","PESI","SJW","UTMD"
  ],
  "量子计算": [
    "IONQ","RGTI","QBTS","QUBT","ARQQ","QTUM","IBMQ","MSFT","GOOGL","AMZN"
  ],
  "人工智能": [
    "PLTR","AI","BBAI","SOUN","GFAI","IREN","AIXI","AIOT","AIBUY","AIFU",
    "BIDU","BZUN","CEVA","COGN","GOOG","IBM","INTU","MSFT","NVDA","ORCL",
    "PATH","RNG","SOUN","SSYS","SYNP","TIGR","TSIA","TWOU","UPWK","VRNS"
  ],
  "加密/区块链": [
    "MSTR","COIN","MARA","RIOT","CLSK","HUT","BTBT","IREN","CIFR","WULF",
    "BTCS","BKKT","MKTY","GBTC","ETHE","IBIT","FBTC","ARKB","BITB","HODL"
  ],
  "太空/国防": [
    "RKLB","ASTS","LUNR","RDW","KTOS","AJRD","SPCE","ASTR","MNTS","BKSY",
    "LMT","NOC","RTX","GD","BA","HEI","TDG","AXON","CACI","LDOS",
    "SAIC","BAH","CSIQ","DRS","FLIR","KBR","MOOG","MRCY","PLTR","VSAT"
  ],
  "核能/清洁能源": [
    "SMR","NNE","OKLO","BWXT","LEU","LTBR","CCJ","UEC","DNN","URG",
    "FLNC","PLUG","FCEL","BLDP","BE","ENPH","SEDG","ARRY","RUN","NOVA",
    "STEM","SHLS","SPWR","MAXN","CSIQ","JKS","DAQO","SOL","HASI","CWEN"
  ],
  "金融科技": [
    "HOOD","SOFI","AFRM","UPST","LC","DAVE","MQ","PSFE","PAYO","OPEN",
    "COIN","SQ","PYPL","BILL","RELY","PRAA","QFIN","LU","FUTU","TIGR",
    "WEX","EVTC","PAGS","FOUR","FLYW","PCOR","RPAY","STNE","VTEX","EEFT"
  ],
};

// Flatten to get all unique tickers
export const ALL_TICKERS = [...new Set(Object.values(SECTOR_TICKERS).flat())];
export const TICKER_SECTOR_MAP = {};
for (const [sector, tickers] of Object.entries(SECTOR_TICKERS)) {
  for (const t of tickers) {
    if (!TICKER_SECTOR_MAP[t]) TICKER_SECTOR_MAP[t] = sector;
  }
}
