# Button

Primary action control. Use whenever the user has to commit to a step — submit, confirm, open, "enter console". For inline links or low-priority actions use the `ghost` variant.

```jsx
<Button variant="primary">Enter console</Button>
<Button variant="primary" glow>Connect</Button>
<Button>Cancel</Button>
<Button variant="ghost">Read docs →</Button>
<Button variant="danger">Disconnect</Button>
<Button variant="primary" size="lg">Get started</Button>
<Button variant="primary" size="lg" block>ENTER CONSOLE</Button>   {/* form CTA */}
```

Variants: `default` (neutral glass), `primary` (royal→cobalt gradient), `ghost` (transparent, lightest line), `danger` (red gradient). Sizes: `sm` (32h) · `md` (42h, default) · `lg` (50h). Pass `block` to stretch full-width (form CTAs). Pass `glow` for a slow breathing halo.
