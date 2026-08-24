/**
 * Aozora Button — primary CTA.
 *
 * Three visual flavors:
 *   • filled   — solid brand fill, inset rim, the default for primary actions
 *   • glass    — translucent over color/photo backgrounds (iOS 26 liquid glass)
 *   • ghost    — text + tint on hover, for low-emphasis actions
 *
 * Sizes follow the brand scale: sm 32 / md 40 / lg 52 px.
 */
export interface ButtonProps {
  /** Visual treatment. Default `filled`. */
  variant?: "filled" | "glass" | "ghost";
  /** Tone. `brand` is the blue default, `accent` is sun-yellow, `neutral` is grey. */
  tone?: "brand" | "accent" | "neutral" | "danger";
  /** Size. Default `md`. */
  size?: "sm" | "md" | "lg";
  /** Pill (rounded-full) instead of the default 14px radius. */
  pill?: boolean;
  /** Full-width block. */
  block?: boolean;
  /** Disabled state. */
  disabled?: boolean;
  /** Leading icon node — e.g. an `<svg>` or emoji-free glyph. */
  leadingIcon?: React.ReactNode;
  /** Trailing icon node. */
  trailingIcon?: React.ReactNode;
  /** Click handler. */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button content. */
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
