import React from "react";

export function Dialog({ open, onClose, title, kicker, footer, maxWidth = 480, children }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const scrim = {
    position: "fixed", inset: 0, zIndex: 1000,
    background: "rgba(7,9,14,0.42)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    padding: 24,
    animation: "aoz-fade-in var(--dur-base) var(--ease-out-quart)",
  };

  const sheet = {
    width: "100%",
    maxWidth,
    background: "rgba(255,255,255,0.78)",
    backdropFilter: "blur(40px) saturate(180%)",
    WebkitBackdropFilter: "blur(40px) saturate(180%)",
    border: "1px solid var(--glass-stroke-strong)",
    borderRadius: 28,
    boxShadow: "var(--glass-edge-strong), 0 24px 80px rgba(10,68,140,0.28)",
    padding: 28,
    color: "var(--text-strong)",
    animation: "aoz-pop-in var(--dur-slow) var(--ease-spring)",
  };

  return React.createElement(
    "div",
    {
      style: scrim,
      onClick: (e) => { if (e.target === e.currentTarget) onClose && onClose(); },
      role: "dialog",
      "aria-modal": "true",
    },
    React.createElement(
      "div",
      { style: sheet },
      kicker
        ? React.createElement(
            "div",
            { style: { fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 } },
            kicker,
          )
        : null,
      title
        ? React.createElement(
            "h2",
            { style: { margin: 0, fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1 } },
            title,
          )
        : null,
      React.createElement(
        "div",
        { style: { marginTop: title ? 14 : 0, color: "var(--text-body)", fontSize: 15, lineHeight: 1.5 } },
        children,
      ),
      footer
        ? React.createElement(
            "div",
            { style: { marginTop: 24, display: "flex", justifyContent: "flex-end", gap: 8 } },
            footer,
          )
        : null,
      React.createElement(
        "style",
        null,
        "@keyframes aoz-fade-in{from{opacity:0}to{opacity:1}}@keyframes aoz-pop-in{from{opacity:0;transform:translateY(8px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}",
      ),
    ),
  );
}
