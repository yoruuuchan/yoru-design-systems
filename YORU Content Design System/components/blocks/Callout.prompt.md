Pulls one caveat out of the running text. One per card page, two per article section.

```jsx
<Callout kind="warn" title="先说清楚">这套流程依赖 Claude Code 的本地权限，云端 IDE 里跑不通。</Callout>
```

`kind` 决定色块与标签色：`note` 蓝 · `warn` 琥珀 · `stop` 红 · `ok` 青 · `plain` 灰。`title` 保持 2–4 字，长了会挤掉正文的呼吸。
没有边框、没有左侧色条、没有投影——只有一块平色。想强调整段时用 `Quote`，不要把 Callout 当引言用。
