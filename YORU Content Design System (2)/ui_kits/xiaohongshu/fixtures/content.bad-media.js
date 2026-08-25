/* Stress fixture · 负例：两种做坏的截图写法。跑出来必须报错，报不出来说明检查退化了。
   期望输出：
     - 超高竖图（760×3800，接近 1:5）→ overflow 错误，提示去裁局部或拆多页；
     - 文字截图塞进扁比例 + fit="contain" → screenshot 告警，渲染宽度不足内容列宽 90%。
   正确写法见 content.screenshots.js。 */
window.YORU_POST = {
  variant: "studio",
  contentMode: "editable",
  kicker: "PROCESS",
  issue: "2026.08 / 15",
  cover: { date: "2026.08", issueNumber: "15", title: "两种做坏的截图",
    subtitle: "这份 fixture 就是用来失败的。", tags: ["负例", "截图"], aside: "别照抄" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "超高竖图直接上" },
    { t: "body", text: "二十步全在一张 1:5 的竖图里。按自然比例排会超过一页可用高度——系统不会替你缩小它，而是报出来。" },
    { t: "figure", src: "fixtures/assets/shot-tall.png", ratio: "auto", index: 1,
      caption: "全过程记录，1:5 竖图。装不下。" },
    { t: "heading", level: 2, text: "文字截图塞进扁比例" },
    { t: "figure", src: "fixtures/assets/shot-code.png", ratio: "21 / 9", fit: "contain", index: 2,
      caption: "扁框 + contain，图被压到六成宽。" }
  ],
  end: { headline: "正确写法见 screenshots fixture", lines: ["这是负例，不要照抄", "有问题直接问，我都看"] }
};
