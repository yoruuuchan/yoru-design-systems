const BlogSidebar = ({ activePostId, onPick }) => {
  const { Window, Button, Tag, Divider, Checkbox } = window.CoreDesignSystem_61d596;
  return (
    <aside style={{ display:'flex', flexDirection:'column', gap:14 }}>
      <Window title="recent" dense status={`[ ${window.blogPosts.length} entries ]`}>
        <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:4 }}>
          {window.blogPosts.map(p => {
            const active = p.id === activePostId;
            return (
              <li key={p.id}>
                <button
                  onClick={() => onPick(p.id)}
                  style={{
                    width:'100%', textAlign:'left', cursor:'pointer',
                    fontFamily:'var(--font-body-serif)', fontSize:14, lineHeight:1.35,
                    background: active ? 'var(--peach-100)' : 'transparent',
                    color: 'var(--ink)',
                    border:'1px solid', borderColor: active ? 'var(--ink)' : 'transparent',
                    padding:'5px 6px',
                  }}
                >
                  <div style={{ fontStyle: active ? 'normal' : 'italic' }}>
                    {active ? '▸ ' : ''}{p.title}
                  </div>
                  <div style={{ fontFamily:'var(--font-pixel-mono)', fontSize:11,
                                color:'var(--text-muted)', marginTop: 2 }}>
                    {p.date} · {p.tags[0]}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </Window>

      <Window title="guestbook.cgi" bodyTone="dream" decorativeStripes={false}>
        <p style={{ fontFamily:'var(--font-body-serif)', fontSize:13, lineHeight:1.5, margin:'0 0 8px' }}>
          tell me you were here. the entries are kept by hand.
        </p>
        <Button variant="dream" size="md" glow>sign guestbook</Button>
      </Window>

      <Window title="prefs" dense>
        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
          <Checkbox defaultChecked>show grain</Checkbox>
          <Checkbox defaultChecked>autoplay marquee</Checkbox>
          <Checkbox>cursor trails</Checkbox>
        </div>
      </Window>

      <Window title="now playing" dense decorativeStripes={false}>
        <div style={{ fontFamily:'var(--font-pixel-mono)', fontSize:12, color:'var(--ink)', display:'flex', flexDirection:'column', gap:3 }}>
          <div>♁ rain on tile · loop</div>
          <div style={{ color:'var(--text-muted)' }}>03:14 / ∞</div>
          <div style={{
            marginTop: 4, height: 6, background:'var(--paper-stained)',
            border:'1px solid var(--ink)', boxShadow:'var(--bevel-in)', position:'relative',
          }}>
            <div style={{ position:'absolute', inset:0, width:'34%', background:'var(--tile-500)' }}/>
          </div>
        </div>
      </Window>
    </aside>
  );
};
window.BlogSidebar = BlogSidebar;
