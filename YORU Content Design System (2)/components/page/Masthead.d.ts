import * as React from "react";

export interface MastheadProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Page number, printed right as 汉字页码 (〇二 / 〇七). */
  index?: number;
  /** Total pages. Omit on a single-page piece. */
  total?: number;
  /** "ink" flips the rail white for a dark page. */
  tone?: "paper" | "ink";
  /** Legacy — accepted from old callers, no longer rendered. */
  column?: string;
  /** Legacy — accepted, not rendered. The date lives in the Page spine. */
  date?: string;
  /** Legacy — accepted, not rendered. */
  rule?: "strong" | "hair";
}

/**
 * YORU's fixed page furniture, 铅字房版: a moon-phase strip on the left
 * (new → first quarter → full → waning; the full moon takes the variant
 * accent, so each variant's masthead differs only by its moon), a
 * Chinese-numeral page number on the right, closed by a 文武线 (thick rule
 * over hairline). No wordmark, no column name, no date. Put it on every
 * interior page; <CoverOverprint> carries it too.
 */
export declare function Masthead(props: MastheadProps): JSX.Element;

export interface MoonPhasesProps extends React.SVGAttributes<SVGSVGElement> {
  /** CSS length for the strip height (width when vertical). */
  size?: string;
  /** Rotate 90° for the spine position — EndCard uses this. */
  vertical?: boolean;
  /** Stroke/fill for the three ink moons; the full moon always takes var(--accent). */
  ink?: string;
}
/** The moon-phase strip alone — covers and the EndCard reuse it. */
export declare function MoonPhases(props: MoonPhasesProps): JSX.Element;

/** 汉字页码: cnPage(7) → "〇七". */
export declare function cnPage(n: number | string): string;
/** 汉字卷号: cnIssue(8) → "八", cnIssue(12) → "一二". */
export declare function cnIssue(n: number | string): string;
/** 汉字日期: cnDate("2026.08") → "二〇二六年八月" — the spine's format. */
export declare function cnDate(s: string): string;
