export interface RunningHeadProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  /** Mono (default) reads as machine-recorded; sans reads as editorial label. */
  mono?: boolean;
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function RunningHead(props: RunningHeadProps): JSX.Element;
