/* ===== seed data ===== */
const seedChannels = [
  { id: "akari", name: "akari · daily", glyph: "灯", avatarKind: "akari", preview: "picking up where we left off — your 14:00 reminder is queued.", unread: 3, time: "14:02", unsaved: true },
  { id: "yoru",  name: "yoru · night log", glyph: "夜", avatarKind: "lamp", preview: "provider returned 429 — retrying in 12s", unread: 0, time: "02:17", errored: true },
  { id: "read",  name: "reading partner", glyph: "読", avatarKind: "warm", preview: "i queued three highlights from \"the glass bead game\"", unread: 0, time: "yest" },
  { id: "scratch", name: "scratch", glyph: "下", avatarKind: "cool", preview: "draft channel — model not selected", unread: 0, time: "3d" },
];

const seedMessages = {
  akari: [
    { from: "them", text: "good morning. coffee, then your 09:30?" },
    { from: "me",   text: "yeah. soft tone today please." },
    { from: "them", text: "softening it. picking up where we left off — your 14:00 reminder is queued. want me to soften the wording?" },
    { from: "me",   text: "yes. and hold it until i'm out of the meeting." },
    { from: "them", text: "held until your 14:30 ends. i'll surface it then." },
  ],
  yoru: [
    { from: "them", text: "can't sleep. one tiny thought, then bed?" },
    { from: "me",   text: "ok. just one." },
  ],
  read: [
    { from: "them", text: "i queued three highlights from \"the glass bead game\" for you. start with the second one." },
  ],
  scratch: [],
};

const seedTimeline = [
  {
    label: "today · 27 may",
    events: [
      { time: "14:02", kind: "now",  title: "akari · daily picked up your thread", sub: "\"the 14:00 reminder is queued — want me to soften it?\"" },
      { time: "13:48", kind: "warm", title: "memory · added \"yoru drinks oat milk\"", sub: "long-term · confidence 0.86" },
      { time: "12:15",                title: "worldbook · \"the small kitchen\" edited", sub: "3 phrases added" },
      { time: "09:02",                title: "good morning", sub: "opened akari · daily, 4 minutes of conversation" },
    ],
  },
  {
    label: "last night · 26 may",
    events: [
      { time: "23:41", kind: "warm", title: "yoru · night log opened", sub: "\"can't sleep. one tiny thought, then bed.\"" },
      { time: "22:50",                title: "proactive · 1 message held", sub: "held by quiet hours · 21:00–07:30" },
      { time: "21:14",                title: "model · switched to claude-haiku-4-5", sub: "cost-cap rule · auto" },
      { time: "20:02",                title: "reading partner · session ended", sub: "3 highlights saved to memory" },
    ],
  },
];

const seedMemory = {
  longTerm: [
    { title: "yoru drinks oat milk", body: "morning coffee is oat-milk flat white. switches to black after 14:00.", confidence: 0.86, added: "today", recalled: 4 },
    { title: "afternoon reminders should be soft", body: "yoru prefers low-key wording on reminders that interrupt deep work.", confidence: 0.74, added: "3d ago", recalled: 11 },
    { title: "reading partner: glass bead game", body: "currently reading hesse · the glass bead game. ~120 pages in.", confidence: 0.92, added: "1w ago", recalled: 2 },
  ],
  shortTerm: [
    { title: "today's plan", body: "09:30 standup · 14:00 1:1 with renee · 16:00 design review.", tokens: 84 },
    { title: "open thread", body: "deciding whether to surface the 14:00 reminder during the 14:30 meeting.", tokens: 41 },
  ],
};

const seedLogs = [
  { id: "l1", time: "14:02:18", kind: "message", label: "akari · daily", right: "412ms · 1.2k tok", fields: [
    { k: "provider", v: "anthropic" },
    { k: "model", v: "claude-sonnet-4-5" },
    { k: "tokens", v: "1,284 / 200,000" },
    { k: "cost", v: "$0.0046" },
  ]},
  { id: "l2", time: "14:01:50", kind: "tool", label: "search_memory", right: "84ms · 6 hits", fields: [
    { k: "tool", v: "search_memory" },
    { k: "query", v: "\"14:00 reminder\"" },
    { k: "hits", v: "6" },
  ]},
  { id: "l3", time: "13:58:02", kind: "message", label: "yoru · night log", right: "provider 429", error: true, fields: [
    { k: "provider", v: "anthropic" },
    { k: "model", v: "claude-sonnet-4-5" },
    { k: "status", v: "429 rate_limit · retrying 12s", err: true },
    { k: "retries", v: "2 / 5" },
  ]},
  { id: "l4", time: "13:55:30", kind: "proactive", label: "queued", right: "held · quiet hours", fields: [
    { k: "channel", v: "yoru · night log" },
    { k: "reason", v: "quiet hours 21:00 – 07:30" },
  ]},
];

const seedSettings = {
  model: "claude-sonnet-4-5",
  temperature: 0.72,
  proactive: true,
  stream: false,
  tools: ["search_memory", "calendar_read", "remind"],
  quietHours: "21:00 – 07:30",
  guard: true,
  costCap: 4.50,
  logCount: 124,
  errorCount: 1,
  providerCount: 2,
  unsaved: true,
  savedAt: "14:02",
};

const seedProviders = [
  { id: "anthropic", short: "AN", name: "anthropic", detail: "claude-sonnet-4-5 · 200k ctx · connected", status: "ok" },
  { id: "openai",    short: "OA", name: "openai",    detail: "gpt-4.1 · 128k ctx · connected", status: "ok" },
  { id: "deepseek",  short: "DS", name: "deepseek",  detail: "deepseek-chat · 64k ctx · key invalid", status: "err" },
  { id: "local",     short: "LO", name: "local · ollama", detail: "qwen2.5 · 32k ctx · draft", status: "draft" },
];

/* ===== app ===== */
function App() {
  const [theme, setTheme] = React.useState("akari");
  const [tab, setTab] = React.useState("chat");
  const [channelId, setChannelId] = React.useState("akari");
  const [channels, setChannels] = React.useState(seedChannels);
  const [messagesByChannel, setMessages] = React.useState(seedMessages);
  const [settings, setSettings] = React.useState(seedSettings);
  const [providerOpen, setProviderOpen] = React.useState(false);
  const [activeProvider, setActiveProvider] = React.useState("anthropic");
  const [toast, setToast] = React.useState(null);
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 980);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  React.useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 980);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const channel = channels.find(c => c.id === channelId) || channels[0];
  const messages = messagesByChannel[channelId] || [];

  const onSend = (text, done) => {
    setMessages(prev => ({ ...prev, [channelId]: [...(prev[channelId] || []), { from: "me", text }] }));
    setTimeout(() => {
      const replies = {
        akari: "got it — i'll keep it soft.",
        yoru:  "alright. close your eyes for ten.",
        read:  "noted. i'll resurface this when you open the book.",
        scratch: "this channel has no model set yet. open console → model to pick one.",
      };
      setMessages(prev => ({ ...prev, [channelId]: [...(prev[channelId] || []), { from: "them", text: replies[channelId] || "ok." }] }));
      done && done();
    }, 900);
  };

  const onSettingsChange = (k, v) => {
    setSettings(s => ({ ...s, [k]: v, unsaved: true }));
  };

  const onSave = () => {
    setSettings(s => ({ ...s, unsaved: false, savedAt: new Date().toTimeString().slice(0,5) }));
    setToast("saved");
  };

  const onPickChannel = (id) => {
    setChannelId(id);
    if (isDesktop) return;
    setTab("chat");
  };

  /* ===== body content for the right pane / mobile body ===== */
  const Body = () => {
    if (tab === "chat") {
      return <ChatView channel={channel} messages={messages} onSend={onSend} onOpenChannelSheet={() => {}} />;
    }
    if (tab === "timeline") {
      return <div className="scroll-body"><Timeline days={seedTimeline} /></div>;
    }
    if (tab === "memory") {
      return <div className="scroll-body"><MemoryView longTerm={seedMemory.longTerm} shortTerm={seedMemory.shortTerm} /></div>;
    }
    if (tab === "console") {
      return (
        <div className="scroll-body">
          <ConsoleView
            channel={channel}
            settings={settings}
            onChange={onSettingsChange}
            onSave={onSave}
            onOpenProvider={() => setProviderOpen(true)}
            onOpenLogs={() => setTab("logs")}
          />
        </div>
      );
    }
    if (tab === "logs") {
      return (
        <div className="scroll-body">
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <IconButton name="chevron-left" onClick={() => setTab("console")} />
            <span style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 500 }}>back to console</span>
          </div>
          <LogsDrawer logs={seedLogs} />
        </div>
      );
    }
    return null;
  };

  const titleByTab = {
    chat:     channel.name,
    timeline: "timeline",
    memory:   "memory",
    console:  "console",
    logs:     "logs",
  };
  const glyphByTab = {
    chat: channel.glyph,
  };

  return (
    <div className={`app-root ${isDesktop ? "desktop" : ""}`}>
      <div className="phone" data-theme={theme}>
        <div className="phone-screen">
          {!isDesktop && <StatusBar theme={theme} />}
          <TopBar
            title={titleByTab[tab]}
            glyph={glyphByTab[tab]}
            theme={theme}
            onToggleTheme={() => setTheme(t => t === "akari" ? "yoru" : "akari")}
            onOpenSheet={tab === "chat" ? () => {} : null}
            trailing={tab === "chat" ? <IconButton name="more-horizontal" /> : null}
          />

          {isDesktop ? (
            <div className="scroll-body split">
              <div className="left-pane">
                <ChannelList channels={channels} activeId={channelId} onPick={onPickChannel} onNew={() => {}} />
              </div>
              <div className={`right-pane ${tab === "chat" ? "with-composer" : ""}`}>
                {tab === "chat" ? (
                  <ChatView channel={channel} messages={messages} onSend={onSend} />
                ) : tab === "timeline" ? <Timeline days={seedTimeline} />
                  : tab === "memory" ? <MemoryView longTerm={seedMemory.longTerm} shortTerm={seedMemory.shortTerm} />
                  : tab === "logs" ? <LogsDrawer logs={seedLogs} />
                  : <ConsoleView channel={channel} settings={settings} onChange={onSettingsChange} onSave={onSave} onOpenProvider={() => setProviderOpen(true)} onOpenLogs={() => setTab("logs")} />}
              </div>
            </div>
          ) : (
            <>
              {/* Mobile: chat shows ChannelList in a slide-out? for simplicity, top-of-chat shows channel switcher pills */}
              {tab === "chat" ? (
                <Body />
              ) : tab === "channels" ? (
                <div className="scroll-body">
                  <ChannelList channels={channels} activeId={channelId} onPick={onPickChannel} onNew={() => {}} />
                </div>
              ) : <Body />}
            </>
          )}

          <TabBar active={tab === "logs" ? "console" : tab} onChange={setTab} />

          <ProviderSheet
            open={providerOpen}
            providers={seedProviders}
            activeId={activeProvider}
            onPick={(id) => { setActiveProvider(id); setSettings(s => ({ ...s, model: id === "anthropic" ? "claude-sonnet-4-5" : id === "openai" ? "gpt-4.1" : id === "deepseek" ? "deepseek-chat" : "qwen2.5", unsaved: true })); }}
            onClose={() => setProviderOpen(false)}
          />

          {toast && <Toast onClose={() => setToast(null)}>{toast} · {new Date().toTimeString().slice(0,5)}</Toast>}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
