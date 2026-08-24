Explains one node without putting prose in the node. Wire through <Diagram annotations={…}>.

```jsx
annotations={[{ at: "review", side: "right", text: "这一步一定要人看，Agent 判断不了业务影响。" }]}
```

一般不手写，`<Diagram annotations={[{at:"nodeId", text:"…"}]}/>` 会算好坐标塞进外边距。
只有它允许写完整句子，其余图内文字都是标签。两行以内，超了就说明这句话该进正文。
`side` 由 `Diagram` 按锚点所在半边自动选，手动指定会和引线打架。
