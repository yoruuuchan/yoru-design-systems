import React from "react";

/**
 * RIFT — translucent panel. Three blur/opacity elevations.
 *   1 = subtle (default)   2 = mid (hero panels)   3 = strong (modals)
 */
export function Glass({ elevation = 1, className = "", children, ...rest }) {
  const cls = `rift-glass-${elevation}`;
  return (
    <div className={[cls, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}
