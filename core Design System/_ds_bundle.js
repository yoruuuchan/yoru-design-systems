/* @ds-bundle: {"format":3,"namespace":"CoreDesignSystem_61d596","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Glow","sourcePath":"components/dream/Glow.jsx"},{"name":"Marquee","sourcePath":"components/dream/Marquee.jsx"},{"name":"OverexposedText","sourcePath":"components/dream/OverexposedText.jsx"},{"name":"GrainOverlay","sourcePath":"components/texture/GrainOverlay.jsx"},{"name":"Halo","sourcePath":"components/texture/Halo.jsx"},{"name":"TilePattern","sourcePath":"components/texture/TilePattern.jsx"},{"name":"TabBar","sourcePath":"components/window/TabBar.jsx"},{"name":"Toast","sourcePath":"components/window/Toast.jsx"},{"name":"Window","sourcePath":"components/window/Window.jsx"}],"sourceHashes":{"components/core/Button.jsx":"66674bd0cd63","components/core/Card.jsx":"aedf9c74f9d4","components/core/Checkbox.jsx":"8f5b8251176a","components/core/Divider.jsx":"1ce32e255ac2","components/core/IconButton.jsx":"639e3844dd76","components/core/Input.jsx":"adde7d9c2a0a","components/core/Tag.jsx":"aa369c30f98d","components/dream/Glow.jsx":"b26cf89bf1bb","components/dream/Marquee.jsx":"34aa5c73be55","components/dream/OverexposedText.jsx":"d6ad1ae8906e","components/texture/GrainOverlay.jsx":"b15b4d4e1031","components/texture/Halo.jsx":"6233fd1a8c33","components/texture/TilePattern.jsx":"e07489e278ea","components/window/TabBar.jsx":"933318b18bd2","components/window/Toast.jsx":"49009d7f6d4f","components/window/Window.jsx":"c0047979abff","ui_kits/archive/DetailView.jsx":"790ab15de3d6","ui_kits/archive/FileGrid.jsx":"b4b480a3686d","ui_kits/archive/Sidebar.jsx":"57bfe639b2af","ui_kits/archive/catalog.js":"05bc8d4ea656","ui_kits/blog/BlogFooter.jsx":"e382bcb872a6","ui_kits/blog/BlogHeader.jsx":"ef62ab5a400c","ui_kits/blog/BlogSidebar.jsx":"4776421afd65","ui_kits/blog/PostBody.jsx":"098f66c62a24","ui_kits/blog/posts.js":"28c3a94a9fd0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoreDesignSystem_61d596 = window.CoreDesignSystem_61d596 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'cds-button-style';
const css = `
.cds-btn {
  font-family: var(--font-ui-sans);
  font-weight: 700;
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-out);
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  user-select: none;
  transition: filter var(--dur-snap) var(--ease-snap);
}
.cds-btn:hover  { filter: brightness(1.05); }
.cds-btn:active { box-shadow: var(--bevel-in); transform: translate(1px, 1px); }
.cds-btn[disabled] { opacity: 0.45; cursor: not-allowed; box-shadow: var(--bevel-out); transform: none; }
.cds-btn.glow:hover { box-shadow: var(--bevel-out), var(--glow-bondi); }
`;
function inject() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
const sizes = {
  sm: {
    padding: '2px 10px',
    fontSize: 11,
    minHeight: 22
  },
  md: {
    padding: '4px 14px',
    fontSize: 13,
    minHeight: 28
  },
  lg: {
    padding: '8px 22px',
    fontSize: 15,
    minHeight: 36
  }
};
const variants = {
  primary: {
    background: 'var(--bondi-500)',
    color: '#ffffff'
  },
  secondary: {
    background: 'var(--chrome-100)'
  },
  ghost: {
    background: 'transparent',
    boxShadow: 'none',
    border: '1px dashed var(--ink-muted)'
  },
  pool: {
    background: 'var(--bondi-200)'
  },
  dream: {
    background: 'var(--bubblegum-300)'
  },
  danger: {
    background: 'var(--bubblegum-500)',
    color: '#ffffff'
  },
  sodium: {
    background: 'var(--sodium-300)'
  }
};
function Button({
  variant = 'secondary',
  size = 'md',
  glow = false,
  children,
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("button", _extends({
    className: `cds-btn ${glow ? 'glow' : ''}`,
    style: {
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  paper: {
    background: 'var(--surface-card)',
    border: '1px solid var(--ink)',
    boxShadow: 'var(--shadow-card)'
  },
  sunk: {
    background: 'var(--surface-sunk)',
    border: '1px solid var(--ink)',
    boxShadow: 'var(--bevel-in)'
  },
  pool: {
    background: 'var(--tile-100)',
    border: '1px solid var(--ink)',
    boxShadow: 'var(--shadow-card)'
  },
  dream: {
    background: 'var(--peach-100)',
    border: '1px solid var(--ink)',
    boxShadow: 'var(--shadow-card), var(--glow-peach)'
  },
  ghost: {
    background: 'transparent',
    border: '1px dashed var(--ink-muted)',
    boxShadow: 'none'
  }
};
function Card({
  variant = 'paper',
  padding = 16,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding,
      boxSizing: 'border-box',
      color: 'var(--ink)',
      fontFamily: 'var(--font-body-serif)',
      fontSize: 15,
      lineHeight: 1.55,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'cds-check-style';
const css = `
.cds-check-row {
  font-family: var(--font-ui-sans);
  font-size: 12px;
  color: var(--ink);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
}
.cds-check-row input { position: absolute; opacity: 0; pointer-events: none; }
.cds-check-box {
  width: 14px; height: 14px;
  background: var(--paper);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-in);
  display: inline-flex; align-items: center; justify-content: center;
  flex: none;
  font-family: var(--font-pixel-mono);
  font-size: 14px;
  line-height: 1;
  color: var(--ink);
}
.cds-check-row input:focus-visible ~ .cds-check-box { outline: 2px solid var(--bondi-300); outline-offset: 1px; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  children,
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: "cds-check-row"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "cds-check-box"
  }, checked ?? defaultChecked ? '×' : ''), children && /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  variant = 'dashed',
  label,
  style,
  ...rest
}) {
  if (variant === 'block') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        fontFamily: 'var(--font-pixel-mono)',
        fontSize: 14,
        color: 'var(--ink-muted)',
        letterSpacing: '0.1em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        lineHeight: 1,
        padding: '6px 0',
        ...style
      },
      "aria-hidden": !label
    }, rest), label ? /*#__PURE__*/React.createElement(React.Fragment, null, '░▒▓ ', /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui-sans)',
        fontSize: 11,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--ink)'
      }
    }, label), ' ▓▒░'.repeat(3)) : '░▒▓█'.repeat(40));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: variant === 'dashed' ? '1px dashed var(--ink-muted)' : '1px solid var(--ink)',
      margin: '12px 0',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'cds-iconbutton-style';
const css = `
.cds-ibtn {
  font-family: var(--font-ui-sans);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-out);
  background: var(--paper-stained);
  color: var(--ink);
  cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
  flex: none;
}
.cds-ibtn:hover  { filter: brightness(1.05); }
.cds-ibtn:active { box-shadow: var(--bevel-in); transform: translate(1px, 1px); }
.cds-ibtn[disabled] { opacity: 0.45; cursor: not-allowed; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
const sizes = {
  sm: 22,
  md: 28,
  lg: 36
};
function IconButton({
  size = 'md',
  label,
  children,
  ...rest
}) {
  inject();
  const dim = sizes[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "cds-ibtn",
    "aria-label": label,
    title: label,
    style: {
      width: dim,
      height: dim,
      padding: 0
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'cds-input-style';
const css = `
.cds-input-wrap {
  font-family: var(--font-ui-sans);
  font-size: 13px;
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
}
.cds-input-label {
  color: var(--ink);
  letter-spacing: 0.02em;
}
.cds-input {
  font-family: var(--font-body-serif);
  font-size: 15px;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-in);
  padding: 4px 8px;
  outline: none;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}
.cds-input:focus { background: var(--bondi-50); box-shadow: var(--bevel-in), 0 0 0 2px var(--bondi-300); }
.cds-input::placeholder { color: var(--ink-faint); font-style: italic; }
.cds-input.mono { font-family: var(--font-pixel-mono); font-size: 14px; }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
function Input({
  label,
  mono = false,
  style,
  wrapStyle,
  ...rest
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", {
    className: "cds-input-wrap",
    style: wrapStyle
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "cds-input-label"
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    className: `cds-input ${mono ? 'mono' : ''}`,
    style: style
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  default: {
    background: 'var(--paper-stained)',
    color: 'var(--ink)'
  },
  pool: {
    background: 'var(--tile-200)',
    color: 'var(--tile-800)'
  },
  dream: {
    background: 'var(--peach-200)',
    color: 'var(--ink)'
  },
  sodium: {
    background: 'var(--sodium-200)',
    color: 'var(--ink)'
  },
  ink: {
    background: 'var(--ink)',
    color: 'var(--paper)'
  }
};
function Tag({
  variant = 'default',
  bracketed = false,
  children,
  style,
  ...rest
}) {
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-pixel-mono)',
      fontSize: 12,
      letterSpacing: '0.05em',
      textTransform: 'lowercase',
      border: '1px solid var(--ink)',
      padding: '1px 6px',
      display: 'inline-block',
      lineHeight: 1.2,
      ...v,
      ...style
    }
  }, rest), bracketed ? /*#__PURE__*/React.createElement(React.Fragment, null, "[ ", children, " ]") : children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/dream/Glow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const halos = {
  peach: 'var(--glow-peach)',
  rose: 'var(--glow-rose)',
  pool: 'var(--glow-pool)'
};
function Glow({
  color = 'peach',
  intensity = 1,
  inline = false,
  children,
  style,
  ...rest
}) {
  const base = halos[color] ?? halos.peach;
  const shadow = intensity === 1 ? base : intensity > 1 ? `${base}, ${base}` : base.replace(/24px/g, '12px');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: inline ? 'inline-block' : 'block',
      boxShadow: shadow,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Glow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dream/Glow.jsx", error: String((e && e.message) || e) }); }

// components/dream/Marquee.jsx
try { (() => {
const STYLE_ID = 'cds-marquee-style';
const css = `
@keyframes cds-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.cds-marq {
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid var(--ink);
  background: var(--ink);
  font-family: var(--font-pixel-display);
  font-size: 28px;
  padding: 4px 0;
  letter-spacing: 0.05em;
  position: relative;
}
.cds-marq-track {
  display: inline-flex;
  animation: cds-marq var(--cds-marq-dur, 18s) linear infinite;
  will-change: transform;
}
.cds-marq-track > span { padding: 0 24px; }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+1) { color: var(--neon-magenta); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+2) { color: var(--neon-cyan); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+3) { color: var(--neon-lime); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+4) { color: var(--neon-orange); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+5) { color: var(--bondi-300); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n+6) { color: var(--bubblegum-300); }
.cds-marq.rainbow .cds-marq-track > span:nth-child(7n)   { color: var(--neon-violet); }
.cds-marq.paper { background: var(--paper); }
.cds-marq.paper .cds-marq-track > span { color: var(--ink); }
@media (prefers-reduced-motion: reduce) {
  .cds-marq-track { animation: none; }
}
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
function Marquee({
  children,
  speed = 18,
  rainbow = true,
  tone = 'ink',
  repeat = 6,
  style
}) {
  inject();
  const items = Array.from({
    length: repeat
  }, (_, i) => i);
  return /*#__PURE__*/React.createElement("div", {
    className: `cds-marq ${rainbow ? 'rainbow' : ''} ${tone}`,
    style: {
      ...style,
      ['--cds-marq-dur']: `${speed}s`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cds-marq-track"
  }, items.map(i => /*#__PURE__*/React.createElement("span", {
    key: `a${i}`
  }, children)), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: `b${i}`
  }, children))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dream/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/dream/OverexposedText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OverexposedText({
  as: Tag = 'span',
  size = 56,
  color = 'paper',
  glow = 'bondi',
  children,
  style,
  ...rest
}) {
  const palette = {
    paper: 'var(--paper)',
    frost: 'var(--frost-50)',
    bondi: 'var(--bondi-200)',
    chrome: 'var(--chrome-100)',
    bubblegum: 'var(--bubblegum-200)',
    peach: 'var(--peach-200)',
    rose: 'var(--rose-300)',
    sodium: 'var(--sodium-200)',
    tile: 'var(--tile-200)'
  };
  const glows = {
    bondi: 'var(--glow-text-overexposed)',
    chrome: '0 0 8px var(--frost-50), 0 0 18px var(--chrome-100), 0 0 32px rgba(196,208,221,0.55)',
    bubblegum: '0 0 8px var(--bubblegum-200), 0 0 20px var(--bubblegum-300), 0 0 36px rgba(255,126,182,0.45)',
    pool: '0 0 8px var(--tile-100), 0 0 20px var(--tile-300), 0 0 36px rgba(74,143,168,0.4)',
    peach: '0 0 8px var(--paper), 0 0 16px var(--peach-200), 0 0 28px rgba(244,184,160,0.5)',
    rose: '0 0 8px var(--rose-200), 0 0 18px var(--rose-300), 0 0 32px rgba(240,164,184,0.45)'
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-pixel-display)',
      fontSize: size,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: palette[color] ?? palette.paper,
      textShadow: glows[glow] ?? glows.bondi,
      display: 'inline-block',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { OverexposedText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dream/OverexposedText.jsx", error: String((e && e.message) || e) }); }

// components/texture/GrainOverlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function GrainOverlay({
  opacity = 0.18,
  blendMode = 'multiply',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      backgroundImage: 'url(/assets/grain.svg)',
      backgroundSize: '200px 200px',
      opacity,
      mixBlendMode: blendMode,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { GrainOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/texture/GrainOverlay.jsx", error: String((e && e.message) || e) }); }

// components/texture/Halo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const palettes = {
  peach: {
    c1: '#fce5d8',
    c2: '#f4b8a0',
    c3: '#f0a4b8'
  },
  rose: {
    c1: '#fce5d8',
    c2: '#f0a4b8',
    c3: '#e57f9b'
  },
  pool: {
    c1: '#d3e6ed',
    c2: '#8fc0d2',
    c3: '#4a8fa8'
  },
  sodium: {
    c1: '#fbf3d8',
    c2: '#efd57e',
    c3: '#dcb13f'
  }
};
function Halo({
  color = 'peach',
  size = 320,
  children,
  style,
  ...rest
}) {
  const p = palettes[color] ?? palettes.peach;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      width: size,
      height: size,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: `radial-gradient(circle, ${p.c1} 0%, ${p.c2} 45%, ${p.c3} 70%, transparent 100%)`,
      opacity: 0.7,
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Halo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/texture/Halo.jsx", error: String((e && e.message) || e) }); }

// components/texture/TilePattern.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const patterns = {
  cool: 'url(/assets/tile.svg)',
  warm: 'url(/assets/tile-warm.svg)',
  caustic: 'url(/assets/caustic.svg)',
  grain: 'url(/assets/grain.svg)'
};
function TilePattern({
  pattern = 'cool',
  size = 64,
  opacity = 1,
  blendMode,
  fixed = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      backgroundImage: patterns[pattern] ?? patterns.cool,
      backgroundSize: `${size}px ${size}px`,
      backgroundRepeat: 'repeat',
      backgroundAttachment: fixed ? 'fixed' : 'scroll',
      imageRendering: 'pixelated',
      opacity,
      mixBlendMode: blendMode,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { TilePattern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/texture/TilePattern.jsx", error: String((e && e.message) || e) }); }

// components/window/TabBar.jsx
try { (() => {
const STYLE_ID = 'cds-tab-style';
const css = `
.cds-tabs {
  display: flex;
  font-family: var(--font-ui-sans);
  font-size: 12px;
  gap: 0;
  border-bottom: 1px solid var(--ink);
  align-items: flex-end;
}
.cds-tab {
  padding: 4px 12px 5px;
  background: var(--paper-stained);
  color: var(--ink);
  border: 1px solid var(--ink);
  border-bottom: none;
  margin-right: -1px;
  margin-bottom: -1px;
  cursor: pointer;
  position: relative;
  user-select: none;
  letter-spacing: 0.02em;
}
.cds-tab[aria-selected="true"] {
  background: var(--paper);
  z-index: 2;
  padding-top: 6px;
  margin-top: -2px;
  box-shadow: inset 0 1px 0 var(--bevel-hi);
}
.cds-tab:not([aria-selected="true"]):hover { background: var(--sodium-100); }
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
function TabBar({
  items,
  value,
  onChange,
  style
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", {
    className: "cds-tabs",
    role: "tablist",
    style: style
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      role: "tab",
      "aria-selected": value === id,
      onClick: () => onChange?.(id),
      className: "cds-tab"
    }, label);
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/window/TabBar.jsx", error: String((e && e.message) || e) }); }

// components/window/Toast.jsx
try { (() => {
const tones = {
  info: {
    bar: 'var(--bondi-500)',
    barFg: 'var(--frost-50)'
  },
  warn: {
    bar: 'var(--bubblegum-500)',
    barFg: 'var(--frost-50)'
  },
  dream: {
    bar: 'var(--bubblegum-300)',
    barFg: 'var(--ink)'
  },
  sodium: {
    bar: 'var(--sodium-500)',
    barFg: 'var(--ink)'
  }
};
function Toast({
  title = 'note',
  tone = 'info',
  onClose,
  children,
  style
}) {
  const t = tones[tone] ?? tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: 240,
      maxWidth: 360,
      background: 'var(--surface-window)',
      border: '1px solid var(--ink)',
      boxShadow: 'var(--shadow-window)',
      fontFamily: 'var(--font-ui-sans)',
      color: 'var(--ink)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 6px',
      background: t.bar,
      color: t.barFg,
      fontSize: 12,
      fontWeight: 700,
      borderBottom: '1px solid var(--ink)',
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "close",
    style: {
      width: 16,
      height: 14,
      padding: 0,
      background: 'var(--paper-stained)',
      color: 'var(--ink)',
      border: '1px solid var(--ink)',
      boxShadow: 'var(--bevel-out)',
      fontSize: 11,
      fontFamily: 'var(--font-pixel-mono)',
      cursor: 'pointer',
      fontWeight: 700,
      lineHeight: 1,
      flex: 'none'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/window/Toast.jsx", error: String((e && e.message) || e) }); }

// components/window/Window.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STYLE_ID = 'cds-window-style';
const css = `
.cds-win {
  display: inline-flex; flex-direction: column;
  background: var(--surface-window);
  border: 1px solid var(--ink);
  box-shadow: var(--shadow-window);
  font-family: var(--font-ui-sans);
  color: var(--ink);
  min-width: 200px;
  position: relative;
}
.cds-win.lg { box-shadow: var(--shadow-window-lg); }
.cds-win-tb {
  display: flex; align-items: center; gap: 6px;
  padding: 3px 6px;
  background: var(--titlebar-bg);
  color: var(--titlebar-fg);
  font-size: 12px;
  font-weight: 700;
  border-bottom: 1px solid var(--ink);
  user-select: none;
}
.cds-win.inactive .cds-win-tb { background: var(--titlebar-bg-inactive); color: var(--ink-soft); }
.cds-win-title { flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.02em; }
.cds-win-tb-stripes {
  flex: 1; height: 9px;
  background-image: repeating-linear-gradient(0deg,
    var(--titlebar-fg) 0 1px, transparent 1px 3px);
  opacity: 0.55;
  margin: 0 6px;
}
.cds-win-cb {
  width: 16px; height: 14px;
  background: var(--paper-stained);
  color: var(--ink);
  border: 1px solid var(--ink);
  box-shadow: var(--bevel-out);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 11px; line-height: 1; font-weight: 700;
  cursor: pointer;
  font-family: var(--font-pixel-mono);
  flex: none;
}
.cds-win-cb:active { box-shadow: var(--bevel-in); }
.cds-win-body { padding: 12px; }
.cds-win-body.dense { padding: 8px; }
.cds-win-body.pool  { background: var(--surface-pool); }
.cds-win-body.dream { background: var(--peach-100); }
.cds-win-status {
  padding: 2px 8px;
  font-size: 11px;
  border-top: 1px solid var(--ink);
  background: var(--paper-stained);
  box-shadow: var(--bevel-in);
  color: var(--text-muted);
  font-family: var(--font-pixel-mono);
  letter-spacing: 0.05em;
}
`;
function inject() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = css;
  document.head.appendChild(s);
}
function Window({
  title = 'untitled',
  active = true,
  size = 'md',
  bodyTone = 'paper',
  dense = false,
  onClose,
  onMinimize,
  status,
  decorativeStripes = true,
  children,
  style,
  ...rest
}) {
  inject();
  const bodyClass = 'cds-win-body' + (dense ? ' dense' : '') + (bodyTone === 'pool' ? ' pool' : '') + (bodyTone === 'dream' ? ' dream' : '');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cds-win ${active ? '' : 'inactive'} ${size === 'lg' ? 'lg' : ''}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cds-win-tb"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cds-win-title"
  }, title), decorativeStripes && /*#__PURE__*/React.createElement("span", {
    className: "cds-win-tb-stripes",
    "aria-hidden": true
  }), onMinimize && /*#__PURE__*/React.createElement("button", {
    className: "cds-win-cb",
    "aria-label": "minimize",
    onClick: onMinimize
  }, "_"), onClose && /*#__PURE__*/React.createElement("button", {
    className: "cds-win-cb",
    "aria-label": "close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: bodyClass
  }, children), status && /*#__PURE__*/React.createElement("div", {
    className: "cds-win-status"
  }, status));
}
Object.assign(__ds_scope, { Window });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/window/Window.jsx", error: String((e && e.message) || e) }); }

// ui_kits/archive/DetailView.jsx
try { (() => {
// DetailView.jsx — large window for the selected file.
const ArchiveDetail = ({
  item,
  onClose
}) => {
  const {
    Window,
    Tag,
    GrainOverlay,
    Button
  } = window.CoreDesignSystem_61d596;
  if (!item) return null;
  return /*#__PURE__*/React.createElement(Window, {
    title: `${item.title}.jpg — mostly_empty/`,
    bodyTone: item.tone === 'pool' ? 'pool' : item.tone === 'dream' ? 'dream' : 'paper',
    size: "lg",
    onClose: onClose,
    status: `${item.meta.size} · ${item.meta.dims} · ${item.meta.date}`,
    style: {
      width: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--ink)',
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.previewUrlFor(item, 380, 250),
    alt: item.title,
    style: {
      width: '100%',
      display: 'block',
      filter: 'var(--filter-overexposed)'
    }
  }), /*#__PURE__*/React.createElement(GrainOverlay, {
    opacity: 0.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: item.tone,
    bracketed: true
  }, item.tag), /*#__PURE__*/React.createElement(Tag, {
    variant: "default",
    bracketed: true
  }, item.meta.dims), /*#__PURE__*/React.createElement(Tag, {
    variant: "ink",
    bracketed: true
  }, "archived")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontFamily: 'var(--font-body-serif)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("em", null, "\"", item.note, "\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "pool"
  }, "open in viewer"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "copy path"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "delete")));
};
window.ArchiveDetail = ArchiveDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/archive/DetailView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/archive/FileGrid.jsx
try { (() => {
// FileGrid.jsx — grid of thumbnail Windows, filterable + selectable.
const ArchiveFileGrid = ({
  activeCat,
  selectedId,
  onSelect
}) => {
  const {
    Tag,
    GrainOverlay
  } = window.CoreDesignSystem_61d596;
  const items = window.archiveCatalog.filter(i => activeCat === 'all' || i.tag === activeCat);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, items.map(item => {
    const isSel = item.id === selectedId;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onSelect(item.id),
      style: {
        padding: 0,
        cursor: 'pointer',
        display: 'block',
        textAlign: 'left',
        background: 'var(--paper-stained)',
        border: '1px solid var(--ink)',
        boxShadow: isSel ? 'var(--bevel-in), var(--glow-peach)' : 'var(--bevel-out)',
        fontFamily: 'inherit',
        color: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        aspectRatio: '4/3',
        overflow: 'hidden',
        background: 'var(--tile-300)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.previewUrlFor(item, 200, 150),
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'var(--filter-overexposed)'
      }
    }), /*#__PURE__*/React.createElement(GrainOverlay, {
      opacity: 0.22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 6px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-pixel-mono)',
        fontSize: 13,
        color: 'var(--ink)'
      }
    }, item.title, ".jpg"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
      variant: item.tone
    }, item.tag))));
  }));
};
window.ArchiveFileGrid = ArchiveFileGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/archive/FileGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/archive/Sidebar.jsx
try { (() => {
// Sidebar.jsx — left category list, rendered inside a Window.
const ArchiveSidebar = ({
  activeCat,
  onPick
}) => {
  const {
    Window,
    Tag
  } = window.CoreDesignSystem_61d596;
  const cats = window.archiveCategories;
  return /*#__PURE__*/React.createElement(Window, {
    title: "categories.idx",
    dense: true,
    status: "[ select to filter ]",
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, cats.map(c => {
    const active = c.id === activeCat;
    return /*#__PURE__*/React.createElement("li", {
      key: c.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onPick(c.id),
      style: {
        width: '100%',
        textAlign: 'left',
        fontFamily: 'var(--font-ui-sans)',
        fontSize: 12,
        background: active ? 'var(--tile-200)' : 'transparent',
        border: '1px solid',
        borderColor: active ? 'var(--ink)' : 'transparent',
        padding: '3px 6px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
        color: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("span", null, active ? '▸ ' : '', c.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-pixel-mono)',
        color: 'var(--text-muted)'
      }
    }, "[", c.count(), "]")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 8,
      borderTop: '1px dashed var(--ink-muted)',
      fontFamily: 'var(--font-body-serif)',
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("em", null, "an archive of mostly-empty places, kept by hand since 1999.")));
};
window.ArchiveSidebar = ArchiveSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/archive/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/archive/catalog.js
try { (() => {
// Sample catalog. Swap previewUrl with real photos when you have them.
window.archiveCatalog = [{
  id: 'pool_05',
  title: 'pool_05',
  tag: 'poolcore',
  tone: 'pool',
  seed: 'pool5',
  note: 'drained two summers ago. tile grout the color of old butter.',
  meta: {
    size: '312 KB',
    date: '06.23.2026',
    dims: '1280×960'
  }
}, {
  id: 'hall_07',
  title: 'hall_07',
  tag: 'backrooms',
  tone: 'sodium',
  seed: 'hall7',
  note: 'fluorescent, humming. no end in sight.',
  meta: {
    size: '247 KB',
    date: '05.11.2026',
    dims: '1024×768'
  }
}, {
  id: 'dream_11',
  title: 'dream_11',
  tag: 'dreamcore',
  tone: 'dream',
  seed: 'dream11',
  note: "soft afternoon. couldn't tell if I was awake.",
  meta: {
    size: '190 KB',
    date: '04.02.2026',
    dims: '960×720'
  }
}, {
  id: 'mall_03',
  title: 'mall_03',
  tag: 'liminal',
  tone: 'sodium',
  seed: 'mall3',
  note: 'after hours. somebody left the music on.',
  meta: {
    size: '410 KB',
    date: '03.18.2026',
    dims: '1600×1200'
  }
}, {
  id: 'rain_09',
  title: 'rain_09',
  tag: 'wet',
  tone: 'pool',
  seed: 'rain9',
  note: 'puddle the size of an apology.',
  meta: {
    size: '288 KB',
    date: '02.07.2026',
    dims: '1280×960'
  }
}, {
  id: 'soft_22',
  title: 'soft_22',
  tag: 'dreamcore',
  tone: 'dream',
  seed: 'soft22',
  note: 'who left this here.',
  meta: {
    size: '164 KB',
    date: '01.19.2026',
    dims: '960×720'
  }
}, {
  id: 'tiles_30',
  title: 'tiles_30',
  tag: 'poolcore',
  tone: 'pool',
  seed: 'tiles30',
  note: 'still smelled like chlorine for months after.',
  meta: {
    size: '355 KB',
    date: '12.04.2025',
    dims: '1440×1080'
  }
}, {
  id: 'glow_14',
  title: 'glow_14',
  tag: 'dreamcore',
  tone: 'dream',
  seed: 'glow14',
  note: 'sodium lamp at 3am. nothing else.',
  meta: {
    size: '201 KB',
    date: '11.22.2025',
    dims: '1024×768'
  }
}];
window.archiveCategories = [{
  id: 'all',
  label: 'all rooms',
  count: () => window.archiveCatalog.length
}, {
  id: 'poolcore',
  label: 'poolcore',
  count: () => window.archiveCatalog.filter(x => x.tag === 'poolcore').length
}, {
  id: 'backrooms',
  label: 'backrooms',
  count: () => window.archiveCatalog.filter(x => x.tag === 'backrooms').length
}, {
  id: 'dreamcore',
  label: 'dreamcore',
  count: () => window.archiveCatalog.filter(x => x.tag === 'dreamcore').length
}, {
  id: 'liminal',
  label: 'liminal',
  count: () => window.archiveCatalog.filter(x => x.tag === 'liminal').length
}, {
  id: 'wet',
  label: 'wet',
  count: () => window.archiveCatalog.filter(x => x.tag === 'wet').length
}];
window.previewUrlFor = function (item, w, h) {
  return `https://picsum.photos/seed/${item.seed}/${w}/${h}`;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/archive/catalog.js", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogFooter.jsx
try { (() => {
const BlogFooter = () => {
  const {
    Marquee,
    Divider
  } = window.CoreDesignSystem_61d596;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 48,
      borderTop: '1px solid var(--ink)',
      background: 'var(--bondi-900)',
      color: 'var(--paper)',
      fontFamily: 'var(--font-ui-sans)'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    speed: 22,
    tone: "paper"
  }, "\u2591 thanks for visiting \u2591 best viewed in 1024\xD7768 \u2591 sign the guestbook \u2591 web ring >> \u2591"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 32px 28px',
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel-display)',
      fontSize: 28,
      color: 'var(--bondi-200)'
    }
  }, "mostly empty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel-mono)',
      fontSize: 12,
      color: 'var(--bondi-200)',
      marginTop: 4
    }
  }, "you are visitor 00,141,082")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel-mono)',
      fontSize: 12,
      color: 'var(--bondi-200)',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--paper)'
    }
  }, "web ring"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--neon-cyan)'
    }
  }, "\xAB prev (drain_records)"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--neon-lime)'
    }
  }, "random"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--neon-magenta)'
    }
  }, "next (hum_archive) \xBB")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-body-serif)',
      fontSize: 13,
      color: 'var(--bondi-100)',
      fontStyle: 'italic',
      maxWidth: 280
    }
  }, "this site has been hand-coded since 1999. nothing is generated. nothing is tracked.")));
};
window.BlogFooter = BlogFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogHeader.jsx
try { (() => {
const BlogHeader = ({
  activePostId,
  onPick
}) => {
  const {
    Marquee,
    Tag,
    OverexposedText
  } = window.CoreDesignSystem_61d596;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: '1px solid var(--ink)',
      background: 'var(--paper)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Marquee, {
    speed: 26
  }, "\u2591 welcome to mostly_empty.com \u2014 an archive of liminal places \u2591"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      padding: '20px 32px 16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    style: {
      width: 56,
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OverexposedText, {
    as: "h1",
    size: 56,
    color: "paper",
    glow: "bondi",
    style: {
      margin: 0,
      display: 'inline-block'
    }
  }, "mostly empty"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontFamily: 'var(--font-pixel-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      letterSpacing: '0.06em'
    }
  }, "est. 1999 \xB7 curated by hand \xB7 last touched 06.23.2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    variant: "pool"
  }, "poolcore"), /*#__PURE__*/React.createElement(Tag, {
    variant: "dream"
  }, "dreamcore"), /*#__PURE__*/React.createElement(Tag, {
    variant: "sodium"
  }, "backrooms"), /*#__PURE__*/React.createElement(Tag, {
    variant: "ink"
  }, "about"))));
};
window.BlogHeader = BlogHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/BlogSidebar.jsx
try { (() => {
const BlogSidebar = ({
  activePostId,
  onPick
}) => {
  const {
    Window,
    Button,
    Tag,
    Divider,
    Checkbox
  } = window.CoreDesignSystem_61d596;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Window, {
    title: "recent",
    dense: true,
    status: `[ ${window.blogPosts.length} entries ]`
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, window.blogPosts.map(p => {
    const active = p.id === activePostId;
    return /*#__PURE__*/React.createElement("li", {
      key: p.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onPick(p.id),
      style: {
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'var(--font-body-serif)',
        fontSize: 14,
        lineHeight: 1.35,
        background: active ? 'var(--peach-100)' : 'transparent',
        color: 'var(--ink)',
        border: '1px solid',
        borderColor: active ? 'var(--ink)' : 'transparent',
        padding: '5px 6px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontStyle: active ? 'normal' : 'italic'
      }
    }, active ? '▸ ' : '', p.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-pixel-mono)',
        fontSize: 11,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, p.date, " \xB7 ", p.tags[0])));
  }))), /*#__PURE__*/React.createElement(Window, {
    title: "guestbook.cgi",
    bodyTone: "dream",
    decorativeStripes: false
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body-serif)',
      fontSize: 13,
      lineHeight: 1.5,
      margin: '0 0 8px'
    }
  }, "tell me you were here. the entries are kept by hand."), /*#__PURE__*/React.createElement(Button, {
    variant: "dream",
    size: "md",
    glow: true
  }, "sign guestbook")), /*#__PURE__*/React.createElement(Window, {
    title: "prefs",
    dense: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true
  }, "show grain"), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true
  }, "autoplay marquee"), /*#__PURE__*/React.createElement(Checkbox, null, "cursor trails"))), /*#__PURE__*/React.createElement(Window, {
    title: "now playing",
    dense: true,
    decorativeStripes: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-pixel-mono)',
      fontSize: 12,
      color: 'var(--ink)',
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u2641 rain on tile \xB7 loop"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "03:14 / \u221E"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      height: 6,
      background: 'var(--paper-stained)',
      border: '1px solid var(--ink)',
      boxShadow: 'var(--bevel-in)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '34%',
      background: 'var(--tile-500)'
    }
  })))));
};
window.BlogSidebar = BlogSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/BlogSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/PostBody.jsx
try { (() => {
const BlogPostBody = ({
  post
}) => {
  const {
    Tag,
    Divider,
    GrainOverlay
  } = window.CoreDesignSystem_61d596;
  if (!post) return null;
  return /*#__PURE__*/React.createElement("article", {
    style: {
      fontFamily: 'var(--font-body-serif)',
      fontSize: 16,
      lineHeight: 1.65,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: '1px solid var(--ink)',
      background: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://picsum.photos/seed/${post.bannerSeed}/780/280`,
    alt: "",
    style: {
      width: '100%',
      display: 'block',
      filter: 'var(--filter-overexposed)'
    }
  }), /*#__PURE__*/React.createElement(GrainOverlay, {
    opacity: 0.22
  })), /*#__PURE__*/React.createElement("header", {
    style: {
      margin: '24px 0 10px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-pixel-display)',
      fontSize: 56,
      lineHeight: 1.05,
      margin: 0,
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }
  }, post.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-pixel-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      letterSpacing: '0.05em',
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), post.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: t === 'poolcore' ? 'pool' : t === 'dreamcore' ? 'dream' : t === 'backrooms' ? 'sodium' : 'default',
    bracketed: true
  }, t)))), /*#__PURE__*/React.createElement(Divider, {
    variant: "block",
    label: "entry"
  }), post.body.map((b, i) => {
    if (b.kind === 'p') return /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        margin: '0 0 16px',
        textWrap: 'pretty'
      }
    }, b.text);
    if (b.kind === 'h') return /*#__PURE__*/React.createElement("h3", {
      key: i,
      style: {
        fontFamily: 'var(--font-pixel-display)',
        fontSize: 28,
        margin: '24px 0 8px',
        color: 'var(--ink)'
      }
    }, b.text);
    if (b.kind === 'ul') return /*#__PURE__*/React.createElement("ul", {
      key: i,
      style: {
        margin: '0 0 16px',
        paddingLeft: 20
      }
    }, b.items.map((it, k) => /*#__PURE__*/React.createElement("li", {
      key: k,
      style: {
        marginBottom: 4
      }
    }, it)));
    if (b.kind === 'img') return /*#__PURE__*/React.createElement("figure", {
      key: i,
      style: {
        margin: '18px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        border: '1px solid var(--ink)',
        background: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `https://picsum.photos/seed/${b.seed}/720/360`,
      alt: b.alt || '',
      style: {
        width: '100%',
        display: 'block',
        filter: 'var(--filter-overexposed)'
      }
    }), /*#__PURE__*/React.createElement(GrainOverlay, {
      opacity: 0.22
    })), b.caption && /*#__PURE__*/React.createElement("figcaption", {
      style: {
        marginTop: 6,
        fontFamily: 'var(--font-body-serif)',
        fontSize: 13,
        fontStyle: 'italic',
        color: 'var(--text-muted)'
      }
    }, b.caption));
    return null;
  }), /*#__PURE__*/React.createElement(Divider, {
    variant: "dashed"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body-serif)',
      fontSize: 13,
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, "(if you read this far, sign the guestbook before you leave.)"));
};
window.BlogPostBody = BlogPostBody;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/PostBody.jsx", error: String((e && e.message) || e) }); }

// ui_kits/blog/posts.js
try { (() => {
window.blogPosts = [{
  id: 'the-drained-pool',
  title: 'the drained pool',
  date: '06.23.2026',
  tags: ['poolcore', 'wet', 'archive'],
  bannerSeed: 'pool22',
  body: [{
    kind: 'p',
    text: "the pool was drained two summers ago. I think about it sometimes — the way the tile grout turned the color of old butter, the way the deep end still smelled like chlorine for months after."
  }, {
    kind: 'p',
    text: "my neighbor used to swim at six in the morning. I would hear her from my window, the slap of the kickboard, the long pause between laps. she moved last fall."
  }, {
    kind: 'img',
    seed: 'pool33',
    alt: 'tile grout',
    caption: '(tile grout, the color of old butter)'
  }, {
    kind: 'p',
    text: "there is a particular kind of quiet you only get at a pool that no one has been in for months. the air is heavier. you can hear the pump room, even when the pump is off."
  }, {
    kind: 'h',
    text: "footnote"
  }, {
    kind: 'p',
    text: "the new owners say they are going to fill it in. I don't know what to do with that information."
  }]
}, {
  id: 'fluorescent-hallway',
  title: 'fluorescent hallway · field notes',
  date: '05.11.2026',
  tags: ['backrooms', 'field-notes'],
  bannerSeed: 'hall77',
  body: [{
    kind: 'p',
    text: "the hallway is in the basement of a building I used to work in. I don't work there anymore. the lights are the same kind I remember — the long tubes, the soft hum, the way they don't quite agree with each other on what color white is."
  }, {
    kind: 'p',
    text: "I went back last week. the carpet has been replaced. the hum is the same."
  }, {
    kind: 'img',
    seed: 'hall88',
    alt: 'hallway'
  }, {
    kind: 'p',
    text: "I asked someone at the front desk if I could walk to the end. they said: 'sure.' I walked to the end. it took longer than I remembered."
  }]
}, {
  id: 'soft-afternoon',
  title: 'soft afternoon',
  date: '04.02.2026',
  tags: ['dreamcore'],
  bannerSeed: 'dream44',
  body: [{
    kind: 'p',
    text: "I fell asleep with the window open. the light when I woke up was the color of a peach. I couldn't tell if I had been asleep for ten minutes or three hours."
  }, {
    kind: 'p',
    text: "the ceiling fan was on. I don't remember turning it on."
  }, {
    kind: 'h',
    text: "things in the room"
  }, {
    kind: 'ul',
    items: ['the fan (on)', 'the light (peach)', 'a glass of water (full)', 'me (uncertain)']
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/blog/posts.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Glow = __ds_scope.Glow;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.OverexposedText = __ds_scope.OverexposedText;

__ds_ns.GrainOverlay = __ds_scope.GrainOverlay;

__ds_ns.Halo = __ds_scope.Halo;

__ds_ns.TilePattern = __ds_scope.TilePattern;

__ds_ns.TabBar = __ds_scope.TabBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Window = __ds_scope.Window;

})();
