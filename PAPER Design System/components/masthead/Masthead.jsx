import React from "react";
import { Wordmark } from "./Wordmark.jsx";

/** Top-of-page identity bar: wordmark left, navigation right, a rule beneath. */
export function Masthead({ title = "PAPER", size = "md", items = [], active, rule = "hair", right, style, ...rest }) {
  return (
    <header style={{ ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-6)", paddingBottom: "var(--space-3)" }}>
        <Wordmark text={title} size={size} />
        {right !== undefined ? right : (
          <nav style={{ display: "flex", gap: "var(--space-5)", fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", letterSpacing: ".08em" }}>
            {items.map((it) => {
              const label = typeof it === "string" ? it : it.label;
              const href = typeof it === "string" ? "#" : (it.href || "#");
              const on = active === label;
              return (
                <a key={label} href={href} style={{
                  color: on ? "var(--text-accent)" : "var(--text-secondary)",
                  borderBottom: 0, textDecoration: "none"
                }}>{label}</a>
              );
            })}
          </nav>
        )}
      </div>
      {rule === "hair" && <div style={{ height: 1, background: "var(--rule-hair)" }} />}
      {rule === "strong" && <div style={{ height: 1, background: "var(--rule-strong)" }} />}
      {rule === "double" && <React.Fragment>
        <div style={{ height: 3, background: "var(--rule-strong)" }} />
        <div style={{ height: 1, background: "var(--rule-strong)", marginTop: 2 }} />
      </React.Fragment>}
    </header>
  );
}
