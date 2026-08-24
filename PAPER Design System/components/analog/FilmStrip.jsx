import React from "react";

/** A length of 35mm film: black base, sprocket rails, frame numbers, stock name. */
export function FilmStrip({ frames = 4, stock = "KODAK 400TX", frameNumbers = true, startAt = 12, height = 96, children, style, ...rest }) {
  const kids = React.Children.toArray(children);
  const n = kids.length || frames;
  const rail = { height: 11, background: "var(--film-sprocket)", opacity: 0.5 };
  return (
    <div style={{ background: "var(--film-base)", padding: "6px 8px", ...style }} {...rest}>
      <div style={rail} />
      <div style={{ display: "flex", gap: 6, padding: "6px 0" }}>
        {Array.from({ length: n }).map((_, i) => (
          <div key={i} style={{ flex: "1 1 0", minWidth: 0 }}>
            {frameNumbers && <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: ".1em", color: "var(--film-edge)", paddingBottom: 3 }}>
              <span>{startAt + i}</span><span>{i === 0 ? stock : "\u203A"}</span>
            </div>}
            <div style={{ height, background: "var(--placeholder-tone)", overflow: "hidden", filter: "var(--photo-filter, none)" }}>{kids[i]}</div>
          </div>
        ))}
      </div>
      <div style={rail} />
    </div>
  );
}
