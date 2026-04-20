// Street Fighter 6 猜牌位題目設定檔
// videoId: YouTube 影片 ID（網址中 ?v= 後面的部分）
// leftRank / rightRank: 正確牌位
//   可填入: "platinum-", "diamond", "mr1499-", "mr1500", "mr1700", "mr1900+"
// leftName / rightName: 角色名稱（顯示用）

const RANKS = [
  { id: "platinum-", label: "白金以下",     color: "#a5f3fc", bg: "linear-gradient(135deg,#1e3a5f,#1e6fa8)" },
  { id: "diamond",   label: "鑽石",         color: "#f0abfc", bg: "linear-gradient(135deg,#6b21a8,#db2777)" },
  { id: "mr1499-",   label: "MR 1~1499",    color: "#6ee7b7", bg: "linear-gradient(135deg,#064e3b,#065f46)" },
  { id: "mr1500",    label: "MR 1500~1699", color: "#e2e8f0", bg: "linear-gradient(135deg,#374151,#6b7280)" },
  { id: "mr1700",    label: "MR 1700~1799", color: "#fde68a", bg: "linear-gradient(135deg,#78350f,#b45309)" },
  { id: "mr1900+",   label: "MR 1800+",             color: "#fca5a5", bg: "linear-gradient(135deg,#7f1d1d,#dc2626)" },
  { id: "legend",    label: "LEGEND",                color: "#ffd700", bg: "linear-gradient(135deg,#92400e,#d97706,#fbbf24)" },
];

const QUESTIONS = [
  {
    videoId: "dQw4w9WgXcQ",        // ← 換成你的 YouTube 影片 ID
    leftName: "RYU",
    rightName: "AKUMA",
    leftRank: "mr1900+",
    rightRank: "mr1900+",
  },
 // 繼續新增題目：
  {
    videoId: "pXRKSCZPQjE",
    leftName: "KIMBERLY",
    rightName: "BLANKA",
    leftRank: "mr1700",
    rightRank: "mr1700",
  },
];
