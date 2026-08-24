function ChannelList({ channels, activeId, onPick, onNew }) {
  return (
    <div>
      <SectionHeader meta={`${channels.length} channels`}>channels</SectionHeader>
      {channels.map(c => (
        <button
          key={c.id}
          className={`channel-card ${activeId === c.id ? "selected" : ""}`}
          onClick={() => onPick(c.id)}
        >
          <Avatar kind={c.avatarKind || "akari"} glyph={c.glyph} />
          <div className="meta">
            <div className="nm">
              {c.name}
              {c.unsaved && <Dot kind="warn" title="unsaved changes" />}
              {c.errored && <Dot kind="err" title="provider error" />}
            </div>
            <div className="pre">{c.preview}</div>
          </div>
          <div className="side">
            {c.unread > 0 && <span className="unread">{c.unread}</span>}
            <span>{c.time}</span>
          </div>
        </button>
      ))}
      <button className="btn ghost" style={{ width: "100%", justifyContent: "center", marginTop: 6 }} onClick={onNew}>
        <Icon name="plus" size={14} stroke={2} /> new channel
      </button>
    </div>
  );
}

Object.assign(window, { ChannelList });
