import { ReactNode, CSSProperties, ElementType } from "react";

/**
 * RGB-split glitch headline. Use for hero titles, error states, easter eggs — not body text.
 *
 * @startingPoint section="Core" subtitle="RGB-split glitch headline" viewport="700x200"
 */
export interface GlitchTextProps {
  children?: ReactNode;
  color?: string;
  size?: number;
  as?: ElementType;
  style?: CSSProperties;
}

export function GlitchText(props: GlitchTextProps): JSX.Element;
