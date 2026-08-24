# IconButton

Square icon-only button. Same chamfer + glow as `Button`. Always pass `label`.

```jsx
<IconButton label="Close" onClick={close}>✕</IconButton>
<IconButton label="Refresh" variant="ghost">↻</IconButton>
<IconButton label="Purge" variant="danger" size="lg">⨯</IconButton>
```

**Variants:** `default` (cyan outline), `ghost` (gray), `danger` (red, glow on hover).
**Sizes:** `sm/md/lg` → 24/32/40px square.
