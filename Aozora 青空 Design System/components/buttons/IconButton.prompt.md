### IconButton

Square (or circular) wrapper for a single icon. Same variant + tone language as `Button`. Defaults to `variant="ghost"` `tone="neutral"` so a row of them quietly disappears into a toolbar.

```jsx
<IconButton aria-label="Search"><SearchIcon /></IconButton>
<IconButton variant="glass" shape="circle" aria-label="Like"><HeartIcon /></IconButton>
<IconButton variant="filled" tone="brand" aria-label="Compose"><PlusIcon /></IconButton>
```

Always set `aria-label`.
