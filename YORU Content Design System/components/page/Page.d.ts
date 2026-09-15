import * as React from "react";
/**
 * The Xiaohongshu export canvas — a fixed-pixel page every card is built
 * inside. Page furniture, 铅字房版: the masthead (月相 + 汉字页码 + 文武线)
 * when index/kicker is given, and an optional vertical fangsong spine
 * (书脊栏) on the right margin.
 */
export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Child variant. Drives accent, tag shape, density, decoration. */
  variant?: "signal" | "lab" | "studio" | "special";
  /** Export dimensions. 1242×1656 is the house default. */
  size?: "1242x1656" | "1080x1440" | "1080x1350";
  /** Page number in the masthead, as 汉字 (〇三). Passing it turns the masthead on. */
  index?: number;
  total?: number;
  /** Legacy switch — any of kicker/column/index shows the masthead; the text itself no longer renders. */
  kicker?: string;
  /** Legacy — accepted, not rendered. */
  column?: string;
  /** Legacy — accepted, not rendered. The date belongs in `spine`. */
  date?: string;
  /** 直排书脊栏 on the right margin — 日期 · 卷号 · 系列名, e.g. "二〇二六年八月 · 卷十二". */
  spine?: string;
  /** Legacy — the watermark is retired; accepted, renders nothing. */
  watermark?: boolean;
  /** Page ground. "ink" is reserved for covers and end cards. */
  tone?: "paper" | "tint" | "ink";
  /** Vertically center the content block — covers and single-statement pages. */
  align?: "start" | "center";
  /** Drop the page padding so a Figure can bleed to the edge (the spine drops too). */
  bleed?: boolean;
  /** Usually <PageFooter/>. Absolutely positioned by the footer itself. */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Page(props: PageProps): JSX.Element;
