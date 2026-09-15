Groups come from <Diagram groups={…}> — give it node ids and it computes the frame.

```jsx
groups={[{ label: "本地", nodes: ["cli", "repo"] }, { label: "云端", nodes: ["api"], kind: "dashed" }]}
```

`kind="dashed"` 有明确含义：这块边界不受我控制——别人的系统、沙箱、第三方 API。实线组是自己的范围。
`label` 挖在顶线上，不另加标题栏。分组不填色、不加投影，靠一条发丝线和它包住的留白成立。
嵌套最多两层，再深就该拆成两张图。
