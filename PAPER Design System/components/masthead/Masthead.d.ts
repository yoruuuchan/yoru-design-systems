export interface MastheadNavItem { label: string; href?: string }
export interface MastheadProps {
  /** Wordmark text. */
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
  items?: (string | MastheadNavItem)[];
  /** Label of the current section — rendered in the accent. */
  active?: string;
  /** hair = 1px (default), strong = 1px ink, double = 3px + 1px (cover pages). */
  rule?: "hair" | "strong" | "double" | "none";
  /** Replaces the nav entirely — for a date line, an issue number, a button. */
  right?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Masthead(props: MastheadProps): JSX.Element;
