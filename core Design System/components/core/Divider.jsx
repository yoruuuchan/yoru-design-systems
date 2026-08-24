import React from 'react';

export function Divider({ variant = 'dashed', label, style, ...rest }) {
  if (variant === 'block') {
    return (
      <div
        style={{
          fontFamily: 'var(--font-pixel-mono)',
          fontSize: 14,
          color: 'var(--ink-muted)',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          lineHeight: 1,
          padding: '6px 0',
          ...style,
        }}
        aria-hidden={!label}
        {...rest}
      >
        {label ? (
          <>
            {'░▒▓ '}
            <span style={{ fontFamily: 'var(--font-ui-sans)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)' }}>{label}</span>
            {' ▓▒░'.repeat(3)}
          </>
        ) : (
          '░▒▓█'.repeat(40)
        )}
      </div>
    );
  }
  return (
    <hr
      style={{
        border: 0,
        borderTop: variant === 'dashed' ? '1px dashed var(--ink-muted)' : '1px solid var(--ink)',
        margin: '12px 0',
        ...style,
      }}
      {...rest}
    />
  );
}
