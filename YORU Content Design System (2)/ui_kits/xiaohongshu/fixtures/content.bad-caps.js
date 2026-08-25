/* Stress fixture · 负例：故意把每页上限全部撞破。跑出来必须报四条 cap 告警。
   readme 与 CLAUDE.md 早就写死了这几条（荧光笔每页一条、旁批每页一条、
   一页最多一个 Callout、最多三个 Tag），但以前没有任何东西去数。
   正确用法见 content.signature.js。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "editable",
  kicker: "AI NEWS",
  issue: "二〇二六年八月 · 第十八期",
  cover: { date: "2026.08", issueNumber: "18", title: "把上限全撞破",
    subtitle: "这一页应该报四条告警。", tags: ["负例", "上限"], aside: "别照抄" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "一页里塞满所有强调" },
    { t: "body", text: "==第一条荧光笔==，读者的眼睛落在这里。" },
    { t: "body", text: "==第二条荧光笔==，于是第一条白打了——两块一样亮就等于没有重点。" },
    { t: "labels", tags: ["标签一", "标签二", "标签三", "标签四"] },
    { t: "callout", kind: "note", title: "第一个 Callout", text: "一页最多一个。" },
    { t: "callout", kind: "warn", title: "第二个 Callout", text: "这个就是多的那个。" },
    { t: "marginnote", text: "第一条旁批。" },
    { t: "marginnote", text: "第二条旁批。两张歪便签就不像手写了，像模板。" }
  ],
  end: { headline: "正确用法见 signature fixture", lines: ["这是负例，不要照抄", "有问题直接问，我都看"] }
};
