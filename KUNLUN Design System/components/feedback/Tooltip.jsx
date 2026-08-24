import React from "react";

/**
 * Tooltip — chamfered cyan label above a trigger. Pure-CSS hover/focus.
 */
export function Tooltip({ label, children }) {
  return (
    <span className="kl-tooltip-wrap">
      {children}
      <span className="kl-tooltip" role="tooltip">{label}</span>
    </span>
  );
}
