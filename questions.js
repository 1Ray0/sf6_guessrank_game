// Street Fighter 6 猜牌位題目設定檔
// videoId: YouTube 影片 ID
// leftRank / rightRank: "platinum-", "diamond", "mr1499-", "mr1500", "mr1700", "mr1900+", "legend"

const RANKS = [
  { id: "platinum-", label: "白金以下",        color: "#a5f3fc", bg: "linear-gradient(135deg,#1e3a5f,#1e6fa8)" },
  { id: "diamond",   label: "鑽石",            color: "#f0abfc", bg: "linear-gradient(135deg,#6b21a8,#db2877)" },
  { id: "mr1499-",   label: "MR 1~1499",       color: "#6ee7b7", bg: "linear-gradient(135deg,#064e3b,#065f46)" },
  { id: "mr1500",    label: "MR 1500~1699",    color: "#e2e8f0", bg: "linear-gradient(135deg,#374151,#6b7280)" },
  { id: "mr1700",    label: "Grand Master 1700~1799", color: "#fde68a", bg: "linear-gradient(135deg,#78350f,#b45309)" },
  { id: "mr1900+",   label: "MR 1800+",        color: "#fca5a5", bg: "linear-gradient(135deg,#7f1d1d,#dc2626)" },
  { id: "legend",    label: "LEGEND",           color: "#ffd700", bg: "linear-gradient(135deg,#92400e,#d97706,#fbbf24)" },
];

const QUESTIONS = [
  {
    videoId: "sv2yEdOnLjQ",
    leftName: "JAMIE",
    rightName: "DHALSIM",
    leftRank: "mr1500",
    rightRank: "mr1500",
  },
  {
    videoId: "LxDoljnStaE",
    leftName: "JP",
    rightName: "MARISA",
    leftRank: "legend",
    rightRank: "mr1900+",
  },
  {
    videoId: "DsWPoaSM75g",
    leftName: "TERRY",
    rightName: "JAMIE",
    leftRank: "legend",
    rightRank: "legend",
  },
  {
    videoId: "G2H8kkz69VI",
    leftName: "TERRY",
    rightName: "AXLE",
    leftRank: "mr1499-",
    rightRank: "mr1499-",
  },
  {
    videoId: "A1WsacU9ZPE",
    leftName: "CAMMY",
    rightName: "BLANKA",
    leftRank: "mr1499-",
    rightRank: "mr1499-",
  },
  {
    videoId: "oQVDBL-j6mU",
    leftName: "RASHID",
    rightName: "AKI",
    leftRank: "diamond",
    rightRank: "diamond",
  },
  {
    videoId: "neE6lqPNQi0",
    leftName: "SAGAT",
    rightName: "ZANGIEF",
    leftRank: "platinum-",
    rightRank: "platinum-",
  },
  {
    videoId: "ONvHHvsJmzA",
    leftName: "BLANKA",
    rightName: "DEEJAY",
    leftRank: "mr1900+",
    rightRank: "mr1900+",
  },
];
