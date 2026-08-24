const BlogFooter = () => {
  const { Marquee, Divider } = window.CoreDesignSystem_61d596;
  return (
    <footer style={{
      marginTop: 48,
      borderTop: '1px solid var(--ink)',
      background: 'var(--bondi-900)',
      color: 'var(--paper)',
      fontFamily:'var(--font-ui-sans)',
    }}>
      <Marquee speed={22} tone="paper">
        ░ thanks for visiting ░ best viewed in 1024×768 ░ sign the guestbook ░ web ring &gt;&gt; ░ 
      </Marquee>
      <div style={{
        padding: '20px 32px 28px',
        display:'flex', gap: 32, alignItems:'flex-start', flexWrap:'wrap',
      }}>
        <div>
          <div style={{ fontFamily:'var(--font-pixel-display)', fontSize: 28, color:'var(--bondi-200)' }}>
            mostly empty
          </div>
          <div style={{ fontFamily:'var(--font-pixel-mono)', fontSize: 12, color:'var(--bondi-200)', marginTop: 4 }}>
            you are visitor 00,141,082
          </div>
        </div>
        <div style={{
          fontFamily:'var(--font-pixel-mono)', fontSize: 12, color:'var(--bondi-200)',
          display: 'flex', flexDirection:'column', gap: 3,
        }}>
          <div style={{ color:'var(--paper)' }}>web ring</div>
          <a href="#" style={{ color:'var(--neon-cyan)' }}>« prev (drain_records)</a>
          <a href="#" style={{ color:'var(--neon-lime)' }}>random</a>
          <a href="#" style={{ color:'var(--neon-magenta)' }}>next (hum_archive) »</a>
        </div>
        <div style={{
          marginLeft:'auto',
          fontFamily:'var(--font-body-serif)', fontSize: 13, color:'var(--bondi-100)',
          fontStyle:'italic', maxWidth: 280,
        }}>
          this site has been hand-coded since 1999. nothing is generated. nothing is tracked.
        </div>
      </div>
    </footer>
  );
};
window.BlogFooter = BlogFooter;
