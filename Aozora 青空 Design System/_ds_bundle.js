/* @ds-bundle: {"format":3,"namespace":"AozoraDesignSystem_e61996","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Badge","sourcePath":"components/surface/Badge.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"},{"name":"Tag","sourcePath":"components/surface/Tag.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"3365e9de4cbf","components/buttons/IconButton.jsx":"0dc676979dfb","components/feedback/Dialog.jsx":"de0a0c239ac5","components/forms/Input.jsx":"64bbcf26b613","components/forms/Switch.jsx":"79263947c076","components/navigation/Tabs.jsx":"85d8178eeb2f","components/surface/Badge.jsx":"a7d48cb65812","components/surface/Card.jsx":"0fc9290e0bf2","components/surface/Tag.jsx":"44da4e08a521","ui_kits/app/DetailScreen.jsx":"4a4ef05308b7","ui_kits/app/HomeScreen.jsx":"5526c0900e9e","ui_kits/app/SettingsScreen.jsx":"1c9907aec16e","ui_kits/app/app-bundle.jsx":"668f6781d970","ui_kits/app/icons.jsx":"4a7db344c130","ui_kits/app/phone.jsx":"4fd1e38b619b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AozoraDesignSystem_e61996 = window.AozoraDesignSystem_e61996 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
/* eslint-disable */

const SIZES = {
  sm: {
    h: 32,
    px: 14,
    fs: 13,
    gap: 6,
    icon: 14
  },
  md: {
    h: 40,
    px: 18,
    fs: 14,
    gap: 8,
    icon: 16
  },
  lg: {
    h: 52,
    px: 24,
    fs: 16,
    gap: 10,
    icon: 18
  }
};
const TONES = {
  brand: {
    fill: "var(--blue-500)",
    hover: "var(--blue-600)",
    press: "var(--blue-700)",
    text: "#fff"
  },
  accent: {
    fill: "var(--sun-400)",
    hover: "var(--sun-500)",
    press: "var(--sun-600)",
    text: "var(--neutral-900)"
  },
  neutral: {
    fill: "var(--neutral-800)",
    hover: "var(--neutral-900)",
    press: "#000",
    text: "#fff"
  },
  danger: {
    fill: "var(--danger-500)",
    hover: "#E03A30",
    press: "#C8322A",
    text: "#fff"
  }
};
function Button({
  variant = "filled",
  tone = "brand",
  size = "md",
  pill = false,
  block = false,
  disabled = false,
  leadingIcon,
  trailingIcon,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.brand;
  let bg, color, border, shadow, backdrop;
  if (variant === "filled") {
    bg = press ? t.press : hover ? t.hover : t.fill;
    color = t.text;
    border = "1px solid transparent";
    shadow = `inset 0 1px 0 rgba(255,255,255,${tone === "accent" ? 0.6 : 0.35}), inset 0 -1px 0 rgba(0,0,0,0.10), 0 2px 8px rgba(10,68,140,0.18)`;
    backdrop = "none";
  } else if (variant === "glass") {
    // Multi-layer liquid glass:
    //  1. top diagonal gloss (white → transparent)
    //  2. bottom edge specular (subtle warm → transparent)
    //  3. faint blue tint base so it reads as cool glass, not frosted milk
    const gloss = "linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 22%, rgba(255,255,255,0) 45%)";
    const bottom = "linear-gradient(0deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%)";
    const tint = hover ? "linear-gradient(180deg, rgba(180,220,255,0.35), rgba(255,255,255,0.45))" : "linear-gradient(180deg, rgba(180,220,255,0.22), rgba(255,255,255,0.28))";
    bg = `${gloss}, ${bottom}, ${tint}`;
    color = "var(--text-strong)";
    border = "1px solid rgba(255,255,255,0.85)";
    shadow = ["inset 0 1.5px 0 rgba(255,255,255,0.95)",
    // top rim highlight
    "inset 0 -1px 0 rgba(10,68,140,0.10)",
    // bottom rim shadow
    "inset 0 0 0 1px rgba(255,255,255,0.25)",
    // inner stroke
    "inset 0 8px 16px -8px rgba(255,255,255,0.65)",
    // soft gloss bloom
    "inset 0 -10px 18px -10px rgba(10,132,255,0.18)",
    // bottom blue refraction
    "0 1px 2px rgba(10,68,140,0.10)", "0 8px 24px rgba(10,68,140,0.18)" // outer drop
    ].join(", ");
    backdrop = "blur(28px) saturate(220%) brightness(1.08)";
  } else {
    bg = press ? "var(--state-press-tint)" : hover ? "var(--state-hover-tint)" : "transparent";
    color = tone === "danger" ? "var(--text-danger)" : "var(--text-accent)";
    border = "1px solid transparent";
    shadow = "none";
    backdrop = "none";
  }
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}px`,
    fontFamily: "var(--font-sans)",
    fontSize: s.fs,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    color,
    background: bg,
    border,
    borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
    boxShadow: focus ? `${shadow}, var(--ring-focus)` : shadow,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transform: press && !disabled ? "scale(0.97)" : "scale(1)",
    transition: "background var(--dur-fast) var(--ease-out-quart), transform var(--dur-instant) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)",
    width: block ? "100%" : "auto",
    userSelect: "none",
    whiteSpace: "nowrap"
  };
  const iconStyle = {
    width: s.icon,
    height: s.icon,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  };
  return React.createElement("button", {
    ...rest,
    disabled,
    onClick: disabled ? undefined : onClick,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, leadingIcon ? React.createElement("span", {
    style: iconStyle,
    key: "l"
  }, leadingIcon) : null, children, trailingIcon ? React.createElement("span", {
    style: iconStyle,
    key: "t"
  }, trailingIcon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
const SIZES = {
  sm: {
    box: 32,
    icon: 14
  },
  md: {
    box: 40,
    icon: 18
  },
  lg: {
    box: 52,
    icon: 22
  }
};
const TONES = {
  brand: {
    fill: "var(--blue-500)",
    hover: "var(--blue-600)",
    text: "#fff"
  },
  accent: {
    fill: "var(--sun-400)",
    hover: "var(--sun-500)",
    text: "var(--neutral-900)"
  },
  neutral: {
    fill: "var(--neutral-800)",
    hover: "var(--neutral-900)",
    text: "#fff"
  },
  danger: {
    fill: "var(--danger-500)",
    hover: "#E03A30",
    text: "#fff"
  }
};
function IconButton({
  variant = "ghost",
  tone = "neutral",
  size = "md",
  shape = "square",
  disabled = false,
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.neutral;
  let bg, color, border, shadow, backdrop;
  if (variant === "filled") {
    bg = hover ? t.hover : t.fill;
    color = t.text;
    border = "1px solid transparent";
    shadow = "inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 8px rgba(10,68,140,0.18)";
    backdrop = "none";
  } else if (variant === "glass") {
    const gloss = "linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.15) 22%, rgba(255,255,255,0) 45%)";
    const bottom = "linear-gradient(0deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 30%)";
    const tint = hover ? "linear-gradient(180deg, rgba(180,220,255,0.35), rgba(255,255,255,0.45))" : "linear-gradient(180deg, rgba(180,220,255,0.22), rgba(255,255,255,0.28))";
    bg = `${gloss}, ${bottom}, ${tint}`;
    color = "var(--text-strong)";
    border = "1px solid rgba(255,255,255,0.85)";
    shadow = ["inset 0 1.5px 0 rgba(255,255,255,0.95)", "inset 0 -1px 0 rgba(10,68,140,0.10)", "inset 0 0 0 1px rgba(255,255,255,0.25)", "inset 0 6px 12px -6px rgba(255,255,255,0.65)", "inset 0 -8px 14px -8px rgba(10,132,255,0.20)", "0 1px 2px rgba(10,68,140,0.10)", "0 6px 18px rgba(10,68,140,0.18)"].join(", ");
    backdrop = "blur(28px) saturate(220%) brightness(1.08)";
  } else {
    bg = press ? "var(--state-press-tint)" : hover ? "var(--state-hover-tint)" : "transparent";
    color = "var(--text-body)";
    border = "1px solid transparent";
    shadow = "none";
    backdrop = "none";
  }
  const style = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: s.box,
    height: s.box,
    color,
    background: bg,
    border,
    borderRadius: shape === "circle" ? "50%" : "var(--radius-md)",
    boxShadow: shadow,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transform: press && !disabled ? "scale(0.94)" : "scale(1)",
    transition: "background var(--dur-fast) var(--ease-out-quart), transform var(--dur-instant) var(--ease-out-quart)"
  };
  return React.createElement("button", {
    ...rest,
    disabled,
    onClick: disabled ? undefined : onClick,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, React.createElement("span", {
    style: {
      width: s.icon,
      height: s.icon,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  kicker,
  footer,
  maxWidth = 480,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const scrim = {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    background: "rgba(7,9,14,0.42)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    animation: "aoz-fade-in var(--dur-base) var(--ease-out-quart)"
  };
  const sheet = {
    width: "100%",
    maxWidth,
    background: "rgba(255,255,255,0.78)",
    backdropFilter: "blur(40px) saturate(180%)",
    WebkitBackdropFilter: "blur(40px) saturate(180%)",
    border: "1px solid var(--glass-stroke-strong)",
    borderRadius: 28,
    boxShadow: "var(--glass-edge-strong), 0 24px 80px rgba(10,68,140,0.28)",
    padding: 28,
    color: "var(--text-strong)",
    animation: "aoz-pop-in var(--dur-slow) var(--ease-spring)"
  };
  return React.createElement("div", {
    style: scrim,
    onClick: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    role: "dialog",
    "aria-modal": "true"
  }, React.createElement("div", {
    style: sheet
  }, kicker ? React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-muted)",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      marginBottom: 8
    }
  }, kicker) : null, title ? React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.1
    }
  }, title) : null, React.createElement("div", {
    style: {
      marginTop: title ? 14 : 0,
      color: "var(--text-body)",
      fontSize: 15,
      lineHeight: 1.5
    }
  }, children), footer ? React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      justifyContent: "flex-end",
      gap: 8
    }
  }, footer) : null, React.createElement("style", null, "@keyframes aoz-fade-in{from{opacity:0}to{opacity:1}}@keyframes aoz-pop-in{from{opacity:0;transform:translateY(8px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}")));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 32,
    px: 12,
    fs: 13,
    label: 11
  },
  md: {
    h: 40,
    px: 14,
    fs: 14,
    label: 12
  },
  lg: {
    h: 52,
    px: 18,
    fs: 16,
    label: 13
  }
};
function Input({
  label,
  helper,
  error,
  variant = "glass",
  size = "md",
  leadingIcon,
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const hasError = !!error;
  let bg, border, shadow, backdrop;
  if (variant === "glass") {
    bg = "rgba(255,255,255,0.42)";
    border = `1px solid ${hasError ? "var(--danger-500)" : focus ? "var(--blue-500)" : "rgba(255,255,255,0.7)"}`;
    shadow = focus ? "var(--ring-focus), var(--glass-edge)" : "var(--glass-edge), 0 2px 8px rgba(10,68,140,0.08)";
    backdrop = "blur(28px) saturate(200%) brightness(1.08)";
  } else {
    bg = "var(--neutral-0)";
    border = `1px solid ${hasError ? "var(--danger-500)" : focus ? "var(--blue-500)" : "var(--stroke-subtle)"}`;
    shadow = focus ? "var(--ring-focus)" : "none";
    backdrop = "none";
  }
  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    height: s.h,
    padding: `0 ${s.px}px`,
    background: bg,
    border,
    borderRadius: "var(--radius-md)",
    boxShadow: shadow,
    backdropFilter: backdrop,
    WebkitBackdropFilter: backdrop,
    opacity: disabled ? 0.5 : 1,
    transition: "border-color var(--dur-fast) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)"
  };
  const inputStyle = {
    flex: 1,
    minWidth: 0,
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "var(--text-strong)",
    fontFamily: "var(--font-sans)",
    fontSize: s.fs,
    fontWeight: 500
  };
  return React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, label ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: s.label,
      fontWeight: 600,
      color: "var(--text-strong)",
      letterSpacing: "-0.005em"
    }
  }, label) : null, React.createElement("div", {
    style: wrapperStyle
  }, leadingIcon ? React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-muted)",
      width: 16,
      height: 16
    }
  }, leadingIcon) : null, React.createElement("input", {
    ...rest,
    disabled,
    style: inputStyle,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  })), helper || error ? React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: hasError ? "var(--text-danger)" : "var(--text-muted)"
    }
  }, error || helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const SIZES = {
  sm: {
    w: 36,
    h: 22,
    knob: 18,
    pad: 2
  },
  md: {
    w: 48,
    h: 28,
    knob: 24,
    pad: 2
  }
};
function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  size = "md",
  label,
  onChange
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const on = isControlled ? checked : internal;
  const s = SIZES[size] || SIZES.md;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  const trackStyle = {
    width: s.w,
    height: s.h,
    borderRadius: 999,
    background: on ? "var(--blue-500)" : "var(--neutral-300)",
    boxShadow: on ? "inset 0 1px 2px rgba(0,68,140,0.4), 0 0 0 1px rgba(10,132,255,0.2)" : "inset 0 1px 2px rgba(10,68,140,0.15)",
    position: "relative",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-base) var(--ease-out-quart)",
    flex: "none"
  };
  const knobStyle = {
    position: "absolute",
    top: s.pad,
    left: on ? s.w - s.knob - s.pad : s.pad,
    width: s.knob,
    height: s.knob,
    borderRadius: "50%",
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1), 0 2px 6px rgba(10,68,140,0.18)",
    transition: "left var(--dur-base) var(--ease-spring)"
  };
  const wrapper = label ? {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    cursor: disabled ? "not-allowed" : "pointer"
  } : null;
  const track = React.createElement("div", {
    role: "switch",
    "aria-checked": on,
    tabIndex: disabled ? -1 : 0,
    style: trackStyle,
    onClick: toggle,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle();
      }
    }
  }, React.createElement("div", {
    style: knobStyle
  }));
  if (!label) return track;
  return React.createElement("label", {
    style: wrapper,
    onClick: e => {
      e.preventDefault();
      toggle();
    }
  }, track, React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items,
  value,
  onChange,
  variant = "segmented",
  size = "md"
}) {
  const fs = size === "sm" ? 12 : 13;
  const h = size === "sm" ? 30 : 36;
  if (variant === "segmented") {
    const wrap = {
      display: "inline-flex",
      padding: 4,
      background: "linear-gradient(180deg, rgba(255,255,255,0.45), rgba(180,220,255,0.28))",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.75)",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(10,68,140,0.10), 0 1px 2px rgba(10,68,140,0.06), 0 8px 24px rgba(10,68,140,0.10)",
      backdropFilter: "blur(24px) saturate(200%) brightness(1.05)",
      WebkitBackdropFilter: "blur(24px) saturate(200%) brightness(1.05)",
      gap: 2
    };
    return React.createElement("div", {
      role: "tablist",
      style: wrap
    }, items.map(it => {
      const active = it.value === value;
      const style = {
        height: h,
        padding: "0 16px",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: fs,
        fontWeight: 600,
        letterSpacing: "-0.005em",
        color: active ? "var(--blue-700)" : "var(--neutral-700)",
        background: active ? "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.70) 50%, rgba(220,235,255,0.75) 100%)" : "transparent",
        border: active ? "1px solid rgba(255,255,255,0.9)" : "1px solid transparent",
        borderRadius: 999,
        boxShadow: active ? "inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(10,68,140,0.10), 0 1px 2px rgba(10,68,140,0.10), 0 6px 16px rgba(10,68,140,0.14)" : "none",
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-out-quart), color var(--dur-fast) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)"
      };
      return React.createElement("button", {
        role: "tab",
        "aria-selected": active,
        key: it.value,
        style,
        onClick: () => onChange(it.value)
      }, it.label, it.count !== undefined ? React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          color: active ? "var(--blue-600)" : "var(--text-muted)",
          fontWeight: 600
        }
      }, it.count) : null);
    }));
  }

  // underline
  const wrap = {
    display: "inline-flex",
    borderBottom: "1px solid var(--stroke-hairline)",
    gap: 4
  };
  return React.createElement("div", {
    role: "tablist",
    style: wrap
  }, items.map(it => {
    const active = it.value === value;
    const style = {
      position: "relative",
      height: h + 10,
      padding: "0 14px 8px",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: fs + 1,
      fontWeight: active ? 700 : 500,
      letterSpacing: "-0.01em",
      color: active ? "var(--text-strong)" : "var(--text-muted)",
      background: "transparent",
      border: "none",
      cursor: "pointer"
    };
    const bar = {
      position: "absolute",
      left: 14,
      right: 14,
      bottom: -1,
      height: 2,
      borderRadius: 2,
      background: active ? "var(--blue-500)" : "transparent",
      transition: "background var(--dur-fast) var(--ease-out-quart)"
    };
    return React.createElement("button", {
      role: "tab",
      "aria-selected": active,
      key: it.value,
      style,
      onClick: () => onChange(it.value)
    }, it.label, it.count !== undefined ? React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        color: "var(--text-muted)"
      }
    }, it.count) : null, React.createElement("span", {
      style: bar
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surface/Badge.jsx
try { (() => {
const PAL = {
  brand: {
    solid: "#0A84FF",
    soft: "rgba(10,132,255,0.14)",
    text: "#005BB8"
  },
  accent: {
    solid: "#FFE34D",
    soft: "rgba(255,227,77,0.28)",
    text: "#7A5A00"
  },
  neutral: {
    solid: "#3D4956",
    soft: "rgba(61,73,86,0.10)",
    text: "#3D4956"
  },
  success: {
    solid: "#34C759",
    soft: "rgba(52,199,89,0.16)",
    text: "#0F7A2D"
  },
  warn: {
    solid: "#FF9F0A",
    soft: "rgba(255,159,10,0.18)",
    text: "#8A4A00"
  },
  danger: {
    solid: "#FF453A",
    soft: "rgba(255,69,58,0.14)",
    text: "#B11A12"
  }
};
function Badge({
  tone = "brand",
  variant = "soft",
  dot = false,
  children
}) {
  const p = PAL[tone] || PAL.brand;
  let bg, color, border;
  if (variant === "solid") {
    bg = p.solid;
    color = tone === "accent" ? "var(--neutral-900)" : "#fff";
    border = "transparent";
  } else if (variant === "outline") {
    bg = "transparent";
    color = p.text;
    border = p.solid;
  } else {
    bg = p.soft;
    color = p.text;
    border = "transparent";
  }
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "3px 9px",
    fontFamily: "var(--font-sans)",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.01em",
    color,
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 999,
    lineHeight: 1.4,
    whiteSpace: "nowrap"
  };
  const dotStyle = {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: variant === "solid" ? "currentColor" : p.solid
  };
  return React.createElement("span", {
    style
  }, dot ? React.createElement("span", {
    style: dotStyle
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
const BLURS = {
  thin: "blur(8px) saturate(160%) brightness(1.04)",
  regular: "blur(28px) saturate(200%) brightness(1.08)",
  thick: "blur(64px) saturate(240%) brightness(1.12) contrast(1.05)"
};
const FILLS = {
  clear: {
    thin: "rgba(255,255,255,0.18)",
    regular: "rgba(255,255,255,0.45)",
    thick: "rgba(255,255,255,0.78)"
  },
  blue: {
    thin: "rgba(10,132,255,0.18)",
    regular: "rgba(10,132,255,0.22)",
    thick: "rgba(10,132,255,0.32)"
  },
  sun: {
    thin: "rgba(255,227,77,0.22)",
    regular: "rgba(255,227,77,0.28)",
    thick: "rgba(255,227,77,0.40)"
  },
  dark: {
    thin: "rgba(7,9,14,0.30)",
    regular: "rgba(7,9,14,0.42)",
    thick: "rgba(7,9,14,0.58)"
  }
};
const PADDINGS = {
  none: 0,
  sm: 12,
  md: 20,
  lg: 28
};
const RADII = {
  md: 14,
  lg: 20,
  xl: 28,
  "2xl": 36
};
function Card({
  tier = "regular",
  tint = "clear",
  padding = "md",
  radius = "xl",
  onClick,
  children,
  style: extra,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  const FROST = "linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 25%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.18) 100%)";
  const base = {
    background: tint === "dark" ? FILLS[tint][tier] : `${FROST}, ${FILLS[tint][tier]}`,
    backdropFilter: BLURS[tier],
    WebkitBackdropFilter: BLURS[tier],
    border: `1px solid ${tint === "dark" ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.7)"}`,
    borderRadius: RADII[radius],
    padding: PADDINGS[padding],
    boxShadow: "var(--glass-edge), var(--shadow-md)",
    color: tint === "dark" ? "var(--neutral-0)" : "var(--text-strong)",
    cursor: clickable ? "pointer" : "default",
    transform: clickable && hover ? "translateY(-1px)" : "translateY(0)",
    transition: "transform var(--dur-fast) var(--ease-out-quart), box-shadow var(--dur-fast) var(--ease-out-quart)",
    boxSizing: "border-box"
  };
  const merged = {
    ...base,
    ...(extra || {})
  };
  return React.createElement(clickable ? "button" : "div", {
    ...rest,
    onClick,
    style: merged,
    onMouseEnter: clickable ? () => setHover(true) : undefined,
    onMouseLeave: clickable ? () => setHover(false) : undefined
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// components/surface/Tag.jsx
try { (() => {
const PAL = {
  brand: {
    solid: "#0A84FF",
    soft: "rgba(10,132,255,0.10)",
    text: "#005BB8"
  },
  accent: {
    solid: "#FFD000",
    soft: "rgba(255,227,77,0.24)",
    text: "#7A5A00"
  },
  neutral: {
    solid: "#3D4956",
    soft: "rgba(61,73,86,0.08)",
    text: "#3D4956"
  }
};
function Tag({
  tone = "neutral",
  removable = false,
  selected = false,
  onRemove,
  onClick,
  children
}) {
  const [hover, setHover] = React.useState(false);
  const p = PAL[tone] || PAL.neutral;
  const bg = selected ? p.solid : hover && onClick ? "rgba(10,68,140,0.06)" : p.soft;
  const color = selected ? tone === "accent" ? "var(--neutral-900)" : "#fff" : p.text;
  const border = selected ? "transparent" : "rgba(10,68,140,0.10)";
  const style = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 10px 5px 12px",
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "-0.005em",
    color,
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 999,
    cursor: onClick || removable ? "pointer" : "default",
    transition: "background var(--dur-fast) var(--ease-out-quart)",
    userSelect: "none"
  };
  const xStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 16,
    height: 16,
    borderRadius: "50%",
    background: selected ? "rgba(255,255,255,0.25)" : "rgba(10,68,140,0.10)",
    color: selected ? "#fff" : "currentColor",
    cursor: "pointer",
    marginLeft: 2,
    marginRight: -2
  };
  return React.createElement("span", {
    style,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, removable ? React.createElement("span", {
    style: xStyle,
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    }
  }, React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8"
  }, React.createElement("path", {
    d: "M1 1l6 6M7 1L1 7",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DetailScreen.jsx
try { (() => {
// Detail screen — full-bleed colored hero with a glass info sheet underneath.

function DetailScreen({
  onBack
}) {
  const {
    Card,
    Tag,
    Badge,
    Button,
    IconButton
  } = window.AozoraDesignSystem_e61996;
  const [size, setSize] = React.useState('m');
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#fff',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      position: 'relative',
      background: 'linear-gradient(135deg,#0A84FF 0%, #66B7FF 50%, #CFE8FF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tint: "light"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/droplets.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/liquid-drop.svg",
    alt: "",
    style: {
      height: 270,
      position: 'relative',
      zIndex: 2,
      filter: 'drop-shadow(0 20px 40px rgba(0,40,100,0.3))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    shape: "circle",
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(IcBack, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    shape: "circle",
    "aria-label": "Save"
  }, /*#__PURE__*/React.createElement(IcHeart, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      top: 130,
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.32em',
      color: 'rgba(255,255,255,0.85)',
      textTransform: 'uppercase',
      zIndex: 5
    }
  }, "NO.0825 \xB7 \u84BC\u3044\u7A7A")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: -30,
      background: '#fff',
      borderRadius: '28px 28px 0 0',
      padding: '24px 22px 140px',
      boxShadow: '0 -10px 40px rgba(10,68,140,0.10)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "LIMITED \xB7 SUMMER"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1,
      color: 'var(--neutral-900)'
    }
  }, "SODA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      letterSpacing: '0.12em'
    }
  }, "\u84BC\u3044\u7A7A\u3001\u51B7\u305F\u3044\u4E00\u676F\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(IcStar, {
    size: 14,
    color: "var(--sun-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--neutral-800)'
    }
  }, "4.8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\xB7 1,284 reviews")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, "A clear sparkling soda with a hint of citrus salt. Refreshing on a hot afternoon \u2014 cool, clear, blue."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "SIZE \xB7 \u30B5\u30A4\u30BA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [{
    k: 's',
    l: 'S · 350ml',
    p: 280
  }, {
    k: 'm',
    l: 'M · 500ml',
    p: 380
  }, {
    k: 'l',
    l: 'L · 1L',
    p: 580
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.k,
    onClick: () => setSize(o.k),
    style: {
      flex: 1,
      padding: '12px 8px',
      border: '1.4px solid',
      borderColor: size === o.k ? 'var(--blue-500)' : 'var(--stroke-subtle)',
      background: size === o.k ? 'var(--blue-50)' : '#fff',
      borderRadius: 14,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--neutral-900)'
    }
  }, o.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: size === o.k ? 'var(--blue-600)' : 'var(--text-muted)'
    }
  }, "\xA5", o.p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Sugar-free"), /*#__PURE__*/React.createElement(Tag, null, "0 kcal"), /*#__PURE__*/React.createElement(Tag, null, "Cold-fill"), /*#__PURE__*/React.createElement(Tag, null, "Recyclable")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 90,
      background: 'rgba(255,255,255,0.78)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--glass-stroke)',
      borderRadius: 24,
      padding: 12,
      boxShadow: 'var(--glass-edge), 0 8px 24px rgba(10,68,140,0.16)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--neutral-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    style: {
      border: 'none',
      background: 'none',
      width: 32,
      height: 36,
      cursor: 'pointer',
      color: 'var(--neutral-700)',
      fontSize: 18
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      width: 20,
      textAlign: 'center',
      color: 'var(--neutral-900)'
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1),
    style: {
      border: 'none',
      background: 'none',
      width: 32,
      height: 36,
      cursor: 'pointer',
      color: 'var(--neutral-700)',
      fontSize: 18
    }
  }, "+")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    tone: "brand",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(IcCart, {
      size: 16
    })
  }, "Add \xB7 \xA5380"))));
}
window.DetailScreen = DetailScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/HomeScreen.jsx
try { (() => {
// Home screen — gradient sky background with a hero card, a row of flavor
// tiles, and a "today" promo. Uses the design system's Button, Card, Tag, Badge.

function HomeScreen({
  onOpenDetail,
  onOpenSettings
}) {
  const {
    Card,
    Tag,
    Badge,
    Button,
    IconButton
  } = window.AozoraDesignSystem_e61996;
  const [tab, setTab] = React.useState('all');
  const flavors = [{
    id: 'soda',
    name: 'Soda',
    jp: '蒼い空',
    price: 280,
    hue: 'linear-gradient(135deg,#0A84FF,#66B7FF)',
    tag: 'Signature'
  }, {
    id: 'citrus',
    name: 'Citrus',
    jp: '柚の朝',
    price: 320,
    hue: 'linear-gradient(135deg,#FFE34D,#FFB199)',
    tag: 'New'
  }, {
    id: 'mint',
    name: 'Mint',
    jp: '青葉の風',
    price: 300,
    hue: 'linear-gradient(135deg,#5FE3CC,#9DD2FF)'
  }, {
    id: 'peach',
    name: 'Peach',
    jp: '桃の昼',
    price: 320,
    hue: 'linear-gradient(135deg,#FFB199,#FF6B6B)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#0A84FF 0%, #66B7FF 35%, #CFE8FF 70%, #FFE980 100%)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tint: "light"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/glass-blob.svg",
    alt: "",
    style: {
      position: 'absolute',
      top: 60,
      right: -60,
      width: 220,
      opacity: 0.55,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/droplets.svg",
    alt: "",
    style: {
      position: 'absolute',
      top: 140,
      left: -30,
      width: 220,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 20px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.24em',
      color: 'rgba(255,255,255,0.85)',
      textTransform: 'uppercase'
    }
  }, "\u590F \xB7 SUMMER 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: '-0.025em',
      color: '#fff',
      marginTop: 2
    }
  }, "\u3053\u3093\u306B\u3061\u306F, Yuna")), /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    shape: "circle",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(IcBell, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 16px',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tier: "thick",
    tint: "clear",
    padding: "lg",
    radius: "2xl",
    onClick: onOpenDetail
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "LIMITED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1,
      marginTop: 10,
      color: 'var(--neutral-900)'
    }
  }, "SODA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-muted)',
      marginTop: 2,
      letterSpacing: '0.12em'
    }
  }, "\u84BC\u3044\u7A7A\u3001\u51B7\u305F\u3044\u4E00\u676F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--neutral-900)'
    }
  }, "\xA5280"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, "\xA5320"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/liquid-drop.svg",
    alt: "",
    style: {
      width: 90,
      marginTop: -10
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 12px',
      position: 'relative',
      zIndex: 5,
      display: 'flex',
      gap: 8,
      overflowX: 'auto'
    }
  }, ['all', 'citrus', 'mint', 'soda', 'peach'].map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: "brand",
    selected: tab === k,
    onClick: () => setTab(k)
  }, k === 'all' ? 'All' : k.charAt(0).toUpperCase() + k.slice(1)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      position: 'relative',
      zIndex: 5
    }
  }, flavors.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    tier: "regular",
    padding: "none",
    radius: "lg",
    onClick: onOpenDetail,
    style: {
      overflow: 'hidden',
      padding: 0,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      background: f.hue,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/liquid-drop.svg",
    alt: "",
    style: {
      height: 80,
      opacity: 0.9
    }
  }), f.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: f.tag === 'New' ? 'accent' : 'brand',
    variant: "solid"
  }, f.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--neutral-900)'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)',
      letterSpacing: '0.08em'
    }
  }, f.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--neutral-900)'
    }
  }, "\xA5", f.price), /*#__PURE__*/React.createElement(IcPlus, {
    size: 16,
    color: "var(--blue-500)"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110
    }
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SettingsScreen.jsx
try { (() => {
// Settings screen — calm white, sectioned list. Uses Switch and Tag.

function SettingsScreen({
  onBack
}) {
  const {
    Card,
    Switch,
    Tag,
    IconButton
  } = window.AozoraDesignSystem_e61996;
  const [push, setPush] = React.useState(true);
  const [haptics, setHap] = React.useState(true);
  const [sync, setSync] = React.useState(true);
  const [beta, setBeta] = React.useState(false);
  const Section = ({
    title,
    kicker,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      padding: '0 4px 8px'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--stroke-hairline)',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xs)'
    }
  }, children));
  const Row = ({
    label,
    sub,
    control,
    onClick,
    last
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: last ? 'none' : '1px solid var(--stroke-hairline)',
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, sub)), control);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#EAF5FF 0%, #fff 200px, #fff 100%)',
      overflowY: 'auto',
      paddingBottom: 140
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tint: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 20px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    shape: "circle",
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(IcBack, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--neutral-900)'
    }
  }, "Settings")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#0A84FF,#66B7FF)',
      borderRadius: 22,
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: '#fff',
      marginBottom: 20,
      boxShadow: 'var(--inset-rim), 0 12px 30px rgba(10,68,140,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255,255,255,0.45)',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, "Y"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: '-0.02em'
    }
  }, "Yuna Sato"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: 0.85
    }
  }, "yuna@aozora.jp \xB7 Member since 2024")), /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    selected: true
  }, "Pro")), /*#__PURE__*/React.createElement(Section, {
    kicker: "Preferences \xB7 \u8A2D\u5B9A"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Push notifications",
    sub: "Order updates, drops, drops, drops",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: push,
      onChange: setPush
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Haptic feedback",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: haptics,
      onChange: setHap
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sync across devices",
    sub: "iCloud \xB7 last synced 2 min ago",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: sync,
      onChange: setSync
    }),
    last: true
  })), /*#__PURE__*/React.createElement(Section, {
    kicker: "Account"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Email",
    sub: "yuna@aozora.jp",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Language",
    sub: "\u65E5\u672C\u8A9E \xB7 English",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Payment",
    sub: "Visa \xB7 1234",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {},
    last: true
  })), /*#__PURE__*/React.createElement(Section, {
    kicker: "Advanced"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Beta features",
    sub: "Try unreleased flavors",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: beta,
      onChange: setBeta
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Privacy report",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sign out",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {},
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-faint)',
      letterSpacing: '0.18em',
      padding: '20px 0'
    }
  }, "AOZORA \xB7 v1.0.0 \xB7 MADE IN SUMMER")));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-bundle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// ─── icons.jsx ───
// Shared monoline icons used across the Aozora App UI kit.
// Inlined SVG (not a CDN) so the kit previews offline. Stroke 2px, round caps.

const ic = (path, opts = {}) => function Icon({
  size = 20,
  color = "currentColor",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: opts.fill || "none",
    stroke: opts.fill ? "none" : color,
    strokeWidth: opts.sw || 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
};
const Home = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 11 12 3l9 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10v10h14V10"
})));
const Search = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m20 20-3.5-3.5"
})));
const Heart = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"
})));
const HeartFill = ic(/*#__PURE__*/React.createElement("path", {
  d: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"
}), {
  fill: 'currentColor'
});
const User = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"
})));
const Plus = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
})));
const Arrow = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
})));
const Back = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5M11 6l-6 6 6 6"
})));
const Bell = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 21a2 2 0 0 0 4 0"
})));
const Settings = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
})));
const Chev = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "m9 6 6 6-6 6"
})));
const Drop = ic(/*#__PURE__*/React.createElement("path", {
  d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"
}), {
  fill: 'currentColor'
});
const Star = ic(/*#__PURE__*/React.createElement("path", {
  d: "m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17.3 6.4 20.4 7.8 14 3 9.6 9.4 9z"
}), {
  fill: 'currentColor'
});
const Cart = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "20",
  r: "1.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "20",
  r: "1.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 4h2l2.5 11h11l2-7H6"
})));
Object.assign(window, {
  IcHome: Home,
  IcSearch: Search,
  IcHeart: Heart,
  IcHeartFill: HeartFill,
  IcUser: User,
  IcPlus: Plus,
  IcArrow: Arrow,
  IcBack: Back,
  IcBell: Bell,
  IcSettings: Settings,
  IcChev: Chev,
  IcDrop: Drop,
  IcStar: Star,
  IcCart: Cart
});

// ─── phone.jsx ───
// Phone frame — fakes an iPhone-shaped device shell so screens preview at
// realistic dimensions inside the kit. Not part of the design system itself.

function PhoneFrame({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      height: 760,
      background: '#07090E',
      borderRadius: 48,
      padding: 10,
      boxShadow: '0 30px 80px rgba(10,68,140,0.28), inset 0 0 0 1px rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 38,
      overflow: 'hidden',
      position: 'relative',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 110,
      height: 30,
      borderRadius: 16,
      background: '#07090E',
      zIndex: 20
    }
  }), children)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, label));
}

// Status bar — used inside every screen.
function StatusBar({
  tint = 'dark'
}) {
  const color = tint === 'light' ? '#fff' : 'var(--neutral-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 50,
      zIndex: 15,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 28px 0',
      pointerEvents: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 700,
      color,
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 10,
      borderRadius: 2,
      border: `1.4px solid ${color}`,
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1,
      background: color,
      borderRadius: 1
    }
  }))));
}

// Bottom tab bar — thin glass strip over whatever the screen content is.
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: 'home',
    label: 'Home',
    Icon: IcHome
  }, {
    id: 'search',
    label: 'Search',
    Icon: IcSearch
  }, {
    id: 'fav',
    label: 'Saved',
    Icon: IcHeart
  }, {
    id: 'me',
    label: 'Me',
    Icon: IcUser
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 14,
      background: 'rgba(255,255,255,0.62)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--glass-stroke)',
      borderRadius: 28,
      boxShadow: 'var(--glass-edge), 0 12px 30px rgba(10,68,140,0.18)',
      padding: '10px 8px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 4,
      zIndex: 30
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '8px 4px',
        border: 'none',
        background: on ? 'rgba(10,132,255,0.10)' : 'transparent',
        borderRadius: 18,
        cursor: 'pointer',
        color: on ? 'var(--blue-600)' : 'var(--text-muted)',
        transition: 'all var(--dur-fast) var(--ease-out-quart)'
      }
    }, /*#__PURE__*/React.createElement(t.Icon, {
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.02em'
      }
    }, t.label));
  }));
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  TabBar
});

// ─── HomeScreen.jsx ───
// Home screen — gradient sky background with a hero card, a row of flavor
// tiles, and a "today" promo. Uses the design system's Button, Card, Tag, Badge.

function HomeScreen({
  onOpenDetail,
  onOpenSettings
}) {
  const {
    Card,
    Tag,
    Badge,
    Button,
    IconButton
  } = window.AozoraDesignSystem_e61996;
  const [tab, setTab] = React.useState('all');
  const flavors = [{
    id: 'soda',
    name: 'Soda',
    jp: '蒼い空',
    price: 280,
    hue: 'linear-gradient(135deg,#0A84FF,#66B7FF)',
    tag: 'Signature'
  }, {
    id: 'citrus',
    name: 'Citrus',
    jp: '柚の朝',
    price: 320,
    hue: 'linear-gradient(135deg,#FFE34D,#FFB199)',
    tag: 'New'
  }, {
    id: 'mint',
    name: 'Mint',
    jp: '青葉の風',
    price: 300,
    hue: 'linear-gradient(135deg,#5FE3CC,#9DD2FF)'
  }, {
    id: 'peach',
    name: 'Peach',
    jp: '桃の昼',
    price: 320,
    hue: 'linear-gradient(135deg,#FFB199,#FF6B6B)'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#0A84FF 0%, #66B7FF 35%, #CFE8FF 70%, #FFE980 100%)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tint: "light"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/glass-blob.svg",
    alt: "",
    style: {
      position: 'absolute',
      top: 60,
      right: -60,
      width: 220,
      opacity: 0.55,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/droplets.svg",
    alt: "",
    style: {
      position: 'absolute',
      top: 140,
      left: -30,
      width: 220,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 20px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.24em',
      color: 'rgba(255,255,255,0.85)',
      textTransform: 'uppercase'
    }
  }, "\u590F \xB7 SUMMER 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 900,
      letterSpacing: '-0.025em',
      color: '#fff',
      marginTop: 2
    }
  }, "\u3053\u3093\u306B\u3061\u306F, Yuna")), /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    shape: "circle",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(IcBell, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 16px',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tier: "thick",
    tint: "clear",
    padding: "lg",
    radius: "2xl",
    onClick: onOpenDetail
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "LIMITED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1,
      marginTop: 10,
      color: 'var(--neutral-900)'
    }
  }, "SODA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--text-muted)',
      marginTop: 2,
      letterSpacing: '0.12em'
    }
  }, "\u84BC\u3044\u7A7A\u3001\u51B7\u305F\u3044\u4E00\u676F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--neutral-900)'
    }
  }, "\xA5280"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, "\xA5320"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/liquid-drop.svg",
    alt: "",
    style: {
      width: 90,
      marginTop: -10
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 12px',
      position: 'relative',
      zIndex: 5,
      display: 'flex',
      gap: 8,
      overflowX: 'auto'
    }
  }, ['all', 'citrus', 'mint', 'soda', 'peach'].map(k => /*#__PURE__*/React.createElement(Tag, {
    key: k,
    tone: "brand",
    selected: tab === k,
    onClick: () => setTab(k)
  }, k === 'all' ? 'All' : k.charAt(0).toUpperCase() + k.slice(1)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      position: 'relative',
      zIndex: 5
    }
  }, flavors.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.id,
    tier: "regular",
    padding: "none",
    radius: "lg",
    onClick: onOpenDetail,
    style: {
      overflow: 'hidden',
      padding: 0,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      background: f.hue,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/liquid-drop.svg",
    alt: "",
    style: {
      height: 80,
      opacity: 0.9
    }
  }), f.tag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: f.tag === 'New' ? 'accent' : 'brand',
    variant: "solid"
  }, f.tag))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 14px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--neutral-900)'
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)',
      letterSpacing: '0.08em'
    }
  }, f.jp), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--neutral-900)'
    }
  }, "\xA5", f.price), /*#__PURE__*/React.createElement(IcPlus, {
    size: 16,
    color: "var(--blue-500)"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110
    }
  }));
}
window.HomeScreen = HomeScreen;

// ─── DetailScreen.jsx ───
// Detail screen — full-bleed colored hero with a glass info sheet underneath.

function DetailScreen({
  onBack
}) {
  const {
    Card,
    Tag,
    Badge,
    Button,
    IconButton
  } = window.AozoraDesignSystem_e61996;
  const [size, setSize] = React.useState('m');
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: '#fff',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      position: 'relative',
      background: 'linear-gradient(135deg,#0A84FF 0%, #66B7FF 50%, #CFE8FF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tint: "light"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/droplets.svg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.55
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/liquid-drop.svg",
    alt: "",
    style: {
      height: 270,
      position: 'relative',
      zIndex: 2,
      filter: 'drop-shadow(0 20px 40px rgba(0,40,100,0.3))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 16,
      right: 16,
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    shape: "circle",
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(IcBack, {
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    shape: "circle",
    "aria-label": "Save"
  }, /*#__PURE__*/React.createElement(IcHeart, {
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      top: 130,
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.32em',
      color: 'rgba(255,255,255,0.85)',
      textTransform: 'uppercase',
      zIndex: 5
    }
  }, "NO.0825 \xB7 \u84BC\u3044\u7A7A")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: -30,
      background: '#fff',
      borderRadius: '28px 28px 0 0',
      padding: '24px 22px 140px',
      boxShadow: '0 -10px 40px rgba(10,68,140,0.10)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    variant: "solid"
  }, "LIMITED \xB7 SUMMER"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '10px 0 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      fontWeight: 900,
      letterSpacing: '-0.035em',
      lineHeight: 1,
      color: 'var(--neutral-900)'
    }
  }, "SODA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-muted)',
      letterSpacing: '0.12em'
    }
  }, "\u84BC\u3044\u7A7A\u3001\u51B7\u305F\u3044\u4E00\u676F\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(IcStar, {
    size: 14,
    color: "var(--sun-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--neutral-800)'
    }
  }, "4.8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\xB7 1,284 reviews")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, "A clear sparkling soda with a hint of citrus salt. Refreshing on a hot afternoon \u2014 cool, clear, blue."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "SIZE \xB7 \u30B5\u30A4\u30BA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, [{
    k: 's',
    l: 'S · 350ml',
    p: 280
  }, {
    k: 'm',
    l: 'M · 500ml',
    p: 380
  }, {
    k: 'l',
    l: 'L · 1L',
    p: 580
  }].map(o => /*#__PURE__*/React.createElement("button", {
    key: o.k,
    onClick: () => setSize(o.k),
    style: {
      flex: 1,
      padding: '12px 8px',
      border: '1.4px solid',
      borderColor: size === o.k ? 'var(--blue-500)' : 'var(--stroke-subtle)',
      background: size === o.k ? 'var(--blue-50)' : '#fff',
      borderRadius: 14,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--neutral-900)'
    }
  }, o.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: size === o.k ? 'var(--blue-600)' : 'var(--text-muted)'
    }
  }, "\xA5", o.p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Sugar-free"), /*#__PURE__*/React.createElement(Tag, null, "0 kcal"), /*#__PURE__*/React.createElement(Tag, null, "Cold-fill"), /*#__PURE__*/React.createElement(Tag, null, "Recyclable")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 90,
      background: 'rgba(255,255,255,0.78)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--glass-stroke)',
      borderRadius: 24,
      padding: 12,
      boxShadow: 'var(--glass-edge), 0 8px 24px rgba(10,68,140,0.16)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      background: 'var(--neutral-100)',
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    style: {
      border: 'none',
      background: 'none',
      width: 32,
      height: 36,
      cursor: 'pointer',
      color: 'var(--neutral-700)',
      fontSize: 18
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      width: 20,
      textAlign: 'center',
      color: 'var(--neutral-900)'
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1),
    style: {
      border: 'none',
      background: 'none',
      width: 32,
      height: 36,
      cursor: 'pointer',
      color: 'var(--neutral-700)',
      fontSize: 18
    }
  }, "+")), /*#__PURE__*/React.createElement(Button, {
    block: true,
    tone: "brand",
    size: "lg",
    leadingIcon: /*#__PURE__*/React.createElement(IcCart, {
      size: 16
    })
  }, "Add \xB7 \xA5380"))));
}
window.DetailScreen = DetailScreen;

// ─── SettingsScreen.jsx ───
// Settings screen — calm white, sectioned list. Uses Switch and Tag.

function SettingsScreen({
  onBack
}) {
  const {
    Card,
    Switch,
    Tag,
    IconButton
  } = window.AozoraDesignSystem_e61996;
  const [push, setPush] = React.useState(true);
  const [haptics, setHap] = React.useState(true);
  const [sync, setSync] = React.useState(true);
  const [beta, setBeta] = React.useState(false);
  const Section = ({
    title,
    kicker,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, kicker && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '0.18em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase',
      padding: '0 4px 8px'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--stroke-hairline)',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xs)'
    }
  }, children));
  const Row = ({
    label,
    sub,
    control,
    onClick,
    last
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: last ? 'none' : '1px solid var(--stroke-hairline)',
      cursor: onClick ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, sub)), control);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,#EAF5FF 0%, #fff 200px, #fff 100%)',
      overflowY: 'auto',
      paddingBottom: 140
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    tint: "dark"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 20px 8px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    shape: "circle",
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(IcBack, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: 'var(--neutral-900)'
    }
  }, "Settings")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#0A84FF,#66B7FF)',
      borderRadius: 22,
      padding: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: '#fff',
      marginBottom: 20,
      boxShadow: 'var(--inset-rim), 0 12px 30px rgba(10,68,140,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255,255,255,0.45)',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, "Y"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 800,
      letterSpacing: '-0.02em'
    }
  }, "Yuna Sato"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      opacity: 0.85
    }
  }, "yuna@aozora.jp \xB7 Member since 2024")), /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    selected: true
  }, "Pro")), /*#__PURE__*/React.createElement(Section, {
    kicker: "Preferences \xB7 \u8A2D\u5B9A"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Push notifications",
    sub: "Order updates, drops, drops, drops",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: push,
      onChange: setPush
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Haptic feedback",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: haptics,
      onChange: setHap
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sync across devices",
    sub: "iCloud \xB7 last synced 2 min ago",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: sync,
      onChange: setSync
    }),
    last: true
  })), /*#__PURE__*/React.createElement(Section, {
    kicker: "Account"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Email",
    sub: "yuna@aozora.jp",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Language",
    sub: "\u65E5\u672C\u8A9E \xB7 English",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Payment",
    sub: "Visa \xB7 1234",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {},
    last: true
  })), /*#__PURE__*/React.createElement(Section, {
    kicker: "Advanced"
  }, /*#__PURE__*/React.createElement(Row, {
    label: "Beta features",
    sub: "Try unreleased flavors",
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: beta,
      onChange: setBeta
    })
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Privacy report",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(Row, {
    label: "Sign out",
    control: /*#__PURE__*/React.createElement(IcChev, {
      size: 16,
      color: "var(--text-faint)"
    }),
    onClick: () => {},
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      color: 'var(--text-faint)',
      letterSpacing: '0.18em',
      padding: '20px 0'
    }
  }, "AOZORA \xB7 v1.0.0 \xB7 MADE IN SUMMER")));
}
window.SettingsScreen = SettingsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-bundle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared monoline icons used across the Aozora App UI kit.
// Inlined SVG (not a CDN) so the kit previews offline. Stroke 2px, round caps.

const ic = (path, opts = {}) => function Icon({
  size = 20,
  color = "currentColor",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: opts.fill || "none",
    stroke: opts.fill ? "none" : color,
    strokeWidth: opts.sw || 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), path);
};
const Home = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M3 11 12 3l9 8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 10v10h14V10"
})));
const Search = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m20 20-3.5-3.5"
})));
const Heart = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"
})));
const HeartFill = ic(/*#__PURE__*/React.createElement("path", {
  d: "M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"
}), {
  fill: 'currentColor'
});
const User = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"
})));
const Plus = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14M5 12h14"
})));
const Arrow = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
})));
const Back = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5M11 6l-6 6 6 6"
})));
const Bell = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 21a2 2 0 0 0 4 0"
})));
const Settings = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
})));
const Chev = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "m9 6 6 6-6 6"
})));
const Drop = ic(/*#__PURE__*/React.createElement("path", {
  d: "M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z"
}), {
  fill: 'currentColor'
});
const Star = ic(/*#__PURE__*/React.createElement("path", {
  d: "m12 3 2.6 6 6.4.6-4.8 4.4 1.4 6.4L12 17.3 6.4 20.4 7.8 14 3 9.6 9.4 9z"
}), {
  fill: 'currentColor'
});
const Cart = ic(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "20",
  r: "1.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "20",
  r: "1.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 4h2l2.5 11h11l2-7H6"
})));
Object.assign(window, {
  IcHome: Home,
  IcSearch: Search,
  IcHeart: Heart,
  IcHeartFill: HeartFill,
  IcUser: User,
  IcPlus: Plus,
  IcArrow: Arrow,
  IcBack: Back,
  IcBell: Bell,
  IcSettings: Settings,
  IcChev: Chev,
  IcDrop: Drop,
  IcStar: Star,
  IcCart: Cart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/phone.jsx
try { (() => {
// Phone frame — fakes an iPhone-shaped device shell so screens preview at
// realistic dimensions inside the kit. Not part of the design system itself.

function PhoneFrame({
  children,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      height: 760,
      background: '#07090E',
      borderRadius: 48,
      padding: 10,
      boxShadow: '0 30px 80px rgba(10,68,140,0.28), inset 0 0 0 1px rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: 38,
      overflow: 'hidden',
      position: 'relative',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 110,
      height: 30,
      borderRadius: 16,
      background: '#07090E',
      zIndex: 20
    }
  }), children)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.16em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, label));
}

// Status bar — used inside every screen.
function StatusBar({
  tint = 'dark'
}) {
  const color = tint === 'light' ? '#fff' : 'var(--neutral-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 50,
      zIndex: 15,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 28px 0',
      pointerEvents: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 700,
      color,
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 10,
      borderRadius: 2,
      border: `1.4px solid ${color}`,
      position: 'relative',
      display: 'inline-block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 1,
      background: color,
      borderRadius: 1
    }
  }))));
}

// Bottom tab bar — thin glass strip over whatever the screen content is.
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: 'home',
    label: 'Home',
    Icon: IcHome
  }, {
    id: 'search',
    label: 'Search',
    Icon: IcSearch
  }, {
    id: 'fav',
    label: 'Saved',
    Icon: IcHeart
  }, {
    id: 'me',
    label: 'Me',
    Icon: IcUser
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 14,
      background: 'rgba(255,255,255,0.62)',
      backdropFilter: 'blur(24px) saturate(180%)',
      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      border: '1px solid var(--glass-stroke)',
      borderRadius: 28,
      boxShadow: 'var(--glass-edge), 0 12px 30px rgba(10,68,140,0.18)',
      padding: '10px 8px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 4,
      zIndex: 30
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: '8px 4px',
        border: 'none',
        background: on ? 'rgba(10,132,255,0.10)' : 'transparent',
        borderRadius: 18,
        cursor: 'pointer',
        color: on ? 'var(--blue-600)' : 'var(--text-muted)',
        transition: 'all var(--dur-fast) var(--ease-out-quart)'
      }
    }, /*#__PURE__*/React.createElement(t.Icon, {
      size: 20
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.02em'
      }
    }, t.label));
  }));
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/phone.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

})();
