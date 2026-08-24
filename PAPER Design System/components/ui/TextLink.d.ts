export interface TextLinkProps {
  children?: React.ReactNode;
  href?: string;
  /** Adds a trailing → — used for "read on" / "view work" navigation. */
  arrow?: boolean;
  tone?: "body" | "muted" | "accent";
  size?: string;
  style?: React.CSSProperties;
}
export declare function TextLink(props: TextLinkProps): JSX.Element;
