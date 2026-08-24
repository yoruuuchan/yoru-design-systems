Only list what appears. `<Diagram legend>` builds it automatically from the nodes and edges you passed.

```jsx
<DiagramLegend roles={["human","agent","tool"]} edges={["flow","data"]} statuses={["verified"]} />
```

只列这张图真正用到的角色、线型和状态——传全集会变成一张说明书。
`<Diagram legend>` 会自动从 nodes/edges 里推导出该列什么，手动传值只为覆盖顺序。
图例永远在图的下方左对齐，不做浮层、不做右上角卡片。
