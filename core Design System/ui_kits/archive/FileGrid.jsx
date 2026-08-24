// FileGrid.jsx — grid of thumbnail Windows, filterable + selectable.
const ArchiveFileGrid = ({ activeCat, selectedId, onSelect }) => {
  const { Tag, GrainOverlay } = window.CoreDesignSystem_61d596;
  const items = window.archiveCatalog.filter(i => activeCat === 'all' || i.tag === activeCat);
  return (
    <div
      style={{
        display:'grid',
        gridTemplateColumns:'repeat(4, 1fr)',
        gap: 8,
      }}
    >
      {items.map(item => {
        const isSel = item.id === selectedId;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              padding: 0, cursor:'pointer', display:'block', textAlign:'left',
              background:'var(--paper-stained)',
              border:'1px solid var(--ink)',
              boxShadow: isSel
                ? 'var(--bevel-in), var(--glow-peach)'
                : 'var(--bevel-out)',
              fontFamily:'inherit',
              color:'var(--ink)',
            }}
          >
            <div style={{
                position:'relative', width:'100%', aspectRatio:'4/3', overflow:'hidden',
                background:'var(--tile-300)',
              }}>
              <img
                src={window.previewUrlFor(item, 200, 150)}
                alt=""
                style={{ width:'100%', height:'100%', objectFit:'cover',
                         filter:'var(--filter-overexposed)' }}
              />
              <GrainOverlay opacity={0.22} />
            </div>
            <div style={{ padding:'4px 6px', display:'flex', flexDirection:'column', gap:2 }}>
              <div style={{ fontFamily:'var(--font-pixel-mono)', fontSize:13, color:'var(--ink)' }}>
                {item.title}.jpg
              </div>
              <div>
                <Tag variant={item.tone}>{item.tag}</Tag>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};
window.ArchiveFileGrid = ArchiveFileGrid;
