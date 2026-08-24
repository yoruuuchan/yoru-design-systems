import * as React from "react";

/**
 * Text input with the RIFT glass treatment and royal focus ring.
 * Composes with native HTML input attrs (type, value, onChange, …).
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps): JSX.Element;
