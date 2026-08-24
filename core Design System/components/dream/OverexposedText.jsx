import React from 'react';

export function OverexposedText({
  as: Tag = 'span',
  size = 56,
  color = 'paper',
  glow = 'bondi',
  children,
  style,
  ...rest
}) {
  const palette = {
    paper:     'var(--paper)',
    frost:     'var(--frost-50)',
    bondi:     'var(--bondi-200)',
    chrome:    'var(--chrome-100)',
    bubblegum: 'var(--bubblegum-200)',
    peach:     'var(--peach-200)',
    rose:      'var(--rose-300)',
    sodium:    'var(--sodium-200)',
    tile:      'var(--tile-200)',
  };
  const glows = {
    bondi:     'var(--glow-text-overexposed)',
    chrome:    '0 0 8px var(--frost-50), 0 0 18px var(--chrome-100), 0 0 32px rgba(196,208,221,0.55)',
    bubblegum: '0 0 8px var(--bubblegum-200), 0 0 20px var(--bubblegum-300), 0 0 36px rgba(255,126,182,0.45)',
    pool:      '0 0 8px var(--tile-100), 0 0 20px var(--tile-300), 0 0 36px rgba(74,143,168,0.4)',
    peach:     '0 0 8px var(--paper), 0 0 16px var(--peach-200), 0 0 28px rgba(244,184,160,0.5)',
    rose:      '0 0 8px var(--rose-200), 0 0 18px var(--rose-300), 0 0 32px rgba(240,164,184,0.45)',
  };
  return (
    <Tag
      style={{
        fontFamily: 'var(--font-pixel-display)',
        fontSize: size,
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: palette[color] ?? palette.paper,
        textShadow: glows[glow] ?? glows.bondi,
        display: 'inline-block',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
