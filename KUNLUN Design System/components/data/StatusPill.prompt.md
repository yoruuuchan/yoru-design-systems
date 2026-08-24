# StatusPill

Live system-state indicator. Dot pulses/blinks depending on `status`.

```jsx
<StatusPill status="online">CORE-9 NOMINAL</StatusPill>
<StatusPill status="busy">SYNCING</StatusPill>
<StatusPill status="error">LINK LOST · 0xE7</StatusPill>
```

**Statuses:** `online` (green, breathing), `idle` (gray, static), `busy` (cyan, strobe), `warn` (amber), `error` (red, blink).
