Marks a verdict inside comparisons, tool round-ups and step lists.

```jsx
<StatusLabel status="ok" />           {/* 推荐 */}
<StatusLabel status="stop">别用</StatusLabel>
```

整套系统里唯一允许用语义色（非强调色）的组件，所以它出现得越少越有力。
六个状态各有默认中文标签，`children` 可以覆盖；覆盖时保持二到四字。
常见位置：`CompareTable` 单元格里、`Diagram` 节点上、新工具名后面。正文段落里不要插。
