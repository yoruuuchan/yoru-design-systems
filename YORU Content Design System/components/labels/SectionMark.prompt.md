The house numbering motif. Page corners get it automatically from <Page index total>; use this component for in-flow section openers.

```jsx
<SectionMark index={2} total={6} label="配置" size="lg" />
```

`index` / `total` 打成 01 / 06——等宽、补零，这是整套系统最容易被认出来的细节。
`size="md"` 给页角，`lg` 给版块开头。`label` 是可选的栏目名或章节名，全大写跟在数字后面。
`total` 不传就只显示当前编号，用于章节序号这类没有总数的场合。
