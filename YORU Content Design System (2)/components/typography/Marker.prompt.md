荧光笔 — a soft band behind the one phrase per page a reader should carry away.

```jsx
<Body>把它写成一句可以判真假的话：<Marker>“当用户给出完整需求文档时”</Marker>，而不是“当用户需要帮助时”。</Body>
```

One band per page. A second cancels the first — if two phrases both need marking, neither is the point of the page.

Prefer `<Marker>` over `<Emphasis>` for Latin text, quoted strings and code identifiers. Drop `height` toward 30 for a quiet mark; `color="var(--paper-3)"` for a neutral one.

`height` is a percentage of the em box, not the line box — the band therefore lands in the same place on a 1242px card (line-height 1.95) and in the WeChat column (1.85).
