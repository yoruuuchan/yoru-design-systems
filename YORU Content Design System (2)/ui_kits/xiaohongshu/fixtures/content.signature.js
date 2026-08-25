/* Stress fixture · 签名动作与全部 block 类型（应当零错误零告警）。
   这份 fixture 存在的理由：以前 blocks[] 只认 11 种类型，着重号、荧光笔、手写旁批、
   标签、状态、区段号、时间线、图谱全都进不去——也就是说走正规管线做不出这套系统
   四个签名动作里的三个。补齐之后，这里逐个用一遍，保证它们真的能跑出来。

   行内标记：·贴着字· 是着重号，==贴着字== 是荧光笔。分隔符里侧不许有空格，
   所以正文里当分隔符用的 ` · ` 不会被误读。 */
window.YORU_POST = {
  variant: "studio",
  contentMode: "editable",
  kicker: "PROCESS",
  issue: "二〇二六年八月 · 第十七期",
  cover: { date: "2026.08", issueNumber: "17", title: "四个签名动作长什么样",
    subtitle: "报头、着重号、荧光笔、旁批，一页一个。", tags: ["排版", "组件"], aside: "都能从 blocks 里走出来" },
  blocks: [
    { t: "heading", level: 1, mark: true, kicker: "SIGNATURE", text: "识别度不靠 logo" },
    { t: "lede", text: "这套系统没有文字字标。认得出是同一个人排的，靠的是四个每篇都出现、位置永不改变的小动作。" },
    { t: "body", text: "第一个是报头，它是自动的——只要页面有 index，月相行、汉字页码和文武线就在那里，不用你写。剩下三个要自己下手，而且·每页都有上限·。" },
    { t: "labels", tags: ["签名动作", "排版规则"], status: [{ status: "note" }] },
    { t: "body", text: "第二个是着重号：中文印刷的重点符，打在词下方。这是系统的主要强调手段，也是为什么全系统==没有下划线、没有彩色正文==。" },
    { t: "marginnote", text: "第一版我给正文加过彩色，一页里三种颜色，看着像促销单页。删掉之后反而清楚了。" },

    { t: "section", index: 2, total: 4, label: "荧光笔" },
    { t: "heading", level: 2, text: "一页只准一条" },
    { t: "body", text: "荧光笔是关键短语背后的浅色带，压在行盒下部约 42%。英文、代码标识符、带引号的字符串用它，不用着重号——着重号的点打在小写拉丁字母下面会跟降部撞在一起。" },
    { t: "body", text: "==每页只准一条==。第二条会把第一条抵消掉：读者的眼睛只会认页面上最亮的那一块，两块一样亮就等于没有重点。渲染验收会数这个，超了报告警。" },
    { t: "callout", kind: "warn", title: "别叠加", text: "同一句话不要既打着重号又刷荧光笔。两种强调撞在一起，读者会以为这是两件事。" },

    { t: "heading", level: 2, text: "旁批必须非承重" },
    { t: "body", text: "手写旁批是歪一度多的便签，写文章本身不会说的那句话：哪里翻过车、什么花了三天、哪一步可以跳过。它是这套系统里唯一允许personal的地方，所以要短，一两行。" },
    { t: "body", text: "关键是·非承重·——读者真正需要的信息属于 Callout，不属于旁批。旁批被裁掉、被忽略、被当成花边，文章都得照样读得通。" },
    { t: "marginnote", tone: "plain", text: "这条用了 tone=\"plain\"，没有底色，只有一条下边线。想更安静的时候用它。" },

    { t: "heading", level: 2, text: "整块级的其余组件" },
    { t: "body", text: "时间线和图谱也从 blocks 里走。它们都是确定性渲染——同一份数据永远画出同一张图，引擎不测量文字。" },
    { t: "timeline", title: "这套管线的四次改法", kicker: "CHANGELOG", orientation: "vertical",
      items: [
        { date: "06 / 22", label: "第一版分页器", meta: "手抄版面参数", status: "failed" },
        { date: "08 / 19", label: "接自托管思源", meta: "pyftsubset", status: "verified" },
        { date: "08 / 25", label: "测量即渲染", meta: "probe = 真的 Page", status: "verified" },
        { date: "08 / 25", label: "渲染验收", meta: "export_cards.mjs", status: "verified" }
      ],
      caption: "四次改动，只有第三次真正解决了溢出。", source: "本仓库 git log" },

    { t: "diagram", title: "出图闭环", kicker: "PIPELINE", layout: "layered", legend: true,
      nodes: [
        { id: "src", label: "blocks[]", role: "input" },
        { id: "pag", label: "usePagination", role: "process", meta: "测量即渲染" },
        { id: "chk", label: "渲染验收", role: "tool", status: "verified" },
        { id: "png", label: "PNG @1x", role: "output" }
      ],
      edges: [
        { from: "src", to: "pag", kind: "flow" },
        { from: "pag", to: "chk", kind: "flow" },
        { from: "chk", to: "png", kind: "flow" },
        { from: "chk", to: "pag", kind: "dep", label: "不过就回去改" }
      ],
      caption: "HTML 只是中间产物，验收不过不算完成。" },

    { t: "body", text: "最后一句：这些都是既有组件，不是新版式。补的只是从 blocks 走过去的那条路。" }
  ],
  end: { headline: "下期讲行内标记怎么不跟标点打架", lines: ["契约写在 readme 内容契约一节", "有问题直接问，我都看"] }
};
