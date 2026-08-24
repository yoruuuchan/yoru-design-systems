import { ReactNode, CSSProperties } from "react";

/** Segmented pixel progress bar. */
export interface ProgressProps {
  value?: number;
  max?: number;
  variant?: "magenta" | "cyan" | "blue";
  label?: ReactNode;
  style?: CSSProperties;
}

export function Progress(props: ProgressProps): JSX.Element;
