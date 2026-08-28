import React from 'react';

export function GrainOverlay({ src = '/assets/grain.svg', opacity = 0.18, blendMode = 'multiply', style, ...rest }) {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `url(${src})`,
        backgroundSize: '200px 200px',
        opacity,
        mixBlendMode: blendMode,
        ...style,
      }}
      {...rest}
    />
  );
}
