export interface ScanEdgeProps {
  children?: React.ReactNode;
  /** x = left/right lip (default), y = top/bottom, all = soft vignette. */
  sides?: "x" | "y" | "all";
  /** 0–1. Above 0.6 it starts to read as a filter rather than a scan. */
  intensity?: number;
  style?: React.CSSProperties;
}
export declare function ScanEdge(props: ScanEdgeProps): JSX.Element;
