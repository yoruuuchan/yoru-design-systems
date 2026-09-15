The backbone of tutorials. Continue a split list across pages with `start`.

```jsx
<StepList start={3} steps={[
  {title:"装 CLI", body:"一行 npm。", extra:<CodeBlock lang="bash" code="npm i -g @anthropic-ai/claude-code" />},
  {title:"建 skills 目录", body:"放在仓库根目录，团队共享。"}
]} />
```

每步的 `title` 是一句动作，`body` 解释为什么，`extra` 挂 `CodeBlock` / `Figure` / `Callout`。
`start` 用于跨页续排：第一页 `steps` 放 1–4，第二页 `start={5}`，等宽数字脊柱会接着数下去。
一页超过五步就分页，Lab 变体的教程默认就是这个结构。
