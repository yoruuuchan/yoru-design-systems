# IconButton

Square version of Button — for a single pixel icon. Title bars, toolbars, sidebar toggles.

```jsx
<IconButton label="close" size="sm">×</IconButton>
<IconButton label="minimize">_</IconButton>
<IconButton label="new file"><img src="/assets/icons/new.svg" /></IconButton>
```

Always pass `label` for accessibility (also surfaces as the native tooltip). Icon content should be 16×16 px or smaller; the button itself is `size × size`.
