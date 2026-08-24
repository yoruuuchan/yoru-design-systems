// KUNLUN — Full-screen CLI workspace
const KL = window.KUNLUNDesignSystem_29e6df;
const { Terminal, Panel, Badge, StatusPill, IconButton, Tabs, ProgressBar, Tooltip } = KL;

const termStyles = {
  page: {
    height: "100vh", display: "grid",
    gridTemplateColumns: "240px 1fr",
    gridTemplateRows: "auto 1fr auto",
    background: "var(--bg-void)", color: "var(--text-primary)",
    fontFamily: "var(--font-mono)", overflow: "hidden",
  },
  side: {
    gridRow: "1 / -1", borderRight: "1px solid var(--border)",
    background: "var(--bg-base)",
    display: "flex", flexDirection: "column", overflow: "hidden",
  },
  sideHead: {
    padding: "14px 16px", borderBottom: "1px solid var(--border)",
    display: "flex", alignItems: "center", gap: 10,
  },
  mark: {
    width: 26, height: 26, background: "var(--cyan-500)", color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)", display: "grid", placeItems: "center",
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 12,
    boxShadow: "var(--glow-cyan-sm)",
  },
  brand: { fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14,
           letterSpacing: "var(--tracking-widest)" },
  sideTitle: { fontSize: 9, color: "var(--text-tertiary)",
               letterSpacing: "var(--tracking-widest)", padding: "14px 16px 6px",
               textTransform: "uppercase" },
  sess: {
    display: "flex", flexDirection: "column", padding: "6px 10px",
    margin: "1px 6px", cursor: "pointer", fontSize: 11,
    borderLeft: "2px solid transparent",
    clipPath: "var(--clip-chamfer-sm)",
    color: "var(--text-secondary)",
  },
  sessActive: { background: "var(--bg-elevated)", borderLeftColor: "var(--cyan-500)",
                color: "var(--text-signal)", textShadow: "var(--text-glow-cyan)" },
  sessTitle: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 },
  sessMeta: { fontSize: 9, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)" },
  topbar: {
    padding: "10px 18px", borderBottom: "1px solid var(--border)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "rgba(13, 19, 32, 0.6)",
  },
  pathRow: { display: "flex", alignItems: "baseline", gap: 16, fontSize: 11,
             letterSpacing: "var(--tracking-wider)", color: "var(--text-tertiary)",
             textTransform: "uppercase" },
  workspace: {
    padding: 16, overflow: "hidden",
    display: "grid", gridTemplateColumns: "1.4fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: 14,
    background: "var(--bg-base)",
    position: "relative",
  },
  scanlines: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background: "var(--bg-scanlines)", opacity: 0.5,
  },
  bigTerm: { gridRow: "1 / -1", minHeight: 0 },
  statusBar: {
    gridColumn: "2 / -1", borderTop: "1px solid var(--border)",
    padding: "6px 18px", display: "flex", justifyContent: "space-between",
    fontSize: 10, color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)", textTransform: "uppercase",
    background: "var(--bg-void)",
  },
  statusGroup: { display: "flex", gap: 18, alignItems: "center" },
};

const SESSIONS = [
  { id:"main",  title:"main",      tty:"tty-07", node:"NODE-07", status:"online" },
  { id:"logs",  title:"logs · live", tty:"tty-09", node:"CORE-9",  status:"busy"   },
  { id:"vault", title:"vault-3 audit", tty:"tty-vault", node:"VAULT-3", status:"online" },
  { id:"old",   title:"sector-b dump", tty:"tty-bs", node:"SECTOR-B", status:"idle"   },
];

function TerminalApp() {
  const [active, setActive] = React.useState("main");
  const [mainLines, setMainLines] = React.useState([
    { prompt:"$", text:"kunlun login --node=07", kind:"user" },
    { text:"[ OK ] handshake established", kind:"success" },
    { text:"welcome, OP-07. session token = 0xA7F3", kind:"muted" },
    { prompt:"$", text:"kunlun status", kind:"user" },
    { text:"NODE-07 · NOMINAL · uptime 12d 04h", kind:"muted" },
    { text:"  output: 142.3 MW   latency: 8.4 ms", kind:"muted" },
    { text:"  coolant flow: 87% (degraded)", kind:"warn" },
    { prompt:"$", text:"", kind:"muted" },
  ]);

  const onCmd = (cmd) => {
    const at = (text, kind) => ({ text, kind });
    const responses = {
      help: [
        at("kunlun commands:", "muted"),
        at("  status              — print node status", "muted"),
        at("  nodes               — list all nodes", "muted"),
        at("  purge <line>        — soft purge a feed line", "muted"),
        at("  log <node>          — tail node log", "muted"),
        at("  clear               — clear screen", "muted"),
      ],
      status: [
        at("NODE-07 · NOMINAL · uptime 12d 04h", "muted"),
        at("  output: 142.3 MW   latency: 8.4 ms", "muted"),
        at("  coolant flow: 87% (degraded)", "warn"),
      ],
      nodes: [
        at("NODE-07  online  SECTOR-A  142.3 MW", "success"),
        at("NODE-08  online  SECTOR-A  128.1 MW", "success"),
        at("NODE-12  ERROR   SECTOR-B  uplink lost", "error"),
        at("NODE-22  idle    SECTOR-C  —", "muted"),
      ],
      "purge c2": [
        at("[ .. ] initiating soft purge on feed-line C2", "muted"),
        at("[ OK ] backflush at 60% pressure", "success"),
        at("[ OK ] flow restored to 920 lpm", "success"),
      ],
      clear: "CLEAR",
    };
    const next = [{ prompt:"$", text: cmd, kind:"user" }];
    const r = responses[cmd.trim().toLowerCase()];
    if (r === "CLEAR") {
      setMainLines([{ prompt:"$", text:"", kind:"muted" }]);
      return;
    }
    if (r) next.push(...r);
    else next.push(at(`kunlun: ${cmd}: command not found`, "error"));
    setMainLines(l => [...l, ...next]);
  };

  return (
    <div style={termStyles.page}>
      {/* SIDEBAR — sessions */}
      <aside style={termStyles.side}>
        <div style={termStyles.sideHead}>
          <div style={termStyles.mark}>K</div>
          <span style={termStyles.brand}>KUNLUN · CLI</span>
        </div>
        <div style={termStyles.sideTitle}>// SESSIONS</div>
        {SESSIONS.map(s => (
          <div key={s.id} onClick={() => setActive(s.id)}
               style={{...termStyles.sess, ...(active===s.id ? termStyles.sessActive : {})}}>
            <div style={termStyles.sessTitle}>
              <span>▸ {s.title}</span>
              <StatusPill status={s.status} style={{padding:"1px 6px", fontSize:8}}>•</StatusPill>
            </div>
            <span style={termStyles.sessMeta}>{s.tty} · {s.node}</span>
          </div>
        ))}
        <div style={termStyles.sideTitle}>// SHORTCUTS</div>
        <div style={{...termStyles.sess, cursor:"default"}}>
          <span>⌘ K  — palette</span>
        </div>
        <div style={{...termStyles.sess, cursor:"default"}}>
          <span>⌘ T  — new tab</span>
        </div>
        <div style={{...termStyles.sess, cursor:"default"}}>
          <span>⌘ /  — search history</span>
        </div>
        <div style={{flex:1}}/>
        <div style={{padding:"10px 14px", borderTop:"1px solid var(--border)",
                     fontSize:9, color:"var(--text-tertiary)"}}>
          // KUNLUN · 昆仑 · v0.1.0
        </div>
      </aside>

      {/* TOPBAR */}
      <header style={termStyles.topbar}>
        <div style={termStyles.pathRow}>
          <span>// CORE-9</span><span>›</span>
          <span>SECTOR-A</span><span>›</span>
          <span style={{color:"var(--text-signal)", textShadow:"var(--text-glow-cyan)"}}>NODE-07</span>
          <Badge variant="signal" solid>tty-07</Badge>
        </div>
        <div style={{display:"flex", gap:8, alignItems:"center"}}>
          <Tooltip label="SPLIT PANE"><IconButton label="Split" size="sm" variant="ghost">⫼</IconButton></Tooltip>
          <Tooltip label="FULLSCREEN"><IconButton label="Fullscreen" size="sm" variant="ghost">⛶</IconButton></Tooltip>
          <Tooltip label="SETTINGS"><IconButton label="Settings" size="sm" variant="ghost">⚙</IconButton></Tooltip>
        </div>
      </header>

      {/* WORKSPACE */}
      <main style={termStyles.workspace}>
        <div style={termStyles.scanlines}/>

        <div style={termStyles.bigTerm}>
          <Terminal
            title="tty-07 · OP-07@NODE-07"
            prompt="OP-07 ~ $"
            lines={mainLines}
            onCommand={onCmd}
          />
        </div>

        <Terminal
          title="tty-09 · core-9 logs"
          showInput={false}
          height="100%"
          lines={[
            { text:"[21:04:55] CORE-9: tick · 142.3 MW", kind:"muted" },
            { text:"[21:04:54] NODE-08: relay ok", kind:"success" },
            { text:"[21:04:54] NODE-13: lat 18.2ms ⚠", kind:"warn" },
            { text:"[21:04:53] NODE-11: relay ok", kind:"success" },
            { text:"[21:04:52] NODE-08: replay window ack", kind:"muted" },
            { text:"[21:04:51] NODE-09: state=BUSY (sync)", kind:"warn" },
            { text:"[21:04:50] NODE-12: ⨯ uplink timeout 0xE7", kind:"error" },
            { text:"[21:04:49] CORE-9: tick · 142.1 MW", kind:"muted" },
            { text:"[21:04:48] NODE-21: relay ok", kind:"success" },
            { text:"[21:04:46] CORE-9: tick · 141.8 MW", kind:"muted" },
          ]}
        />

        <Panel title="SYSTEM" meta="CORE-9" flush>
          <div style={{padding:"14px 18px", display:"flex", flexDirection:"column", gap:12}}>
            <ProgressBar label="CORE OUTPUT" value={88.3} />
            <ProgressBar label="COOLANT FLOW" value={87.0} variant="warn" />
            <ProgressBar label="HEAT" value={92.0} variant="danger" />
            <ProgressBar label="UPLINK" value={62.0} />
            <ProgressBar label="SYNC" indeterminate />
          </div>
        </Panel>
      </main>

      {/* STATUS BAR */}
      <footer style={termStyles.statusBar}>
        <div style={termStyles.statusGroup}>
          <span style={{color:"var(--cyan-300)", textShadow:"var(--text-glow-cyan)"}}>● tty-07</span>
          <span>OP-07 @ NODE-07</span>
          <span>SECTOR-A · CORE-9</span>
        </div>
        <div style={termStyles.statusGroup}>
          <span>UTF-8</span>
          <span>BASH 5.2</span>
          <span>UPLINK 8.4ms</span>
          <span style={{color:"var(--green-500)"}}>● NOMINAL</span>
          <span>21:04:55</span>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<TerminalApp/>);
