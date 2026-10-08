import React from 'react';

const patterns = {
  cool:    'url(/assets/tile.svg)',
  warm:    'url(/assets/tile-warm.svg)',
  caustic: 'url(/assets/caustic.svg)',
  grain:   'url(/assets/grain.svg)',
};

/* wallpapers dim themselves at night — the nightpool tokens are only
   defined under [data-theme="nightpool"], so daylight falls back to 1. */
const defaultOpacity = {
  cool:    'var(--tile-opacity, 1)',
  warm:    'var(--tile-opacity, 1)',
  caustic: 'var(--caustic-opacity, 1)',
  grain:   'var(--grain-opacity, 1)',
};

export function TilePattern({
  pattern = 'cool',
  size = 64,
  opacity,
  blendMode,
  fixed = false,
  children,
  style,
  ...rest
}) {
  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: patterns[pattern] ?? patterns.cool,
        backgroundSize: `${size}px ${size}px`,
        backgroundRepeat: 'repeat',
        backgroundAttachment: fixed ? 'fixed' : 'scroll',
        imageRendering: 'pixelated',
        opacity: opacity ?? (defaultOpacity[pattern] ?? defaultOpacity.cool),
        mixBlendMode: blendMode,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
