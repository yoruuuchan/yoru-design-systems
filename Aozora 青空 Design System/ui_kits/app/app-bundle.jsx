
// ─── icons.jsx ───
// Shared monoline icons used across the Aozora App UI kit.
// Inlined SVG (not a CDN) so the kit previews offline. Stroke 2px, round caps.

const ic = (path, opts = {}) => function Icon({ size = 20, color = "currentColor", ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={opts.fill || "none"}
         stroke={opts.fill ? "none" : color} strokeWidth={opts.sw || 2}
         strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {path}
    </svg>
  );
};

const Home     = ic(<><path d="M3 11 12 3l9 8"/><path d="M5 10v10h14V10"/></>);
const Search   = ic(<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>);
const Heart    = ic(<><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></>);
const HeartFill= ic(<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/>, { fill:'currentColor' });
const User     = ic(<><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></>);
const Plus     = ic(<><path d="M12 5v14M5 12h14"/></>);
const Arrow    = ic(<><path d="M5 12h14M13 6l6 6-6 6"/></>);
const Back     = ic(<><path d="M19 12H5M11 6l-6 6 6 6"/></>);
const Bell     = ic(<><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8z"/><path d="M10 21a2 2 0 0 0 4 0"/></>);
const Settings = ic(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></>);
const Chev     = ic(<><path d="m9 6 6 6-6 6"/></>);
const Drop     = ic(<path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"/>, { fill:'currentColor' });
const Star     = ic(<path d="m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17.3 6.4 20.4 7.8 14 3 9.6 9.4 9z"/>, { fill:'currentColor' });
const Cart     = ic(<><circle cx="9" cy="20" r="1.6"/><circle cx="17" cy="20" r="1.6"/><path d="M3 4h2l2.5 11h11l2-7H6"/></>);

Object.assign(window, { IcHome:Home, IcSearch:Search, IcHeart:Heart, IcHeartFill:HeartFill, IcUser:User, IcPlus:Plus, IcArrow:Arrow, IcBack:Back, IcBell:Bell, IcSettings:Settings, IcChev:Chev, IcDrop:Drop, IcStar:Star, IcCart:Cart });


// ─── phone.jsx ───
// Phone frame — fakes an iPhone-shaped device shell so screens preview at
// realistic dimensions inside the kit. Not part of the design system itself.

function PhoneFrame({ children, label }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10 }}>
      <div style={{
        width: 360, height: 760,
        background: '#07090E',
        borderRadius: 48,
        padding: 10,
        boxShadow: '0 30px 80px rgba(10,68,140,0.28), inset 0 0 0 1px rgba(255,255,255,0.06)',
      }}>
        <div style={{
          width:'100%', height:'100%',
          borderRadius: 38,
          overflow: 'hidden',
          position: 'relative',
          background: '#fff',
        }}>
          {/* Dynamic Island */}
          <div style={{
            position:'absolute', top: 10, left:'50%', transform:'translateX(-50%)',
            width: 110, height: 30, borderRadius: 16, background:'#07090E', zIndex: 20,
          }}/>
          {children}
        </div>
      </div>
      {label && (
        <div style={{ fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.16em',
                      color:'var(--text-muted)', textTransform:'uppercase' }}>{label}</div>
      )}
    </div>
  );
}

// Status bar — used inside every screen.
function StatusBar({ tint='dark' }) {
  const color = tint === 'light' ? '#fff' : 'var(--neutral-900)';
  return (
    <div style={{
      position:'absolute', top: 0, left: 0, right: 0, height: 50, zIndex: 15,
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding: '14px 28px 0', pointerEvents:'none',
      fontFamily:'var(--font-sans)', fontSize: 14, fontWeight: 700,
      color, letterSpacing: '-0.01em',
    }}>
      <span>9:41</span>
      <span style={{ display:'inline-flex', gap: 5, alignItems:'center' }}>
        <span style={{ width: 16, height: 10, borderRadius: 2,
                       border: `1.4px solid ${color}`, position:'relative',
                       display:'inline-block' }}>
          <span style={{ position:'absolute', inset: 1, background: color, borderRadius:1 }}/>
        </span>
      </span>
    </div>
  );
}

// Bottom tab bar — thin glass strip over whatever the screen content is.
function TabBar({ active, onChange }) {
  const tabs = [
    { id:'home',     label:'Home',    Icon: IcHome },
    { id:'search',   label:'Search',  Icon: IcSearch },
    { id:'fav',      label:'Saved',   Icon: IcHeart },
    { id:'me',       label:'Me',      Icon: IcUser  },
  ];
  return (
    <div style={{
      position:'absolute', left: 12, right: 12, bottom: 14,
      background: 'rgba(255,255,255,0.62)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--glass-stroke)',
      borderRadius: 28,
      boxShadow: 'var(--glass-edge), 0 12px 30px rgba(10,68,140,0.18)',
      padding: '10px 8px',
      display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap: 4,
      zIndex: 30,
    }}>
      {tabs.map(t => {
        const on = active === t.id;
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            display:'flex', flexDirection:'column', alignItems:'center',
            gap: 3, padding:'8px 4px', border:'none', background: on ? 'rgba(10,132,255,0.10)' : 'transparent',
            borderRadius: 18, cursor:'pointer',
            color: on ? 'var(--blue-600)' : 'var(--text-muted)',
            transition: 'all var(--dur-fast) var(--ease-out-quart)',
          }}>
            <t.Icon size={20}/>
            <span style={{ fontFamily:'var(--font-sans)', fontSize: 10, fontWeight: 600, letterSpacing:'0.02em' }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { PhoneFrame, StatusBar, TabBar });


// ─── HomeScreen.jsx ───
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


// ─── DetailScreen.jsx ───
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


// ─── SettingsScreen.jsx ───
// Settings screen — calm white, sectioned list. Uses Switch and Tag.

function SettingsScreen({ onBack }) {
  const { Card, Switch, Tag, IconButton } = window.AozoraDesignSystem_e61996;
  const [push, setPush] = React.useState(true);
  const [haptics, setHap] = React.useState(true);
  const [sync, setSync] = React.useState(true);
  const [beta, setBeta] = React.useState(false);

  const Section = ({ title, kicker, children }) => (
    <div style={{ marginBottom: 20 }}>
      {kicker && (
        <div style={{ fontFamily:'var(--font-mono)', fontSize: 10, letterSpacing:'0.18em',
                      color:'var(--text-muted)', textTransform:'uppercase', padding:'0 4px 8px' }}>{kicker}</div>
      )}
      <div style={{
        background:'#fff', border:'1px solid var(--stroke-hairline)',
        borderRadius: 18, overflow:'hidden',
        boxShadow:'var(--shadow-xs)',
      }}>{children}</div>
    </div>
  );

  const Row = ({ label, sub, control, onClick, last }) => (
    <div onClick={onClick} style={{
      display:'flex', alignItems:'center', gap: 12,
      padding:'14px 16px',
      borderBottom: last ? 'none' : '1px solid var(--stroke-hairline)',
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily:'var(--font-sans)', fontSize: 14, fontWeight: 600, color:'var(--text-strong)' }}>{label}</div>
        {sub && <div style={{ fontFamily:'var(--font-sans)', fontSize: 12, color:'var(--text-muted)', marginTop: 1 }}>{sub}</div>}
      </div>
      {control}
    </div>
  );

  return (
    <div style={{ position:'absolute', inset: 0,
                  background: 'linear-gradient(180deg,#EAF5FF 0%, #fff 200px, #fff 100%)',
                  overflowY:'auto', paddingBottom: 140 }}>
      <StatusBar tint="dark"/>

      {/* Header */}
      <div style={{ padding: '60px 20px 8px', display:'flex', alignItems:'center', gap: 12 }}>
        <IconButton variant="ghost" shape="circle" aria-label="Back" onClick={onBack}><IcBack size={20}/></IconButton>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 800, letterSpacing:'-0.02em', color:'var(--neutral-900)' }}>Settings</div>
      </div>

      <div style={{ padding: '4px 16px' }}>
        {/* Profile card */}
        <div style={{
          background:'linear-gradient(135deg,#0A84FF,#66B7FF)',
          borderRadius: 22, padding: 18,
          display:'flex', alignItems:'center', gap: 14,
          color:'#fff', marginBottom: 20,
          boxShadow:'var(--inset-rim), 0 12px 30px rgba(10,68,140,0.20)',
        }}>
          <div style={{
            width: 54, height: 54, borderRadius:'50%',
            background:'rgba(255,255,255,0.25)',
            display:'flex', alignItems:'center', justifyContent:'center',
            border: '1px solid rgba(255,255,255,0.45)',
            fontFamily:'var(--font-display)', fontWeight: 900, fontSize: 22, letterSpacing:'-0.02em',
          }}>Y</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily:'var(--font-display)', fontSize: 18, fontWeight: 800, letterSpacing:'-0.02em' }}>Yuna Sato</div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize: 11, opacity: 0.85 }}>yuna@aozora.jp · Member since 2024</div>
          </div>
          <Tag tone="accent" selected>Pro</Tag>
        </div>

        <Section kicker="Preferences · 設定">
          <Row label="Push notifications"     sub="Order updates, drops, drops, drops" control={<Switch checked={push} onChange={setPush}/>}/>
          <Row label="Haptic feedback"        control={<Switch checked={haptics} onChange={setHap}/>}/>
          <Row label="Sync across devices"    sub="iCloud · last synced 2 min ago"  control={<Switch checked={sync} onChange={setSync}/>} last/>
        </Section>

        <Section kicker="Account">
          <Row label="Email"      sub="yuna@aozora.jp"       control={<IcChev size={16} color="var(--text-faint)"/>} onClick={()=>{}}/>
          <Row label="Language"   sub="日本語 · English"     control={<IcChev size={16} color="var(--text-faint)"/>} onClick={()=>{}}/>
          <Row label="Payment"    sub="Visa · 1234"          control={<IcChev size={16} color="var(--text-faint)"/>} onClick={()=>{}} last/>
        </Section>

        <Section kicker="Advanced">
          <Row label="Beta features"    sub="Try unreleased flavors" control={<Switch checked={beta} onChange={setBeta}/>}/>
          <Row label="Privacy report"   control={<IcChev size={16} color="var(--text-faint)"/>} onClick={()=>{}}/>
          <Row label="Sign out"         control={<IcChev size={16} color="var(--text-faint)"/>} onClick={()=>{}} last/>
        </Section>

        <div style={{ textAlign:'center', fontFamily:'var(--font-mono)', fontSize: 10, color:'var(--text-faint)', letterSpacing:'0.18em', padding: '20px 0' }}>
          AOZORA · v1.0.0 · MADE IN SUMMER
        </div>
      </div>
    </div>
  );
}

window.SettingsScreen = SettingsScreen;

