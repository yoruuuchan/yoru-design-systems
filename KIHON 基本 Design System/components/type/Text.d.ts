/**
 * Role-based text. Roles carry the locked video type scale (display 128 / title 88 /
 * subtitle 54 / body 44 / caption 34 design-px) with KIHON faces: Source Han Sans SC
 * first, Instrument Sans for Latin runs. Bold titles vs Light subtitles is the contrast axis.
 */
export interface TextProps {
  role?: 'display' | 'title' | 'subtitle' | 'body' | 'caption';
  /** 'ink' | 'muted' | 'faint' | 'accent' | 'negative' or any CSS color. */
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Text(props: TextProps): JSX.Element;