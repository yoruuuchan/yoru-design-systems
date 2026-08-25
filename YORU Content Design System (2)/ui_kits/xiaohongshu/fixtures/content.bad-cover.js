/* Stress fixture · 负例，故意做坏的封面。
   这是唯一一份「跑出来就该报告警」的 fixture：封面只给 title，
   不给 issueNumber / tags / aside / subtitle —— 也就是真实成品 page-1.jpg 的状况。
   渲染验收如果对它一声不吭，说明封面检查坏了。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "editable",
  kicker: "AI NEWS",
  issue: "2026.08 / 16",
  cover: { date: "2026.08", title: "只有标题的封面" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "这份 fixture 应当报告警" },
    { t: "body", text: "封面缺 issueNumber / tags / aside / subtitle，套印封面失去所有支点，剩下一块大空白。" },
    { t: "body", text: "验收输出里应当同时出现 cover-fields 与 thin 两条告警。只出现一条，说明检查退化了。" }
  ],
  end: { headline: "封面必填字段见 readme", lines: ["这是负例，不要照抄", "有问题直接问，我都看"] }
};
