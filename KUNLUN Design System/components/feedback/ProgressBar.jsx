import React from "react";

/**
 * ProgressBar — thin chamfered bar with optional label + value readout.
 */
export function ProgressBar({
  value = 0,
  max = 100,
  label,
  variant = "default",
  showValue = true,
  indeterminate = false,
  className = "",
}) {
  const pct = indeterminate ? 100 : Math.max(0, Math.min(100, (value / max) * 100));
  const cls = [
    "kl-progress",
    variant !== "default" ? `kl-progress--${variant}` : "",
    indeterminate ? "kl-progress--indeterminate" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={cls} role="progressbar"
         aria-valuemin={0} aria-valuemax={max}
         aria-valuenow={indeterminate ? undefined : value}>
      {(label || showValue) && (
        <div className="kl-progress__head">
          <span>{label}</span>
          {showValue && !indeterminate && (
            <span className="kl-progress__head-val">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div className="kl-progress__track">
        <div className="kl-progress__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
