import * as React from "react";

/**
 * Translucent card with a subtle hover lift. Use to group related
 * controls or content blocks against the canvas grid.
 *
 * @startingPoint section="Surfaces" subtitle="Glass card with hover lift" viewport="360x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
