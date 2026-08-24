import React from 'react';

const patterns = {
  cool:    'url(/assets/tile.svg)',
  warm:    'url(/assets/tile-warm.svg)',
  caustic: 'url(/assets/caustic.svg)',
  grain:   'url(/assets/grain.svg)',
};

export function TilePattern({
  pattern = 'cool',
  size = 64,
  opacity = 1,
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
        opacity,
        mixBlendMode: blendMode,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
