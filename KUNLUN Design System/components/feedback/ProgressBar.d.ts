import * as React from "react";

/**
 * Thin chamfered progress bar with cyan glow. Label and value readout above.
 */
export interface ProgressBarProps {
  /** Current value (0..max). Ignored when `indeterminate`. */
  value?: number;
  max?: number;
  /** Eyebrow label rendered above the bar. */
  label?: React.ReactNode;
  variant?: "default" | "success" | "warn" | "danger";
  /** Hide the % readout. */
  showValue?: boolean;
  /** Strobing slide animation; ignores `value`. */
  indeterminate?: boolean;
  className?: string;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
