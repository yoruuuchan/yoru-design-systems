import * as React from "react";
export interface DiagramNodeSpec {
  id: string;
  label: React.ReactNode;
  role?: "input" | "process" | "human" | "agent" | "tool" | "data" | "output" | "external";
  status?: "verified" | "failed" | "unknown";
  /** Mono second line — a command, a model, a duration. */
  meta?: React.ReactNode;
  index?: number;
  showRole?: boolean;
  statusLabel?: boolean;
  /** Override the computed cell. Fractional rows are legal. */
  col?: number; row?: number;
  /** Make the node wider / taller in whole cells. */
  colSpan?: number; rowSpan?: number;
}
export interface DiagramEdgeSpec {
  from: string; to: string;
  kind?: "flow" | "data" | "dep" | "weak";
  label?: string;
  both?: boolean;
  arrow?: boolean;
}
export interface DiagramGroupSpec { label?: string; nodes: string[]; kind?: "solid" | "dashed" }
export interface DiagramAnnotationSpec { at: string; text: React.ReactNode; side?: "left" | "right" }
/**
 * Structured nodes + edges in, an editorial diagram out. Deterministic: no text
 * measurement, so the same input always renders the same picture.
 */
export interface DiagramProps extends React.HTMLAttributes<HTMLElement> {
  nodes?: DiagramNodeSpec[];
  edges?: DiagramEdgeSpec[];
  groups?: DiagramGroupSpec[];
  annotations?: DiagramAnnotationSpec[];
  /** layered = auto left-to-right by dependency (flowcharts, architecture) · tree = mind map · grid = you place every node. */
  layout?: "layered" | "tree" | "grid";
  title?: React.ReactNode;
  /** Uppercase mono rail label above the title. */
  kicker?: string;
  caption?: React.ReactNode;
  /** Provenance line under the caption — where the facts came from. */
  source?: React.ReactNode;
  /** Print a key built from the roles / edge kinds / statuses actually used. */
  legend?: boolean;
  theme?: "light" | "dark";
  /** Dot-grid underlay. Use on architecture diagrams, skip on simple flows. */
  grid?: boolean;
  /** Scale down to the container width. Never scales above 1. */
  fit?: boolean;
  /** Narrow-container behaviour. auto = flip the flow top→bottom on a compact
   *  grid once scaling would push the label under ~9px · never = always keep the
   *  wide form and let it scale · always = author a vertical diagram directly. */
  stack?: "auto" | "never" | "always";
  /** Override cell geometry: { colW, colGap, rowH, rowGap, elbow, lane }. */
  geo?: object;
}
export declare function Diagram(props: DiagramProps): JSX.Element;
