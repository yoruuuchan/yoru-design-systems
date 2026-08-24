import React from 'react';

const tones = {
  info:  { bar: 'var(--bondi-500)',     barFg: 'var(--frost-50)' },
  warn:  { bar: 'var(--bubblegum-500)', barFg: 'var(--frost-50)' },
  dream: { bar: 'var(--bubblegum-300)', barFg: 'var(--ink)' },
  sodium:{ bar: 'var(--sodium-500)',    barFg: 'var(--ink)' },
};

export function Toast({ title = 'note', tone = 'info', onClose, children, style }) {
  const t = tones[tone] ?? tones.info;
  return (
    <div
      role="alert"
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        minWidth: 240,
        maxWidth: 360,
        background: 'var(--surface-window)',
        border: '1px solid var(--ink)',
        boxShadow: 'var(--shadow-window)',
        fontFamily: 'var(--font-ui-sans)',
        color: 'var(--ink)',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '3px 6px',
          background: t.bar,
          color: t.barFg,
          fontSize: 12,
          fontWeight: 700,
          borderBottom: '1px solid var(--ink)',
          letterSpacing: '0.02em',
        }}
      >
        <span style={{ flex: 1 }}>{title}</span>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="close"
            style={{
              width: 16, height: 14, padding: 0,
              background: 'var(--paper-stained)', color: 'var(--ink)',
              border: '1px solid var(--ink)', boxShadow: 'var(--bevel-out)',
              fontSize: 11, fontFamily: 'var(--font-pixel-mono)', cursor: 'pointer',
              fontWeight: 700, lineHeight: 1, flex: 'none',
            }}
          >×</button>
        )}
      </div>
      <div style={{ padding: '8px 10px', fontSize: 13, lineHeight: 1.5 }}>{children}</div>
    </div>
  );
}
