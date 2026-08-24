# Input

Single-line text input. HUD label above, chamfered well, cyan focus glow.

```jsx
<Input label="NODE ID" placeholder="07-A-7F" />
<Input label="POWER" suffix="MW" defaultValue="142.3" />
<Input label="ACCESS KEY" error="UNAUTHORIZED · CODE 0xE1" />
```

Pass `prefix`/`suffix` for adornments. `error` colors the border red and overrides `hint`.
