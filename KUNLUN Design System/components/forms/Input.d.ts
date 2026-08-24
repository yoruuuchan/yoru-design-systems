import * as React from "react";

/**
 * Single-line text input. Chamfered, mono. Supports label, hint, error,
 * and prefix/suffix adornments (e.g. `>` glyph or unit suffix).
 */
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /** HUD-style label rendered above the input. */
  label?: React.ReactNode;
  /** Helper text below the field. Hidden when `error` is set. */
  hint?: React.ReactNode;
  /** Error message — also flips border + focus glow to danger red. */
  error?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  /** Element rendered in a left adornment slot (icon, unit, glyph). */
  prefix?: React.ReactNode;
  /** Element rendered in a right adornment slot. */
  suffix?: React.ReactNode;
}

export declare function Input(props: InputProps): JSX.Element;
