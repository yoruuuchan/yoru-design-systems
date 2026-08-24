import React from "react";

/** A proof sheet on film base: numbered frames, edge printing, grease-pencil marks. */
export function ContactSheet({ frames = [], columns = 4, stock = "KODAK 400TX", startAt = 11, note, sequence, style, ...rest }) {
  const list = frames.length ? frames : Array.from({ length: columns * 2 }).map(() => ({}));
  const rows = [];
  for (let i = 0; i < list.length; i += columns) rows.push(list.slice(i, i + columns));
  return (
    <div style={{ background: "var(--film-base)", padding: "var(--space-3)", ...style }} {...rest}>
      {rows.map((row, r) => (
        <div key={r} style={{ marginBottom: r === rows.length - 1 ? 0 : "var(--space-3)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(" + columns + ",1fr)", gap: 4, paddingBottom: 4 }}>
            {row.map((_, c) => (
              <span key={c} style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 7.5, letterSpacing: ".12em", color: "var(--film-edge)", opacity: c % 2 ? 0.55 : 1 }}>
                <span>{stock}</span><span>{startAt + r * columns + c}</span>
              </span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(" + columns + ",1fr)", gap: 4 }}>
            {row.map((f, c) => (
              <div key={c} style={{ position: "relative", aspectRatio: f.ratio || "3/2", background: "var(--placeholder-tone)", overflow: "hidden", filter: "var(--photo-filter, none)" }}>
                {f.src && <img src={f.src} alt={f.alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                {f.children}
                {f.mark === "circle" && <span aria-hidden="true" style={{ position: "absolute", inset: "8%", border: "2px solid rgba(240,236,224,.82)", borderRadius: "50%", transform: "rotate(-6deg) scaleY(.9)" }} />}
                {f.mark === "cross" && <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top right,transparent 47.4%,rgba(240,236,224,.8) 47.4%,rgba(240,236,224,.8) 52.6%,transparent 52.6%),linear-gradient(to bottom right,transparent 47.4%,rgba(240,236,224,.8) 47.4%,rgba(240,236,224,.8) 52.6%,transparent 52.6%)" }} />}
              </div>
            ))}
          </div>
        </div>
      ))}
      {(note || sequence) && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "var(--space-3)" }}>
          <span style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "#D8D2C2" }}>{note}</span>
          <span style={{ fontFamily: "var(--font-hand)", fontSize: 18, color: "#B9B2A0" }}>{sequence}</span>
        </div>
      )}
    </div>
  );
}
