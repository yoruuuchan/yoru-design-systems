import * as React from "react";

/**
 * Chromatic-split glitch text — the signature RIFT wordmark effect.
 * The intensity (`off | subtle | signature | heavy`) and accent channel
 * (`royal | aqua`) come from `data-glitch` / `data-accent`
 * on any ancestor, so the same `<Glitch>` re-themes wherever it lands.
 *
 * @startingPoint section="Brand" subtitle="Chromatic-split wordmark" viewport="420x140"
 */
export interface GlitchProps extends React.HTMLAttributes<HTMLElement> {
  /** The text to render (also fed into both channel pseudos). */
  text: string;
  /** Tag to render. Defaults to `span`. Pass `h1` for hero use. */
  as?: keyof JSX.IntrinsicElements;
}

export function Glitch(props: GlitchProps): JSX.Element;
