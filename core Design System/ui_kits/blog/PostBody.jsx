const BlogPostBody = ({ post }) => {
  const { Tag, Divider, GrainOverlay } = window.CoreDesignSystem_61d596;
  if (!post) return null;
  return (
    <article style={{
      fontFamily:'var(--font-body-serif)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--ink)',
    }}>
      <div style={{ position:'relative', border:'1px solid var(--ink)', background:'var(--ink)' }}>
        <img
          src={`https://picsum.photos/seed/${post.bannerSeed}/780/280`}
          alt=""
          style={{ width:'100%', display:'block',
                   filter:'var(--filter-overexposed)' }}
        />
        <GrainOverlay opacity={0.22} />
      </div>

      <header style={{ margin:'24px 0 10px' }}>
        <h2 style={{
          fontFamily:'var(--font-pixel-display)',
          fontSize: 56, lineHeight:1.05, margin:0,
          letterSpacing: '-0.01em', color:'var(--ink)',
        }}>
          {post.title}
        </h2>
        <div style={{
          marginTop: 8,
          fontFamily:'var(--font-pixel-mono)',
          fontSize: 12,
          color:'var(--text-muted)',
          letterSpacing: '0.05em',
          display:'flex', gap:8, alignItems:'center', flexWrap:'wrap',
        }}>
          <span>{post.date}</span>
          <span>·</span>
          {post.tags.map(t => <Tag key={t} variant={
            t==='poolcore' ? 'pool' :
            t==='dreamcore' ? 'dream' :
            t==='backrooms' ? 'sodium' : 'default'
          } bracketed>{t}</Tag>)}
        </div>
      </header>

      <Divider variant="block" label="entry" />

      {post.body.map((b, i) => {
        if (b.kind === 'p')   return <p key={i} style={{ margin:'0 0 16px', textWrap:'pretty' }}>{b.text}</p>;
        if (b.kind === 'h')   return <h3 key={i} style={{
          fontFamily:'var(--font-pixel-display)', fontSize: 28, margin:'24px 0 8px', color:'var(--ink)' }}>{b.text}</h3>;
        if (b.kind === 'ul')  return (
          <ul key={i} style={{ margin:'0 0 16px', paddingLeft: 20 }}>
            {b.items.map((it, k) => <li key={k} style={{ marginBottom: 4 }}>{it}</li>)}
          </ul>
        );
        if (b.kind === 'img') return (
          <figure key={i} style={{ margin:'18px 0' }}>
            <div style={{ position:'relative', border:'1px solid var(--ink)', background:'var(--ink)' }}>
              <img
                src={`https://picsum.photos/seed/${b.seed}/720/360`}
                alt={b.alt || ''}
                style={{ width:'100%', display:'block', filter:'var(--filter-overexposed)' }}
              />
              <GrainOverlay opacity={0.22} />
            </div>
            {b.caption && (
              <figcaption style={{
                marginTop: 6,
                fontFamily:'var(--font-body-serif)',
                fontSize: 13, fontStyle:'italic', color:'var(--text-muted)',
              }}>{b.caption}</figcaption>
            )}
          </figure>
        );
        return null;
      })}

      <Divider variant="dashed" />
      <p style={{ fontFamily:'var(--font-body-serif)', fontSize:13, color:'var(--text-muted)', fontStyle:'italic' }}>
        (if you read this far, sign the guestbook before you leave.)
      </p>
    </article>
  );
};
window.BlogPostBody = BlogPostBody;
