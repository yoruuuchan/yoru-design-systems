手写旁批 — the aside in the author's own voice: what broke, what took three days, what you would skip.

```jsx
<MarginNote float="right">上一版我写了 800 字，还是崩。问题不在长度。</MarginNote>
```

One per page at most. Two tilted slips stop reading as handwriting and start reading as a template.

Keep it to one or two lines, and keep it non-load-bearing — anything the reader actually needs belongs in `<Callout>`. `tone="quiet"` drops the tint for a note under a hairline; `float` pins it to a page edge and needs a positioned ancestor (`<Page>` is one).
