import * as React from "react";

/**
 * Inline loading indicator. `blocks` is the signature CRT-style block
 * marquee; `spinner` is a compact circular fallback.
 */
export interface LoadingProps {
  variant?: "blocks" | "spinner";
  label?: React.ReactNode;
  className?: string;
}

export declare function Loading(props: LoadingProps): JSX.Element;
