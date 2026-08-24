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
