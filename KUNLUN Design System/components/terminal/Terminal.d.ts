import * as React from "react";

export interface TerminalLine {
  /** Prompt glyph for this line — passing `""` uses the terminal's default. */
  prompt?: string;
  text: React.ReactNode;
  /** Color treatment for the text. */
  kind?: "muted" | "success" | "warn" | "error" | "user";
}

/**
 * Fake terminal with a chamfered shell, traffic-light dots, scrolling output,
 * and an optional input. The signature KUNLUN component.
 */
export interface TerminalProps {
  /** Tab title (shown top-left). */
  title?: string;
  /** Default prompt glyph rendered before the input. */
  prompt?: string;
  /** Lines of output. Strings or rich line objects. */
  lines?: (string | TerminalLine)[];
  /** Called with the typed command on enter. Input is cleared after. */
  onCommand?: (value: string) => void;
  /** Hide the input row. */
  showInput?: boolean;
  /** Hide the red/amber/green dots top-right. */
  showDots?: boolean;
  className?: string;
  /** CSS height (string or number). */
  height?: string | number;
}

export declare function Terminal(props: TerminalProps): JSX.Element;
