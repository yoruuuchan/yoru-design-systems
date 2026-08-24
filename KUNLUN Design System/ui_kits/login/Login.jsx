// KUNLUN — Login / Access screen

const KL = window.KUNLUNDesignSystem_29e6df;
const { Button, Input, Panel, StatusPill, ProgressBar, Loading } = KL;

const loginStyles = {
  page: {
    minHeight: "100vh", display: "grid", placeItems: "center", padding: 24,
    background: "var(--bg-base)", color: "var(--text-primary)",
    fontFamily: "var(--font-mono)", position: "relative", overflow: "hidden",
  },
  bg: {
    position: "absolute", inset: 0,
    background: "radial-gradient(ellipse at center, rgba(0,184,255,0.12), transparent 60%)",
    pointerEvents: "none",
  },
  bgGrid: {
    position: "absolute", inset: 0, opacity: 0.4,
    backgroundImage: "var(--bg-grid)",
    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
    pointerEvents: "none",
  },
  scanlines: {
    position: "absolute", inset: 0, pointerEvents: "none",
    background: "var(--bg-scanlines)",
  },
  shell: {
    position: "relative", zIndex: 1,
    width: "min(520px, 100%)",
    display: "flex", flexDirection: "column", gap: 20,
  },
  brand: {
    display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
    marginBottom: 4,
  },
  brandMark: {
    width: 56, height: 56, background: "var(--cyan-500)", color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)", display: "grid", placeItems: "center",
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28,
    boxShadow: "var(--glow-cyan-md)", marginBottom: 4,
  },
  brandWord: {
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 32,
    letterSpacing: "var(--tracking-widest)", color: "var(--neutral-50)",
    textShadow: "var(--text-glow-cyan)",
  },
  brandCjk: {
    fontFamily: '"Noto Sans SC", sans-serif', fontSize: 13,
    color: "var(--cyan-300)", letterSpacing: "0.6em",
  },
  brandMeta: { fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wider)" },
  footer: {
    display: "flex", justifyContent: "space-between", fontSize: 10,
    color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase", padding: "0 4px",
  },
  asciiTop: {
    fontFamily: "var(--font-mono)", color: "var(--cyan-700)", fontSize: 11,
    letterSpacing: 4, textAlign: "center", marginBottom: -8,
  },
  field: { display: "flex", flexDirection: "column", gap: 4 },
  caps: {
    fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase", marginTop: 16,
  },
};

function Login() {
  const [stage, setStage] = React.useState("ready"); // ready | auth | failed | ok
  const [nodeId, setNodeId] = React.useState("07-A-7F");
  const [key, setKey] = React.useState("");
  const [error, setError] = React.useState("");

  const submit = (e) => {
    e?.preventDefault?.();
    if (!key) { setError("Access key required."); return; }
    setError("");
    setStage("auth");
    setTimeout(() => {
      if (key.toLowerCase() === "kunlun") setStage("ok");
      else { setStage("failed"); setError("UNAUTHORIZED · CODE 0xE1"); }
    }, 1400);
  };

  const reset = () => { setStage("ready"); setKey(""); setError(""); };

  return (
    <div style={loginStyles.page}>
      <div style={loginStyles.bg}/>
      <div style={loginStyles.bgGrid}/>
      <div style={loginStyles.scanlines}/>

      <div style={loginStyles.shell}>
        <div style={loginStyles.brand}>
          <div style={loginStyles.brandMark}>K</div>
          <div style={loginStyles.brandWord}>KUNLUN</div>
          <div style={loginStyles.brandCjk}>昆 仑</div>
          <div style={loginStyles.brandMeta}>// CORE-9 · OPERATIONS COMPUTE</div>
        </div>

        <div style={loginStyles.asciiTop}>┌─────── ACCESS CONTROL ───────┐</div>

        <Panel
          variant={stage === "failed" ? "danger" : "signal"}
          title={stage === "ok" ? "ACCESS GRANTED" : "AUTHENTICATE"}
          meta={stage === "ok" ? "WELCOME, OPERATOR" : "NODE-07 · SECTOR-A"}
          actions={<StatusPill status={
              stage === "ok" ? "online" : stage === "auth" ? "busy" :
              stage === "failed" ? "error" : "idle"}>
            {stage === "ok" ? "ONLINE" : stage === "auth" ? "AUTHING" :
             stage === "failed" ? "DENIED" : "READY"}
          </StatusPill>}
          footer={<>
            <span>{stage === "auth" ? "// HANDSHAKE IN PROGRESS" : stage === "ok" ? "// SESSION ESTABLISHED" : "// AWAITING INPUT"}</span>
            <span>{new Date().toISOString().slice(0,19).replace("T", " ")}</span>
          </>}
        >
          {stage === "ok" ? (
            <div style={{padding:"12px 0", display:"flex", flexDirection:"column", gap:12}}>
              <div style={{fontSize:14, color:"var(--text-signal)", textShadow:"var(--text-glow-cyan)"}}>
                &gt; HANDSHAKE OK
              </div>
              <div style={{fontSize:13, color:"var(--text-secondary)", lineHeight:1.6}}>
                Operator <span style={{color:"var(--cyan-300)"}}>OP-{nodeId}</span> authorized.
                Boot sequence complete. Redirecting to core dashboard.
              </div>
              <ProgressBar variant="success" label="REDIRECT" value={100} />
              <div style={{display:"flex", gap:10, marginTop:8}}>
                <Button onClick={reset} variant="ghost">LOG OUT</Button>
                <Button iconRight={<span>▸</span>}>ENTER CORE</Button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} style={{display:"flex", flexDirection:"column", gap:14, padding:"4px 0"}}>
              <Input label="NODE ID" value={nodeId}
                     onChange={(e) => setNodeId(e.target.value)}
                     prefix="▣" disabled={stage === "auth"} />
              <Input label="ACCESS KEY" type="password" value={key}
                     onChange={(e) => setKey(e.target.value)}
                     placeholder="•••••••••••••"
                     error={stage === "failed" ? error : undefined}
                     disabled={stage === "auth"}
                     suffix={<span style={{cursor:"pointer"}}>▢</span>} />
              <div style={loginStyles.caps}>// HINT: try "kunlun"</div>

              {stage === "auth" ? (
                <div style={{padding:"4px 0"}}>
                  <Loading label="// ESTABLISHING UPLINK" />
                  <div style={{marginTop:10}}>
                    <ProgressBar indeterminate label="HANDSHAKE" />
                  </div>
                </div>
              ) : (
                <div style={{display:"flex", gap:10, marginTop:4}}>
                  <Button variant="ghost" type="button">REQUEST KEY</Button>
                  <Button type="submit" iconRight={<span>▸</span>} fullWidth>AUTHENTICATE</Button>
                </div>
              )}
            </form>
          )}
        </Panel>

        <div style={loginStyles.footer}>
          <span>// AES-256 · TLS 1.3</span>
          <span>// 37.5414° N · 112.9180° E</span>
          <span>// v0.1.0</span>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Login/>);
