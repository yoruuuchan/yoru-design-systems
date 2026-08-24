import React from "react";

export function Tabs({ tabs = [], value, onChange, style }) {
  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: "0",
        borderBottom: "2px solid var(--border-default)",
        ...style,
      }}
    >
      {tabs.map((t) => {
        const key = t.value ?? t.label;
        const active = key === value;
        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(key)}
            style={{
              background: "transparent",
              border: "none",
              padding: "10px 16px",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: active ? "var(--magenta)" : "var(--text-secondary)",
              borderBottom: active ? "3px solid var(--magenta)" : "3px solid transparent",
              marginBottom: "-2px",
              textShadow: active ? "var(--text-glow-magenta)" : "none",
              transition: "color var(--dur-fast)",
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
