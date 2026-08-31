import React from 'react';
const COLORS={ink:'var(--ink)',muted:'var(--ink-muted)',faint:'var(--ink-faint)',accent:'var(--accent)',negative:'var(--negative)'};
/** Role-based text: display/title/subtitle/body/caption. Sizes are locked design-px × --u. */
export function Text({role='body', color, children, style}) {
  const Tag=role==='display'||role==='title'?'h1':'p';
  return <Tag className={'k-'+role} style={{...(color?{color:COLORS[color]||color}:{}),...style}}>{children}</Tag>;
}