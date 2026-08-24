The layout primitive for every page in PAPER. Text sits in one column of it; images sit in another.

```jsx
<Columns split="3/2" gap="var(--space-8)">
  <TextBlock dropCap><p>…</p></TextBlock>
  <div><PullQuote>…</PullQuote><FilmStrip /></div>
</Columns>
```

Everything stacks below 900px by default. Do not nest more than two levels — the 24-column page is a discipline, not a playground.
