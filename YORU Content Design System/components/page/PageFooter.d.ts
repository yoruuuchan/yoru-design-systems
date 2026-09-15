/** Authorship strip pinned to the bottom of a Page — one hairline, handle left, note right. No wordmark. */
export interface PageFooterProps {
  /** Account handle. Omit to hide (default). */
  handle?: string;
  /** Right-hand note — "转载请注明出处", a date, a series name. */
  note?: string;
  /** Legacy — the wordmark is retired; accepted, renders nothing. */
  mark?: boolean;
  align?: "between" | "start";
}
export declare function PageFooter(props: PageFooterProps): JSX.Element;
