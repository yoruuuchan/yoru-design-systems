import React from "react";

export function Tabs({ items, value, onChange, variant = "segmented", size = "md" }) {
  const fs = size === "sm" ? 12 : 13;
  const h  = size === "sm" ? 30 : 36;

  if (variant === "segmented") {
    const wrap = {
      display: "inline-flex",
      padding: 4,
      background: "linear-gradient(180deg, rgba(255,255,255,0.45), rgba(180,220,255,0.28))",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.75)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(10,68,140,0.10), 0 1px 2px rgba(10,68,140,0.06), 0 8px 24px rgba(10,68,140,0.10)",
      backdropFilter: "blur(24px) saturate(200%) brightness(1.05)",
      WebkitBackdropFilter: "blur(24px) saturate(200%) brightness(1.05)",
      gap: 2,
    };
    return React.createElement(
      "div",
      { role: "tablist", style: wrap },
      items.map((it) => {
        const active = it.value === value;
        const style = {
          height: h,
          padding: "0 16px",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "var(--font-sans)",
          fontSize: fs,
          fontWeight: 600,
          letterSpacing: "-0.005em",
          color: active ? "var(--blue-700)" : "var(--neutral-700)",
          background: active
            ? "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.70) 50%, rgba(220,235,255,0.75) 100%)"
            : "transparent",
          border: active ? "1px solid rgba(255,255,255,0.9)" : "1px solid transparent",
          borderRadius: 999,
          boxShadow: active
            ? "inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(10,68,140,0.10), 0 1px 2px rgba(10,68,140,0.10), 0 6px 16px rgba(10,68,140,0.14)"
            : "none",
          cursor: "pointer",
          transition: "background var(--dur-fast) var(--ease-out-quart), color var(--dur-fast) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)",
        };
        return React.createElement(
          "button",
          { role: "tab", "aria-selected": active, key: it.value, style, onClick: () => onChange(it.value) },
          it.label,
          it.count !== undefined
            ? React.createElement(
                "span",
                { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: active ? "var(--blue-600)" : "var(--text-muted)", fontWeight: 600 } },
                it.count,
              )
            : null,
        );
      }),
    );
  }

  // underline
  const wrap = { display: "inline-flex", borderBottom: "1px solid var(--stroke-hairline)", gap: 4 };
  return React.createElement(
    "div",
    { role: "tablist", style: wrap },
    items.map((it) => {
      const active = it.value === value;
      const style = {
        position: "relative",
        height: h + 10,
        padding: "0 14px 8px",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: fs + 1,
        fontWeight: active ? 700 : 500,
        letterSpacing: "-0.01em",
        color: active ? "var(--text-strong)" : "var(--text-muted)",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      };
      const bar = {
        position: "absolute", left: 14, right: 14, bottom: -1, height: 2,
        borderRadius: 2,
        background: active ? "var(--blue-500)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-out-quart)",
      };
      return React.createElement(
        "button",
        { role: "tab", "aria-selected": active, key: it.value, style, onClick: () => onChange(it.value) },
        it.label,
        it.count !== undefined ? React.createElement("span", { style: { fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)" } }, it.count) : null,
        React.createElement("span", { style: bar }),
      );
    }),
  );
}
