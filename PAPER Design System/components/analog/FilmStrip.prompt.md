A horizontal run of frames on film base — the analog counterpart to Gallery.

```jsx
<FilmStrip stock="KODAK 400TX" startAt={12} height={110}>
  <img src="/1.jpg" alt="" /><img src="/2.jpg" alt="" /><img src="/3.jpg" alt="" /><img src="/4.jpg" alt="" />
</FilmStrip>
```

Sequence matters: a strip says these frames were shot in this order. Don't use it for unrelated images — use Gallery.
