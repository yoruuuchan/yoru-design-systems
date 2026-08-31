Lightness-ramp data bar; cap rides the growing edge. Landscape charts are vertical, portrait charts are horizontal rows — a native re-layout, not a squeeze.

\`\`\`jsx
<div style={{height:280,display:'flex',gap:28,alignItems:'flex-end'}}>
  <Bar value={0.4} step={1} cap="12" /><Bar value={0.7} step={2} cap="21" /><Bar value={1} step={4} cap="30" />
</div>
\`\`\`