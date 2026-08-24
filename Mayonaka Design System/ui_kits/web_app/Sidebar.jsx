// MidnightFM web UI kit — composed view, uses design system primitives.
function Sidebar({ active, onNav }) {
  const items = [
    { key: "home",    label: "HOME",     jp: "ホーム",   icon: "radio" },
    { key: "browse",  label: "BROWSE",   jp: "見つける", icon: "compass" },
    { key: "library", label: "LIBRARY",  jp: "ライブラリ", icon: "library" },
    { key: "radio",   label: "RADIO",    jp: "放送",     icon: "antenna" },
    { key: "mixes",   label: "MIXES",    jp: "ミックス", icon: "disc-3" },
  ];
  const playlists = ["夜の高速 / NIGHT DRIVE", "雨と街 / RAIN+CITY", "DEEP CUTS '84", "MALL ENERGY", "DOWNTEMPO 808"];
  return (
    <aside style={{
      width: 240, background: "var(--bg-void)", borderRight: "2px solid var(--border-default)",
      padding: "20px 0", display: "flex", flexDirection: "column", height: "100vh", boxSizing: "border-box",
      fontFamily: "var(--font-body)", color: "var(--text-secondary)", flexShrink: 0,
    }}>
      <div style={{ padding: "0 20px 20px", borderBottom: "1px solid var(--border-default)", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 40, height: 40, border: "3px solid var(--magenta)",
            animation: "mnk-pulse-magenta 2.4s ease-in-out infinite",
            display: "grid", placeItems: "center", fontFamily: "var(--font-jp)", fontSize: 22,
            color: "var(--magenta)", textShadow: "var(--text-glow-magenta)", background: "var(--bg-void)",
          }}>夜</div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: ".18em", color: "var(--text-primary)" }}>MIDNIGHT FM</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)" }}>// 88.3 — on air</div>
          </div>
        </div>
      </div>

      <nav style={{ padding: "0 12px", display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map(it => {
          const on = active === it.key;
          return (
            <button key={it.key} onClick={() => onNav(it.key)} style={{
              all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
              padding: "10px 12px",
              background: on ? "var(--bg-card)" : "transparent",
              borderLeft: on ? "3px solid var(--magenta)" : "3px solid transparent",
              color: on ? "var(--text-primary)" : "var(--text-secondary)",
            }}>
              <i data-lucide={it.icon} style={{ width: 16, height: 16, color: on ? "var(--magenta)" : "var(--text-muted)" }}></i>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: ".16em" }}>{it.label}</span>
              <span style={{ fontFamily: "var(--font-jp)", fontSize: 12, marginLeft: "auto", color: "var(--text-muted)" }}>{it.jp}</span>
            </button>
          );
        })}
      </nav>

      <div style={{ padding: "24px 20px 8px", fontFamily: "var(--font-display)", fontSize: 8, letterSpacing: ".2em", color: "var(--text-muted)" }}>
        // YOUR MIXTAPES_
      </div>
      <div style={{ padding: "0 12px", overflowY: "auto", flex: 1 }}>
        {playlists.map((p, i) => (
          <div key={i} style={{ padding: "8px 12px", fontSize: 14, color: "var(--text-secondary)", cursor: "pointer", borderLeft: "3px solid transparent" }}>
            ▸ {p}
          </div>
        ))}
      </div>

      <div style={{ padding: 16, borderTop: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 28, height: 28, background: "var(--grad-trans)" }}></div>
        <div style={{ fontSize: 14 }}>
          <div style={{ color: "var(--text-primary)" }}>user_2049</div>
          <div style={{ color: "var(--text-muted)", fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: ".15em" }}>PREMIUM</div>
        </div>
      </div>
    </aside>
  );
}

window.MNK_Sidebar = Sidebar;
