A pixel-shadow button in the Mayonaka system. Use for any primary or secondary action. Hover lifts the button up-left and casts a longer shadow; active presses it back into the shadow.

```jsx
<Button variant="primary" size="md" glow onClick={...}>START</Button>
<Button variant="cyan">TUNE IN</Button>
<Button variant="ghost" size="sm">SKIP</Button>
<Button variant="outline">DETAILS</Button>
<Button variant="danger">DISCONNECT</Button>
```

Variants: `primary` (magenta fill), `cyan` (cyan fill), `ghost` (magenta outline only), `outline` (cyan outline only), `danger`. Sizes `sm | md | lg`. Always renders uppercase — pass uppercase strings or short labels. Reserve `glow` for hero/CTAs; everyday buttons stay un-glowed.
