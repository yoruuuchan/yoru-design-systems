import * as React from "react";

/**
 * KPI tile with big numeric value, delta indicator, and optional
 * cyan-glow sparkline. The default data-viz surface in KUNLUN.
 */
export interface ChartCardProps {
  /** HUD-label rendered above the value. */
  label: React.ReactNode;
  /** Big numeric or string readout. */
  value: React.ReactNode;
  /** Unit suffix (e.g. "MW", "ms"). */
  unit?: React.ReactNode;
  /** Delta string (e.g. "+12.4% · 24h"). */
  delta?: React.ReactNode;
  deltaDirection?: "up" | "down" | "flat";
  /** Numeric series for the sparkline. ≥ 2 values required to render. */
  series?: number[];
  /** Slot in the top-right corner — Badge, StatusPill, etc. */
  badge?: React.ReactNode;
  className?: string;
}

export declare function ChartCard(props: ChartCardProps): JSX.Element;
