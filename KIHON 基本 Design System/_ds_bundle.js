/* @ds-bundle: {"format":4,"namespace":"KIHONDesignSystem_bc9292","components":[{"name":"Arc","sourcePath":"components/data/Arc.jsx"},{"name":"Bar","sourcePath":"components/data/Bar.jsx"},{"name":"Ramp","sourcePath":"components/data/Ramp.jsx"},{"name":"Knurl","sourcePath":"components/frame/Knurl.jsx"},{"name":"Placeholder","sourcePath":"components/frame/Placeholder.jsx"},{"name":"Rule","sourcePath":"components/frame/Rule.jsx"},{"name":"Stage","sourcePath":"components/frame/Stage.jsx"},{"name":"Surface","sourcePath":"components/frame/Surface.jsx"},{"name":"Chip","sourcePath":"components/type/Chip.jsx"},{"name":"Label","sourcePath":"components/type/Label.jsx"},{"name":"Numeral","sourcePath":"components/type/Numeral.jsx"},{"name":"Text","sourcePath":"components/type/Text.jsx"}],"sourceHashes":{"components/data/Arc.jsx":"bfe2ee772658","components/data/Bar.jsx":"e194d4a895fe","components/data/Ramp.jsx":"4cec8e1f7169","components/frame/Knurl.jsx":"de0d61a0d00b","components/frame/Placeholder.jsx":"b09439407fab","components/frame/Rule.jsx":"bf6ee0ef50e3","components/frame/Stage.jsx":"5d2d5d98b7f9","components/frame/Surface.jsx":"51de8c56ef6e","components/type/Chip.jsx":"d1ee9c389d64","components/type/Label.jsx":"49c147e7a3db","components/type/Numeral.jsx":"9c9686fa9d10","components/type/Text.jsx":"c7392404eb96","ui_kits/landscape/CompareFrame.jsx":"c206cf86e8f8","ui_kits/landscape/DataFrame.jsx":"54597210a2a4","ui_kits/landscape/StepFrame.jsx":"9040bf1e901e","ui_kits/landscape/TitleFrame.jsx":"3cee2a763129","ui_kits/portrait/CompareFrameP.jsx":"f4b08ff2196a","ui_kits/portrait/DataFrameP.jsx":"3ca2bd1079e5","ui_kits/portrait/StepFrameP.jsx":"62908297807e","ui_kits/portrait/TitleFrameP.jsx":"eb0d889cef63","ui_kits/shared/kit-motion.jsx":"55f4efac2031"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KIHONDesignSystem_bc9292 = window.KIHONDesignSystem_bc9292 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Arc.jsx
try { (() => {
/** Donut arc on the ramp, hairline track. Center slot for a Numeral. */
function Arc({
  value = 0.6,
  step = 4,
  size = 200,
  thickness = 9,
  label,
  style
}) {
  const r = 50 - thickness / 2,
    c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(1, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 'calc(' + size + 'px * var(--u, 1))',
      aspectRatio: '1 / 1',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: '100%',
      height: '100%',
      transform: 'rotate(-90deg)',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: r,
    fill: "none",
    stroke: "var(--line)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: r,
    fill: "none",
    stroke: 'var(--ramp-' + Math.min(4, Math.max(1, Math.round(step))) + ')',
    strokeWidth: thickness,
    strokeDasharray: c,
    strokeDashoffset: c * (1 - v),
    strokeLinecap: "butt"
  })), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, label));
}
Object.assign(__ds_scope, { Arc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Arc.jsx", error: String((e && e.message) || e) }); }

// components/data/Bar.jsx
try { (() => {
/** Data bar on the lightness ramp — never hue. The growing face carries a machined cap. */
function Bar({
  value = 1,
  step = 4,
  direction = 'up',
  thickness,
  cap,
  style
}) {
  const pct = Math.max(0, Math.min(1, value)) * 100 + '%';
  const s = Math.min(4, Math.max(1, Math.round(step)));
  const color = 'var(--ramp-' + s + ')';
  const r = 'calc(4px * var(--u, 1))';
  if (direction === 'right') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'calc(16px * var(--u, 1))',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct,
        height: thickness || 'calc(56px * var(--u, 1))',
        background: color,
        borderRadius: '0 ' + r + ' ' + r + ' 0',
        boxShadow: 'var(--bar-cap-right-' + s + ')'
      }
    }), cap && /*#__PURE__*/React.createElement("span", {
      className: "k-data-tick",
      style: {
        color: 'var(--ink)'
      }
    }, cap));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 'calc(12px * var(--u, 1))',
      height: '100%',
      ...style
    }
  }, cap && /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      color: 'var(--ink)'
    }
  }, cap), /*#__PURE__*/React.createElement("div", {
    style: {
      height: pct,
      width: thickness || '100%',
      background: color,
      borderRadius: r + ' ' + r + ' 0 0',
      boxShadow: 'var(--bar-cap-up-' + s + ')'
    }
  }));
}
Object.assign(__ds_scope, { Bar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Bar.jsx", error: String((e && e.message) || e) }); }

// components/data/Ramp.jsx
try { (() => {
/** Legend for the 4-step lightness ramp. */
function Ramp({
  labels,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(14px * var(--u, 1))',
      ...style
    }
  }, [1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'calc(18px * var(--u, 1))',
      height: 'calc(18px * var(--u, 1))',
      background: 'var(--ramp-' + i + ')',
      borderRadius: 'calc(3px * var(--u, 1))',
      boxShadow: 'var(--edge-raised)'
    }
  }), labels && labels[i - 1] && /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick"
  }, labels[i - 1]))));
}
Object.assign(__ds_scope, { Ramp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Ramp.jsx", error: String((e && e.message) || e) }); }

// components/frame/Knurl.jsx
try { (() => {
const PITCH = 5;
/** Knurl band — 1px teeth at 5px pitch (lens focus ring). Divider, or a progress track whose
 *  boundary detents onto a tooth gap: the elapsed span never slices a tooth in half. */
function Knurl({
  progress,
  tone = 'line',
  style
}) {
  const color = tone === 'strong' ? 'var(--line-strong)' : 'var(--line)';
  const ref = React.useRef(null);
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || progress == null) return;
    const set = () => setW(el.clientWidth);
    const ro = new ResizeObserver(set);
    ro.observe(el);
    set();
    return () => ro.disconnect();
  }, [progress]);
  const p = progress == null ? null : Math.max(0, Math.min(1, progress));
  const snapped = p != null && w ? Math.round(w * p / PITCH) * PITCH : null;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      height: 'var(--knurl-h)',
      color,
      background: 'var(--knurl)',
      ...style
    }
  }, snapped != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: snapped,
      color: 'var(--accent)',
      background: 'var(--knurl)'
    }
  }), snapped != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: snapped - 1,
      top: '-2px',
      bottom: '-2px',
      width: 1,
      background: 'var(--accent)'
    }
  }));
}
Object.assign(__ds_scope, { Knurl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Knurl.jsx", error: String((e && e.message) || e) }); }

// components/frame/Placeholder.jsx
try { (() => {
/** Media slot: recessed well, crossed hairlines, tick label. Never fake imagery. */
function Placeholder({
  label = '素材位',
  ratio = '16 / 9',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "k-well",
    style: {
      aspectRatio: ratio,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    },
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "100%",
    y2: "100%",
    stroke: "var(--line)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "100%",
    y1: "0",
    x2: "0",
    y2: "100%",
    stroke: "var(--line)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      position: 'relative',
      background: 'var(--grad-well)',
      padding: '0.3em 0.8em'
    }
  }, label));
}
Object.assign(__ds_scope, { Placeholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Placeholder.jsx", error: String((e && e.message) || e) }); }

// components/frame/Rule.jsx
try { (() => {
/** Hairline rule, optionally with end ticks on the shared 5px tick grid — the section keyline. */
function Rule({
  vertical = false,
  tone = 'line',
  ticks = false,
  style
}) {
  const color = tone === 'strong' ? 'var(--line-strong)' : tone === 'accent' ? 'var(--accent)' : 'var(--line)';
  if (vertical) return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      minWidth: 1,
      maxWidth: 1,
      alignSelf: 'stretch',
      background: color,
      ...style
    }
  });
  const h = 'calc(var(--tick-h) * var(--u, 1))';
  const tick = {
    position: 'absolute',
    width: 1,
    height: h,
    top: 'calc((' + h + ' / -2) + 0.5px)',
    background: color
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 1,
      minHeight: 1,
      maxHeight: 1,
      flex: '1 1 auto',
      background: color,
      ...style
    }
  }, ticks && /*#__PURE__*/React.createElement("div", {
    style: {
      ...tick,
      left: 0
    }
  }), ticks && /*#__PURE__*/React.createElement("div", {
    style: {
      ...tick,
      right: 0
    }
  }));
}
Object.assign(__ds_scope, { Rule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Rule.jsx", error: String((e && e.message) || e) }); }

// components/frame/Stage.jsx
try { (() => {
/** Full-frame video stage: metal ground, grain, lens falloff, safe-area padding, format-relative unit --u. */
function Stage({
  format = 'landscape',
  theme = 'gin',
  grain = true,
  safe = false,
  falloff = true,
  children,
  style
}) {
  const ref = React.useRef(null);
  const base = format === 'portrait' ? 1080 : 1920;
  const [u, setU] = React.useState(0.35);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = () => setU(el.clientWidth / base);
    const ro = new ResizeObserver(set);
    ro.observe(el);
    set();
    return () => ro.disconnect();
  }, [base]);
  const isP = format === 'portrait';
  const safeX = isP ? '7.5%' : '6%';
  const safeY = isP ? '6%' : '9%';
  const none = {
    pointerEvents: 'none'
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-k-theme": theme === 'kuro' ? 'kuro' : undefined,
    style: {
      position: 'relative',
      aspectRatio: isP ? '9 / 16' : '16 / 9',
      background: 'var(--bg)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-core)',
      overflow: 'hidden',
      '--u': u,
      ...style
    }
  }, grain && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--grain-url)',
      backgroundSize: '280px',
      opacity: 'var(--grain-opacity)',
      filter: 'var(--grain-invert)',
      ...none
    }
  }), falloff && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--falloff)',
      ...none
    }
  }), safe && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: safeX,
      right: safeX,
      top: safeY,
      bottom: safeY,
      border: '1px dashed var(--accent)',
      opacity: .5,
      ...none
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: safeX,
      right: safeX,
      top: safeY,
      bottom: safeY,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children));
}
Object.assign(__ds_scope, { Stage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Stage.jsx", error: String((e && e.message) || e) }); }

// components/frame/Surface.jsx
try { (() => {
const LEVELS = {
  plate: 'k-plate',
  card: 'k-card',
  control: 'k-control',
  well: 'k-well'
};
/** Machined surface at one of 4 levels. Emphasis = accent edge (selected / AFTER). */
function Surface({
  level = 'card',
  emphasized = false,
  tone = 'neutral',
  pad = true,
  style,
  children
}) {
  const s = {
    boxSizing: 'border-box',
    position: 'relative',
    color: 'var(--ink)'
  };
  if (pad) s.padding = 'calc(34px * var(--u, 1))';
  if (tone === 'accent') {
    s.background = 'var(--accent)';
    s.color = 'var(--accent-ink)';
    s.borderColor = 'var(--accent)';
  }
  if (emphasized) {
    s.borderColor = 'var(--accent)';
    s.boxShadow = 'inset 0 0 0 1px var(--accent), var(--edge-raised), var(--shadow-card)';
  }
  return /*#__PURE__*/React.createElement("div", {
    className: LEVELS[level] || LEVELS.card,
    style: {
      ...s,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Surface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/frame/Surface.jsx", error: String((e && e.message) || e) }); }

// components/type/Chip.jsx
try { (() => {
const MARKS = {
  after: '✓',
  before: '✗',
  active: '●'
};
/** State chip. States are the ONLY place accent appears: selected/active/after. */
function Chip({
  state = 'neutral',
  children,
  style
}) {
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.45em',
    fontFamily: 'var(--font-core)',
    fontSize: 'calc(30px * var(--u, 1))',
    fontWeight: 500,
    lineHeight: 1,
    padding: '0.42em 0.85em',
    borderRadius: 'var(--radius-chip)',
    border: '1px solid var(--line)',
    color: 'var(--ink-muted)',
    background: 'transparent',
    whiteSpace: 'nowrap'
  };
  if (state === 'selected') {
    Object.assign(s, {
      background: 'var(--accent)',
      color: 'var(--accent-ink)',
      borderColor: 'var(--accent)',
      boxShadow: 'var(--edge-raised), var(--shadow-control)'
    });
  }
  if (state === 'active' || state === 'after') {
    Object.assign(s, {
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      borderColor: 'var(--accent)'
    });
  }
  if (state === 'before') {
    Object.assign(s, {
      color: 'var(--negative)'
    });
  }
  const mark = MARKS[state];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...s,
      ...style
    }
  }, mark && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, mark), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Chip.jsx", error: String((e && e.message) || e) }); }

// components/type/Label.jsx
try { (() => {
/** Tracked uppercase label. Plain by default: no tick, no rule — opt into the hairline with rule. */
function Label({
  children,
  index,
  rule = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(16px * var(--u, 1))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-label"
  }, children), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--line)'
    }
  }), index && /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      marginLeft: rule ? 0 : 'auto'
    }
  }, index));
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Label.jsx", error: String((e && e.message) || e) }); }

// components/type/Numeral.jsx
try { (() => {
/** Instrument numeral in B612 Mono, tabular. Big data value or small tick. */
function Numeral({
  value,
  unit,
  tick = false,
  color,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: '0.18em',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: tick ? 'k-data-tick' : 'k-data-value',
    style: color ? {
      color
    } : undefined
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick"
  }, unit));
}
Object.assign(__ds_scope, { Numeral });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Numeral.jsx", error: String((e && e.message) || e) }); }

// components/type/Text.jsx
try { (() => {
const COLORS = {
  ink: 'var(--ink)',
  muted: 'var(--ink-muted)',
  faint: 'var(--ink-faint)',
  accent: 'var(--accent)',
  negative: 'var(--negative)'
};
/** Role-based text: display/title/subtitle/body/caption. Sizes are locked design-px × --u. */
function Text({
  role = 'body',
  color,
  children,
  style
}) {
  const Tag = role === 'display' || role === 'title' ? 'h1' : 'p';
  return /*#__PURE__*/React.createElement(Tag, {
    className: 'k-' + role,
    style: {
      ...(color ? {
        color: COLORS[color] || color
      } : {}),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Text });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Text.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landscape/CompareFrame.jsx
try { (() => {
const {
  Stage,
  Text,
  Surface
} = window.KIHONDesignSystem_bc9292;
const {
  In
} = window.KitShared;
const BEFORE = ['hold 固定 26 帧，谁都可以不管它', '时长手填 durationInFrames', '竖屏由横屏内容重排后靠上摆'];
const AFTER = ['hold 从字数长出来，人和 agent 都不会填错', '加一行字，片子自己变长', '9:16 是原生版式，不是适配'];
function Panel({
  f0,
  label,
  items,
  mark,
  markColor,
  dimmed,
  theme
}) {
  return /*#__PURE__*/React.createElement(In, {
    f: f0,
    role: "panel",
    style: {
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Surface, {
    emphasized: !dimmed,
    style: {
      flex: 1,
      opacity: dimmed ? 0.72 : 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(26px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-label",
    style: {
      color: dimmed ? 'var(--negative)' : 'var(--accent)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(14px * var(--u))'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(In, {
    key: it,
    f: f0 + 5 + i * 7
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'calc(14px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: markColor,
      fontSize: 'calc(30px * var(--u))',
      lineHeight: 1
    }
  }, mark), /*#__PURE__*/React.createElement("span", {
    className: "k-body",
    style: {
      color: dimmed ? 'var(--ink-muted)' : 'var(--ink)'
    }
  }, it)))))));
}
function CompareFrame({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "landscape",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'stretch',
      gap: 'calc(40px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    f0: 6,
    label: "Before",
    items: BEFORE,
    mark: "\u2717",
    markColor: "var(--negative)",
    dimmed: true
  }), /*#__PURE__*/React.createElement(In, {
    f: 24,
    role: "solid",
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)',
      fontSize: 'calc(46px * var(--u))',
      lineHeight: 1
    }
  }, "\u2192")), /*#__PURE__*/React.createElement(Panel, {
    f0: 24,
    label: "After",
    items: AFTER,
    mark: "\u2713",
    markColor: "var(--positive)"
  })));
}
window.CompareFrame = CompareFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landscape/CompareFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landscape/DataFrame.jsx
try { (() => {
const {
  Stage,
  Text,
  Bar,
  Rule
} = window.KIHONDesignSystem_bc9292;
const {
  In,
  ms
} = window.KitShared;
const ROWS = [{
  l: 'f32–35',
  v: 3
}, {
  l: 'f51–57',
  v: 6
}, {
  l: 'f60–66',
  v: 5
}, {
  l: 'f71–82',
  v: 4
}];
function DataFrame({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "landscape",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'stretch',
      gap: 'calc(72px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(22px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 0
  }, /*#__PURE__*/React.createElement(Text, {
    role: "title"
  }, "\u9759\u5E27\u662F\u8BBE\u8BA1\u7684\u4E00\u90E8\u5206")), /*#__PURE__*/React.createElement(In, {
    f: 8
  }, /*#__PURE__*/React.createElement(Text, {
    role: "body",
    color: "muted"
  }, "\u5BF9 20 \u4E2A\u6A21\u677F\u9010\u5E27\u7B97\u753B\u9762\u53D8\u5316\u91CF\uFF1A\u591A\u6570\u7247\u5B50\u5728 40%\u201370% \u5904\u5C31\u505C\u4E86\uFF0C\u5269\u4E0B\u7684 1\u20132 \u79D2\u662F\u7559\u7ED9\u4EBA\u8BFB\u5B8C\u7684\u65F6\u95F4\u3002")), /*#__PURE__*/React.createElement(In, {
    f: 40
  }, /*#__PURE__*/React.createElement(Text, {
    role: "caption",
    color: "faint"
  }, "\u6700\u540E\u4E00\u6B21\u53EF\u89C1\u8FD0\u52A8\u7684\u5E27\u53F7 \xB7 \u603B\u957F 90 \u5E27"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(12px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'calc(34px * var(--u))'
    }
  }, ROWS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.l,
    style: {
      flex: 1,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 'calc(14px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 11 + i * 8 + 8
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      color: 'var(--ink)'
    }
  }, b.v)), /*#__PURE__*/React.createElement("div", {
    className: "ke-grow-y",
    style: {
      width: '100%',
      height: b.v / 6 * 100 + '%',
      animationDelay: ms(11 + i * 8)
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    value: 1,
    step: i + 1
  }))))), /*#__PURE__*/React.createElement(In, {
    f: 11,
    role: "rule"
  }, /*#__PURE__*/React.createElement(Rule, {
    tone: "strong",
    style: {
      flexGrow: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'calc(34px * var(--u))'
    }
  }, ROWS.map((b, i) => /*#__PURE__*/React.createElement(In, {
    key: b.l,
    f: 11 + i * 8,
    role: "rule",
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 'calc(var(--tick-h) * var(--u))',
      background: 'var(--line)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'calc(34px * var(--u))'
    }
  }, ROWS.map((b, i) => /*#__PURE__*/React.createElement(In, {
    key: b.l,
    f: 11 + i * 8,
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick"
  }, b.l)))))));
}
window.DataFrame = DataFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landscape/DataFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landscape/StepFrame.jsx
try { (() => {
const {
  Stage,
  Text,
  Chip,
  Numeral
} = window.KIHONDesignSystem_bc9292;
const {
  In,
  ms
} = window.KitShared;
const STEPS = [{
  n: '01',
  t: 'parallel 并列',
  f: '0f',
  d: '读起来是一张双栏表、一组同级卡片'
}, {
  n: '02',
  t: 'sequence 递进',
  f: '8f',
  d: '读起来是一个列表、一串步骤'
}, {
  n: '03',
  t: 'causal 因果',
  f: '18f',
  d: '读起来是「从 A 变成了 B」'
}];
function StepFrame({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "landscape",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(26px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 0
  }, /*#__PURE__*/React.createElement(Text, {
    role: "title"
  }, "\u76F8\u4F4D\u5DEE\u662F\u8BED\u4E49\uFF0C\u4E0D\u662F\u88C5\u9970")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(In, {
    key: s.n,
    f: 11 + i * 11
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(30px * var(--u))',
      padding: 'calc(24px * var(--u)) 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement(Numeral, {
    tick: true,
    value: s.n
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-data-label",
    style: {
      width: 'calc(420px * var(--u))'
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      color: 'var(--accent)',
      width: 'calc(90px * var(--u))'
    }
  }, s.f), /*#__PURE__*/React.createElement("span", {
    className: "k-caption",
    style: {
      flex: 1
    }
  }, s.d), i === 2 && /*#__PURE__*/React.createElement(In, {
    f: 11 + i * 11 + 8 + 4,
    role: "solid"
  }, /*#__PURE__*/React.createElement(Chip, {
    state: "active"
  }, "\u76F8\u5DEE 0.6 \u79D2"))))))));
}
window.StepFrame = StepFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landscape/StepFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landscape/TitleFrame.jsx
try { (() => {
const {
  Stage,
  Text,
  Surface,
  Rule
} = window.KIHONDesignSystem_bc9292;
const {
  In
} = window.KitShared;
function TitleFrame({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "landscape",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(56px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(30px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 4
  }, /*#__PURE__*/React.createElement(Text, {
    role: "display"
  }, "\u8BA9\u65F6\u957F\u4ECE\u5185\u5BB9\u957F\u51FA\u6765")), /*#__PURE__*/React.createElement(In, {
    f: 12
  }, /*#__PURE__*/React.createElement(Text, {
    role: "subtitle",
    color: "muted"
  }, "\u9605\u8BFB\u9884\u7B97 hold = max(26, \u6C49\u5B57\u6570 \xD7 7.5) \u5E27\u2014\u2014\u52A0\u4E00\u884C\u5B57\uFF0C\u7247\u5B50\u81EA\u5DF1\u53D8\u957F\u3002"))), /*#__PURE__*/React.createElement(In, {
    f: 16,
    role: "panel",
    style: {
      flex: '0 0 calc(430px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(Surface, {
    level: "plate",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(16px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-label"
  }, "Spec"), /*#__PURE__*/React.createElement(In, {
    f: 20,
    role: "rule"
  }, /*#__PURE__*/React.createElement(Rule, null)), [['fade', '8f'], ['stagger', '8f'], ['phase', '18f'], ['hold', '26f +']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'calc(14px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      flex: 1
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      color: 'var(--accent)'
    }
  }, v)))))));
}
window.TitleFrame = TitleFrame;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landscape/TitleFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portrait/CompareFrameP.jsx
try { (() => {
const {
  Stage,
  Text,
  Surface
} = window.KIHONDesignSystem_bc9292;
const {
  In
} = window.KitShared;
const BEFORE = ['hold 固定 26 帧', '时长手填', '竖屏靠重排'];
const AFTER = ['hold 从字数长出来', '时长自己变', '9:16 原生版式'];
function PanelP({
  f0,
  label,
  items,
  mark,
  markColor,
  dimmed
}) {
  return /*#__PURE__*/React.createElement(In, {
    f: f0,
    role: "panel",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Surface, {
    emphasized: !dimmed,
    style: {
      flex: 1,
      opacity: dimmed ? 0.72 : 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(16px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-label",
    style: {
      color: dimmed ? 'var(--negative)' : 'var(--accent)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(12px * var(--u))'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(In, {
    key: it,
    f: f0 + 5 + i * 7
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'calc(14px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: markColor,
      fontSize: 'calc(30px * var(--u))',
      lineHeight: 1
    }
  }, mark), /*#__PURE__*/React.createElement("span", {
    className: "k-body"
  }, it)))))));
}
function CompareFrameP({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "portrait",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(22px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(PanelP, {
    f0: 6,
    label: "Before",
    items: BEFORE,
    mark: "\u2717",
    markColor: "var(--negative)",
    dimmed: true
  }), /*#__PURE__*/React.createElement(In, {
    f: 24,
    role: "solid",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-faint)',
      fontSize: 'calc(46px * var(--u))',
      lineHeight: 1
    }
  }, "\u2193")), /*#__PURE__*/React.createElement(PanelP, {
    f0: 24,
    label: "After",
    items: AFTER,
    mark: "\u2713",
    markColor: "var(--positive)"
  })));
}
window.CompareFrameP = CompareFrameP;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portrait/CompareFrameP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portrait/DataFrameP.jsx
try { (() => {
const {
  Stage,
  Text,
  Bar
} = window.KIHONDesignSystem_bc9292;
const {
  In,
  ms
} = window.KitShared;
const ROWS = [{
  l: 'f32–35',
  v: 3
}, {
  l: 'f51–57',
  v: 6
}, {
  l: 'f60–66',
  v: 5
}, {
  l: 'f71–82',
  v: 4
}];
function DataFrameP({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "portrait",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(40px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(18px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 0
  }, /*#__PURE__*/React.createElement(Text, {
    role: "title"
  }, "\u9759\u5E27\u662F\u8BBE\u8BA1", /*#__PURE__*/React.createElement("br", null), "\u7684\u4E00\u90E8\u5206")), /*#__PURE__*/React.createElement(In, {
    f: 8
  }, /*#__PURE__*/React.createElement(Text, {
    role: "body",
    color: "muted"
  }, "\u591A\u6570\u7247\u5B50\u5728 40%\u201370% \u5904\u5C31\u505C\u4E86\uFF0C\u5269\u4E0B\u7684\u662F\u9605\u8BFB\u65F6\u95F4\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(26px * var(--u))'
    }
  }, ROWS.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(10px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 11 + i * 8
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick"
  }, b.l)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(16px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ke-grow-x",
    style: {
      width: b.v / 6 * 82 + '%',
      animationDelay: ms(11 + i * 8)
    }
  }, /*#__PURE__*/React.createElement(Bar, {
    direction: "right",
    value: 1,
    step: i + 1
  })), /*#__PURE__*/React.createElement(In, {
    f: 11 + i * 8 + 8
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      color: 'var(--ink)'
    }
  }, b.v)))))), /*#__PURE__*/React.createElement(In, {
    f: 45
  }, /*#__PURE__*/React.createElement(Text, {
    role: "caption",
    color: "faint"
  }, "\u6700\u540E\u4E00\u6B21\u53EF\u89C1\u8FD0\u52A8\u7684\u5E27\u53F7 \xB7 \u603B\u957F 90 \u5E27"))));
}
window.DataFrameP = DataFrameP;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portrait/DataFrameP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portrait/StepFrameP.jsx
try { (() => {
const {
  Stage,
  Text,
  Chip,
  Numeral
} = window.KIHONDesignSystem_bc9292;
const {
  In
} = window.KitShared;
const STEPS = [{
  n: '01',
  t: 'parallel 并列',
  f: '0f',
  d: '一张双栏表'
}, {
  n: '02',
  t: 'sequence 递进',
  f: '8f',
  d: '一个列表'
}, {
  n: '03',
  t: 'causal 因果',
  f: '18f',
  d: '从 A 变成了 B'
}];
function StepFrameP({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "portrait",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(30px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 0
  }, /*#__PURE__*/React.createElement(Text, {
    role: "title"
  }, "\u76F8\u4F4D\u5DEE", /*#__PURE__*/React.createElement("br", null), "\u662F\u8BED\u4E49")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement(In, {
    key: s.n,
    f: 11 + i * 11
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'calc(8px * var(--u))',
      padding: 'calc(22px * var(--u)) 0',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'calc(18px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(Numeral, {
    tick: true,
    value: s.n
  }), /*#__PURE__*/React.createElement("span", {
    className: "k-data-label",
    style: {
      flex: 1
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    className: "k-data-tick",
    style: {
      color: 'var(--accent)'
    }
  }, s.f)), /*#__PURE__*/React.createElement("span", {
    className: "k-caption",
    style: {
      paddingLeft: 'calc(58px * var(--u))'
    }
  }, s.d))))), /*#__PURE__*/React.createElement(In, {
    f: 48,
    role: "solid",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    state: "active"
  }, "\u76F8\u4F4D\u643A\u5E26\u8BED\u4E49"))));
}
window.StepFrameP = StepFrameP;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portrait/StepFrameP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portrait/TitleFrameP.jsx
try { (() => {
const {
  Stage,
  Text
} = window.KIHONDesignSystem_bc9292;
const {
  In
} = window.KitShared;
function TitleFrameP({
  theme
}) {
  return /*#__PURE__*/React.createElement(Stage, {
    format: "portrait",
    theme: theme
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'calc(34px * var(--u))'
    }
  }, /*#__PURE__*/React.createElement(In, {
    f: 4
  }, /*#__PURE__*/React.createElement(Text, {
    role: "display",
    style: {
      fontSize: 'calc(108px * var(--u))'
    }
  }, "\u8BA9\u65F6\u957F", /*#__PURE__*/React.createElement("br", null), "\u4ECE\u5185\u5BB9", /*#__PURE__*/React.createElement("br", null), "\u957F\u51FA\u6765")), /*#__PURE__*/React.createElement(In, {
    f: 12
  }, /*#__PURE__*/React.createElement(Text, {
    role: "subtitle",
    color: "muted"
  }, "\u9605\u8BFB\u9884\u7B97\u4ECE\u5B57\u6570\u957F\u51FA\u6765\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u52A0\u4E00\u884C\u5B57\uFF0C\u7247\u5B50\u81EA\u5DF1\u53D8\u957F\u3002"))));
}
window.TitleFrameP = TitleFrameP;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portrait/TitleFrameP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/shared/kit-motion.jsx
try { (() => {
/* KIHON kit motion — preview-only approximation of the Remotion entrance ladder.
   Every role below cites a locked constant from tokens/motion.css; the springs are the
   documented CSS approximations (Remotion itself calls spring() with the measured configs). */
const F = f => Math.round(f * 1000 / 30) + 'ms';

/** Role-based entrance. text · panel · solid · rule — see the ENTRANCE LADDER block in motion.css. */
function In({
  f = 0,
  role = 'text',
  style,
  children
}) {
  const cls = {
    text: 'ke-text',
    panel: 'ke-panel',
    solid: 'ke-solid',
    rule: 'ke-rule'
  }[role] || 'ke-text';
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    style: {
      animationDelay: F(f),
      ...style
    }
  }, children);
}

/** Numerals settle by counting, not by fading — counter 24f. */
function Count({
  to,
  f = 0,
  decimals = 0,
  children
}) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const start = performance.now() + f * 1000 / 30,
      dur = 800,
      from = 0;
    let raf;
    const tick = now => {
      const t = Math.max(0, Math.min(1, (now - start) / dur));
      const e = 1 - Math.pow(1 - t, 3);
      setV(from + (to - from) * e);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, f]);
  const shown = v.toFixed(decimals);
  return children ? children(shown) : shown;
}
window.KitShared = {
  F,
  ms: F,
  In,
  Count
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/shared/kit-motion.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Arc = __ds_scope.Arc;

__ds_ns.Bar = __ds_scope.Bar;

__ds_ns.Ramp = __ds_scope.Ramp;

__ds_ns.Knurl = __ds_scope.Knurl;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.Rule = __ds_scope.Rule;

__ds_ns.Stage = __ds_scope.Stage;

__ds_ns.Surface = __ds_scope.Surface;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Numeral = __ds_scope.Numeral;

__ds_ns.Text = __ds_scope.Text;

})();
