The bottom authorship rule of a card page. Pass it to <Page footer={…}> rather than placing it in the flow.

```jsx
<PageFooter note="2026.08" />
```

固定在 `Page` 底部，`Page` 已经带了它，单独用只在自定义画布里。
一条发丝线 + 小字：左边 `handle`（默认省略），右边 `note` —— 日期、系列名或「转载请注明出处」，一句话以内。
没有字标：`mark` 是旧调用方遗留的空操作，整套系统里不再出现文字签名。
