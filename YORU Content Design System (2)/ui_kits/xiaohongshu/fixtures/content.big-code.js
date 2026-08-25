/* Stress fixture · 大代码块（应当零错误零告警）。
   考的是一个不可切分的高块：14 行代码在一页里装得下，分页器必须整块推走、
   不从中间切开，也不能让它压到页脚上。真的装不下的情况见 content.bad-media.js。 */
const BIG = [
  "/* paginate.jsx — 测量即渲染 */",
  "function readPageGeometry(pageEl) {",
  "  const col = pageEl.querySelector('[data-yoru-flow]');",
  "  if (!col) return null;",
  "  const cs = getComputedStyle(col);",
  "  const padT = parseFloat(cs.paddingTop) || 0;",
  "  const padB = parseFloat(cs.paddingBottom) || 0;",
  "  const gap  = parseFloat(cs.rowGap) || 0;",
  "  const rect = col.getBoundingClientRect();",
  "  let bottom = rect.top + col.clientHeight - padB;",
  "  const foot = pageEl.querySelector('[data-yoru-footer]');",
  "  if (foot) bottom = Math.min(bottom, foot.getBoundingClientRect().top - gap);",
  "  return { height: bottom - (rect.top + padT), gap };",
  "}"
].join("\n");
window.YORU_POST = {
  variant: "lab",
  contentMode: "editable",
  kicker: "VIBE CODING",
  issue: "二〇二六年八月 · 第十四期",
  cover: { date: "2026.08", issueNumber: "14", title: "一块代码占掉大半页",
    subtitle: "不切分，整块推走。", tags: ["排版", "分页"], aside: "十四行刚好" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "不可切分的块" },
    { t: "body", text: "一段代码、一张表、一个步骤列表永远完整地待在一页里。装不下就开新页，不从中间切开。" },
    { t: "body", text: "这条规则听起来严格，其实是被坑出来的：代码被切成两半之后，读者在第二页看到的是半个函数，抄走的也是半个函数。宁可留一页白，也不要让人抄走跑不通的东西。" },
    { t: "body", text: "代价是内容形状会直接影响页数。一个一千二百像素的代码块后面接一段正文，这一页就基本满了；前面那页如果只剩三百像素，它就会空着——这不是分页器算错，是内容本身的形状。" },
    { t: "code", filename: "ui_kits/xiaohongshu/paginate.jsx", lang: "js", code: BIG },
    { t: "body", text: "上面这块十四行。再来一块同样长的，验证第二块会不会正确落到新页。" },
    { t: "code", filename: "ui_kits/xiaohongshu/paginate.jsx", lang: "js", code: BIG },
    { t: "callout", kind: "note", title: "要拆长列表", text: "用 StepList start={n} 手动续号，不要指望分页器帮你切。" }
  ],
  end: { headline: "下期讲测量为什么必须是克隆", lines: ["源码在评论区", "有问题直接问，我都看"] }
};
