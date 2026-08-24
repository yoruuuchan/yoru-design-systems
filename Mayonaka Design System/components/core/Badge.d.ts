import { ReactNode, CSSProperties } from "react";

/** Small pixel status pill — always uppercase. */
export interface BadgeProps {
  variant?: "magenta" | "cyan" | "blue" | "success" | "warning" | "danger" | "muted";
  children?: ReactNode;
  style?: CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
