function ChatView({ channel, messages, onSend, onOpenChannelSheet }) {
  const [draft, setDraft] = React.useState("");
  const [pending, setPending] = React.useState(false);
  const scrollRef = React.useRef(null);
  const taRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, pending]);

  const submit = () => {
    const t = draft.trim();
    if (!t || pending) return;
    setDraft("");
    setPending(true);
    onSend(t, () => setPending(false));
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); }
  };

  return (
    <>
      <div className="scroll-body chat-body" ref={scrollRef} style={{ bottom: 156 }}>
        <SectionHeader meta="today · 27 may">conversation</SectionHeader>
        {messages.map((m, i) => (
          <div key={i} className={`bubble-row ${m.from === "me" ? "me" : ""}`}>
            <div className={`bubble ${m.from === "me" ? "me" : "them"} ${m.streaming ? "streaming" : ""}`}>{m.text}</div>
          </div>
        ))}
        {pending && (
          <div className="bubble-row">
            <div className="typing"><span /><span /><span /></div>
          </div>
        )}
      </div>
      <div className="composer">
        <textarea
          ref={taRef}
          className="composer-input"
          placeholder={`message ${channel.name}`}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKey}
          rows={1}
        />
        <IconButton name="plus" title="attach" />
        <button className="send" onClick={submit} disabled={!draft.trim() || pending}>
          <Icon name="arrow-up" size={16} stroke={2.4} />
        </button>
      </div>
    </>
  );
}

Object.assign(window, { ChatView });
