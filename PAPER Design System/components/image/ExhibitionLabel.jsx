import React from "react";

/** The wall label: who, what, when, how it was made, how big, how many. */
export function ExhibitionLabel({ artist, title, year, medium, dimensions, edition, venue, dates, monogram, style, ...rest }) {
  const line = { fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", lineHeight: 1.65, color: "var(--text-secondary)" };
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", ...style }} {...rest}>
      <div>
        {artist && <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-h3)", color: "var(--text-display)", letterSpacing: ".01em" }}>{artist}</div>}
        {title && <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "var(--type-h2)", color: "var(--text-display)", marginTop: "var(--space-2)" }}>{title}</div>}
        {year && <div style={{ ...line, marginTop: "var(--space-2)", color: "var(--text-muted)" }}>{year}</div>}
        <div style={{ marginTop: "var(--space-5)" }}>
          {medium && <div style={line}>{medium}</div>}
          {dimensions && <div style={line}>{dimensions}</div>}
          {edition && <div style={line}>{edition}</div>}
        </div>
      </div>
      {(venue || dates || monogram) && (
        <div style={{ marginTop: "auto", paddingTop: "var(--space-7)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-5)" }}>
          <div>
            {venue && <div style={{ ...line, color: "var(--text-muted)" }}>{venue}</div>}
            {dates && <div style={{ ...line, color: "var(--text-muted)" }}>{dates}</div>}
          </div>
          {monogram && (
            <span style={{
              width: 34, height: 34, flex: "none", borderRadius: "var(--radius-round)",
              border: "1px solid var(--rule-mid)", display: "grid", placeItems: "center",
              fontFamily: "var(--font-serif)", fontSize: "var(--type-micro)", color: "var(--text-muted)"
            }}>{monogram}</span>
          )}
        </div>
      )}
    </div>
  );
}
