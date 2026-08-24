// Now-playing right rail + transport bar
function NowPlayingRail({ track, playing, onToggle, progress, onSeek }) {
  return (
    <aside style={{
      width: 320, background: "var(--bg-void)", borderLeft: "2px solid var(--border-default)",
      padding: 20, display: "flex", flexDirection: "column", gap: 16, flexShrink: 0,
      fontFamily: "var(--font-body)", color: "var(--text-primary)",
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: ".18em", color: "var(--text-muted)" }}>// NOW PLAYING_</div>

      <div style={{
        width: "100%", aspectRatio: "1 / 1", border: "2px solid var(--magenta)",
        animation: "mnk-pulse-magenta 3.2s ease-in-out infinite",
        background: "var(--grad-bipolar)", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,.3) 3px 4px)",
          pointerEvents: "none",
        }}></div>
        <div style={{ position: "absolute", left: 14, top: 14, color: "#fff", fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: ".2em", textShadow: "0 0 6px rgba(0,0,0,.8)" }}>MIXTAPE — A1</div>
        <div style={{ position: "absolute", right: 14, top: 14, fontFamily: "var(--font-jp)", fontSize: 22, color: "#fff", textShadow: "0 0 8px rgba(0,0,0,.7)" }}>夜景</div>
        <div style={{
          position: "absolute", left: "50%", top: "40%", transform: "translate(-50%,-50%)",
          width: 120, height: 120, borderRadius: "50%",
          background: "radial-gradient(circle, #ffcc66 0%, #ff71ce 55%, #ff2bd6 100%)",
          boxShadow: "0 0 60px rgba(255,113,206,.7)",
          animation: "mnk-sun-spin 12s linear infinite",
        }}></div>
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0, height: "45%",
          background:
            "linear-gradient(transparent 0,transparent calc(100% - 2px),var(--magenta) 100%)," +
            "repeating-linear-gradient(90deg, transparent 0 calc(8% - 2px), var(--magenta) calc(8% - 2px) 8%)," +
            "repeating-linear-gradient(0deg, transparent 0 calc(16% - 2px), var(--magenta) calc(16% - 2px) 16%)",
          transform: "perspective(180px) rotateX(60deg)", transformOrigin: "bottom",
        }}></div>
      </div>

      <div>
        <div style={{ fontFamily: "var(--font-jp)", fontSize: 22, color: "var(--text-primary)" }}>{track.titleJp}</div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: ".14em", color: "var(--cyan)", marginTop: 4, textShadow: "var(--text-glow-cyan)" }}>{track.title}</div>
        <div style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 6 }}>{track.artist}  ／  {track.album}</div>
      </div>

      <Progress value={progress} variant="cyan" label={"TIME // " + fmt(progress * 2.4) + " / " + fmt(240)} />

      <div style={{ display: "flex", gap: 10, justifyContent: "center", padding: "4px 0" }}>
        <IconBtn icon="shuffle" />
        <IconBtn icon="skip-back" />
        <button onClick={onToggle} style={{
          width: 56, height: 56, border: "2px solid var(--magenta)", background: "var(--magenta)",
          color: "var(--void)", cursor: "pointer", boxShadow: "var(--shadow-pixel), var(--glow-magenta-sm)",
          display: "grid", placeItems: "center",
        }}><i data-lucide={playing ? "pause" : "play"} style={{ width: 24, height: 24 }}></i></button>
        <IconBtn icon="skip-forward" />
        <IconBtn icon="repeat" />
      </div>

      <div style={{ borderTop: "1px solid var(--border-default)", paddingTop: 12 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 8, letterSpacing: ".2em", color: "var(--text-muted)", marginBottom: 8 }}>// UP NEXT_</div>
        {[
          { t: "雨と灯", a: "T. Sugiyama", d: "3:48" },
          { t: "Plastic Love", a: "Mariya T.", d: "4:52" },
          { t: "Stay With Me", a: "Miki M.", d: "4:31" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 15 }}>
            <div>
              <span style={{ color: "var(--text-muted)", fontFamily: "var(--font-display)", fontSize: 9, marginRight: 8 }}>0{i+2}</span>
              <span style={{ fontFamily: "var(--font-jp)" }}>{s.t}</span>
              <span style={{ color: "var(--text-muted)", marginLeft: 8 }}>— {s.a}</span>
            </div>
            <span style={{ color: "var(--text-muted)" }}>{s.d}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function IconBtn({ icon }) {
  return (
    <button style={{
      all: "unset", cursor: "pointer", width: 40, height: 40, display: "grid", placeItems: "center",
      border: "2px solid var(--border-default)", color: "var(--text-secondary)", background: "var(--bg-card)",
    }}><i data-lucide={icon} style={{ width: 16, height: 16 }}></i></button>
  );
}

function fmt(s) {
  s = Math.max(0, Math.floor(s));
  const m = Math.floor(s / 60), sec = s % 60;
  return m + ":" + String(sec).padStart(2, "0");
}

window.MNK_NowPlaying = NowPlayingRail;
