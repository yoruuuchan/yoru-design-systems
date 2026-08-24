// DetailView.jsx — large window for the selected file.
const ArchiveDetail = ({ item, onClose }) => {
  const { Window, Tag, GrainOverlay, Button } = window.CoreDesignSystem_61d596;
  if (!item) return null;
  return (
    <Window
      title={`${item.title}.jpg — mostly_empty/`}
      bodyTone={item.tone === 'pool' ? 'pool' : item.tone === 'dream' ? 'dream' : 'paper'}
      size="lg"
      onClose={onClose}
      status={`${item.meta.size} · ${item.meta.dims} · ${item.meta.date}`}
      style={{ width: 380 }}
    >
      <div style={{ position:'relative', border:'1px solid var(--ink)', background:'var(--ink)' }}>
        <img
          src={window.previewUrlFor(item, 380, 250)}
          alt={item.title}
          style={{ width:'100%', display:'block', filter:'var(--filter-overexposed)' }}
        />
        <GrainOverlay opacity={0.2} />
      </div>
      <div style={{ marginTop: 8, display:'flex', gap:6, flexWrap:'wrap' }}>
        <Tag variant={item.tone} bracketed>{item.tag}</Tag>
        <Tag variant="default" bracketed>{item.meta.dims}</Tag>
        <Tag variant="ink" bracketed>archived</Tag>
      </div>
      <p style={{
          margin:'10px 0 0',
          fontFamily:'var(--font-body-serif)', fontSize:14, lineHeight:1.55,
          color:'var(--ink)',
        }}>
        <em>"{item.note}"</em>
      </p>
      <div style={{ marginTop: 12, display:'flex', gap:6 }}>
        <Button size="sm" variant="pool">open in viewer</Button>
        <Button size="sm">copy path</Button>
        <Button size="sm" variant="ghost">delete</Button>
      </div>
    </Window>
  );
};
window.ArchiveDetail = ArchiveDetail;
