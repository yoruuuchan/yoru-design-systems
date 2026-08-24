import React from 'react';

const halos = {
  peach: 'var(--glow-peach)',
  rose:  'var(--glow-rose)',
  pool:  'var(--glow-pool)',
};

export function Glow({ color = 'peach', intensity = 1, inline = false, children, style, ...rest }) {
  const base = halos[color] ?? halos.peach;
  const shadow = intensity === 1 ? base : intensity > 1
    ? `${base}, ${base}`
    : base.replace(/24px/g, '12px');
  return (
    <div
      style={{
        display: inline ? 'inline-block' : 'block',
        boxShadow: shadow,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
