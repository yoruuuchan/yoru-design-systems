/* Seven real diagrams, each written as data. This file is the contract an agent
   fills in: nodes, edges, groups, annotations — never coordinates or colours. */
window.YORU_DIAGRAMS = [
{
  id: "pipeline", kind: "diagram", label: "流程图 · 内容生产", variant: "signal",
  spec: {
    kicker: "PIPELINE", title: "一篇内容怎么变成两个渠道的成品", layout: "layered", legend: true,
    nodes: [
      { id: "src", role: "input", label: "结构化内容", meta: "blocks[]" },
      { id: "render", role: "process", label: "套 YORU 组件", meta: "React" },
      { id: "page", role: "process", label: "自动分页", meta: "usePagination()" },
      { id: "img", role: "output", label: "小红书图片卡", meta: "1242×1656 ×N" },
      { id: "inline", role: "process", label: "冻结行内样式", meta: "inlineStyles()" },
      { id: "wx", role: "output", label: "公众号 HTML", meta: "可直接粘贴" }
    ],
    edges: [
      { from: "src", to: "render", kind: "data" },
      { from: "render", to: "page" }, { from: "page", to: "img" },
      { from: "render", to: "inline" }, { from: "inline", to: "wx" }
    ],
    groups: [{ label: "小红书", nodes: ["page", "img"] }, { label: "公众号", nodes: ["inline", "wx"] }],
    caption: "两条分支共用前两步。渠道差异只在版式，不在内容。",
    source: "来源：本设计系统 ui_kits/"
  }
},
{
  id: "mindmap", kind: "diagram", label: "思维导图 · 能力地图", variant: "lab",
  spec: {
    kicker: "MIND MAP", title: "Vibe Coding 到底要会什么", layout: "tree", legend: false,
    nodes: [
      { id: "root", role: "process", label: "Vibe Coding", showRole: false },
      { id: "ctx", role: "data", label: "上下文管理", showRole: false, meta: "读什么 / 不读什么" },
      { id: "skill", role: "agent", label: "Skill 设计", showRole: false, meta: "触发 / 步骤 / 兜底" },
      { id: "loop", role: "human", label: "人机分工", showRole: false, meta: "谁拍板" },
      { id: "ctx1", role: "external", label: "仓库结构", showRole: false },
      { id: "ctx2", role: "external", label: "文档与注释", showRole: false },
      { id: "sk1", role: "external", label: "写死触发条件", showRole: false },
      { id: "sk2", role: "external", label: "失败要回什么", showRole: false },
      { id: "lp1", role: "external", label: "验收标准", showRole: false }
    ],
    edges: [
      { from: "root", to: "ctx", kind: "flow", arrow: false }, { from: "root", to: "skill", kind: "flow", arrow: false }, { from: "root", to: "loop", kind: "flow", arrow: false },
      { from: "ctx", to: "ctx1", kind: "weak" }, { from: "ctx", to: "ctx2", kind: "weak" },
      { from: "skill", to: "sk1", kind: "weak" }, { from: "skill", to: "sk2", kind: "weak" },
      { from: "loop", to: "lp1", kind: "weak" }
    ],
    caption: "三个分支，每支不超过两层。再深就该拆成两张图。"
  }
},
{
  id: "arch", kind: "diagram", label: "系统架构 · 本地与云端", variant: "lab",
  spec: {
    kicker: "ARCHITECTURE", title: "这套工作流跑在哪里", layout: "grid", legend: true, grid: true,
    nodes: [
      { id: "cli", role: "tool", label: "Claude Code CLI", meta: "本地进程", col: 0, row: 0 },
      { id: "repo", role: "data", label: "仓库", meta: "git", col: 0, row: 1 },
      { id: "skills", role: "data", label: ".claude/skills", meta: "版本受控", col: 0, row: 2 },
      { id: "api", role: "external", label: "模型 API", meta: "sonnet-4.5", col: 1, row: .5, status: "unknown" },
      { id: "gh", role: "external", label: "GitHub", meta: "PR / Actions", col: 1, row: 1.5 },
      { id: "out", role: "output", label: "可合并的 PR", col: 2, row: 1 }
    ],
    edges: [
      { from: "cli", to: "api", kind: "data", label: "prompt" },
      { from: "repo", to: "cli", kind: "dep" }, { from: "skills", to: "cli", kind: "dep" },
      { from: "api", to: "out" }, { from: "gh", to: "out", kind: "weak" }, { from: "cli", to: "gh", kind: "data" }
    ],
    groups: [{ label: "我的机器", nodes: ["cli", "repo", "skills"] }, { label: "不受我控制", nodes: ["api", "gh"], kind: "dashed" }],
    annotations: [{ at: "api", side: "right", text: "限流和版本变化都算外部风险，兜底逻辑必须写在本地。" }],
    caption: "虚线框是边界不在我这边的部分。",
    source: "来源：本地实测环境 M4 Pro / 48G"
  }
},
{
  id: "roles", kind: "diagram", label: "分工图 · 人 / Agent / 工具", variant: "signal",
  spec: {
    kicker: "WHO DOES WHAT", title: "一次代码审查的分工", layout: "layered", legend: true,
    nodes: [
      { id: "diff", role: "input", label: "git diff", meta: "只给改动" },
      { id: "rg", role: "tool", label: "ripgrep", meta: "定位调用点" },
      { id: "agent", role: "agent", label: "Claude Code", meta: "读 diff · 列风险", status: "verified" },
      { id: "me", role: "human", label: "我拍板", meta: "业务影响", status: "verified" },
      { id: "pr", role: "output", label: "PR 评论" }
    ],
    edges: [
      { from: "diff", to: "agent", kind: "data", label: "unified" },
      { from: "rg", to: "agent", kind: "dep" },
      { from: "agent", to: "me", label: "风险清单" },
      { from: "me", to: "pr" },
      { from: "me", to: "agent", kind: "dep", label: "打回" }
    ],
    annotations: [{ at: "me", side: "right", text: "Agent 判断不了业务影响，这一步不能省。" }],
    caption: "回边就是返工。画出来才知道自己在哪一步反复。",
    source: "来源：自己的 commit 记录 2026.05–08"
  }
},
{
  id: "compare", kind: "diagram", label: "对比图 · 两种写法", variant: "studio",
  spec: {
    kicker: "BEFORE / AFTER", title: "一条提示词，和拆成模块", layout: "grid", legend: false,
    nodes: [
      { id: "b1", role: "input", label: "一条长提示词", showRole: false, col: 0, row: 0 },
      { id: "b2", role: "process", label: "整条重写", showRole: false, col: 0, row: 1, status: "failed" },
      { id: "b3", role: "output", label: "能跑，但改不动", showRole: false, col: 0, row: 2 },
      { id: "a1", role: "input", label: "触发 / 步骤 / 兜底", showRole: false, col: 2, row: 0 },
      { id: "a2", role: "process", label: "只改一层", showRole: false, col: 2, row: 1, status: "verified" },
      { id: "a3", role: "output", label: "能跑，也能改", showRole: false, col: 2, row: 2 }
    ],
    edges: [
      { from: "b1", to: "b2" }, { from: "b2", to: "b3" },
      { from: "a1", to: "a2" }, { from: "a2", to: "a3" }
    ],
    groups: [{ label: "改之前", nodes: ["b1", "b2", "b3"] }, { label: "改之后", nodes: ["a1", "a2", "a3"] }],
    caption: "对比图用同一套形状，只让状态点不同——差异才看得出来。"
  }
},
{
  id: "workflow", kind: "diagram", label: "工作流 · 从想法到发布", variant: "special",
  spec: {
    kicker: "WORKFLOW", title: "一条内容从想法到两个渠道", layout: "layered", legend: true,
    nodes: [
      { id: "idea", role: "input", label: "想法", meta: "随手记", index: 1 },
      { id: "test", role: "human", label: "自己先跑一遍", meta: "不跑不写", index: 2, status: "verified" },
      { id: "draft", role: "agent", label: "生成结构化草稿", meta: "blocks[]", index: 3 },
      { id: "edit", role: "human", label: "改语气", meta: "只有这一步不能外包", index: 4 },
      { id: "xhs", role: "output", label: "小红书", index: 5 },
      { id: "wx", role: "output", label: "公众号", index: 6 }
    ],
    edges: [
      { from: "idea", to: "test" }, { from: "test", to: "draft", kind: "data" },
      { from: "draft", to: "edit" }, { from: "edit", to: "xhs" }, { from: "edit", to: "wx" },
      { from: "edit", to: "test", kind: "dep", label: "证据不够" }
    ],
    caption: "只有第 4 步不能外包。其余都可以让 Agent 先做一版。"
  }
},
{
  id: "log", kind: "timeline", label: "时间线 · 项目日志", variant: "studio",
  spec: {
    kicker: "PROJECT LOG", title: "这套系统怎么长出来的", orientation: "vertical",
    items: [
      { date: "2026.05", label: "一条提示词打天下", status: "failed", meta: "v0", body: "前十次都行，第十一次改需求就崩。" },
      { date: "2026.06", label: "拆成三层", status: "verified", meta: "触发 / 步骤 / 兜底", body: "改需求只动一层，复用直接引用。" },
      { date: "2026.07", label: "补上失败兜底", status: "verified", meta: "v1.2", body: "Agent 不再自由发挥。" },
      { date: "2026.08", label: "接进内容系统", status: "unknown", meta: "进行中", body: "分页与公众号导出还在验。" }
    ],
    caption: "失败的版本也留在轴上——那是这条线的一部分。",
    source: "来源：自己的 commit 记录"
  }
}
];
