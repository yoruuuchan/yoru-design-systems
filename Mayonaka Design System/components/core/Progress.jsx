import React from "react";

export function Progress({ value = 0, max = 100, variant = "magenta", label, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const color = variant === "cyan" ? "var(--cyan)" : variant === "blue" ? "var(--electric)" : "var(--magenta)";
  return (
    <div style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)", ...style }}>
      {label && (
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-display)", fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "6px", color: "var(--text-muted)" }}>
          <span>{label}</span>
          <span>{Math.round(pct)}%</span>
        </div>
      )}
      <div style={{ position: "relative", height: "10px", background: "var(--bg-void)", border: "2px solid var(--border-default)" }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: `repeating-linear-gradient(90deg, ${color} 0 8px, transparent 8px 10px)`,
          boxShadow: variant === "cyan" ? "var(--glow-cyan-sm)" : variant === "blue" ? "var(--glow-blue-sm)" : "var(--glow-magenta-sm)",
          transition: "width var(--dur-med) var(--ease-smooth)",
        }} />
      </div>
    </div>
  );
}
