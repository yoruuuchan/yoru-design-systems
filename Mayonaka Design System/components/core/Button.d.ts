import { ReactNode, CSSProperties } from "react";

/**
 * Mayonaka pixel button. Square corners, hard pixel shadow that shifts on hover/active.
 * Always uppercase, Press Start 2P, wide tracking.
 *
 * @startingPoint section="Core" subtitle="Pixel button with neon glow" viewport="700x200"
 */
export interface ButtonProps {
  variant?: "primary" | "cyan" | "blue" | "blue-outline" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Add a soft neon glow around the resting button. Use for hero CTAs. */
  glow?: boolean;
  fullWidth?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
