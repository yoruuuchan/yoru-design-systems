import { ReactNode, CSSProperties } from "react";

/**
 * Sharp-cornered panel with optional title bar and neon border treatment.
 *
 * @startingPoint section="Core" subtitle="Pixel card / panel" viewport="700x200"
 */
export interface CardProps {
  variant?: "default" | "raised" | "neon" | "cyan" | "blue";
  /** Replace pixel shadow with a full neon halo. */
  glow?: boolean;
  title?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
