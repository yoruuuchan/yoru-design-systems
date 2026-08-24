import React from 'react';

const variants = {
  default: { background: 'var(--paper-stained)', color: 'var(--ink)' },
  pool:    { background: 'var(--tile-200)',      color: 'var(--tile-800)' },
  dream:   { background: 'var(--peach-200)',     color: 'var(--ink)' },
  sodium:  { background: 'var(--sodium-200)',    color: 'var(--ink)' },
  ink:     { background: 'var(--ink)',           color: 'var(--paper)' },
};

export function Tag({ variant = 'default', bracketed = false, children, style, ...rest }) {
  const v = variants[variant];
  return (
    <span
      style={{
        fontFamily: 'var(--font-pixel-mono)',
        fontSize: 12,
        letterSpacing: '0.05em',
        textTransform: 'lowercase',
        border: '1px solid var(--ink)',
        padding: '1px 6px',
        display: 'inline-block',
        lineHeight: 1.2,
        ...v,
        ...style,
      }}
      {...rest}
    >
      {bracketed ? <>[ {children} ]</> : children}
    </span>
  );
}
