// KUNLUN — Operations Dashboard
const KL = window.KUNLUNDesignSystem_29e6df;
const { Button, IconButton, Input, Panel, Card, Badge, Tag, StatusPill,
        Avatar, Tabs, ProgressBar, ChartCard, DataTable, Tooltip } = KL;

const dashStyles = {
  page: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gridTemplateRows: "auto 1fr",
    height: "100vh",
    background: "var(--bg-base)", color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
  },
  side: {
    gridRow: "1 / -1",
    background: "var(--bg-void)", borderRight: "1px solid var(--border)",
    display: "flex", flexDirection: "column", overflow: "hidden",
  },
  sideHead: { padding: "16px 18px", borderBottom: "1px solid var(--border)",
              display: "flex", alignItems: "center", gap: 10 },
  mark: {
    width: 28, height: 28, background: "var(--cyan-500)", color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)", display: "grid", placeItems: "center",
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13,
    boxShadow: "var(--glow-cyan-sm)",
  },
  brand: {
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 16,
    letterSpacing: "var(--tracking-widest)",
  },
  brandSub: { fontSize: 9, color: "var(--cyan-300)", letterSpacing: "0.4em" },
  nav: { flex: 1, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 1 },
  navLabel: { fontSize: 9, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase", padding: "12px 12px 6px" },
  navItem: {
    display: "flex", alignItems: "center", gap: 10,
    padding: "8px 12px", fontSize: 12, color: "var(--text-secondary)",
    cursor: "pointer", clipPath: "var(--clip-chamfer-sm)",
    borderLeft: "2px solid transparent",
    transition: "var(--transition-base)",
  },
  navItemActive: {
    background: "var(--bg-elevated)", borderLeftColor: "var(--cyan-500)",
    color: "var(--text-signal)", textShadow: "var(--text-glow-cyan)",
    boxShadow: "inset 0 0 12px rgba(0,184,255,0.05)",
  },
  navGlyph: { width: 16, color: "var(--cyan-400)", fontSize: 13 },
  sideFoot: { padding: "12px 14px", borderTop: "1px solid var(--border)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              fontSize: 10, color: "var(--text-tertiary)" },

  topbar: {
    padding: "12px 24px", borderBottom: "1px solid var(--border)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "rgba(13, 19, 32, 0.55)", backdropFilter: "blur(6px)",
  },
  crumbs: {
    display: "flex", alignItems: "baseline", gap: 12, fontSize: 11,
    color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase",
  },
  crumbActive: { color: "var(--text-signal)", textShadow: "var(--text-glow-cyan)", fontWeight: 600 },
  topbarActions: { display: "flex", alignItems: "center", gap: 12 },

  main: {
    overflowY: "auto", padding: "24px 28px 56px",
    display: "flex", flexDirection: "column", gap: 20,
  },
  pageHead: { display: "flex", justifyContent: "space-between", alignItems: "flex-end",
              borderBottom: "1px solid var(--border)", paddingBottom: 16 },
  pageTitle: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24,
               letterSpacing: "var(--tracking-wide)", margin: 0 },
  pageMeta: { fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wider)",
              marginTop: 8, display: "flex", gap: 16, textTransform: "uppercase" },
  kpiGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 },
  twoCol: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: 14 },
};

const NAV = [
  { sec:"// OPERATIONS",
    items:[
      { id:"overview",  label:"OVERVIEW",    g:"◰", active:true },
      { id:"nodes",     label:"NODES",       g:"⟁" },
      { id:"telemetry", label:"TELEMETRY",   g:"◴" },
      { id:"incidents", label:"INCIDENTS",   g:"⚠", badge: 3 },
    ]},
  { sec:"// SECTORS",
    items:[
      { id:"sectorA", label:"SECTOR-A · CORE",  g:"▣" },
      { id:"sectorB", label:"SECTOR-B · RELAY", g:"▤" },
      { id:"sectorC", label:"SECTOR-C · COLD",  g:"▥" },
    ]},
  { sec:"// SYSTEM",
    items:[
      { id:"agents",   label:"AGENTS",   g:"⌬" },
      { id:"settings", label:"SETTINGS", g:"⚙" },
    ]},
];

const nodeRows = [
  { id:"NODE-07", sector:"A", status:"online", power:142.3, lat:8.4,  uptime:"12d 04h", ts:"21:04:55" },
  { id:"NODE-08", sector:"A", status:"online", power:128.1, lat:9.1,  uptime:"31d 09h", ts:"21:04:54" },
  { id:"NODE-09", sector:"A", status:"busy",   power:97.6,  lat:11.0, uptime:"02d 18h", ts:"21:04:51" },
  { id:"NODE-11", sector:"B", status:"online", power:118.4, lat:7.9,  uptime:"58d 02h", ts:"21:04:53" },
  { id:"NODE-12", sector:"B", status:"error",  power:0,     lat:0,    uptime:"—",       ts:"20:51:08" },
  { id:"NODE-13", sector:"B", status:"warn",   power:102.7, lat:18.2, uptime:"08d 11h", ts:"21:04:50" },
  { id:"NODE-21", sector:"C", status:"online", power:88.0,  lat:14.4, uptime:"21d 06h", ts:"21:04:48" },
  { id:"NODE-22", sector:"C", status:"idle",   power:0,     lat:0,    uptime:"99d 00h", ts:"19:31:00" },
];

const activity = [
  { t:"21:04:55", sev:"warn",  src:"NODE-13", text:"latency spike 18.2 ms · investigating" },
  { t:"20:51:08", sev:"error", src:"NODE-12", text:"uplink lost · 0xE7 timeout" },
  { t:"20:42:12", sev:"info",  src:"OPS",     text:"runbook RB-14 dispatched by OP-07" },
  { t:"20:31:00", sev:"ok",    src:"CORE-9",  text:"daily snapshot complete · vault-3" },
  { t:"19:58:44", sev:"info",  src:"MOSS",    text:"thread closed · reactor coolant" },
];

function NavItem({ item, onClick }) {
  return (
    <div style={{...dashStyles.navItem, ...(item.active ? dashStyles.navItemActive : {})}} onClick={onClick}>
      <span style={dashStyles.navGlyph}>{item.g}</span>
      <span style={{flex:1}}>{item.label}</span>
      {item.badge !== undefined && <Badge variant="danger">{item.badge}</Badge>}
    </div>
  );
}

function Activity() {
  const tones = { info:"var(--text-secondary)", ok:"var(--green-500)",
                  warn:"var(--amber-500)", error:"var(--red-500)" };
  return (
    <Panel title="ACTIVITY" meta="LAST 30 MIN" flush
           actions={<Tooltip label="OPEN LOG"><IconButton label="Open" size="sm" variant="ghost">⌬</IconButton></Tooltip>}>
      <div style={{maxHeight: 300, overflowY: "auto"}}>
        {activity.map((a, i) => (
          <div key={i} style={{
            display:"grid", gridTemplateColumns:"68px 80px 1fr", gap:12,
            padding:"10px 14px", borderBottom: i < activity.length-1 ? "1px solid var(--border)" : "none",
            fontSize:12, alignItems:"center"
          }}>
            <span style={{color:"var(--text-tertiary)", fontVariantNumeric:"tabular-nums"}}>{a.t}</span>
            <span style={{color:"var(--cyan-400)", fontWeight:600, letterSpacing:"var(--tracking-wide)"}}>{a.src}</span>
            <span style={{color:tones[a.sev], textShadow: a.sev==="error" ? "var(--text-glow-red)" : (a.sev==="warn" ? "var(--text-glow-amber)" : "none")}}>
              {a.sev === "error" ? "⨯ " : a.sev === "warn" ? "⚠ " : a.sev === "ok" ? "✓ " : "› "}
              {a.text}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Dashboard() {
  const [tab, setTab] = React.useState("live");
  return (
    <div style={dashStyles.page}>
      {/* SIDEBAR */}
      <aside style={dashStyles.side}>
        <div style={dashStyles.sideHead}>
          <div style={dashStyles.mark}>K</div>
          <div>
            <div style={dashStyles.brand}>KUNLUN</div>
            <div style={dashStyles.brandSub}>昆 仑</div>
          </div>
        </div>
        <nav style={dashStyles.nav}>
          {NAV.map(g => (
            <React.Fragment key={g.sec}>
              <div style={dashStyles.navLabel}>{g.sec}</div>
              {g.items.map(it => <NavItem key={it.id} item={it} />)}
            </React.Fragment>
          ))}
        </nav>
        <div style={dashStyles.sideFoot}>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            <Avatar initials="07" size="sm" />
            <div>
              <div style={{color:"var(--text-primary)", fontSize:11}}>OP-07</div>
              <div style={{fontSize:9, color:"var(--text-tertiary)"}}>SECTOR-A · ADMIN</div>
            </div>
          </div>
          <IconButton label="Logout" size="sm" variant="ghost">⏏</IconButton>
        </div>
      </aside>

      {/* TOPBAR */}
      <header style={dashStyles.topbar}>
        <div style={dashStyles.crumbs}>
          <span>// OPS</span><span>›</span>
          <span style={dashStyles.crumbActive}>OVERVIEW</span>
          <Badge variant="signal" solid>LIVE</Badge>
        </div>
        <div style={dashStyles.topbarActions}>
          <Input prefix="⌕" placeholder="search nodes, runbooks..." size="sm" style={{width:280}} />
          <Tooltip label="REFRESH"><IconButton label="Refresh" variant="ghost">↻</IconButton></Tooltip>
          <Tooltip label="NOTIFICATIONS"><IconButton label="Notifications" variant="ghost">⊕</IconButton></Tooltip>
          <Button size="sm" iconRight={<span>▸</span>}>DISPATCH RUNBOOK</Button>
        </div>
      </header>

      {/* MAIN */}
      <main style={dashStyles.main}>
        <div style={dashStyles.pageHead}>
          <div>
            <h1 style={dashStyles.pageTitle}>// CORE-9 · OPERATIONS</h1>
            <div style={dashStyles.pageMeta}>
              <span>NODE-07 · SECTOR-A</span>
              <span>UPTIME 12d 04h 18m</span>
              <span>OP-07 ON DUTY</span>
              <StatusPill status="online">ALL SYSTEMS NOMINAL</StatusPill>
            </div>
          </div>
          <div style={{display:"flex", gap:8}}>
            <Tag>LAST 24H</Tag>
            <Tag variant="accent" onRemove={()=>{}}>SECTOR-A</Tag>
          </div>
        </div>

        <section style={dashStyles.kpiGrid}>
          <ChartCard label="// CORE OUTPUT" value="142.3" unit="MW" delta="+12.4% · 24h"
                     deltaDirection="up" series={[100,110,105,120,132,128,142]}
                     badge={<StatusPill status="online">LIVE</StatusPill>}/>
          <ChartCard label="// EDGE LATENCY" value="08.4" unit="ms" delta="-1.2 · 24h"
                     deltaDirection="down" series={[14,12,13,11,10,9,8.4]}/>
          <ChartCard label="// NODES UP" value="218" unit="/ 224" delta="97.3% online"
                     deltaDirection="flat" series={[210,215,218,219,217,220,218]}
                     badge={<Badge variant="warn">6 DEGRADED</Badge>}/>
          <ChartCard label="// THROUGHPUT" value="4.82" unit="GB/s" delta="+8.1% · 24h"
                     deltaDirection="up" series={[3.8,4.0,4.3,4.5,4.6,4.7,4.8]}/>
        </section>

        <section style={dashStyles.twoCol}>
          <Panel title="TELEMETRY" meta="CORE-9 · ALL CHANNELS" flush
                 actions={<>
                   <Tabs
                     value={tab} onChange={setTab}
                     tabs={[
                       { value:"live", label:"LIVE"},
                       { value:"1h", label:"1H"},
                       { value:"24h", label:"24H"},
                       { value:"7d", label:"7D"},
                     ]} />
                 </>}>
            <div style={{padding:"20px 24px"}}>
              <div style={{display:"grid", gridTemplateColumns:"repeat(2, 1fr)", gap:18}}>
                <ProgressBar label="REACTOR OUTPUT" value={88.3} />
                <ProgressBar label="COOLANT FLOW" value={87.0} variant="warn" />
                <ProgressBar label="UPLINK BANDWIDTH" value={62.0} />
                <ProgressBar label="VAULT CAPACITY" value={34.0} variant="success" />
                <ProgressBar label="HEAT" value={92.0} variant="danger" />
                <ProgressBar label="SYNC LAG" indeterminate />
              </div>
            </div>
          </Panel>
          <Activity/>
        </section>

        <section>
          <Panel title="NODES" meta="218 ONLINE · 6 DEGRADED" flush
                 actions={<>
                   <Input prefix="⌕" placeholder="filter..." size="sm" />
                   <Button variant="ghost" size="sm">EXPORT</Button>
                   <Button size="sm">+ ADD NODE</Button>
                 </>}>
            <DataTable
              striped
              rows={nodeRows}
              columns={[
                { key:"id", header:"NODE", tone:"id" },
                { key:"sector", header:"SECTOR", render: v => <Tag>SECTOR-{v}</Tag> },
                { key:"status", header:"STATUS", render: v => <StatusPill status={v}>{String(v).toUpperCase()}</StatusPill> },
                { key:"power", header:"OUTPUT (MW)", tone:"num", align:"right" },
                { key:"lat", header:"LATENCY (ms)", tone:"num", align:"right" },
                { key:"uptime", header:"UPTIME", tone:"muted" },
                { key:"ts", header:"LAST PING", tone:"muted" },
              ]}
            />
          </Panel>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Dashboard/>);
