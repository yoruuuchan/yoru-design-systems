/**
 * Surface — the primary glass container for content.
 *
 * Three tiers: thin (nav strips), regular (default card), thick (modal sheets).
 * Always meant to sit over a colored or gradient backdrop — over a plain
 * white page they collapse to a solid surface.
 */
export interface CardProps {
  /** Glass tier. Default `regular`. */
  tier?: "thin" | "regular" | "thick";
  /** Tinted variant. Default `clear`. */
  tint?: "clear" | "blue" | "sun" | "dark";
  /** Padding scale. Default `md`. */
  padding?: "none" | "sm" | "md" | "lg";
  /** Corner radius scale. Default `xl` (28px) — the brand's signature curve. */
  radius?: "md" | "lg" | "xl" | "2xl";
  /** Click handler. Renders as a button when set. */
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Card(props: CardProps): JSX.Element;
