Every screenshot goes through Figure — it is what keeps image treatment consistent across variants.

```jsx
<Figure src="shot.png" ratio="16 / 10" index={1} caption="设置面板在这里。" />
<Figure treatment="bleed" placeholder="全幅作品图" />   {/* inside <Page bleed> */}
```

`treatment` 按图的性质选，不按好看程度：`frame` 给截图（发丝边 + 极轻投影），`inset` 给示意图（灰底无影），`bleed` 给作品图（出血无边，填满父容器）。
没有 `src` 时它会渲染一块明确写着缺什么图的占位，而不是假图——交付时留着占位比放张不相干的图诚实。
`index` 会在说明前打「图 01」，一篇文章里要么全打要么全不打。`ratio` 对 `bleed` 无效。
