import React from 'react';

const palettes = {
  peach: { c1: '#fce5d8', c2: '#f4b8a0', c3: '#f0a4b8' },
  rose:  { c1: '#fce5d8', c2: '#f0a4b8', c3: '#e57f9b' },
  pool:  { c1: '#d3e6ed', c2: '#8fc0d2', c3: '#4a8fa8' },
  sodium:{ c1: '#fbf3d8', c2: '#efd57e', c3: '#dcb13f' },
};

export function Halo({ color = 'peach', size = 320, children, style, ...rest }) {
  const p = palettes[color] ?? palettes.peach;
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        ...style,
      }}
      {...rest}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: size, height: size,
          left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${p.c1} 0%, ${p.c2} 45%, ${p.c3} 70%, transparent 100%)`,
          opacity: 0.7,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
