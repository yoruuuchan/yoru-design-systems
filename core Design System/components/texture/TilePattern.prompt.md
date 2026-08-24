# TilePattern

Repeating tile or grain background. Use as a full-bleed page background, behind a card grid, or as an overlay.

```jsx
<TilePattern pattern="cool" fixed style={{ position: 'fixed', inset: 0, zIndex: -1 }} />

<TilePattern pattern="grain" size={200} opacity={0.18} blendMode="multiply"
             style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
```

Patterns: `cool` (pool blue tile), `warm` (sodium-yellow tile), `caustic` (water surface), `grain` (noise overlay).
