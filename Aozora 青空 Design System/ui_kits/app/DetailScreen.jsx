// Detail screen — full-bleed colored hero with a glass info sheet underneath.

function DetailScreen({ onBack }) {
  const { Card, Tag, Badge, Button, IconButton } = window.AozoraDesignSystem_e61996;
  const [size, setSize] = React.useState('m');
  const [qty, setQty]   = React.useState(1);

  return (
    <div style={{ position:'absolute', inset: 0, background:'#fff', overflowY:'auto' }}>
      {/* Hero */}
      <div style={{
        height: 380, position:'relative',
        background: 'linear-gradient(135deg,#0A84FF 0%, #66B7FF 50%, #CFE8FF 100%)',
        display:'flex', alignItems:'center', justifyContent:'center',
        overflow:'hidden',
      }}>
        <StatusBar tint="light"/>
        <img src="../../assets/droplets.svg" alt="" style={{ position:'absolute', inset: 0, width:'100%', height:'100%', opacity: 0.55 }}/>
        <img src="../../assets/liquid-drop.svg" alt="" style={{ height: 270, position:'relative', zIndex: 2, filter:'drop-shadow(0 20px 40px rgba(0,40,100,0.3))' }}/>

        {/* Top nav */}
        <div style={{ position:'absolute', top: 56, left: 16, right: 16, display:'flex', justifyContent:'space-between', zIndex: 5 }}>
          <IconButton variant="glass" shape="circle" aria-label="Back" onClick={onBack}><IcBack size={18}/></IconButton>
          <IconButton variant="glass" shape="circle" aria-label="Save"><IcHeart size={18}/></IconButton>
        </div>

        {/* Side eyebrow */}
        <div style={{ position:'absolute', left: 18, top: 130,
                      writingMode: 'vertical-rl', textOrientation: 'mixed',
                      fontFamily:'var(--font-mono)', fontSize: 10, letterSpacing:'0.32em',
                      color: 'rgba(255,255,255,0.85)', textTransform:'uppercase', zIndex: 5 }}>
          NO.0825 · 蒼い空
        </div>
      </div>

      {/* Sheet */}
      <div style={{
        position:'relative', marginTop: -30, background:'#fff',
        borderRadius: '28px 28px 0 0', padding: '24px 22px 140px',
        boxShadow: '0 -10px 40px rgba(10,68,140,0.10)',
      }}>
        <Badge tone="accent" variant="solid">LIMITED · SUMMER</Badge>

        <h1 style={{ margin:'10px 0 4px', fontFamily:'var(--font-display)',
                     fontSize: 48, fontWeight: 900, letterSpacing:'-0.035em',
                     lineHeight: 1, color:'var(--neutral-900)' }}>SODA</h1>
        <div style={{ fontFamily:'var(--font-sans)', fontSize: 13, color:'var(--text-muted)', letterSpacing:'0.12em' }}>
          蒼い空、冷たい一杯。
        </div>

        <div style={{ display:'flex', alignItems:'center', gap: 8, marginTop: 14 }}>
          <IcStar size={14} color="var(--sun-500)"/>
          <span style={{ fontFamily:'var(--font-mono)', fontSize: 12, fontWeight: 600, color:'var(--neutral-800)' }}>4.8</span>
          <span style={{ fontFamily:'var(--font-sans)', fontSize: 12, color:'var(--text-muted)' }}>· 1,284 reviews</span>
        </div>

        <p style={{ marginTop: 16, fontFamily:'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color:'var(--text-body)' }}>
          A clear sparkling soda with a hint of citrus salt. Refreshing on a hot afternoon — cool, clear, blue.
        </p>

        {/* Size picker */}
        <div style={{ marginTop: 20 }}>
          <div style={{ fontFamily:'var(--font-mono)', fontSize: 10, letterSpacing:'0.18em', color:'var(--text-muted)', textTransform:'uppercase', marginBottom: 8 }}>SIZE · サイズ</div>
          <div style={{ display:'flex', gap: 8 }}>
            {[{k:'s',l:'S · 350ml',p:280},{k:'m',l:'M · 500ml',p:380},{k:'l',l:'L · 1L',p:580}].map(o => (
              <button key={o.k} onClick={() => setSize(o.k)} style={{
                flex: 1, padding: '12px 8px', border:'1.4px solid',
                borderColor: size===o.k ? 'var(--blue-500)' : 'var(--stroke-subtle)',
                background: size===o.k ? 'var(--blue-50)' : '#fff',
                borderRadius: 14, cursor:'pointer',
                display:'flex', flexDirection:'column', gap: 2,
              }}>
                <div style={{ fontFamily:'var(--font-sans)', fontSize: 12, fontWeight: 700, color:'var(--neutral-900)' }}>{o.l}</div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize: 11, color: size===o.k ? 'var(--blue-600)' : 'var(--text-muted)' }}>¥{o.p}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div style={{ marginTop: 20, display:'flex', gap: 6, flexWrap:'wrap' }}>
          <Tag>Sugar-free</Tag>
          <Tag>0 kcal</Tag>
          <Tag>Cold-fill</Tag>
          <Tag>Recyclable</Tag>
        </div>

        {/* Sticky CTA */}
        <div style={{
          position:'absolute', left: 12, right: 12, bottom: 90,
          background: 'rgba(255,255,255,0.78)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid var(--glass-stroke)',
          borderRadius: 24, padding: 12,
          boxShadow: 'var(--glass-edge), 0 8px 24px rgba(10,68,140,0.16)',
          display:'flex', alignItems:'center', gap: 10,
        }}>
          <div style={{ display:'flex', alignItems:'center', background:'var(--neutral-100)', borderRadius: 999 }}>
            <button onClick={() => setQty(Math.max(1, qty-1))} style={{ border:'none', background:'none', width: 32, height: 36, cursor:'pointer', color:'var(--neutral-700)', fontSize: 18 }}>−</button>
            <span style={{ fontFamily:'var(--font-mono)', fontWeight: 700, width: 20, textAlign:'center', color:'var(--neutral-900)' }}>{qty}</span>
            <button onClick={() => setQty(qty+1)} style={{ border:'none', background:'none', width: 32, height: 36, cursor:'pointer', color:'var(--neutral-700)', fontSize: 18 }}>+</button>
          </div>
          <Button block tone="brand" size="lg" leadingIcon={<IcCart size={16}/>}>Add · ¥380</Button>
        </div>
      </div>
    </div>
  );
}

window.DetailScreen = DetailScreen;
