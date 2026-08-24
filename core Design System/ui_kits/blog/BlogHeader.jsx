const BlogHeader = ({ activePostId, onPick }) => {
  const { Marquee, Tag, OverexposedText } = window.CoreDesignSystem_61d596;
  return (
    <header style={{
      borderBottom: '1px solid var(--ink)',
      background: 'var(--paper)',
      position: 'relative',
    }}>
      <Marquee speed={26}>
        ░ welcome to mostly_empty.com — an archive of liminal places ░
      </Marquee>
      <div style={{
        display:'flex', alignItems:'center', gap:18,
        padding: '20px 32px 16px',
      }}>
        <img src="../../assets/logo-mark.svg" alt="" style={{ width:56, height:56 }} />
        <div>
          <OverexposedText as="h1" size={56} color="paper" glow="bondi"
                           style={{ margin: 0, display: 'inline-block' }}>
            mostly empty
          </OverexposedText>
          <div style={{
              marginTop: 4,
              fontFamily:'var(--font-pixel-mono)',
              fontSize: 13,
              color:'var(--text-muted)',
              letterSpacing: '0.06em',
            }}>
            est. 1999 · curated by hand · last touched 06.23.2026
          </div>
        </div>
        <div style={{ marginLeft:'auto', display:'flex', gap:6 }}>
          <Tag variant="pool">poolcore</Tag>
          <Tag variant="dream">dreamcore</Tag>
          <Tag variant="sodium">backrooms</Tag>
          <Tag variant="ink">about</Tag>
        </div>
      </div>
    </header>
  );
};
window.BlogHeader = BlogHeader;
