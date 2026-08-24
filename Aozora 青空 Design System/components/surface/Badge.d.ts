/**
 * Badge — small inline status / count pill.
 */
export interface BadgeProps {
  /** Tone. Default `brand`. */
  tone?: "brand" | "accent" | "neutral" | "success" | "warn" | "danger";
  /** Style. `solid` is filled; `soft` is tinted on a light wash. */
  variant?: "solid" | "soft" | "outline";
  /** Optional leading dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
