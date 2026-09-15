import * as React from "react";
/** Pull quote — serif, framed by a heavy rule above and a hairline below. For someone else's words or your own thesis sentence. */
export interface QuoteProps extends React.HTMLAttributes<HTMLElement> {
  /** Who said it. */
  cite?: string;
  /** Where — publication, repo, talk. */
  source?: string;
  children?: React.ReactNode;
}
export declare function Quote(props: QuoteProps): JSX.Element;
