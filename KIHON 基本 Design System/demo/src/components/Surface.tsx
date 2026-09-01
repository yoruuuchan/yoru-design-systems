// Surface — raised machined panel with two-step chamfer and directional shadow.

import React from "react";

interface SurfaceProps {
  children: React.ReactNode;
  emphasized?: boolean;
  dimmed?: boolean;
  style?: React.CSSProperties;
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  emphasized,
  dimmed,
  style,
}) => {
  return (
    <div
      style={{
        background: "var(--grad-plate)",
        border: `1px solid ${emphasized ? "var(--accent)" : "var(--line)"}`,
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--edge-raised), var(--shadow-plate)",
        padding: 34,
        opacity: dimmed ? 0.72 : 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
