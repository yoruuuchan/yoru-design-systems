Tool round-ups and A/B tests. Four columns is the card-page ceiling; go to the WeChat article beyond that.

```jsx
<CompareTable highlight={2} columns={["","Cursor","Claude Code"]}
  rows={[["上手","快","中"],["长任务",<StatusLabel status="warn"/>,<StatusLabel status="ok"/>]]} />
```

`columns[0]` 是判据列，通常留空字符串或写「维度」。`rows` 行优先，单元格可以直接塞 `<StatusLabel/>`。
`highlight` 指向推荐列的下标，那一列会被强调色淡淡染上——一张表只准有一个。
超过四列就别用表了，改成两张对照卡或 `Diagram` 的 `layout="grid"`。
