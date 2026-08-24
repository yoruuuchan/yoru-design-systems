# Glitch

Signature RIFT effect — text rendered with a cyan/magenta chromatic edge that periodically tears. Use sparingly: hero wordmarks, the brand mark, occasionally section headings. Never on body copy.

```jsx
<Glitch text="RIFT" as="h1" style={{ fontFamily: "var(--font-wordmark)", fontSize: "var(--text-5xl)" }} />
<main data-glitch="heavy" data-accent="royal">
  <Glitch text="ENTER CONSOLE" />
</main>
```

Intensity (`data-glitch`) is set on an ancestor — `off | subtle | signature | heavy`. Channel (`data-accent`) is also inherited — `royal | aqua` (royal is the default). The component itself takes only `text` and an optional `as` tag.
