/* @ds-bundle: {"format":3,"namespace":"MayonakaDesignSystem_645233","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"GlitchText","sourcePath":"components/core/GlitchText.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Progress","sourcePath":"components/core/Progress.jsx"},{"name":"ScanlineOverlay","sourcePath":"components/core/ScanlineOverlay.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"190ccf5b2ecd","components/core/Button.jsx":"2a2f3c5b348e","components/core/Card.jsx":"978de696e809","components/core/GlitchText.jsx":"711b64bc1c72","components/core/Input.jsx":"028f868c64c5","components/core/Progress.jsx":"f2d47f520de4","components/core/ScanlineOverlay.jsx":"7dca1ba0aab3","components/core/Tabs.jsx":"903abd5ffb16","ui_kits/mobile_app/Screens.jsx":"5afd98e8acd0","ui_kits/web_app/NowPlaying.jsx":"54c043d0618f","ui_kits/web_app/Sidebar.jsx":"147f8dd8818b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MayonakaDesignSystem_645233 = window.MayonakaDesignSystem_645233 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  variant = "magenta",
  children,
  style,
  ...rest
}) {
  const palette = {
    magenta: {
      bg: "var(--magenta)",
      fg: "var(--void)"
    },
    cyan: {
      bg: "var(--cyan)",
      fg: "var(--void)"
    },
    blue: {
      bg: "var(--electric)",
      fg: "#fff"
    },
    success: {
      bg: "var(--success)",
      fg: "var(--void)"
    },
    warning: {
      bg: "var(--warning)",
      fg: "var(--void)"
    },
    danger: {
      bg: "var(--danger)",
      fg: "var(--void)"
    },
    muted: {
      bg: "transparent",
      fg: "var(--silver)",
      border: "1px solid var(--border-default)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      background: palette.bg,
      color: palette.fg,
      border: palette.border || "none",
      padding: "3px 8px",
      fontFamily: "var(--font-display)",
      fontSize: "9px",
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeMap = {
  sm: {
    padding: "6px 12px",
    fontSize: "10px"
  },
  md: {
    padding: "10px 18px",
    fontSize: "12px"
  },
  lg: {
    padding: "14px 24px",
    fontSize: "14px"
  }
};
const variantStyle = variant => {
  switch (variant) {
    case "primary":
      return {
        background: "var(--magenta)",
        color: "var(--void)",
        border: "2px solid var(--magenta)",
        boxShadow: "var(--shadow-pixel)"
      };
    case "cyan":
      return {
        background: "var(--cyan)",
        color: "var(--void)",
        border: "2px solid var(--cyan)",
        boxShadow: "var(--shadow-pixel)"
      };
    case "blue":
      return {
        background: "var(--electric)",
        color: "#fff",
        border: "2px solid var(--electric)",
        boxShadow: "var(--shadow-pixel)"
      };
    case "blue-outline":
      return {
        background: "transparent",
        color: "var(--azure)",
        border: "2px solid var(--electric)",
        boxShadow: "none"
      };
    case "ghost":
      return {
        background: "transparent",
        color: "var(--magenta)",
        border: "2px solid var(--magenta)",
        boxShadow: "none"
      };
    case "outline":
      return {
        background: "transparent",
        color: "var(--cyan)",
        border: "2px solid var(--cyan)",
        boxShadow: "none"
      };
    case "danger":
      return {
        background: "var(--danger)",
        color: "var(--void)",
        border: "2px solid var(--danger)",
        boxShadow: "var(--shadow-pixel)"
      };
    default:
      return {};
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  glow = false,
  fullWidth = false,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const base = {
    fontFamily: "var(--font-display)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "transform var(--dur-fast) var(--ease-smooth), box-shadow var(--dur-fast) var(--ease-smooth), filter var(--dur-fast) var(--ease-smooth)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : undefined,
    opacity: disabled ? 0.4 : 1,
    imageRendering: "pixelated",
    ...sizeMap[size],
    ...variantStyle(variant)
  };
  const interactive = !disabled && (hover || active) ? {
    transform: active ? "translate(2px, 2px)" : "translate(-1px, -1px)",
    boxShadow: active ? "1px 1px 0 var(--shadow-ink)" : variant === "ghost" || variant === "outline" ? variant === "ghost" ? "var(--glow-magenta-sm)" : "var(--glow-cyan-sm)" : "5px 5px 0 var(--shadow-ink)",
    filter: glow ? "brightness(1.1)" : undefined
  } : glow ? {
    boxShadow: variant === "cyan" || variant === "outline" ? "var(--shadow-pixel), var(--glow-cyan-sm)" : variant === "blue" || variant === "blue-outline" ? "var(--shadow-pixel), var(--glow-blue-sm)" : "var(--shadow-pixel), var(--glow-magenta-sm)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      ...base,
      ...interactive,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "default",
  glow = false,
  title,
  meta,
  children,
  style,
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--bg-card)",
      border: "2px solid var(--border-default)"
    },
    raised: {
      background: "var(--bg-raised)",
      border: "2px solid var(--border-default)",
      boxShadow: "var(--shadow-pixel)"
    },
    neon: {
      background: "var(--bg-card)",
      border: "2px solid var(--magenta)",
      boxShadow: glow ? "var(--glow-magenta)" : "var(--shadow-pixel-magenta)"
    },
    cyan: {
      background: "var(--bg-card)",
      border: "2px solid var(--cyan)",
      boxShadow: glow ? "var(--glow-cyan)" : "var(--shadow-pixel-cyan)"
    },
    blue: {
      background: "var(--bg-card)",
      border: "2px solid var(--electric)",
      boxShadow: glow ? "var(--glow-blue)" : "var(--shadow-pixel-blue)"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: "var(--s-5)",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      ...variants[variant],
      ...style
    }
  }, rest), (title || meta) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "var(--s-3)",
      borderBottom: "1px solid var(--border-default)",
      paddingBottom: "var(--s-2)"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "12px",
      letterSpacing: "0.12em",
      color: variant === "cyan" ? "var(--cyan)" : variant === "blue" ? "var(--azure)" : "var(--magenta)",
      textTransform: "uppercase"
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "13px",
      color: "var(--text-muted)"
    }
  }, meta)), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/GlitchText.jsx
try { (() => {
/** Decorative RGB-split glitch text. Avoids JS — pure CSS clip + transform. */
function GlitchText({
  children,
  color = "#fff",
  size = 32,
  style,
  as: As = "span"
}) {
  const text = typeof children === "string" ? children : "";
  return /*#__PURE__*/React.createElement(As, {
    "data-text": text,
    style: {
      position: "relative",
      display: "inline-block",
      fontFamily: "var(--font-display)",
      fontSize: size,
      color,
      letterSpacing: "0.08em",
      lineHeight: 1.1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      color: "var(--magenta)",
      transform: "translate(-2px, 0)",
      clipPath: "polygon(0 0,100% 0,100% 45%,0 45%)",
      pointerEvents: "none"
    },
    "aria-hidden": "true"
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      color: "var(--cyan)",
      transform: "translate(2px, 0)",
      clipPath: "polygon(0 55%,100% 55%,100% 100%,0 100%)",
      pointerEvents: "none"
    },
    "aria-hidden": "true"
  }, text), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, children));
}
Object.assign(__ds_scope, { GlitchText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlitchText.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--danger)" : focus ? "var(--cyan)" : "var(--border-default)";
  const boxShadow = focus && !error ? "var(--glow-cyan-sm)" : error ? "var(--glow-magenta-sm)" : "none";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "9px",
      letterSpacing: "0.18em",
      color: error ? "var(--danger)" : "var(--text-secondary)",
      textTransform: "uppercase",
      marginBottom: "var(--s-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: "var(--bg-void)",
      border: `2px solid ${borderColor}`,
      boxShadow,
      padding: "8px 12px",
      gap: "8px",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--magenta)",
      fontSize: "16px"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      background: "transparent",
      border: "none",
      outline: "none",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "18px",
      caretColor: "var(--magenta)",
      padding: 0
    }
  }, rest)), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, icon)), (hint || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      marginTop: "var(--s-2)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  variant = "magenta",
  label,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const color = variant === "cyan" ? "var(--cyan)" : variant === "blue" ? "var(--electric)" : "var(--magenta)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--text-secondary)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-display)",
      fontSize: "9px",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      marginBottom: "6px",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", null, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "10px",
      background: "var(--bg-void)",
      border: "2px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${pct}%`,
      background: `repeating-linear-gradient(90deg, ${color} 0 8px, transparent 8px 10px)`,
      boxShadow: variant === "cyan" ? "var(--glow-cyan-sm)" : variant === "blue" ? "var(--glow-blue-sm)" : "var(--glow-magenta-sm)",
      transition: "width var(--dur-med) var(--ease-smooth)"
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Progress.jsx", error: String((e && e.message) || e) }); }

// components/core/ScanlineOverlay.jsx
try { (() => {
/** Decorative scanline + grain overlay. Wrap any region. */
function ScanlineOverlay({
  intensity = "medium",
  grain = true,
  children,
  style
}) {
  const stripeAlpha = intensity === "soft" ? 0.15 : intensity === "strong" ? 0.4 : 0.25;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: `repeating-linear-gradient(to bottom,
            rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px,
            rgba(0,0,0,${stripeAlpha}) 3px, rgba(0,0,0,${stripeAlpha}) 4px)`,
      mixBlendMode: "multiply"
    }
  }), grain && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      background: "radial-gradient(circle at 30% 20%, rgba(255,43,214,.08), transparent 60%), radial-gradient(circle at 70% 80%, rgba(25,230,255,.08), transparent 60%)",
      mixBlendMode: "screen"
    }
  }));
}
Object.assign(__ds_scope, { ScanlineOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ScanlineOverlay.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      gap: "0",
      borderBottom: "2px solid var(--border-default)",
      ...style
    }
  }, tabs.map(t => {
    const key = t.value ?? t.label;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(key),
      style: {
        background: "transparent",
        border: "none",
        padding: "10px 16px",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontSize: "10px",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: active ? "var(--magenta)" : "var(--text-secondary)",
        borderBottom: active ? "3px solid var(--magenta)" : "3px solid transparent",
        marginBottom: "-2px",
        textShadow: active ? "var(--text-glow-magenta)" : "none",
        transition: "color var(--dur-fast)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile_app/Screens.jsx
try { (() => {
// Mobile Midnight FM — phone frame + screens

function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 844,
      background: "#000",
      borderRadius: 48,
      border: "4px solid #1a1a1a",
      padding: 12,
      boxShadow: "0 30px 80px rgba(255,43,214,.25), 0 10px 30px rgba(0,0,0,.6)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 22,
      transform: "translateX(-50%)",
      width: 120,
      height: 30,
      background: "#000",
      borderRadius: 20,
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 36,
      overflow: "hidden",
      background: "var(--bg-void)",
      position: "relative",
      color: "var(--text-primary)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, null), children));
}
function StatusBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 48,
      padding: "14px 32px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 4,
      fontFamily: "var(--font-display)",
      fontSize: 11,
      color: "var(--text-primary)",
      letterSpacing: ".1em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "3:42"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, "5G"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "signal",
    style: {
      width: 14,
      height: 14
    }
  }), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "battery-full",
    style: {
      width: 18,
      height: 14,
      color: "var(--success)"
    }
  })));
}
function PlayerScreen({
  onMenu
}) {
  const [playing, setPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(42);
  const [liked, setLiked] = React.useState(false);
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      padding: "60px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scanlines)",
      opacity: .4,
      pointerEvents: "none",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down",
    style: {
      width: 22,
      height: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 8,
      letterSpacing: ".2em",
      color: "var(--text-muted)"
    }
  }, "// NOW PLAYING"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, "\u591C\u306E\u9AD8\u901F\u30DF\u30C3\u30AF\u30B9")), /*#__PURE__*/React.createElement("button", {
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "more-horizontal",
    style: {
      width: 22,
      height: 22
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1/1",
      border: "2px solid var(--magenta)",
      animation: "mnk-pulse-magenta 3.2s ease-in-out infinite",
      background: "linear-gradient(180deg, #0a1654 0%, #2d6cff 35%, #ff2bd6 75%, #ff71ce 100%)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,.3) 3px 4px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      fontFamily: "var(--font-display)",
      fontSize: 9,
      color: "#fff",
      letterSpacing: ".2em",
      textShadow: "0 0 6px rgba(0,0,0,.8)"
    }
  }, "SIDE A \xB7 01"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 14,
      top: 14,
      fontFamily: "var(--font-jp)",
      fontSize: 26,
      color: "#fff",
      textShadow: "0 0 8px rgba(0,0,0,.6)"
    }
  }, "\u591C\u666F"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "42%",
      transform: "translate(-50%,-50%)",
      width: 160,
      height: 160,
      borderRadius: "50%",
      background: "radial-gradient(circle, #ffcc66 0%, #ff71ce 55%, #ff2bd6 100%)",
      boxShadow: "0 0 80px rgba(255,113,206,.7)",
      animation: "mnk-sun-spin 14s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "45%",
      background: "linear-gradient(transparent 0,transparent calc(100% - 2px),var(--magenta) 100%)," + "repeating-linear-gradient(90deg, transparent 0 calc(8% - 2px), var(--magenta) calc(8% - 2px) 8%)," + "repeating-linear-gradient(0deg, transparent 0 calc(16% - 2px), var(--magenta) calc(16% - 2px) 16%)",
      transform: "perspective(220px) rotateX(60deg)",
      transformOrigin: "bottom"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 26,
      color: "var(--text-primary)",
      lineHeight: 1.1
    }
  }, "\u591C\u306E\u9AD8\u901F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 10,
      letterSpacing: ".14em",
      color: "var(--cyan)",
      textShadow: "var(--text-glow-cyan)",
      marginTop: 6
    }
  }, "NIGHT HIGHWAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)",
      marginTop: 6
    }
  }, "Mariya Takeuchi  \uFF0F  VARIETY")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked),
    style: {
      all: "unset",
      cursor: "pointer",
      color: liked ? "var(--magenta)" : "var(--text-muted)",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": liked ? "heart" : "heart",
    style: {
      width: 24,
      height: 24,
      fill: liked ? "var(--magenta)" : "none"
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "var(--bg-void)",
      border: "2px solid var(--border-default)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      width: `${progress}%`,
      background: "repeating-linear-gradient(90deg, var(--magenta) 0 8px, transparent 8px 10px)",
      boxShadow: "var(--glow-magenta-sm)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 6,
      fontFamily: "var(--font-display)",
      fontSize: 9,
      color: "var(--text-muted)",
      letterSpacing: ".1em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "01:53"), /*#__PURE__*/React.createElement("span", null, "04:30"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 8px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: tBtn()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shuffle",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: tBtn()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "skip-back",
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPlaying(p => !p),
    style: {
      width: 68,
      height: 68,
      border: "3px solid var(--magenta)",
      background: "var(--magenta)",
      color: "var(--void)",
      cursor: "pointer",
      boxShadow: "var(--shadow-pixel), var(--glow-magenta)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": playing ? "pause" : "play",
    style: {
      width: 28,
      height: 28
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: tBtn()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "skip-forward",
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: tBtn()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "repeat",
    style: {
      width: 18,
      height: 18
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "var(--font-display)",
      fontSize: 8,
      color: "var(--text-muted)",
      letterSpacing: ".18em"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u25B8 AIRPODS PRO"), /*#__PURE__*/React.createElement("span", null, "// 88.3 FM"), /*#__PURE__*/React.createElement("span", null, "\u25A4 QUEUE")));
}
function tBtn() {
  return {
    all: "unset",
    cursor: "pointer",
    width: 44,
    height: 44,
    display: "grid",
    placeItems: "center",
    color: "var(--text-secondary)"
  };
}
function BrowseScreen({
  onOpen
}) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const mixes = [{
    jp: "夜の高速",
    en: "NIGHT HIGHWAY",
    grad: "linear-gradient(135deg,#0a1654,#2d6cff,#ff2bd6)"
  }, {
    jp: "雨と街",
    en: "RAIN + CITY",
    grad: "linear-gradient(135deg,#0a1654,#00b3ff,#ff71ce)"
  }, {
    jp: "プラスチック・ラブ",
    en: "PLASTIC LOVE",
    grad: "linear-gradient(135deg,#2d6cff,#ff2bd6,#ff71ce)"
  }, {
    jp: "真夜中のドア",
    en: "MIDNIGHT DOOR",
    grad: "linear-gradient(135deg,#07000f,#3a1a8a,#ff2bd6)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      padding: "60px 22px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 9,
      letterSpacing: ".2em",
      color: "var(--text-muted)"
    }
  }, "// 03:42 JST"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 30,
      color: "var(--text-primary)",
      lineHeight: 1.1,
      marginTop: 4
    }
  }, "\u3053\u3093\u3070\u3093\u306F\u3001"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 14,
      letterSpacing: ".16em",
      color: "var(--magenta)",
      textShadow: "var(--text-glow-magenta)",
      marginTop: 8
    }
  }, "GOOD EVENING_")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      border: "2px solid var(--cyan)",
      boxShadow: "var(--glow-cyan-sm)",
      background: "var(--bg-card)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 9,
      letterSpacing: ".18em",
      color: "var(--cyan)",
      animation: "mnk-flicker 3.4s linear infinite"
    }
  }, "\u25CF ON AIR \xB7 88.3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 16,
      marginTop: 6
    }
  }, "\u6DF1\u591C\u4FBF\u30E9\u30A4\u30D6"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 2
    }
  }, "2,049 listeners")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    style: {
      all: "unset",
      cursor: "pointer",
      padding: "10px 14px",
      border: "2px solid var(--magenta)",
      background: "var(--magenta)",
      color: "var(--void)",
      fontFamily: "var(--font-display)",
      fontSize: 10,
      letterSpacing: ".14em",
      boxShadow: "var(--shadow-pixel-sm)"
    }
  }, "TUNE IN")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 9,
      letterSpacing: ".2em",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, "// MIXTAPES_"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, mixes.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: onOpen,
    style: {
      cursor: "pointer",
      border: "2px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: m.grad,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,.25) 3px 4px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      bottom: 6,
      fontFamily: "var(--font-jp)",
      fontSize: 18,
      color: "#fff",
      textShadow: "0 0 6px rgba(0,0,0,.7)"
    }
  }, m.jp)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 10px",
      fontFamily: "var(--font-display)",
      fontSize: 8,
      letterSpacing: ".14em",
      color: "var(--text-secondary)"
    }
  }, m.en))))));
}
window.MNK_PhoneFrame = PhoneFrame;
window.MNK_PlayerScreen = PlayerScreen;
window.MNK_BrowseScreen = BrowseScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile_app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/NowPlaying.jsx
try { (() => {
// Now-playing right rail + transport bar
function NowPlayingRail({
  track,
  playing,
  onToggle,
  progress,
  onSeek
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 320,
      background: "var(--bg-void)",
      borderLeft: "2px solid var(--border-default)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      flexShrink: 0,
      fontFamily: "var(--font-body)",
      color: "var(--text-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 9,
      letterSpacing: ".18em",
      color: "var(--text-muted)"
    }
  }, "// NOW PLAYING_"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      border: "2px solid var(--magenta)",
      animation: "mnk-pulse-magenta 3.2s ease-in-out infinite",
      background: "var(--grad-bipolar)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(to bottom, transparent 0 2px, rgba(0,0,0,.3) 3px 4px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 9,
      letterSpacing: ".2em",
      textShadow: "0 0 6px rgba(0,0,0,.8)"
    }
  }, "MIXTAPE \u2014 A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 14,
      top: 14,
      fontFamily: "var(--font-jp)",
      fontSize: 22,
      color: "#fff",
      textShadow: "0 0 8px rgba(0,0,0,.7)"
    }
  }, "\u591C\u666F"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "40%",
      transform: "translate(-50%,-50%)",
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: "radial-gradient(circle, #ffcc66 0%, #ff71ce 55%, #ff2bd6 100%)",
      boxShadow: "0 0 60px rgba(255,113,206,.7)",
      animation: "mnk-sun-spin 12s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "45%",
      background: "linear-gradient(transparent 0,transparent calc(100% - 2px),var(--magenta) 100%)," + "repeating-linear-gradient(90deg, transparent 0 calc(8% - 2px), var(--magenta) calc(8% - 2px) 8%)," + "repeating-linear-gradient(0deg, transparent 0 calc(16% - 2px), var(--magenta) calc(16% - 2px) 16%)",
      transform: "perspective(180px) rotateX(60deg)",
      transformOrigin: "bottom"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-jp)",
      fontSize: 22,
      color: "var(--text-primary)"
    }
  }, track.titleJp), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: ".14em",
      color: "var(--cyan)",
      marginTop: 4,
      textShadow: "var(--text-glow-cyan)"
    }
  }, track.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--text-secondary)",
      marginTop: 6
    }
  }, track.artist, "  \uFF0F  ", track.album)), /*#__PURE__*/React.createElement(Progress, {
    value: progress,
    variant: "cyan",
    label: "TIME // " + fmt(progress * 2.4) + " / " + fmt(240)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement(IconBtn, {
    icon: "shuffle"
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "skip-back"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: 56,
      height: 56,
      border: "2px solid var(--magenta)",
      background: "var(--magenta)",
      color: "var(--void)",
      cursor: "pointer",
      boxShadow: "var(--shadow-pixel), var(--glow-magenta-sm)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": playing ? "pause" : "play",
    style: {
      width: 24,
      height: 24
    }
  })), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "skip-forward"
  }), /*#__PURE__*/React.createElement(IconBtn, {
    icon: "repeat"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-default)",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 8,
      letterSpacing: ".2em",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, "// UP NEXT_"), [{
    t: "雨と灯",
    a: "T. Sugiyama",
    d: "3:48"
  }, {
    t: "Plastic Love",
    a: "Mariya T.",
    d: "4:52"
  }, {
    t: "Stay With Me",
    a: "Miki M.",
    d: "4:31"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontFamily: "var(--font-display)",
      fontSize: 9,
      marginRight: 8
    }
  }, "0", i + 2), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-jp)"
    }
  }, s.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      marginLeft: 8
    }
  }, "\u2014 ", s.a)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, s.d)))));
}
function IconBtn({
  icon
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      all: "unset",
      cursor: "pointer",
      width: 40,
      height: 40,
      display: "grid",
      placeItems: "center",
      border: "2px solid var(--border-default)",
      color: "var(--text-secondary)",
      background: "var(--bg-card)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 16,
      height: 16
    }
  }));
}
function fmt(s) {
  s = Math.max(0, Math.floor(s));
  const m = Math.floor(s / 60),
    sec = s % 60;
  return m + ":" + String(sec).padStart(2, "0");
}
window.MNK_NowPlaying = NowPlayingRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/NowPlaying.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web_app/Sidebar.jsx
try { (() => {
// MidnightFM web UI kit — composed view, uses design system primitives.
function Sidebar({
  active,
  onNav
}) {
  const items = [{
    key: "home",
    label: "HOME",
    jp: "ホーム",
    icon: "radio"
  }, {
    key: "browse",
    label: "BROWSE",
    jp: "見つける",
    icon: "compass"
  }, {
    key: "library",
    label: "LIBRARY",
    jp: "ライブラリ",
    icon: "library"
  }, {
    key: "radio",
    label: "RADIO",
    jp: "放送",
    icon: "antenna"
  }, {
    key: "mixes",
    label: "MIXES",
    jp: "ミックス",
    icon: "disc-3"
  }];
  const playlists = ["夜の高速 / NIGHT DRIVE", "雨と街 / RAIN+CITY", "DEEP CUTS '84", "MALL ENERGY", "DOWNTEMPO 808"];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      background: "var(--bg-void)",
      borderRight: "2px solid var(--border-default)",
      padding: "20px 0",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      color: "var(--text-secondary)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px",
      borderBottom: "1px solid var(--border-default)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      border: "3px solid var(--magenta)",
      animation: "mnk-pulse-magenta 2.4s ease-in-out infinite",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-jp)",
      fontSize: 22,
      color: "var(--magenta)",
      textShadow: "var(--text-glow-magenta)",
      background: "var(--bg-void)"
    }
  }, "\u591C"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 11,
      letterSpacing: ".18em",
      color: "var(--text-primary)"
    }
  }, "MIDNIGHT FM"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "// 88.3 \u2014 on air")))), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "0 12px",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, items.map(it => {
    const on = active === it.key;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      onClick: () => onNav(it.key),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        background: on ? "var(--bg-card)" : "transparent",
        borderLeft: on ? "3px solid var(--magenta)" : "3px solid transparent",
        color: on ? "var(--text-primary)" : "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.icon,
      style: {
        width: 16,
        height: 16,
        color: on ? "var(--magenta)" : "var(--text-muted)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 9,
        letterSpacing: ".16em"
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-jp)",
        fontSize: 12,
        marginLeft: "auto",
        color: "var(--text-muted)"
      }
    }, it.jp));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 20px 8px",
      fontFamily: "var(--font-display)",
      fontSize: 8,
      letterSpacing: ".2em",
      color: "var(--text-muted)"
    }
  }, "// YOUR MIXTAPES_"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px",
      overflowY: "auto",
      flex: 1
    }
  }, playlists.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "8px 12px",
      fontSize: 14,
      color: "var(--text-secondary)",
      cursor: "pointer",
      borderLeft: "3px solid transparent"
    }
  }, "\u25B8 ", p))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      background: "var(--grad-trans)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-primary)"
    }
  }, "user_2049"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: 11,
      fontFamily: "var(--font-display)",
      letterSpacing: ".15em"
    }
  }, "PREMIUM"))));
}
window.MNK_Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web_app/Sidebar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.GlitchText = __ds_scope.GlitchText;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.ScanlineOverlay = __ds_scope.ScanlineOverlay;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
