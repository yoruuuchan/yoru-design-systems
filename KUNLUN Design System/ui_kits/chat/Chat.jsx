// KUNLUN — AI Chat (operator ↔ MOSS-class agent)
const KL = window.KUNLUNDesignSystem_29e6df;
const { Button, IconButton, Input, Textarea, Avatar, Badge, StatusPill,
        Loading, Tag, CodeBlock, Tooltip } = KL;

const chatStyles = {
  page: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    height: "100vh",
    background: "var(--bg-base)", color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
  },
  side: {
    background: "var(--bg-void)", borderRight: "1px solid var(--border)",
    display: "flex", flexDirection: "column", overflow: "hidden",
  },
  sideHead: {
    padding: "14px 16px", borderBottom: "1px solid var(--border)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
  },
  brand: { display: "flex", alignItems: "center", gap: 10 },
  mark: {
    width: 24, height: 24, background: "var(--cyan-500)", color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)", display: "grid", placeItems: "center",
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 12,
    boxShadow: "var(--glow-cyan-sm)",
  },
  brandWord: {
    fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14,
    letterSpacing: "var(--tracking-widest)",
  },
  search: { padding: "10px 12px", borderBottom: "1px solid var(--border)" },
  convo: { flex: 1, overflowY: "auto", padding: "8px 6px" },
  convoLabel: {
    fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase", padding: "12px 12px 6px",
  },
  item: {
    display: "flex", flexDirection: "column", gap: 4,
    padding: "8px 10px", margin: "1px 4px",
    borderLeft: "2px solid transparent",
    cursor: "pointer", fontSize: 12,
    transition: "var(--transition-base)",
    clipPath: "var(--clip-chamfer-sm)",
  },
  itemActive: { background: "var(--bg-elevated)", borderLeftColor: "var(--cyan-500)",
                boxShadow: "inset 0 0 12px rgba(0,184,255,0.06)" },
  itemTitle: { fontSize: 12, color: "var(--text-primary)", lineHeight: 1.35,
               overflow: "hidden", textOverflow: "ellipsis",
               display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" },
  itemMeta: { fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)",
              display: "flex", justifyContent: "space-between" },
  sideFoot: {
    padding: "10px 12px", borderTop: "1px solid var(--border)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    fontSize: 10, color: "var(--text-tertiary)", letterSpacing: "var(--tracking-wide)",
  },

  main: { display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" },
  topbar: {
    padding: "12px 24px", borderBottom: "1px solid var(--border)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "rgba(13, 19, 32, 0.6)", backdropFilter: "blur(6px)",
  },
  thread: { display: "flex", flexDirection: "column", gap: 6 },
  threadTitle: { fontFamily: "var(--font-display)", fontWeight: 700,
                 fontSize: 16, letterSpacing: "var(--tracking-wide)" },
  threadMeta: { fontSize: 10, color: "var(--text-tertiary)",
                letterSpacing: "var(--tracking-wider)", textTransform: "uppercase" },
  chat: { flex: 1, overflowY: "auto", padding: "32px 80px",
          display: "flex", flexDirection: "column", gap: 28, position: "relative" },
  msgRow: { display: "grid", gridTemplateColumns: "36px 1fr", gap: 14, alignItems: "flex-start" },
  msgMeta: { display: "flex", gap: 10, alignItems: "baseline", marginBottom: 6,
             fontSize: 10, color: "var(--text-tertiary)",
             letterSpacing: "var(--tracking-wider)", textTransform: "uppercase" },
  msgWho: { color: "var(--cyan-300)", textShadow: "var(--text-glow-cyan)", fontWeight: 600 },
  msgBody: { fontSize: 14, color: "var(--text-primary)", lineHeight: 1.65 },
  msgBodyUser: { color: "var(--neutral-100)" },
  msgBodyAi: { color: "var(--text-secondary)" },

  composer: {
    margin: "0 80px 24px", padding: 16, position: "relative",
    background: "var(--bg-panel)", border: "1px solid var(--cyan-700)",
    clipPath: "var(--clip-chamfer-md)", boxShadow: "var(--glow-cyan-sm)",
    display: "flex", flexDirection: "column", gap: 10,
  },
  composerInput: {
    width: "100%", background: "transparent", border: "none", outline: "none",
    color: "var(--text-primary)", fontFamily: "var(--font-mono)", fontSize: 14,
    lineHeight: 1.55, minHeight: 56, resize: "none",
  },
  composerFoot: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    paddingTop: 8, borderTop: "1px dashed var(--border)",
  },
  composerHint: { fontSize: 10, color: "var(--text-tertiary)",
                  letterSpacing: "var(--tracking-wide)", textTransform: "uppercase" },
};

const seedConvos = [
  { id:"c1", title:"Reactor anomaly · NODE-07 coolant",   ts:"21:04", n:24, active:true },
  { id:"c2", title:"Draft runbook for sector-B failover", ts:"19:32", n:8 },
  { id:"c3", title:"Why is the edge latency creeping up?", ts:"18:01", n:14 },
  { id:"c4", title:"// MOSS, summarize today's incidents", ts:"yesterday", n:6 },
  { id:"c5", title:"Telemetry schema review",            ts:"yesterday", n:11 },
  { id:"c6", title:"Patch notes draft — v0.1.1",         ts:"Mon", n:3 },
];

const seedMessages = [
  { who:"user", at:"21:04:32",
    body:"MOSS, telemetry says NODE-07 coolant dropped to 87%. Walk me through the failure mode." },
  { who:"agent", at:"21:04:35",
    body:"Acknowledged, operator. Based on the last 4h of pump data, the most likely cause is a partial blockage in feed-line C2 — the inlet pressure has been climbing in lockstep with the flow drop.",
    blocks:[
      { kind:"code", lang:"telemetry", code:"NODE-07 · pump-C2\n  inlet_psi:  142  →  158\n  flow_lpm:  920  →  802\n  temp_c:   68.4 → 71.1" }
    ],
    tags:["sector-A","NODE-07","reactor"]
  },
  { who:"user", at:"21:05:01",
    body:"Recommended action?" },
  { who:"agent", at:"21:05:02",
    body:"Initiate a soft purge of feed-line C2 — 30 second backflush at 60% pressure, no shutdown required. If flow does not recover within 2 minutes, escalate to a full lockout-tagout and dispatch the SECTOR-A crew.",
    suggested:[
      "Initiate soft purge on C2",
      "Open a SEV-3 ticket",
      "Page the SECTOR-A on-call",
    ]
  },
];

function ConvoItem({ c, active, onClick }) {
  return (
    <div style={{...chatStyles.item, ...(active ? chatStyles.itemActive : {})}} onClick={onClick}>
      <span style={chatStyles.itemTitle}>{c.title}</span>
      <span style={chatStyles.itemMeta}>
        <span>{c.ts}</span><span>{c.n} msgs</span>
      </span>
    </div>
  );
}

function Message({ m }) {
  const isUser = m.who === "user";
  return (
    <div style={chatStyles.msgRow}>
      {isUser
        ? <Avatar initials="OP" size="md" />
        : <Avatar size="md" style={{borderColor:"var(--amber-700)", color:"var(--amber-300)"}}>M</Avatar>}
      <div>
        <div style={chatStyles.msgMeta}>
          <span style={{...chatStyles.msgWho, color: isUser ? "var(--cyan-300)" : "var(--amber-300)",
                        textShadow: isUser ? "var(--text-glow-cyan)" : "var(--text-glow-amber)"}}>
            {isUser ? "OPERATOR · OP-07" : "MOSS · v0.1.0"}
          </span>
          <span>{m.at}</span>
          {!isUser && <Badge variant="signal">AGENT</Badge>}
        </div>
        <div style={{...chatStyles.msgBody, ...(isUser ? chatStyles.msgBodyUser : chatStyles.msgBodyAi)}}>
          {m.body}
        </div>
        {m.blocks?.map((b, i) => (
          <div key={i} style={{marginTop:12}}>
            <CodeBlock code={b.code} lang={b.lang} showLineNumbers={false} />
          </div>
        ))}
        {m.tags && (
          <div style={{display:"flex", gap:6, marginTop:10}}>
            {m.tags.map(t => <Tag key={t} variant="accent">{t}</Tag>)}
          </div>
        )}
        {m.suggested && (
          <div style={{display:"flex", flexWrap:"wrap", gap:8, marginTop:14}}>
            {m.suggested.map(s => (
              <Button key={s} variant="secondary" size="sm">{s}</Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Chat() {
  const [convos] = React.useState(seedConvos);
  const [activeId, setActiveId] = React.useState("c1");
  const [messages, setMessages] = React.useState(seedMessages);
  const [draft, setDraft] = React.useState("");
  const [thinking, setThinking] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking]);

  const send = (e) => {
    e?.preventDefault?.();
    if (!draft.trim()) return;
    const at = new Date().toTimeString().slice(0,8);
    setMessages(m => [...m, { who:"user", at, body: draft }]);
    setDraft("");
    setThinking(true);
    setTimeout(() => {
      setMessages(m => [...m, { who:"agent", at: new Date().toTimeString().slice(0,8),
        body:"Copy that. Standing by to execute. Confirm the purge window and I will dispatch the command." }]);
      setThinking(false);
    }, 1200);
  };

  return (
    <div style={chatStyles.page}>
      {/* SIDEBAR */}
      <aside style={chatStyles.side}>
        <div style={chatStyles.sideHead}>
          <div style={chatStyles.brand}>
            <div style={chatStyles.mark}>K</div>
            <span style={chatStyles.brandWord}>KUNLUN</span>
          </div>
          <Tooltip label="NEW THREAD">
            <IconButton label="New" size="sm">＋</IconButton>
          </Tooltip>
        </div>
        <div style={chatStyles.search}>
          <Input prefix="⌕" placeholder="search threads..." size="sm" />
        </div>
        <div style={chatStyles.convo}>
          <div style={chatStyles.convoLabel}>// TODAY</div>
          {convos.slice(0, 3).map(c => (
            <ConvoItem key={c.id} c={c} active={activeId === c.id} onClick={() => setActiveId(c.id)} />
          ))}
          <div style={chatStyles.convoLabel}>// EARLIER</div>
          {convos.slice(3).map(c => (
            <ConvoItem key={c.id} c={c} active={activeId === c.id} onClick={() => setActiveId(c.id)} />
          ))}
        </div>
        <div style={chatStyles.sideFoot}>
          <div style={{display:"flex", alignItems:"center", gap:8}}>
            <Avatar initials="OP" size="sm" />
            <span>OPERATOR-07</span>
          </div>
          <span>▸</span>
        </div>
      </aside>

      {/* MAIN */}
      <main style={chatStyles.main}>
        <header style={chatStyles.topbar}>
          <div style={chatStyles.thread}>
            <span style={chatStyles.threadTitle}>// Reactor anomaly · NODE-07 coolant</span>
            <span style={chatStyles.threadMeta}>
              MOSS-CLASS AGENT · v0.1.0 · 24 MESSAGES · STARTED 19:54:01
            </span>
          </div>
          <div style={{display:"flex", gap:8, alignItems:"center"}}>
            <StatusPill status="online">AGENT ONLINE</StatusPill>
            <Tooltip label="EXPORT"><IconButton label="Export" variant="ghost">↧</IconButton></Tooltip>
            <Tooltip label="ARCHIVE"><IconButton label="Archive" variant="ghost">⌬</IconButton></Tooltip>
          </div>
        </header>

        <div style={chatStyles.chat} ref={scrollRef}>
          {messages.map((m, i) => <Message key={i} m={m} />)}
          {thinking && (
            <div style={chatStyles.msgRow}>
              <Avatar size="md" style={{borderColor:"var(--amber-700)", color:"var(--amber-300)"}}>M</Avatar>
              <div>
                <div style={chatStyles.msgMeta}>
                  <span style={{...chatStyles.msgWho, color: "var(--amber-300)", textShadow:"var(--text-glow-amber)"}}>MOSS · v0.1.0</span>
                  <span>thinking...</span>
                </div>
                <Loading label="// PROCESSING TELEMETRY" />
              </div>
            </div>
          )}
        </div>

        <form style={chatStyles.composer} onSubmit={send}>
          <textarea
            style={chatStyles.composerInput}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) send(e); }}
            placeholder="// MESSAGE MOSS · Enter to send · Shift+Enter for newline"
            rows={2}
            autoFocus
          />
          <div style={chatStyles.composerFoot}>
            <div style={{display:"flex", gap:8, alignItems:"center"}}>
              <IconButton label="Attach" size="sm" variant="ghost">⌘</IconButton>
              <IconButton label="Slash command" size="sm" variant="ghost">/</IconButton>
              <span style={chatStyles.composerHint}>· MODEL: MOSS-V0.1 · CONTEXT: SECTOR-A</span>
            </div>
            <Button type="submit" size="md" iconRight={<span>▸</span>}
                    disabled={!draft.trim() || thinking}>
              {thinking ? "SENDING..." : "DISPATCH"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Chat/>);
