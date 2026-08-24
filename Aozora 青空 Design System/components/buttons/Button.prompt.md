### Button

The brand's primary CTA. Use `filled` for the single most important action on a screen; `glass` when it sits on a photo, gradient or colored surface; `ghost` for secondary inline actions.

```jsx
<Button>Continue</Button>
<Button tone="accent" size="lg">Get Aozora Pro</Button>
<Button variant="glass" leadingIcon={<DropletIcon />}>Refill</Button>
<Button variant="ghost" tone="danger">Cancel subscription</Button>
```

Variants: `filled` (default) · `glass` · `ghost`.
Tones: `brand` · `accent` · `neutral` · `danger`.
Sizes: `sm` · `md` (default) · `lg`. Set `pill` for full-radius CTAs (often paired with `accent`).
