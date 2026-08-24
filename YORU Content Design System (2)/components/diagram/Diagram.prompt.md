The whole diagram system's entry point. Pass structured data, never hand-place boxes.

```jsx
<Diagram kicker="WORKFLOW" title="一次代码审查的完整链路" legend grid
  nodes={[
    { id: "diff", role: "input", label: "git diff", meta: "本地" },
    { id: "agent", role: "agent", label: "Claude Code", meta: "sonnet-4.5" },
    { id: "me", role: "human", label: "我看一遍", status: "verified" },
    { id: "pr", role: "output", label: "PR 评论" }
  ]}
  edges={[
    { from: "diff", to: "agent", kind: "data", label: "unified" },
    { from: "agent", to: "me" },
    { from: "me", to: "pr" },
    { from: "me", to: "agent", kind: "dep", label: "打回" }
  ]}
  groups={[{ label: "本地", nodes: ["diff", "agent", "me"] }]}
  annotations={[{ at: "me", text: "Agent 判断不了业务影响，这一步不能省。" }]}
  caption="四十次之后固定下来的流程。" source="来源：自己的 commit 记录，2026.05–08" />
```

`layout="tree"` for mind maps, `layout="grid"` with explicit `col`/`row` for comparisons.
`theme="dark"` for the reversed context. Back edges (打回 / retry) route into a lane below — that is automatic.