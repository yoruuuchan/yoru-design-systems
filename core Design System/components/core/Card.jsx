import React from 'react';

const variants = {
  paper:  { background: 'var(--surface-card)',   border: '1px solid var(--ink)',         boxShadow: 'var(--shadow-card)' },
  sunk:   { background: 'var(--surface-sunk)',   border: '1px solid var(--ink)',         boxShadow: 'var(--bevel-in)' },
  pool:   { background: 'var(--tile-100)',       border: '1px solid var(--ink)',         boxShadow: 'var(--shadow-card)' },
  dream:  { background: 'var(--peach-100)',      border: '1px solid var(--ink)',         boxShadow: 'var(--shadow-card), var(--glow-peach)' },
  ghost:  { background: 'transparent',           border: '1px dashed var(--ink-muted)',  boxShadow: 'none' },
};

export function Card({ variant = 'paper', padding = 16, children, style, ...rest }) {
  return (
    <div
      style={{
        padding,
        boxSizing: 'border-box',
        color: 'var(--ink)',
        fontFamily: 'var(--font-body-serif)',
        fontSize: 15,
        lineHeight: 1.55,
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
