Every screenshot goes through Figure — it is what keeps image treatment consistent across variants.

```jsx
<Figure src="shot.png" ratio="16 / 10" index={1} caption="设置面板在这里。" />
<Figure src="chat.png" ratio="auto" fit="contain" index={2} caption="整段对话，未裁切。" />
<Figure treatment="bleed" placeholder="全幅作品图" />   {/* inside <Page bleed> */}
```

`treatment` 按图的性质选，不按好看程度：`frame` 给截图（发丝边 + 极轻投影），`inset` 给示意图（灰底无影），`bleed` 给作品图（出血无边，填满父容器）。
没有 `src` 时它会渲染一块明确写着缺什么图的占位，而不是假图——交付时留着占位比放张不相干的图诚实。
`index` 会在说明前打「图 01」，一篇文章里要么全打要么全不打。`ratio` 对 `bleed` 无效。

**文字类截图必须 `fit="contain"` 或 `ratio="auto"`。** 默认的 `fit="cover"` 会把推特、聊天记录、代码截图裁头去尾，
读者看到的是一段没头没尾的话。`ratio="auto"` 完全不设固定比例，按图片自身比例排——竖长截图选它。
`cover` 只留给照片：裁掉边缘不影响它要说的事。截图在卡片上的渲染宽度不要低于内容列宽的 90%，
装不下就拆成多页或裁出局部放大，不要继续缩小——手机上看不清的证据等于没有证据。
