// Home screen — gradient sky background with a hero card, a row of flavor
// tiles, and a "today" promo. Uses the design system's Button, Card, Tag, Badge.

function HomeScreen({ onOpenDetail, onOpenSettings }) {
  const { Card, Tag, Badge, Button, IconButton } = window.AozoraDesignSystem_e61996;
  const [tab, setTab] = React.useState('all');

  const flavors = [
    { id:'soda',    name:'Soda',    jp:'蒼い空',    price: 280, hue:'linear-gradient(135deg,#0A84FF,#66B7FF)', tag:'Signature' },
    { id:'citrus',  name:'Citrus',  jp:'柚の朝',    price: 320, hue:'linear-gradient(135deg,#FFE34D,#FFB199)', tag:'New' },
    { id:'mint',    name:'Mint',    jp:'青葉の風',  price: 300, hue:'linear-gradient(135deg,#5FE3CC,#9DD2FF)' },
    { id:'peach',   name:'Peach',   jp:'桃の昼',    price: 320, hue:'linear-gradient(135deg,#FFB199,#FF6B6B)' },
  ];

  return (
    <div style={{
      position:'absolute', inset: 0,
      background: 'linear-gradient(180deg,#0A84FF 0%, #66B7FF 35%, #CFE8FF 70%, #FFE980 100%)',
      overflowY: 'auto',
    }}>
      <StatusBar tint="light"/>

      {/* Floating decorations */}
      <img src="../../assets/glass-blob.svg" alt="" style={{ position:'absolute', top: 60, right:-60, width: 220, opacity: 0.55, pointerEvents:'none' }}/>
      <img src="../../assets/droplets.svg"   alt="" style={{ position:'absolute', top: 140, left:-30, width: 220, opacity: 0.5, pointerEvents:'none' }}/>

      {/* Header */}
      <div style={{ padding: '60px 20px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', zIndex: 5 }}>
        <div>
          <div style={{ fontFamily:'var(--font-mono)', fontSize: 10, letterSpacing:'0.24em', color:'rgba(255,255,255,0.85)', textTransform:'uppercase' }}>夏 · SUMMER 2026</div>
          <div style={{ fontFamily:'var(--font-display)', fontSize: 28, fontWeight: 900, letterSpacing:'-0.025em', color:'#fff', marginTop: 2 }}>こんにちは, Yuna</div>
        </div>
        <IconButton variant="glass" shape="circle" aria-label="Notifications"><IcBell size={18}/></IconButton>
      </div>

      {/* Hero card */}
      <div style={{ padding: '4px 20px 16px', position:'relative', zIndex: 5 }}>
        <Card tier="thick" tint="clear" padding="lg" radius="2xl" onClick={onOpenDetail}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div>
              <Badge tone="accent" variant="solid">LIMITED</Badge>
              <div style={{ fontFamily:'var(--font-display)', fontSize: 44, fontWeight: 900, letterSpacing:'-0.035em', lineHeight: 1, marginTop: 10, color:'var(--neutral-900)' }}>SODA</div>
              <div style={{ fontFamily:'var(--font-sans)', fontSize: 12, fontWeight: 500, color:'var(--text-muted)', marginTop: 2, letterSpacing:'0.12em' }}>蒼い空、冷たい一杯</div>
              <div style={{ display:'flex', alignItems:'baseline', gap: 8, marginTop: 14 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontWeight: 700, fontSize: 22, color:'var(--neutral-900)' }}>¥280</span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize: 11, color:'var(--text-muted)', textDecoration:'line-through' }}>¥320</span>
              </div>
            </div>
            <img src="../../assets/liquid-drop.svg" alt="" style={{ width: 90, marginTop: -10 }}/>
          </div>
        </Card>
      </div>

      {/* Tab filter */}
      <div style={{ padding: '4px 20px 12px', position:'relative', zIndex: 5, display:'flex', gap: 8, overflowX:'auto' }}>
        {['all','citrus','mint','soda','peach'].map(k => (
          <Tag key={k} tone="brand" selected={tab===k} onClick={() => setTab(k)}>
            {k === 'all' ? 'All' : k.charAt(0).toUpperCase()+k.slice(1)}
          </Tag>
        ))}
      </div>

      {/* Flavor grid */}
      <div style={{ padding: '4px 20px 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12, position:'relative', zIndex: 5 }}>
        {flavors.map(f => (
          <Card key={f.id} tier="regular" padding="none" radius="lg" onClick={onOpenDetail}
                style={{ overflow:'hidden', padding: 0, textAlign:'left' }}>
            <div style={{ height: 110, background: f.hue, position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <img src="../../assets/liquid-drop.svg" alt="" style={{ height: 80, opacity: 0.9 }}/>
              {f.tag && (
                <div style={{ position:'absolute', top: 8, left: 8 }}>
                  <Badge tone={f.tag === 'New' ? 'accent' : 'brand'} variant="solid">{f.tag}</Badge>
                </div>
              )}
            </div>
            <div style={{ padding: '12px 14px 14px' }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize: 18, fontWeight: 800, letterSpacing:'-0.02em', color:'var(--neutral-900)' }}>{f.name}</div>
              <div style={{ fontFamily:'var(--font-sans)', fontSize: 11, color:'var(--text-muted)', letterSpacing:'0.08em' }}>{f.jp}</div>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 8 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontWeight: 700, fontSize: 14, color:'var(--neutral-900)' }}>¥{f.price}</span>
                <IcPlus size={16} color="var(--blue-500)"/>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ height: 110 }}/>{/* spacer for tab bar */}
    </div>
  );
}

window.HomeScreen = HomeScreen;
