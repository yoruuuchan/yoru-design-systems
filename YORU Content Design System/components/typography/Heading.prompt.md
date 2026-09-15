Every heading on a YORU page is the serif face. Sans is body only.

```jsx
<Heading level={1} kicker="03 · 工作流" mark>把提示词写成可复用的模块</Heading>
```

`level` 1 是页面标题，2 是版块，3 是行内小标题。一页只有一个 level 1。
`mark` 在标题上方加一条粗墨线——用在一页的第一个标题上，每个标题都加就退化成分隔线装饰了。
`kicker` 是标题上方的等宽大写行（WORKFLOW / 实测），它承担分类，所以标题本身可以写得更像一句话。
