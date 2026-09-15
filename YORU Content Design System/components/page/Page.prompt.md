The Xiaohongshu export canvas — one `<Page>` per exported image card.

```jsx
<Page variant="lab" index={3} total={6} spine="二〇二六年八月 · 卷十二"
      footer={<PageFooter note="第一层 / 共三层" />}>
  <Heading level={2}>第一层：触发条件</Heading>
  <Body>先写清楚什么时候该跑这条流程，什么时候不该。</Body>
</Page>
```

Pass `index` and you get the masthead（月相 + 汉字页码 + 文武线）— wanted on essentially every interior page. Leave it off only where the rail would sit on artwork.

- `spine` 是右边距的直排书脊栏：日期 · 卷号 · 系列名住在这里，不在报头。一条仿宋字符串，六到十四个字。
- `tone="ink"` 反白页，`"tint"` accent 浅底；`align="center"` 给封面和单句页；`bleed` 去掉全部边距；`size` 切画布，字号刻度自动跟随。
