# Glass

Structural translucent panel — used for sidebars, modals, toolbars, hero wrappers. Reach for `Card` when you also want the hover lift; use `Glass` when the surface is decorative or hosts interactive children of its own.

```jsx
<Glass elevation={1}>Subtle</Glass>
<Glass elevation={2}>Mid — hero panels</Glass>
<Glass elevation={3}>Strong — modals</Glass>
```

Heavier elevations apply more blur and saturate the underlying canvas more — choose the lightest level that maintains contrast.
