import * as React from "react";

/**
 * Multi-line text well. Mirrors Input's affordances.
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
}

export declare function Textarea(props: TextareaProps): JSX.Element;
