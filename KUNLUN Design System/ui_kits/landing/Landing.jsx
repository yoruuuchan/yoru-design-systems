// KUNLUN — Landing Page
// Marketing hero with a live boot-sequence terminal, feature grid, stat strip.

const KL = window.KUNLUNDesignSystem_29e6df;
const { Button, IconButton, Card, Panel, Terminal, Badge, StatusPill, ChartCard } = KL;

const landingStyles = {
  page: {
    minHeight: "100vh",
    background: "var(--bg-base)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
    position: "relative",
    overflow: "hidden",
  },
  bg: {
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
    background: "radial-gradient(ellipse at 70% -10%, rgba(0,184,255,0.18), transparent 50%)," +
                "radial-gradient(ellipse at 10% 100%, rgba(42,95,214,0.12), transparent 55%)",
  },
  bgGrid: {
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.4,
    backgroundImage: "var(--bg-grid)",
    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
  },
  nav: {
    position: "relative", zIndex: 2,
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "16px 48px", borderBottom: "1px solid var(--border)",
    background: "rgba(6, 8, 13, 0.6)", backdropFilter: "blur(8px)",
  },
  navLogo: { display: "flex", alignItems: "center", gap: 12 },
  navMark: {
    width: 28, height: 28, background: "var(--cyan-500)", color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)", display: "grid", placeItems: "center",
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14,
    boxShadow: "var(--glow-cyan-sm)",
  },
  navWord: {
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18,
    letterSpacing: "var(--tracking-widest)", color: "var(--neutral-50)",
  },
  navCjk: {
    fontFamily: '"Noto Sans SC", sans-serif', fontSize: 12, color: "var(--cyan-300)",
    letterSpacing: "0.3em",
  },
  navLinks: { display: "flex", gap: 28, fontSize: 11, fontWeight: 600,
    textTransform: "uppercase", letterSpacing: "var(--tracking-widest)", color: "var(--text-tertiary)" },
  hero: {
    position: "relative", zIndex: 1,
    maxWidth: 1280, margin: "0 auto", padding: "72px 48px 56px",
    display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center",
  },
  eyebrow: {
    display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
    fontSize: 11, fontWeight: 600, letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase", color: "var(--cyan-300)",
    textShadow: "var(--text-glow-cyan)",
  },
  eyebrowTick: { color: "var(--cyan-500)", animation: "kl-blink 1.6s steps(2, end) infinite" },
  title: {
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 80, lineHeight: 0.95,
    letterSpacing: "-0.01em", margin: 0,
    background: "linear-gradient(180deg, var(--neutral-50) 30%, var(--cyan-400) 110%)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    textShadow: "var(--text-glow-cyan)",
  },
  subtitle: {
    marginTop: 28, fontSize: 16, lineHeight: 1.6,
    color: "var(--text-secondary)", maxWidth: 560,
  },
  cjkTitle: {
    fontFamily: '"Noto Sans SC", sans-serif', fontSize: 18,
    color: "var(--cyan-300)", letterSpacing: "0.5em", marginTop: 16,
  },
  ctaRow: { display: "flex", gap: 14, marginTop: 36, alignItems: "center" },
  ctaMeta: { fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)" },
  statStrip: {
    position: "relative", zIndex: 1,
    maxWidth: 1280, margin: "0 auto", padding: "0 48px 64px",
    display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16,
  },
  features: {
    position: "relative", zIndex: 1,
    maxWidth: 1280, margin: "0 auto", padding: "0 48px 72px",
  },
  featuresHead: {
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    marginBottom: 28, paddingBottom: 16, borderBottom: "1px solid var(--border)",
  },
  featuresTitle: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28,
    letterSpacing: "var(--tracking-wide)", color: "var(--text-primary)",
  },
  featGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  feat: {
    background: "var(--bg-panel)", border: "1px solid var(--border)",
    clipPath: "var(--clip-chamfer-md)", padding: 24, position: "relative",
    transition: "var(--transition-base)",
  },
  featIdx: {
    fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--cyan-400)",
    letterSpacing: "var(--tracking-widest)", marginBottom: 18, display: "flex",
    justifyContent: "space-between", textTransform: "uppercase",
  },
  featTitle: {
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20,
    margin: "0 0 8px 0", letterSpacing: "var(--tracking-wide)",
  },
  featBody: { fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55 },
  footer: {
    position: "relative", zIndex: 1, borderTop: "1px solid var(--border)",
    padding: "24px 48px", display: "flex", justifyContent: "space-between",
    fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
  },
};

function BootTerminal() {
  const initial = [
    { prompt: "$", text: "kunlun boot --node=07", kind: "user" },
    { text: "[ OK ] kernel image verified", kind: "success" },
    { text: "[ OK ] uplink established · 8.4ms", kind: "success" },
    { text: "[ OK ] core-9 spun up · 142.3 MW", kind: "success" },
    { text: "[ .. ] running diagnostics", kind: "muted" },
  ];
  const [lines, setLines] = React.useState(initial);

  React.useEffect(() => {
    const extras = [
      { text: "[ OK ] sector-A relay ok", kind: "success" },
      { text: "[ OK ] sector-B relay ok", kind: "success" },
      { text: "[ WARN ] sector-C latency 14ms", kind: "warn" },
      { text: "[ OK ] all systems nominal", kind: "success" },
      { prompt: "$", text: "kunlun status", kind: "user" },
      { text: "NODE-07 · NOMINAL · uptime 12d 04h", kind: "muted" },
    ];
    let i = 0;
    const id = setInterval(() => {
      if (i >= extras.length) { clearInterval(id); return; }
      setLines(l => [...l, extras[i++]]);
    }, 700);
    return () => clearInterval(id);
  }, []);

  return <Terminal title="kunlun://core-9" lines={lines} showInput={false} height={420} />;
}

function Landing() {
  return (
    <div style={landingStyles.page}>
      <div style={landingStyles.bg} />
      <div style={landingStyles.bgGrid} />

      <nav style={landingStyles.nav}>
        <div style={landingStyles.navLogo}>
          <div style={landingStyles.navMark}>K</div>
          <span style={landingStyles.navWord}>KUNLUN</span>
          <span style={landingStyles.navCjk}>昆 仑</span>
        </div>
        <div style={landingStyles.navLinks}>
          <span>// PRODUCT</span>
          <span>// SYSTEMS</span>
          <span>// DOCS</span>
          <span>// PRICING</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Button variant="ghost" size="sm">SIGN IN</Button>
          <Button size="sm" iconRight={<span>▸</span>}>REQUEST ACCESS</Button>
        </div>
      </nav>

      <section style={landingStyles.hero}>
        <div>
          <div style={landingStyles.eyebrow}>
            <span style={landingStyles.eyebrowTick}>▮</span>
            // CORE-9 ONLINE · v0.1.0 · BUILD 0xA7F3
          </div>
          <h1 style={landingStyles.title}>OPERATIONS<br/>COMPUTE,<br/>RECLAIMED.</h1>
          <div style={landingStyles.cjkTitle}>运 维 计 算 · 重 新 接 管</div>
          <p style={landingStyles.subtitle}>
            KUNLUN is the industrial-grade ops layer for autonomous infrastructure.
            Run reactors, fleets, and data planes from one chamfered, glowing,
            uncompromising terminal.
          </p>
          <div style={landingStyles.ctaRow}>
            <Button size="lg" iconRight={<span>▸</span>}>BOOT THE CORE</Button>
            <Button size="lg" variant="secondary">READ THE WHITEPAPER</Button>
            <span style={landingStyles.ctaMeta}>· no credit card · sector-A access</span>
          </div>
        </div>
        <div>
          <BootTerminal/>
        </div>
      </section>

      <section style={landingStyles.statStrip}>
        <ChartCard label="// CORE OUTPUT" value="142.3" unit="MW" delta="+12.4%"
                   deltaDirection="up" series={[100,110,105,120,132,128,142]}
                   badge={<StatusPill status="online">LIVE</StatusPill>} />
        <ChartCard label="// EDGE LATENCY" value="08.4" unit="ms" delta="-1.2"
                   deltaDirection="down" series={[14,12,13,11,10,9,8.4]} />
        <ChartCard label="// NODES UP" value="218" unit="/ 224" delta="97.3%"
                   deltaDirection="flat" series={[210,215,218,219,217,220,218]} />
        <ChartCard label="// INCIDENTS · 24H" value="03" delta="-2 from yesterday"
                   deltaDirection="down" badge={<Badge variant="warn">REVIEW</Badge>} />
      </section>

      <section style={landingStyles.features}>
        <header style={landingStyles.featuresHead}>
          <h2 style={landingStyles.featuresTitle}>// CAPABILITIES</h2>
          <span style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)" }}>
            ── 04 of 12 surfaced
          </span>
        </header>
        <div style={landingStyles.featGrid}>
          {[
            { idx:"01", id:"CORE-9", title:"Reactor Compute",
              body:"Real-time core orchestration with sub-10ms control loops. Designed for the cold start." },
            { idx:"02", id:"RELAY-X", title:"Sector Relay Mesh",
              body:"Self-healing relay topology across hostile networks. Ships routes when the wire dies." },
            { idx:"03", id:"WATCH-7", title:"Anomaly Watch",
              body:"Continuous statistical monitoring. The amber pulse means look — the red pulse means act." },
            { idx:"04", id:"VAULT-3", title:"Encrypted Telemetry",
              body:"Per-node E2EE telemetry stream with deterministic replay. Audit-grade by default." },
            { idx:"05", id:"LOOM",    title:"Ops Workflows",
              body:"Compose runbooks from declarative steps. Pause, branch, escalate. Humans optional." },
            { idx:"06", id:"GRID-IO", title:"Data Plane API",
              body:"One mono protocol for ingest, query, and replay. Bring your CLI; we bring the surface." },
          ].map(f => (
            <article key={f.idx} style={landingStyles.feat}>
              <div style={landingStyles.featIdx}>
                <span>// {f.idx} · {f.id}</span>
                <span style={{color:"var(--cyan-700)"}}>[+]</span>
              </div>
              <h3 style={landingStyles.featTitle}>{f.title}</h3>
              <p style={landingStyles.featBody}>{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer style={landingStyles.footer}>
        <span>// KUNLUN · 昆仑 · DESIGN SYSTEM v0.1.0</span>
        <span>// 37.5414° N · 112.9180° E · SECTOR-A</span>
        <span>// © 2026 · NODE-07</span>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Landing/>);
