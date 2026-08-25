/* Stress fixture · T5 长 @handle 不可断。
   @+字母数字下划线 段在中文正文里会被浏览器当拉丁串处理，撞到窄行边缘会
   从中间切开。blocks.jsx 的 inline() 把它包成 white-space:nowrap 的 span，
   遇到行尾整块换行。这份 fixture 里刻意让 handle 落在行尾附近。
   #话题标签不做特殊处理——按内容契约，话题本来就不该进图。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "verbatim",
  kicker: "AI NEWS",
  issue: "二〇二六年八月 · 第二十期",
  cover: {
    date: "2026.08", issueNumber: "20",
    title: "@thsottiaux 说这条不该被折断",
    subtitle: "handle 从中间断开等于没引用到人。",
    tags: ["排版", "细节"], aside: "整块换行"
  },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "长 handle 不许拦腰断" },
    { t: "lede", text: "这一句里出现 @thsottiaux 一次，得整块换行到下一行，而不是从中间被切开成 @thsot 加 tiaux。" },
    { t: "body", text: "上面这一段没触发。真正会触发的是接近行尾的位置——例如引一段两个 handle 的原推：转发 @sama 与 @thsottiaux 昨晚的对话，讨论新的 usage tier。" },
    { t: "body", text: "或者更长的：这条帖子里 @a_very_long_handle_that_will_hit_the_edge 出现在句子中间，浏览器默认会想把它拆两截。" },
    { t: "body", text: "反例（不应该被特殊处理）：#话题标签 按契约不该进图；正文里的普通英文单词 usage、tier、Anthropic 也不该被 nowrap 包起来。" }
  ],
  end: { headline: "handle 完整了引用才成立", lines: ["这条规则只作用于 @handle", "有问题直接问，我都看"] }
};
