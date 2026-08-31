Hairline keyline with optional end ticks on the shared 5px tick grid; flex:1 so it fills the row between a label and an index.

\`\`\`jsx
<div style={{display:'flex',alignItems:'center',gap:12}}>
  <Label rule={false}>Data</Label><Rule ticks /><span className="k-data-tick">02/05</span>
</div>
\`\`\`