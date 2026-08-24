// Sidebar.jsx — left category list, rendered inside a Window.
const ArchiveSidebar = ({ activeCat, onPick }) => {
  const { Window, Tag } = window.CoreDesignSystem_61d596;
  const cats = window.archiveCategories;
  return (
    <Window title="categories.idx" dense status="[ select to filter ]" style={{ width: 200 }}>
      <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:2 }}>
        {cats.map(c => {
          const active = c.id === activeCat;
          return (
            <li key={c.id}>
              <button
                onClick={() => onPick(c.id)}
                style={{
                  width:'100%', textAlign:'left',
                  fontFamily:'var(--font-ui-sans)', fontSize:12,
                  background: active ? 'var(--tile-200)' : 'transparent',
                  border:'1px solid', borderColor: active ? 'var(--ink)' : 'transparent',
                  padding:'3px 6px', cursor:'pointer',
                  display:'flex', justifyContent:'space-between', gap:8,
                  color:'var(--ink)',
                }}
              >
                <span>{active ? '▸ ' : ''}{c.label}</span>
                <span style={{ fontFamily:'var(--font-pixel-mono)', color:'var(--text-muted)' }}>[{c.count()}]</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div style={{ marginTop: 10, paddingTop: 8, borderTop:'1px dashed var(--ink-muted)',
                    fontFamily:'var(--font-body-serif)', fontSize:13, lineHeight:1.5, color:'var(--text-muted)' }}>
        <em>an archive of mostly-empty places, kept by hand since 1999.</em>
      </div>
    </Window>
  );
};
window.ArchiveSidebar = ArchiveSidebar;
