export interface FullBleedProps {
  children?: React.ReactNode;
  /** Any CSS background — overrides the default surface. */
  background?: string;
  /** Switches the section to the dark plate scope (film base, light text). */
  dark?: boolean;
  padded?: boolean;
  minHeight?: string | number;
  style?: React.CSSProperties;
}
export declare function FullBleed(props: FullBleedProps): JSX.Element;
