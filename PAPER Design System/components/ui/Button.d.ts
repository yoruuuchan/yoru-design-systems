export interface ButtonProps {
  children?: React.ReactNode;
  /** solid = ink fill (primary), outline, quiet, accent = rust (rare, one per page). */
  variant?: "solid" | "outline" | "quiet" | "accent";
  size?: "sm" | "md" | "lg";
  /** Renders an anchor instead of a button. */
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
