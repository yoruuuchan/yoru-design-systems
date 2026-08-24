Connectors are rounded orthogonal elbows. Four kinds, no decorative arrows, no curves.

Pass edges to <Diagram> instead of using this directly:

```jsx
edges={[{ from: "prompt", to: "agent", kind: "data", label: "JSON" }]}
```

同样通常由 `Diagram` 从 `edges` 生成，直接用只在你要手绘一张特例图时。
四种线型是语义的，不是装饰：`flow` 实心墨线走主流程，`data` 实心强调色走数据搬运，`dep` 虚发丝线表依赖或打回，`weak` 点线且无箭头表「可能有关系」。
`label` 一到三个词，压在线中点上并挖白底。走线是圆角正交，没有曲线，也没有双线、粗尾之类的装饰箭头。
