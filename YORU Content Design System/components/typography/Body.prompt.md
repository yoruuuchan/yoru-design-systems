The workhorse paragraph.

```jsx
<Body>实测下来，长上下文的收益在 3 万字以后就基本平掉了。</Body>
<Body size="small" muted>测试环境：M4 Pro / 48G。</Body>
```

默认段落，永不两端对齐——中文两端对齐会在标点处撕出参差的空隙。
`size="small"` 给附注、图下延伸说明；`muted` 给次要信息。两个一起用就接近 `Caption`，那时候直接用 `Caption`。
段与段之间靠 `--sp-*` 的间距分开，不用首行缩进。
