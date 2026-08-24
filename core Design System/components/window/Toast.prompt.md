# Toast

Y2K popup alert. Title bar color encodes the tone; body is short prose.

```jsx
<Toast title="saved" tone="info" onClose={dismiss}>
  pool_05.jpg added to mostly_empty/
</Toast>

<Toast title="warning" tone="warn">
  this file is older than the system. metadata may be wrong.
</Toast>
```

Tones: `info` (pool blue), `warn` (peach), `dream` (rose), `sodium` (mustard).
