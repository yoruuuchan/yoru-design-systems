# IconButton

Square version of Button — for a single pixel icon. Title bars, toolbars, sidebar toggles.

```jsx
<IconButton label="close" size="sm">×</IconButton>
<IconButton label="minimize">_</IconButton>
<IconButton label="new file">
  <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 1h6l2 2v10H3z" fill="none" stroke="currentColor"/></svg>
</IconButton>
```

Always pass `label` for accessibility (also surfaces as the native tooltip). Icon content should be 16×16 px or smaller; the button itself is `size × size`.
