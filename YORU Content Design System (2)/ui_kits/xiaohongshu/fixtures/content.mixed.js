/* Stress fixture · 中英数字混排 + emoji。
   注意：emoji 在这里只是渲染压力测试，不是可用的内容风格——
   readme 的 CONTENT FUNDAMENTALS 里 emoji 数量是零，这条不变。
   这份 fixture 存在的意义是：万一用户给的定稿里带 emoji（verbatim 模式），
   排版不能崩、不能吞字、行高不能被撑歪。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "verbatim",
  kicker: "AI NEWS",
  issue: "2026.08 / 13",
  cover: { date: "2026.08", issueNumber: "13", title: "混排到底会不会崩",
    subtitle: "中英数字加 emoji，一次全上。", tags: ["排版", "字体"], aside: "verbatim 原样排" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "混排压力测试" },
    { t: "lede", text: "Claude Opus 5 在 M4 Pro / 48GB 上跑 40 次，平均 12.4 秒，P95 是 21.8 秒。" },
    { t: "body", text: "命令是 npx @anthropic-ai/claude-code@2.1.200 --model claude-opus-5，路径写成 ~/.claude/settings.json，中英之间留一个半角空格。" },
    { t: "body", text: "这一行带 emoji 🚀 用来验证行盒不会被撑歪，后面接中文继续排，再来一个 ✅ 和一个 ⚠️ 看看基线。" },
    { t: "body", text: "数字混排：1242×1656 的画布，96px 边距，76px 块间距，1.68 行高，@1x 出图，2.5 倍于公众号的 677px 栏宽。" },
    { t: "code", filename: "run.sh", lang: "bash", code: "npx @anthropic-ai/claude-code@2.1.200 \\n  --model claude-opus-5 \\n  --settings ~/.claude/settings.json" },
    { t: "compare", highlight: 1, columns: ["项", "值", "备注"], rows: [
      ["模型", "claude-opus-5", "1M context"], ["次数", "40", "含 3 次失败"],
      ["平均", "12.4s", "P95 21.8s"], ["机器", "M4 Pro / 48GB", "本地"]
    ], caption: "四十次的原始记录，未做剔除。" }
  ],
  end: { headline: "下期把失败的三次单独讲", lines: ["原始日志在评论区", "有问题直接问，我都看"] }
};
