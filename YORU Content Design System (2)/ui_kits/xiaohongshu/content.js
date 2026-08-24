/* One real post, written as a linear block stream. This is the shape the pagination engine eats. */
window.YORU_POST = {
  variant: "lab",
  kicker: "VIBE CODING",
  issue: "2026.08 / 04",
  cover: { column: "VIBE CODING", date: "2026.08", issueNumber: "04", title: "把提示词写成模块", subtitle: "四十遍之后留下来的写法。", tags: ["工作流", "Claude Code"], aside: "第四十遍才定下来" },
  blocks: [
    { t: "heading", level: 1, text: "为什么单条提示词撑不住" },
    { t: "lede", text: "三个月里我把这套流程跑了四十多遍，下面是留下来的部分。" },
    { t: "body", text: "一开始我也是把所有要求堆在一条提示词里。前十次都还行，第十一次改需求的时候就傻眼了 —— 不知道该动哪一句。" },
    { t: "callout", kind: "warn", title: "先说清楚", text: "这套流程依赖 Claude Code 的本地权限，云端 IDE 里跑不通。" },
    { t: "heading", level: 2, text: "拆成三层" },
    { t: "steps", start: 1, items: [
      { title: "触发条件", body: "什么时候该用这个模块。写死，不要写“视情况”。" },
      { title: "执行步骤", body: "按顺序列出来，每一步只做一件事。" },
      { title: "失败兜底", body: "做不到的时候要回什么。缺这层，Agent 就开始自由发挥。" }
    ]},
    { t: "code", filename: ".claude/skills/review.md", lang: "md", code: "---\nname: review\ndescription: 只在有 diff 的时候触发\n---\n\n1. 先读 diff，不要读整个文件\n2. 先说风险，再说风格\n3. 拿不准就问，不要猜" },
    { t: "heading", level: 2, text: "写完之后怎么验" },
    { t: "body", text: "把同一段需求分别丢给改之前和改之后的配置，比较两次输出。差异不明显就说明这个模块没起作用，删掉。" },
    { t: "prompt", model: "Claude Sonnet 4.5", text: "你是我的代码审查搭子。只看 diff，先说风险，再说风格。拿不准的地方直接问我，不要猜。" },
    { t: "figure", ratio: "16 / 10", index: 1, caption: "左边是默认输出，右边加了模块约束之后的输出。" },
    { t: "compare", highlight: 2, columns: ["", "单条提示词", "模块化"], rows: [
      ["改需求", "整条重写", "改一层"], ["复用", "复制粘贴", "直接引用"], ["排错", "看不出哪句错", "定位到层"]
    ], caption: "同一个任务，四十次之后的体感差异。" },
    { t: "quote", text: "Skills 是给 Agent 的说明书，不是给人的文档。", cite: "Anthropic", source: "Claude Code docs" },
    { t: "refs", items: [
      { title: "Claude Code 文档", source: "Anthropic", url: "docs.anthropic.com/claude-code" },
      { title: "Agent Skills 规范", source: "Anthropic", url: "docs.anthropic.com/agent-skills" }
    ]}
  ],
  end: { headline: "下期讲怎么让它自己写测试", lines: ["模块模板在评论区", "有问题直接问，我都看"] }
};
