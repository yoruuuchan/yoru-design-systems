/* Stress fixture · 长教程：22 块，会跨到七八页。
   考的是贪心装页在长内容下的稳定性，以及落单标题会不会被推到下一页。 */
window.YORU_POST = {
  variant: "lab",
  contentMode: "editable",
  kicker: "VIBE CODING",
  issue: "二〇二六年八月 · 第九期",
  cover: { date: "2026.08", issueNumber: "09", title: "把一个 Skill 拆成三层",
    subtitle: "四十遍之后留下来的写法。", tags: ["Skills", "Claude Code"], aside: "第四十遍才定下来" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "为什么单层写法撑不住" },
    { t: "lede", text: "三个月里我把这套流程跑了四十多遍，下面是留下来的部分。" },
    { t: "body", text: "一开始我也是把所有要求堆在一条提示词里。前十次都还行，第十一次改需求的时候就傻眼了——不知道该动哪一句。" },
    { t: "body", text: "问题不在长度。同样两千字，分成三段互不重叠的职责，改起来是改一段；混在一起，改哪句都可能碰到别的行为。" },
    { t: "callout", kind: "warn", title: "先说清楚", text: "这套流程依赖本地权限，云端 IDE 里跑不通。" },
    { t: "heading", level: 2, text: "第一层 · 触发条件" },
    { t: "body", text: "什么时候该用这个模块。写死，不要写「视情况」。模型看到「视情况」的时候，情况永远是它想要的那种。" },
    { t: "steps", start: 1, items: [
      { title: "写出可判定的条件", body: "有 diff、有报错、有指定文件——这些能判定。「用户需要帮助」不能。" },
      { title: "写出不该触发的场景", body: "反例比正例管用，尤其是相邻的两个 skill 容易互相抢活的时候。" },
      { title: "给一个最短的例句", body: "把用户真会说的那句话原样抄进去。" }
    ]},
    { t: "heading", level: 2, text: "第二层 · 执行步骤" },
    { t: "body", text: "按顺序列出来，每一步只做一件事。一步里塞两件事，模型会挑它更擅长的那件做，另一件当没看见。" },
    { t: "code", filename: ".claude/skills/review.md", lang: "md", code: "---\nname: review\ndescription: 只在有 diff 的时候触发\n---\n\n1. 先读 diff，不要读整个文件\n2. 先说风险，再说风格\n3. 拿不准就问，不要猜" },
    { t: "body", text: "这段是全文最该抄走的东西，所以它在系统里是唯一带内凹阴影的块——压进纸里，不是浮在纸上。" },
    { t: "heading", level: 2, text: "第三层 · 失败兜底" },
    { t: "body", text: "做不到的时候要回什么。缺这层，Agent 就开始自由发挥，而自由发挥的结果通常读起来最像成功。" },
    { t: "callout", kind: "stop", title: "别这么写", text: "「如果无法完成，请尽力而为」——这句话等于没写，模型会把「尽力而为」解释成继续编。" },
    { t: "prompt", model: "Claude Opus 5", text: "你是我的代码审查搭子。只看 diff，先说风险，再说风格。拿不准的地方直接问我，不要猜。" },
    { t: "heading", level: 2, text: "写完之后怎么验" },
    { t: "body", text: "把同一段需求分别丢给改之前和改之后的配置，比较两次输出。差异不明显就说明这个模块没起作用，删掉。" },
    { t: "figure", ratio: "16 / 10", index: 1, caption: "左边是默认输出，右边加了三层约束之后的输出。" },
    { t: "compare", highlight: 2, columns: ["", "单层", "三层"], rows: [
      ["改需求", "整条重写", "改一层"], ["复用", "复制粘贴", "直接引用"],
      ["排错", "看不出哪句错", "定位到层"], ["交接", "口头解释", "读文件就够"]
    ], caption: "同一个任务，四十次之后的体感差异。" },
    { t: "quote", text: "Skills 是给 Agent 的说明书，不是给人的文档。", cite: "Anthropic", source: "Claude Code docs" },
    { t: "refs", items: [
      { title: "Claude Code 文档", source: "Anthropic", url: "docs.anthropic.com/claude-code" },
      { title: "Agent Skills 规范", source: "Anthropic", url: "docs.anthropic.com/agent-skills" }
    ]}
  ],
  /* F4 · 尾页折叠：原来的「最后一句：三层不是规矩……」独立成块，让分页器把 refs
     推到第 8 页，那页只有 22% 装满被新尾页规则 (>= 45%) 抓住。按 brief 的建议
     「把尾段回填上一页、或并入 EndCard 的 lines」，那句话搬进 end.lines。 */
  end: { headline: "下期讲怎么让它自己写测试", lines: ["三层不是规矩，是踩完坑剩下的最省事的形状——只需要一层就写一层", "三层模板在评论区，有问题直接问我"] }
};
