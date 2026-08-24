# Button

Y2K-bevel button — the brand's primary interactive primitive. Use it whenever the user needs to confirm, dismiss, or trigger a transition.

```jsx
<Button variant="primary" size="lg" glow onClick={save}>save room</Button>
<Button>cancel</Button>
<Button variant="pool" size="sm">view</Button>
<Button variant="ghost">advanced…</Button>
```

**Variants:** `primary` (mustard, reserved for the main action), `secondary` (default, paper-stained), `ghost` (dashed, low emphasis), `pool` (chlorine blue, for "open/dive" semantics), `danger` (peach — also doubles as "warm warning" since this system has no red).

**Sizes:** `sm` 22px, `md` 28px, `lg` 36px.

**Glow:** add `glow` for a peach halo on hover. Use only for the most important CTA on a screen — never on more than one button at a time.
