# Button

Primary call-to-action surface. Chamfered corners, monospace + uppercase label, cyan glow on the primary variant.

```jsx
<Button variant="primary" size="md" onClick={launch}>
  EXECUTE
</Button>

<Button variant="secondary" icon={<span>▸</span>}>
  RUN DIAGNOSTIC
</Button>

<Button variant="danger" loading={purging}>
  PURGE NODE
</Button>
```

**Variants:** `primary` (filled cyan, glow), `secondary` (outline cyan), `ghost` (outline gray), `danger` (outline red, glow on hover), `warn` (outline amber).

**Sizes:** `sm` 24px · `md` 32px · `lg` 40px. Labels always uppercase — pass shouty copy.

**Tips:** keep labels under 3 words. For icon-only triggers use `IconButton`, not a `Button` with no children.
