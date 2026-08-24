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
