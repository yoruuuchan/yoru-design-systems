import { ReactNode, CSSProperties } from "react";

export interface ScanlineOverlayProps {
  intensity?: "soft" | "medium" | "strong";
  grain?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}

export function ScanlineOverlay(props: ScanlineOverlayProps): JSX.Element;
