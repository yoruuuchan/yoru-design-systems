/* @ds-bundle: {"format":3,"namespace":"KUNLUNDesignSystem_29e6df","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Loading","sourcePath":"components/feedback/Loading.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Panel","sourcePath":"components/surfaces/Panel.jsx"},{"name":"CodeBlock","sourcePath":"components/terminal/CodeBlock.jsx"},{"name":"Terminal","sourcePath":"components/terminal/Terminal.jsx"},{"name":"ChartCard","sourcePath":"components/viz/ChartCard.jsx"},{"name":"DataTable","sourcePath":"components/viz/DataTable.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a7eeca1af718","components/buttons/IconButton.jsx":"9f7d58d15683","components/data/Avatar.jsx":"35e45126554b","components/data/Badge.jsx":"035688f236b2","components/data/StatusPill.jsx":"f589019a93f7","components/data/Tag.jsx":"f2b6852f8fe8","components/feedback/Dialog.jsx":"39de82a18e43","components/feedback/Loading.jsx":"a30345f3537b","components/feedback/ProgressBar.jsx":"13eedf4b61a7","components/feedback/Toast.jsx":"43b13120e3d9","components/feedback/Tooltip.jsx":"b5ae5e663c2c","components/forms/Input.jsx":"e5043e050c6d","components/forms/Select.jsx":"4a7726e63dd5","components/forms/Textarea.jsx":"d5b1c6963de9","components/navigation/Tabs.jsx":"c3fb94771ab5","components/surfaces/Card.jsx":"51df0e9904c6","components/surfaces/Panel.jsx":"3604f8ea9cb9","components/terminal/CodeBlock.jsx":"64101db5c1f1","components/terminal/Terminal.jsx":"fe6890a27d53","components/viz/ChartCard.jsx":"568a7abcdca9","components/viz/DataTable.jsx":"76dbd27f4846","ui_kits/chat/Chat.jsx":"9b2dad632347","ui_kits/dashboard/Dashboard.jsx":"20021a656f19","ui_kits/landing/Landing.jsx":"3dc6ab284d3f","ui_kits/login/Login.jsx":"b0839ec290fd","ui_kits/terminal/TerminalApp.jsx":"ecdab99775df"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KUNLUNDesignSystem_29e6df = window.KUNLUNDesignSystem_29e6df || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action surface in KUNLUN.
 * Chamfered, mono-uppercase. Five variants, three sizes.
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  icon = null,
  iconRight = null,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-btn", `kl-btn--${variant}`, `kl-btn--${size}`, fullWidth ? "kl-btn--full" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "kl-btn__spinner",
    "aria-hidden": true
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    className: "kl-btn__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight && !loading ? /*#__PURE__*/React.createElement("span", {
    className: "kl-btn__icon"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — icon-only square button. Same chamfered silhouette as Button.
 */
function IconButton({
  variant = "default",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-iconbtn", variant !== "default" ? `kl-iconbtn--${variant}` : "", `kl-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — square (chamfered) or circle. Initials, image, or icon child.
 */
function Avatar({
  size = "md",
  shape = "sq",
  src,
  alt,
  initials,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-avatar", `kl-avatar--${shape}`, `kl-avatar--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    className: "kl-avatar__img",
    src: src,
    alt: alt || ""
  }) : children || initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small, dense label. Uppercase mono.
 */
function Badge({
  variant = "neutral",
  solid = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-badge", `kl-badge--${variant}`, solid ? "kl-badge--solid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusPill — dot + label. The dot animates per status. Use for system state.
 */
function StatusPill({
  status = "online",
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-pill", `kl-pill--${status}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "kl-pill__dot",
    "aria-hidden": true
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small chip with optional close button.
 */
function Tag({
  variant = "default",
  onRemove,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-tag", variant !== "default" ? `kl-tag--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", null, children), onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "kl-tag__close",
    "aria-label": "Remove",
    onClick: onRemove
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — chamfered modal with title bar, scrollable body, footer actions.
 */
function Dialog({
  open,
  onClose,
  title,
  variant = "default",
  actions,
  closeOnOverlay = true,
  children
}) {
  if (!open) return null;
  const dlgCls = ["kl-dialog", variant !== "default" ? `kl-dialog--${variant}` : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "kl-dialog-overlay",
    onClick: e => {
      if (closeOnOverlay && e.target === e.currentTarget) onClose?.();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: dlgCls,
    role: "dialog",
    "aria-modal": "true"
  }, title && /*#__PURE__*/React.createElement("header", {
    className: "kl-dialog__head"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "kl-dialog__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "kl-iconbtn kl-iconbtn--ghost kl-iconbtn--sm",
    "aria-label": "Close"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "kl-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("footer", {
    className: "kl-dialog__foot"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Loading.jsx
try { (() => {
/**
 * Loading — terminal-style block-character marquee + optional label.
 * Use the `spinner` variant for a compact inline indicator.
 */
function Loading({
  variant = "blocks",
  label = "LOADING...",
  className = ""
}) {
  if (variant === "spinner") {
    return /*#__PURE__*/React.createElement("span", {
      className: `kl-loading ${className}`
    }, /*#__PURE__*/React.createElement("span", {
      className: "kl-spinner"
    }), label && /*#__PURE__*/React.createElement("span", null, label));
  }
  return /*#__PURE__*/React.createElement("span", {
    className: `kl-loading ${className}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "kl-loading__blocks"
  }, /*#__PURE__*/React.createElement("span", null, "\u25AE"), /*#__PURE__*/React.createElement("span", null, "\u25AE"), /*#__PURE__*/React.createElement("span", null, "\u25AE"), /*#__PURE__*/React.createElement("span", null, "\u25AE"), /*#__PURE__*/React.createElement("span", null, "\u25AE")), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Loading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Loading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — thin chamfered bar with optional label + value readout.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  variant = "default",
  showValue = true,
  indeterminate = false,
  className = ""
}) {
  const pct = indeterminate ? 100 : Math.max(0, Math.min(100, value / max * 100));
  const cls = ["kl-progress", variant !== "default" ? `kl-progress--${variant}` : "", indeterminate ? "kl-progress--indeterminate" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-valuenow": indeterminate ? undefined : value
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "kl-progress__head"
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    className: "kl-progress__head-val"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "kl-progress__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kl-progress__fill",
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICONS = {
  info: "i",
  success: "✓",
  warn: "!",
  error: "⨯"
};

/**
 * Toast — transient notification. Render inside a <ToastStack>.
 */
function Toast({
  variant = "info",
  title,
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `kl-toast kl-toast--${variant}`,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kl-toast__icon"
  }, ICONS[variant]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "kl-toast__title"
  }, title), /*#__PURE__*/React.createElement("div", null, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "kl-toast__close",
    onClick: onClose,
    "aria-label": "Dismiss"
  }, "\xD7"));
}

/** Fixed stack in the bottom-right corner. */
function ToastStack({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "kl-toast-stack"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — chamfered cyan label above a trigger. Pure-CSS hover/focus.
 */
function Tooltip({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "kl-tooltip-wrap"
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "kl-tooltip",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text input with optional label/hint/error and adornments.
 */
function Input({
  label,
  hint,
  error,
  size = "md",
  prefix,
  suffix,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const inputClass = ["kl-input", size === "sm" ? "kl-input--sm" : "", size === "lg" ? "kl-input--lg" : "", error ? "kl-input--error" : "", className].filter(Boolean).join(" ");
  const inputEl = /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputClass
  }, rest));
  const body = prefix || suffix ? /*#__PURE__*/React.createElement("div", {
    className: "kl-input-wrap"
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "kl-input-wrap__adornment"
  }, prefix), inputEl, suffix && /*#__PURE__*/React.createElement("span", {
    className: "kl-input-wrap__adornment kl-input-wrap__adornment--right"
  }, suffix)) : inputEl;
  return /*#__PURE__*/React.createElement("div", {
    className: "kl-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kl-field__label",
    htmlFor: inputId
  }, label), body, (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `kl-field__hint ${error ? "kl-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native select with a custom cyan chevron + chamfered well.
 */
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  className = "",
  children,
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const cls = ["kl-select", error ? "kl-select--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "kl-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kl-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    className: cls
  }, rest), children || options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `kl-field__hint ${error ? "kl-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line text input. Same chamfered well as Input.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  const autoId = React.useId();
  const inputId = id || autoId;
  const cls = ["kl-textarea", error ? "kl-textarea--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "kl-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "kl-field__label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    className: cls
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: `kl-field__hint ${error ? "kl-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — chamfered top-edge cyan indicator bar.
 * Controlled or uncontrolled.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = "",
  children
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].value));
  const active = value !== undefined ? value : internal;
  const select = next => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };
  const activeTab = tabs.find(t => t.value === active);
  return /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: "kl-tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": active === t.value,
    disabled: t.disabled,
    className: "kl-tabs__tab",
    onClick: () => !t.disabled && select(t.value)
  }, t.icon && /*#__PURE__*/React.createElement("span", null, t.icon), /*#__PURE__*/React.createElement("span", null, t.label), t.count !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontWeight: 400
    }
  }, "\xB7 ", t.count)))), /*#__PURE__*/React.createElement("div", {
    className: "kl-tabs__panels"
  }, children !== undefined ? children : activeTab?.content));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — simpler container than Panel: no chrome, optional eyebrow + title.
 */
function Card({
  eyebrow,
  title,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-card", interactive ? "kl-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "kl-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "kl-card__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "kl-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Panel — terminal-style window with a title bar, optional meta + actions
 * in the head, optional footer. The signature KUNLUN surface for grouping content.
 */
function Panel({
  title,
  meta,
  actions,
  footer,
  variant = "default",
  flush = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["kl-panel", variant !== "default" ? `kl-panel--${variant}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, rest), (title || meta || actions) && /*#__PURE__*/React.createElement("header", {
    className: "kl-panel__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kl-panel__title"
  }, title, meta && /*#__PURE__*/React.createElement("span", {
    className: "kl-panel__meta"
  }, "// ", meta)), actions && /*#__PURE__*/React.createElement("div", {
    className: "kl-panel__actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: `kl-panel__body ${flush ? "kl-panel__body--flush" : ""}`
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "kl-panel__foot"
  }, footer));
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Panel.jsx", error: String((e && e.message) || e) }); }

// components/terminal/CodeBlock.jsx
try { (() => {
/**
 * CodeBlock — read-only code surface with optional line numbers + copy button.
 * Pass plain text; no syntax highlighting (keep it terminal-honest).
 */
function CodeBlock({
  code = "",
  lang,
  showLineNumbers = true,
  showCopy = true,
  className = ""
}) {
  const [copied, setCopied] = React.useState(false);
  const lines = String(code).replace(/\n$/, "").split("\n");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `kl-code ${className}`
  }, (lang || showCopy) && /*#__PURE__*/React.createElement("div", {
    className: "kl-code__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kl-code__lang"
  }, lang), showCopy && /*#__PURE__*/React.createElement("button", {
    className: "kl-code__copy",
    onClick: copy
  }, copied ? "✓ COPIED" : "COPY")), /*#__PURE__*/React.createElement("div", {
    className: "kl-code__body"
  }, showLineNumbers && /*#__PURE__*/React.createElement("div", {
    className: "kl-code__gutter"
  }, lines.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, i + 1))), /*#__PURE__*/React.createElement("pre", {
    className: "kl-code__lines"
  }, /*#__PURE__*/React.createElement("code", null, code))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/terminal/Terminal.jsx
try { (() => {
/**
 * Terminal — fake terminal with prompt, output lines, and an optional input.
 * Pass `lines` as an array of strings or {prompt, text, kind} objects.
 * Pass `onCommand` to make the input live.
 */
function Terminal({
  title = "tty-07",
  prompt = "$",
  lines = [],
  onCommand,
  showInput = true,
  showDots = true,
  className = "",
  height
}) {
  const [value, setValue] = React.useState("");
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);
  const submit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    onCommand?.(value);
    setValue("");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `kl-terminal ${className}`,
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kl-terminal__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kl-terminal__head-title"
  }, title), showDots && /*#__PURE__*/React.createElement("span", {
    className: "kl-terminal__head-dots"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null))), /*#__PURE__*/React.createElement("div", {
    className: "kl-terminal__body",
    ref: bodyRef
  }, lines.map((line, i) => {
    const obj = typeof line === "string" ? {
      text: line
    } : line;
    const {
      prompt: p,
      text,
      kind
    } = obj;
    const textCls = kind ? `kl-terminal__text kl-terminal__text--${kind}` : "kl-terminal__text";
    return /*#__PURE__*/React.createElement("div", {
      className: "kl-terminal__line",
      key: i
    }, p !== undefined && /*#__PURE__*/React.createElement("span", {
      className: "kl-terminal__prompt"
    }, p || prompt), /*#__PURE__*/React.createElement("span", {
      className: textCls
    }, text));
  })), showInput && /*#__PURE__*/React.createElement("form", {
    className: "kl-terminal__input-row",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("span", {
    className: "kl-terminal__prompt"
  }, prompt), /*#__PURE__*/React.createElement("input", {
    className: "kl-terminal__input",
    value: value,
    onChange: e => setValue(e.target.value),
    autoFocus: true,
    spellCheck: false,
    placeholder: "// enter command"
  })));
}
Object.assign(__ds_scope, { Terminal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/terminal/Terminal.jsx", error: String((e && e.message) || e) }); }

// components/viz/ChartCard.jsx
try { (() => {
/**
 * ChartCard — KPI tile with optional inline sparkline. Pass a `series`
 * array (numbers); we render a chamfered cyan-glow line + area sparkline.
 */
function ChartCard({
  label,
  value,
  unit,
  delta,
  deltaDirection = "flat",
  series,
  badge,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `kl-chart-card ${className}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "kl-chart-card__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "kl-chart-card__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "kl-chart-card__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "kl-chart-card__unit"
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    className: `kl-chart-card__delta kl-chart-card__delta--${deltaDirection}`
  }, deltaDirection === "up" ? "▲ " : deltaDirection === "down" ? "▼ " : "— ", delta)), badge), series && series.length > 1 && /*#__PURE__*/React.createElement(Sparkline, {
    data: series
  }));
}
function Sparkline({
  data
}) {
  const w = 600,
    h = 56;
  const min = Math.min(...data),
    max = Math.max(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - (v - min) / range * (h - 8) - 4]);
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L${w} ${h} L0 ${h} Z`;
  return /*#__PURE__*/React.createElement("div", {
    className: "kl-chart-card__viz"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "kl-spark-fill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--cyan-500)",
    stopOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--cyan-500)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#kl-spark-fill)"
  }), /*#__PURE__*/React.createElement("path", {
    d: path,
    fill: "none",
    stroke: "var(--cyan-400)",
    strokeWidth: "1.5",
    vectorEffect: "non-scaling-stroke",
    style: {
      filter: "drop-shadow(0 0 4px var(--accent-glow))"
    }
  })));
}
Object.assign(__ds_scope, { ChartCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/viz/ChartCard.jsx", error: String((e && e.message) || e) }); }

// components/viz/DataTable.jsx
try { (() => {
/**
 * DataTable — minimal accessible table with sticky header, hover ribbon,
 * and an optional striped body. Pass columns + rows; values render as-is.
 */
function DataTable({
  columns = [],
  rows = [],
  striped = false,
  emptyState = "// NO RECORDS",
  className = ""
}) {
  const tcls = ["kl-table", striped ? "kl-table--striped" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: `kl-table-wrap ${className}`
  }, /*#__PURE__*/React.createElement("table", {
    className: tcls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      width: c.width
    }
  }, c.header || c.key)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      textAlign: "center",
      color: "var(--text-tertiary)",
      padding: "24px"
    }
  }, emptyState)), rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? i
  }, columns.map(c => {
    const v = row[c.key];
    const td = c.render ? c.render(v, row) : v;
    const cls = c.tone ? `kl-table__${c.tone}` : "";
    return /*#__PURE__*/React.createElement("td", {
      key: c.key,
      className: cls,
      style: {
        textAlign: c.align || "left"
      }
    }, td);
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/viz/DataTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/chat/Chat.jsx
try { (() => {
// KUNLUN — AI Chat (operator ↔ MOSS-class agent)
const KL = window.KUNLUNDesignSystem_29e6df;
const {
  Button,
  IconButton,
  Input,
  Textarea,
  Avatar,
  Badge,
  StatusPill,
  Loading,
  Tag,
  CodeBlock,
  Tooltip
} = KL;
const chatStyles = {
  page: {
    display: "grid",
    gridTemplateColumns: "260px 1fr",
    height: "100vh",
    background: "var(--bg-base)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)"
  },
  side: {
    background: "var(--bg-void)",
    borderRight: "1px solid var(--border)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  sideHead: {
    padding: "14px 16px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  mark: {
    width: 24,
    height: 24,
    background: "var(--cyan-500)",
    color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 12,
    boxShadow: "var(--glow-cyan-sm)"
  },
  brandWord: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 14,
    letterSpacing: "var(--tracking-widest)"
  },
  search: {
    padding: "10px 12px",
    borderBottom: "1px solid var(--border)"
  },
  convo: {
    flex: 1,
    overflowY: "auto",
    padding: "8px 6px"
  },
  convoLabel: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    padding: "12px 12px 6px"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "8px 10px",
    margin: "1px 4px",
    borderLeft: "2px solid transparent",
    cursor: "pointer",
    fontSize: 12,
    transition: "var(--transition-base)",
    clipPath: "var(--clip-chamfer-sm)"
  },
  itemActive: {
    background: "var(--bg-elevated)",
    borderLeftColor: "var(--cyan-500)",
    boxShadow: "inset 0 0 12px rgba(0,184,255,0.06)"
  },
  itemTitle: {
    fontSize: 12,
    color: "var(--text-primary)",
    lineHeight: 1.35,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical"
  },
  itemMeta: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)",
    display: "flex",
    justifyContent: "space-between"
  },
  sideFoot: {
    padding: "10px 12px",
    borderTop: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)"
  },
  main: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative"
  },
  topbar: {
    padding: "12px 24px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(13, 19, 32, 0.6)",
    backdropFilter: "blur(6px)"
  },
  thread: {
    display: "flex",
    flexDirection: "column",
    gap: 6
  },
  threadTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: "var(--tracking-wide)"
  },
  threadMeta: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase"
  },
  chat: {
    flex: 1,
    overflowY: "auto",
    padding: "32px 80px",
    display: "flex",
    flexDirection: "column",
    gap: 28,
    position: "relative"
  },
  msgRow: {
    display: "grid",
    gridTemplateColumns: "36px 1fr",
    gap: 14,
    alignItems: "flex-start"
  },
  msgMeta: {
    display: "flex",
    gap: 10,
    alignItems: "baseline",
    marginBottom: 6,
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase"
  },
  msgWho: {
    color: "var(--cyan-300)",
    textShadow: "var(--text-glow-cyan)",
    fontWeight: 600
  },
  msgBody: {
    fontSize: 14,
    color: "var(--text-primary)",
    lineHeight: 1.65
  },
  msgBodyUser: {
    color: "var(--neutral-100)"
  },
  msgBodyAi: {
    color: "var(--text-secondary)"
  },
  composer: {
    margin: "0 80px 24px",
    padding: 16,
    position: "relative",
    background: "var(--bg-panel)",
    border: "1px solid var(--cyan-700)",
    clipPath: "var(--clip-chamfer-md)",
    boxShadow: "var(--glow-cyan-sm)",
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  composerInput: {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
    fontSize: 14,
    lineHeight: 1.55,
    minHeight: 56,
    resize: "none"
  },
  composerFoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    borderTop: "1px dashed var(--border)"
  },
  composerHint: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase"
  }
};
const seedConvos = [{
  id: "c1",
  title: "Reactor anomaly · NODE-07 coolant",
  ts: "21:04",
  n: 24,
  active: true
}, {
  id: "c2",
  title: "Draft runbook for sector-B failover",
  ts: "19:32",
  n: 8
}, {
  id: "c3",
  title: "Why is the edge latency creeping up?",
  ts: "18:01",
  n: 14
}, {
  id: "c4",
  title: "// MOSS, summarize today's incidents",
  ts: "yesterday",
  n: 6
}, {
  id: "c5",
  title: "Telemetry schema review",
  ts: "yesterday",
  n: 11
}, {
  id: "c6",
  title: "Patch notes draft — v0.1.1",
  ts: "Mon",
  n: 3
}];
const seedMessages = [{
  who: "user",
  at: "21:04:32",
  body: "MOSS, telemetry says NODE-07 coolant dropped to 87%. Walk me through the failure mode."
}, {
  who: "agent",
  at: "21:04:35",
  body: "Acknowledged, operator. Based on the last 4h of pump data, the most likely cause is a partial blockage in feed-line C2 — the inlet pressure has been climbing in lockstep with the flow drop.",
  blocks: [{
    kind: "code",
    lang: "telemetry",
    code: "NODE-07 · pump-C2\n  inlet_psi:  142  →  158\n  flow_lpm:  920  →  802\n  temp_c:   68.4 → 71.1"
  }],
  tags: ["sector-A", "NODE-07", "reactor"]
}, {
  who: "user",
  at: "21:05:01",
  body: "Recommended action?"
}, {
  who: "agent",
  at: "21:05:02",
  body: "Initiate a soft purge of feed-line C2 — 30 second backflush at 60% pressure, no shutdown required. If flow does not recover within 2 minutes, escalate to a full lockout-tagout and dispatch the SECTOR-A crew.",
  suggested: ["Initiate soft purge on C2", "Open a SEV-3 ticket", "Page the SECTOR-A on-call"]
}];
function ConvoItem({
  c,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...chatStyles.item,
      ...(active ? chatStyles.itemActive : {})
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    style: chatStyles.itemTitle
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: chatStyles.itemMeta
  }, /*#__PURE__*/React.createElement("span", null, c.ts), /*#__PURE__*/React.createElement("span", null, c.n, " msgs")));
}
function Message({
  m
}) {
  const isUser = m.who === "user";
  return /*#__PURE__*/React.createElement("div", {
    style: chatStyles.msgRow
  }, isUser ? /*#__PURE__*/React.createElement(Avatar, {
    initials: "OP",
    size: "md"
  }) : /*#__PURE__*/React.createElement(Avatar, {
    size: "md",
    style: {
      borderColor: "var(--amber-700)",
      color: "var(--amber-300)"
    }
  }, "M"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.msgMeta
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...chatStyles.msgWho,
      color: isUser ? "var(--cyan-300)" : "var(--amber-300)",
      textShadow: isUser ? "var(--text-glow-cyan)" : "var(--text-glow-amber)"
    }
  }, isUser ? "OPERATOR · OP-07" : "MOSS · v0.1.0"), /*#__PURE__*/React.createElement("span", null, m.at), !isUser && /*#__PURE__*/React.createElement(Badge, {
    variant: "signal"
  }, "AGENT")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...chatStyles.msgBody,
      ...(isUser ? chatStyles.msgBodyUser : chatStyles.msgBodyAi)
    }
  }, m.body), m.blocks?.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(CodeBlock, {
    code: b.code,
    lang: b.lang,
    showLineNumbers: false
  }))), m.tags && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 10
    }
  }, m.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    variant: "accent"
  }, t))), m.suggested && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 14
    }
  }, m.suggested.map(s => /*#__PURE__*/React.createElement(Button, {
    key: s,
    variant: "secondary",
    size: "sm"
  }, s)))));
}
function Chat() {
  const [convos] = React.useState(seedConvos);
  const [activeId, setActiveId] = React.useState("c1");
  const [messages, setMessages] = React.useState(seedMessages);
  const [draft, setDraft] = React.useState("");
  const [thinking, setThinking] = React.useState(false);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking]);
  const send = e => {
    e?.preventDefault?.();
    if (!draft.trim()) return;
    const at = new Date().toTimeString().slice(0, 8);
    setMessages(m => [...m, {
      who: "user",
      at,
      body: draft
    }]);
    setDraft("");
    setThinking(true);
    setTimeout(() => {
      setMessages(m => [...m, {
        who: "agent",
        at: new Date().toTimeString().slice(0, 8),
        body: "Copy that. Standing by to execute. Confirm the purge window and I will dispatch the command."
      }]);
      setThinking(false);
    }, 1200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: chatStyles.page
  }, /*#__PURE__*/React.createElement("aside", {
    style: chatStyles.side
  }, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.sideHead
  }, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.brand
  }, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.mark
  }, "K"), /*#__PURE__*/React.createElement("span", {
    style: chatStyles.brandWord
  }, "KUNLUN")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "NEW THREAD"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "New",
    size: "sm"
  }, "\uFF0B"))), /*#__PURE__*/React.createElement("div", {
    style: chatStyles.search
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: "\u2315",
    placeholder: "search threads...",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: chatStyles.convo
  }, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.convoLabel
  }, "// TODAY"), convos.slice(0, 3).map(c => /*#__PURE__*/React.createElement(ConvoItem, {
    key: c.id,
    c: c,
    active: activeId === c.id,
    onClick: () => setActiveId(c.id)
  })), /*#__PURE__*/React.createElement("div", {
    style: chatStyles.convoLabel
  }, "// EARLIER"), convos.slice(3).map(c => /*#__PURE__*/React.createElement(ConvoItem, {
    key: c.id,
    c: c,
    active: activeId === c.id,
    onClick: () => setActiveId(c.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: chatStyles.sideFoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "OP",
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", null, "OPERATOR-07")), /*#__PURE__*/React.createElement("span", null, "\u25B8"))), /*#__PURE__*/React.createElement("main", {
    style: chatStyles.main
  }, /*#__PURE__*/React.createElement("header", {
    style: chatStyles.topbar
  }, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.thread
  }, /*#__PURE__*/React.createElement("span", {
    style: chatStyles.threadTitle
  }, "// Reactor anomaly \xB7 NODE-07 coolant"), /*#__PURE__*/React.createElement("span", {
    style: chatStyles.threadMeta
  }, "MOSS-CLASS AGENT \xB7 v0.1.0 \xB7 24 MESSAGES \xB7 STARTED 19:54:01")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "online"
  }, "AGENT ONLINE"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "EXPORT"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Export",
    variant: "ghost"
  }, "\u21A7")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "ARCHIVE"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Archive",
    variant: "ghost"
  }, "\u232C")))), /*#__PURE__*/React.createElement("div", {
    style: chatStyles.chat,
    ref: scrollRef
  }, messages.map((m, i) => /*#__PURE__*/React.createElement(Message, {
    key: i,
    m: m
  })), thinking && /*#__PURE__*/React.createElement("div", {
    style: chatStyles.msgRow
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "md",
    style: {
      borderColor: "var(--amber-700)",
      color: "var(--amber-300)"
    }
  }, "M"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: chatStyles.msgMeta
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...chatStyles.msgWho,
      color: "var(--amber-300)",
      textShadow: "var(--text-glow-amber)"
    }
  }, "MOSS \xB7 v0.1.0"), /*#__PURE__*/React.createElement("span", null, "thinking...")), /*#__PURE__*/React.createElement(Loading, {
    label: "// PROCESSING TELEMETRY"
  })))), /*#__PURE__*/React.createElement("form", {
    style: chatStyles.composer,
    onSubmit: send
  }, /*#__PURE__*/React.createElement("textarea", {
    style: chatStyles.composerInput,
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && !e.shiftKey) send(e);
    },
    placeholder: "// MESSAGE MOSS \xB7 Enter to send \xB7 Shift+Enter for newline",
    rows: 2,
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", {
    style: chatStyles.composerFoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Attach",
    size: "sm",
    variant: "ghost"
  }, "\u2318"), /*#__PURE__*/React.createElement(IconButton, {
    label: "Slash command",
    size: "sm",
    variant: "ghost"
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: chatStyles.composerHint
  }, "\xB7 MODEL: MOSS-V0.1 \xB7 CONTEXT: SECTOR-A")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "md",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u25B8"),
    disabled: !draft.trim() || thinking
  }, thinking ? "SENDING..." : "DISPATCH")))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Chat, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chat/Chat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
// KUNLUN — Operations Dashboard
const KL = window.KUNLUNDesignSystem_29e6df;
const {
  Button,
  IconButton,
  Input,
  Panel,
  Card,
  Badge,
  Tag,
  StatusPill,
  Avatar,
  Tabs,
  ProgressBar,
  ChartCard,
  DataTable,
  Tooltip
} = KL;
const dashStyles = {
  page: {
    display: "grid",
    gridTemplateColumns: "220px 1fr",
    gridTemplateRows: "auto 1fr",
    height: "100vh",
    background: "var(--bg-base)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)"
  },
  side: {
    gridRow: "1 / -1",
    background: "var(--bg-void)",
    borderRight: "1px solid var(--border)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  sideHead: {
    padding: "16px 18px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  mark: {
    width: 28,
    height: 28,
    background: "var(--cyan-500)",
    color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 13,
    boxShadow: "var(--glow-cyan-sm)"
  },
  brand: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 16,
    letterSpacing: "var(--tracking-widest)"
  },
  brandSub: {
    fontSize: 9,
    color: "var(--cyan-300)",
    letterSpacing: "0.4em"
  },
  nav: {
    flex: 1,
    padding: "12px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 1
  },
  navLabel: {
    fontSize: 9,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    padding: "12px 12px 6px"
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 12px",
    fontSize: 12,
    color: "var(--text-secondary)",
    cursor: "pointer",
    clipPath: "var(--clip-chamfer-sm)",
    borderLeft: "2px solid transparent",
    transition: "var(--transition-base)"
  },
  navItemActive: {
    background: "var(--bg-elevated)",
    borderLeftColor: "var(--cyan-500)",
    color: "var(--text-signal)",
    textShadow: "var(--text-glow-cyan)",
    boxShadow: "inset 0 0 12px rgba(0,184,255,0.05)"
  },
  navGlyph: {
    width: 16,
    color: "var(--cyan-400)",
    fontSize: 13
  },
  sideFoot: {
    padding: "12px 14px",
    borderTop: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 10,
    color: "var(--text-tertiary)"
  },
  topbar: {
    padding: "12px 24px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(13, 19, 32, 0.55)",
    backdropFilter: "blur(6px)"
  },
  crumbs: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
    fontSize: 11,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase"
  },
  crumbActive: {
    color: "var(--text-signal)",
    textShadow: "var(--text-glow-cyan)",
    fontWeight: 600
  },
  topbarActions: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  main: {
    overflowY: "auto",
    padding: "24px 28px 56px",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  pageHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "1px solid var(--border)",
    paddingBottom: 16
  },
  pageTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: "var(--tracking-wide)",
    margin: 0
  },
  pageMeta: {
    fontSize: 11,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)",
    marginTop: 8,
    display: "flex",
    gap: 16,
    textTransform: "uppercase"
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 14
  }
};
const NAV = [{
  sec: "// OPERATIONS",
  items: [{
    id: "overview",
    label: "OVERVIEW",
    g: "◰",
    active: true
  }, {
    id: "nodes",
    label: "NODES",
    g: "⟁"
  }, {
    id: "telemetry",
    label: "TELEMETRY",
    g: "◴"
  }, {
    id: "incidents",
    label: "INCIDENTS",
    g: "⚠",
    badge: 3
  }]
}, {
  sec: "// SECTORS",
  items: [{
    id: "sectorA",
    label: "SECTOR-A · CORE",
    g: "▣"
  }, {
    id: "sectorB",
    label: "SECTOR-B · RELAY",
    g: "▤"
  }, {
    id: "sectorC",
    label: "SECTOR-C · COLD",
    g: "▥"
  }]
}, {
  sec: "// SYSTEM",
  items: [{
    id: "agents",
    label: "AGENTS",
    g: "⌬"
  }, {
    id: "settings",
    label: "SETTINGS",
    g: "⚙"
  }]
}];
const nodeRows = [{
  id: "NODE-07",
  sector: "A",
  status: "online",
  power: 142.3,
  lat: 8.4,
  uptime: "12d 04h",
  ts: "21:04:55"
}, {
  id: "NODE-08",
  sector: "A",
  status: "online",
  power: 128.1,
  lat: 9.1,
  uptime: "31d 09h",
  ts: "21:04:54"
}, {
  id: "NODE-09",
  sector: "A",
  status: "busy",
  power: 97.6,
  lat: 11.0,
  uptime: "02d 18h",
  ts: "21:04:51"
}, {
  id: "NODE-11",
  sector: "B",
  status: "online",
  power: 118.4,
  lat: 7.9,
  uptime: "58d 02h",
  ts: "21:04:53"
}, {
  id: "NODE-12",
  sector: "B",
  status: "error",
  power: 0,
  lat: 0,
  uptime: "—",
  ts: "20:51:08"
}, {
  id: "NODE-13",
  sector: "B",
  status: "warn",
  power: 102.7,
  lat: 18.2,
  uptime: "08d 11h",
  ts: "21:04:50"
}, {
  id: "NODE-21",
  sector: "C",
  status: "online",
  power: 88.0,
  lat: 14.4,
  uptime: "21d 06h",
  ts: "21:04:48"
}, {
  id: "NODE-22",
  sector: "C",
  status: "idle",
  power: 0,
  lat: 0,
  uptime: "99d 00h",
  ts: "19:31:00"
}];
const activity = [{
  t: "21:04:55",
  sev: "warn",
  src: "NODE-13",
  text: "latency spike 18.2 ms · investigating"
}, {
  t: "20:51:08",
  sev: "error",
  src: "NODE-12",
  text: "uplink lost · 0xE7 timeout"
}, {
  t: "20:42:12",
  sev: "info",
  src: "OPS",
  text: "runbook RB-14 dispatched by OP-07"
}, {
  t: "20:31:00",
  sev: "ok",
  src: "CORE-9",
  text: "daily snapshot complete · vault-3"
}, {
  t: "19:58:44",
  sev: "info",
  src: "MOSS",
  text: "thread closed · reactor coolant"
}];
function NavItem({
  item,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...dashStyles.navItem,
      ...(item.active ? dashStyles.navItemActive : {})
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    style: dashStyles.navGlyph
  }, item.g), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge !== undefined && /*#__PURE__*/React.createElement(Badge, {
    variant: "danger"
  }, item.badge));
}
function Activity() {
  const tones = {
    info: "var(--text-secondary)",
    ok: "var(--green-500)",
    warn: "var(--amber-500)",
    error: "var(--red-500)"
  };
  return /*#__PURE__*/React.createElement(Panel, {
    title: "ACTIVITY",
    meta: "LAST 30 MIN",
    flush: true,
    actions: /*#__PURE__*/React.createElement(Tooltip, {
      label: "OPEN LOG"
    }, /*#__PURE__*/React.createElement(IconButton, {
      label: "Open",
      size: "sm",
      variant: "ghost"
    }, "\u232C"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 300,
      overflowY: "auto"
    }
  }, activity.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "68px 80px 1fr",
      gap: 12,
      padding: "10px 14px",
      borderBottom: i < activity.length - 1 ? "1px solid var(--border)" : "none",
      fontSize: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, a.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-400)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)"
    }
  }, a.src), /*#__PURE__*/React.createElement("span", {
    style: {
      color: tones[a.sev],
      textShadow: a.sev === "error" ? "var(--text-glow-red)" : a.sev === "warn" ? "var(--text-glow-amber)" : "none"
    }
  }, a.sev === "error" ? "⨯ " : a.sev === "warn" ? "⚠ " : a.sev === "ok" ? "✓ " : "› ", a.text)))));
}
function Dashboard() {
  const [tab, setTab] = React.useState("live");
  return /*#__PURE__*/React.createElement("div", {
    style: dashStyles.page
  }, /*#__PURE__*/React.createElement("aside", {
    style: dashStyles.side
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.sideHead
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.mark
  }, "K"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.brand
  }, "KUNLUN"), /*#__PURE__*/React.createElement("div", {
    style: dashStyles.brandSub
  }, "\u6606 \u4ED1"))), /*#__PURE__*/React.createElement("nav", {
    style: dashStyles.nav
  }, NAV.map(g => /*#__PURE__*/React.createElement(React.Fragment, {
    key: g.sec
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.navLabel
  }, g.sec), g.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it
  }))))), /*#__PURE__*/React.createElement("div", {
    style: dashStyles.sideFoot
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "07",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-primary)",
      fontSize: 11
    }
  }, "OP-07"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "var(--text-tertiary)"
    }
  }, "SECTOR-A \xB7 ADMIN"))), /*#__PURE__*/React.createElement(IconButton, {
    label: "Logout",
    size: "sm",
    variant: "ghost"
  }, "\u23CF"))), /*#__PURE__*/React.createElement("header", {
    style: dashStyles.topbar
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.crumbs
  }, /*#__PURE__*/React.createElement("span", null, "// OPS"), /*#__PURE__*/React.createElement("span", null, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: dashStyles.crumbActive
  }, "OVERVIEW"), /*#__PURE__*/React.createElement(Badge, {
    variant: "signal",
    solid: true
  }, "LIVE")), /*#__PURE__*/React.createElement("div", {
    style: dashStyles.topbarActions
  }, /*#__PURE__*/React.createElement(Input, {
    prefix: "\u2315",
    placeholder: "search nodes, runbooks...",
    size: "sm",
    style: {
      width: 280
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    label: "REFRESH"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Refresh",
    variant: "ghost"
  }, "\u21BB")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "NOTIFICATIONS"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "ghost"
  }, "\u2295")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u25B8")
  }, "DISPATCH RUNBOOK"))), /*#__PURE__*/React.createElement("main", {
    style: dashStyles.main
  }, /*#__PURE__*/React.createElement("div", {
    style: dashStyles.pageHead
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: dashStyles.pageTitle
  }, "// CORE-9 \xB7 OPERATIONS"), /*#__PURE__*/React.createElement("div", {
    style: dashStyles.pageMeta
  }, /*#__PURE__*/React.createElement("span", null, "NODE-07 \xB7 SECTOR-A"), /*#__PURE__*/React.createElement("span", null, "UPTIME 12d 04h 18m"), /*#__PURE__*/React.createElement("span", null, "OP-07 ON DUTY"), /*#__PURE__*/React.createElement(StatusPill, {
    status: "online"
  }, "ALL SYSTEMS NOMINAL"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "LAST 24H"), /*#__PURE__*/React.createElement(Tag, {
    variant: "accent",
    onRemove: () => {}
  }, "SECTOR-A"))), /*#__PURE__*/React.createElement("section", {
    style: dashStyles.kpiGrid
  }, /*#__PURE__*/React.createElement(ChartCard, {
    label: "// CORE OUTPUT",
    value: "142.3",
    unit: "MW",
    delta: "+12.4% \xB7 24h",
    deltaDirection: "up",
    series: [100, 110, 105, 120, 132, 128, 142],
    badge: /*#__PURE__*/React.createElement(StatusPill, {
      status: "online"
    }, "LIVE")
  }), /*#__PURE__*/React.createElement(ChartCard, {
    label: "// EDGE LATENCY",
    value: "08.4",
    unit: "ms",
    delta: "-1.2 \xB7 24h",
    deltaDirection: "down",
    series: [14, 12, 13, 11, 10, 9, 8.4]
  }), /*#__PURE__*/React.createElement(ChartCard, {
    label: "// NODES UP",
    value: "218",
    unit: "/ 224",
    delta: "97.3% online",
    deltaDirection: "flat",
    series: [210, 215, 218, 219, 217, 220, 218],
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "warn"
    }, "6 DEGRADED")
  }), /*#__PURE__*/React.createElement(ChartCard, {
    label: "// THROUGHPUT",
    value: "4.82",
    unit: "GB/s",
    delta: "+8.1% \xB7 24h",
    deltaDirection: "up",
    series: [3.8, 4.0, 4.3, 4.5, 4.6, 4.7, 4.8]
  })), /*#__PURE__*/React.createElement("section", {
    style: dashStyles.twoCol
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "TELEMETRY",
    meta: "CORE-9 \xB7 ALL CHANNELS",
    flush: true,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      tabs: [{
        value: "live",
        label: "LIVE"
      }, {
        value: "1h",
        label: "1H"
      }, {
        value: "24h",
        label: "24H"
      }, {
        value: "7d",
        label: "7D"
      }]
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "REACTOR OUTPUT",
    value: 88.3
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "COOLANT FLOW",
    value: 87.0,
    variant: "warn"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "UPLINK BANDWIDTH",
    value: 62.0
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "VAULT CAPACITY",
    value: 34.0,
    variant: "success"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "HEAT",
    value: 92.0,
    variant: "danger"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "SYNC LAG",
    indeterminate: true
  })))), /*#__PURE__*/React.createElement(Activity, null)), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Panel, {
    title: "NODES",
    meta: "218 ONLINE \xB7 6 DEGRADED",
    flush: true,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      prefix: "\u2315",
      placeholder: "filter...",
      size: "sm"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "EXPORT"), /*#__PURE__*/React.createElement(Button, {
      size: "sm"
    }, "+ ADD NODE"))
  }, /*#__PURE__*/React.createElement(DataTable, {
    striped: true,
    rows: nodeRows,
    columns: [{
      key: "id",
      header: "NODE",
      tone: "id"
    }, {
      key: "sector",
      header: "SECTOR",
      render: v => /*#__PURE__*/React.createElement(Tag, null, "SECTOR-", v)
    }, {
      key: "status",
      header: "STATUS",
      render: v => /*#__PURE__*/React.createElement(StatusPill, {
        status: v
      }, String(v).toUpperCase())
    }, {
      key: "power",
      header: "OUTPUT (MW)",
      tone: "num",
      align: "right"
    }, {
      key: "lat",
      header: "LATENCY (ms)",
      tone: "num",
      align: "right"
    }, {
      key: "uptime",
      header: "UPTIME",
      tone: "muted"
    }, {
      key: "ts",
      header: "LAST PING",
      tone: "muted"
    }]
  })))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Dashboard, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Landing.jsx
try { (() => {
// KUNLUN — Landing Page
// Marketing hero with a live boot-sequence terminal, feature grid, stat strip.

const KL = window.KUNLUNDesignSystem_29e6df;
const {
  Button,
  IconButton,
  Card,
  Panel,
  Terminal,
  Badge,
  StatusPill,
  ChartCard
} = KL;
const landingStyles = {
  page: {
    minHeight: "100vh",
    background: "var(--bg-base)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
    position: "relative",
    overflow: "hidden"
  },
  bg: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    background: "radial-gradient(ellipse at 70% -10%, rgba(0,184,255,0.18), transparent 50%)," + "radial-gradient(ellipse at 10% 100%, rgba(42,95,214,0.12), transparent 55%)"
  },
  bgGrid: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    opacity: 0.4,
    backgroundImage: "var(--bg-grid)",
    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
  },
  nav: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 48px",
    borderBottom: "1px solid var(--border)",
    background: "rgba(6, 8, 13, 0.6)",
    backdropFilter: "blur(8px)"
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  navMark: {
    width: 28,
    height: 28,
    background: "var(--cyan-500)",
    color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 14,
    boxShadow: "var(--glow-cyan-sm)"
  },
  navWord: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 18,
    letterSpacing: "var(--tracking-widest)",
    color: "var(--neutral-50)"
  },
  navCjk: {
    fontFamily: '"Noto Sans SC", sans-serif',
    fontSize: 12,
    color: "var(--cyan-300)",
    letterSpacing: "0.3em"
  },
  navLinks: {
    display: "flex",
    gap: 28,
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-widest)",
    color: "var(--text-tertiary)"
  },
  hero: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1280,
    margin: "0 auto",
    padding: "72px 48px 56px",
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: 56,
    alignItems: "center"
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 24,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    color: "var(--cyan-300)",
    textShadow: "var(--text-glow-cyan)"
  },
  eyebrowTick: {
    color: "var(--cyan-500)",
    animation: "kl-blink 1.6s steps(2, end) infinite"
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 80,
    lineHeight: 0.95,
    letterSpacing: "-0.01em",
    margin: 0,
    background: "linear-gradient(180deg, var(--neutral-50) 30%, var(--cyan-400) 110%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "var(--text-glow-cyan)"
  },
  subtitle: {
    marginTop: 28,
    fontSize: 16,
    lineHeight: 1.6,
    color: "var(--text-secondary)",
    maxWidth: 560
  },
  cjkTitle: {
    fontFamily: '"Noto Sans SC", sans-serif',
    fontSize: 18,
    color: "var(--cyan-300)",
    letterSpacing: "0.5em",
    marginTop: 16
  },
  ctaRow: {
    display: "flex",
    gap: 14,
    marginTop: 36,
    alignItems: "center"
  },
  ctaMeta: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)"
  },
  statStrip: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 48px 64px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16
  },
  features: {
    position: "relative",
    zIndex: 1,
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 48px 72px"
  },
  featuresHead: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 28,
    paddingBottom: 16,
    borderBottom: "1px solid var(--border)"
  },
  featuresTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 28,
    letterSpacing: "var(--tracking-wide)",
    color: "var(--text-primary)"
  },
  featGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16
  },
  feat: {
    background: "var(--bg-panel)",
    border: "1px solid var(--border)",
    clipPath: "var(--clip-chamfer-md)",
    padding: 24,
    position: "relative",
    transition: "var(--transition-base)"
  },
  featIdx: {
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    color: "var(--cyan-400)",
    letterSpacing: "var(--tracking-widest)",
    marginBottom: 18,
    display: "flex",
    justifyContent: "space-between",
    textTransform: "uppercase"
  },
  featTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 20,
    margin: "0 0 8px 0",
    letterSpacing: "var(--tracking-wide)"
  },
  featBody: {
    fontSize: 13,
    color: "var(--text-secondary)",
    lineHeight: 1.55
  },
  footer: {
    position: "relative",
    zIndex: 1,
    borderTop: "1px solid var(--border)",
    padding: "24px 48px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase"
  }
};
function BootTerminal() {
  const initial = [{
    prompt: "$",
    text: "kunlun boot --node=07",
    kind: "user"
  }, {
    text: "[ OK ] kernel image verified",
    kind: "success"
  }, {
    text: "[ OK ] uplink established · 8.4ms",
    kind: "success"
  }, {
    text: "[ OK ] core-9 spun up · 142.3 MW",
    kind: "success"
  }, {
    text: "[ .. ] running diagnostics",
    kind: "muted"
  }];
  const [lines, setLines] = React.useState(initial);
  React.useEffect(() => {
    const extras = [{
      text: "[ OK ] sector-A relay ok",
      kind: "success"
    }, {
      text: "[ OK ] sector-B relay ok",
      kind: "success"
    }, {
      text: "[ WARN ] sector-C latency 14ms",
      kind: "warn"
    }, {
      text: "[ OK ] all systems nominal",
      kind: "success"
    }, {
      prompt: "$",
      text: "kunlun status",
      kind: "user"
    }, {
      text: "NODE-07 · NOMINAL · uptime 12d 04h",
      kind: "muted"
    }];
    let i = 0;
    const id = setInterval(() => {
      if (i >= extras.length) {
        clearInterval(id);
        return;
      }
      setLines(l => [...l, extras[i++]]);
    }, 700);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement(Terminal, {
    title: "kunlun://core-9",
    lines: lines,
    showInput: false,
    height: 420
  });
}
function Landing() {
  return /*#__PURE__*/React.createElement("div", {
    style: landingStyles.page
  }, /*#__PURE__*/React.createElement("div", {
    style: landingStyles.bg
  }), /*#__PURE__*/React.createElement("div", {
    style: landingStyles.bgGrid
  }), /*#__PURE__*/React.createElement("nav", {
    style: landingStyles.nav
  }, /*#__PURE__*/React.createElement("div", {
    style: landingStyles.navLogo
  }, /*#__PURE__*/React.createElement("div", {
    style: landingStyles.navMark
  }, "K"), /*#__PURE__*/React.createElement("span", {
    style: landingStyles.navWord
  }, "KUNLUN"), /*#__PURE__*/React.createElement("span", {
    style: landingStyles.navCjk
  }, "\u6606 \u4ED1")), /*#__PURE__*/React.createElement("div", {
    style: landingStyles.navLinks
  }, /*#__PURE__*/React.createElement("span", null, "// PRODUCT"), /*#__PURE__*/React.createElement("span", null, "// SYSTEMS"), /*#__PURE__*/React.createElement("span", null, "// DOCS"), /*#__PURE__*/React.createElement("span", null, "// PRICING")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "SIGN IN"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u25B8")
  }, "REQUEST ACCESS"))), /*#__PURE__*/React.createElement("section", {
    style: landingStyles.hero
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: landingStyles.eyebrow
  }, /*#__PURE__*/React.createElement("span", {
    style: landingStyles.eyebrowTick
  }, "\u25AE"), "// CORE-9 ONLINE \xB7 v0.1.0 \xB7 BUILD 0xA7F3"), /*#__PURE__*/React.createElement("h1", {
    style: landingStyles.title
  }, "OPERATIONS", /*#__PURE__*/React.createElement("br", null), "COMPUTE,", /*#__PURE__*/React.createElement("br", null), "RECLAIMED."), /*#__PURE__*/React.createElement("div", {
    style: landingStyles.cjkTitle
  }, "\u8FD0 \u7EF4 \u8BA1 \u7B97 \xB7 \u91CD \u65B0 \u63A5 \u7BA1"), /*#__PURE__*/React.createElement("p", {
    style: landingStyles.subtitle
  }, "KUNLUN is the industrial-grade ops layer for autonomous infrastructure. Run reactors, fleets, and data planes from one chamfered, glowing, uncompromising terminal."), /*#__PURE__*/React.createElement("div", {
    style: landingStyles.ctaRow
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u25B8")
  }, "BOOT THE CORE"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "READ THE WHITEPAPER"), /*#__PURE__*/React.createElement("span", {
    style: landingStyles.ctaMeta
  }, "\xB7 no credit card \xB7 sector-A access"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BootTerminal, null))), /*#__PURE__*/React.createElement("section", {
    style: landingStyles.statStrip
  }, /*#__PURE__*/React.createElement(ChartCard, {
    label: "// CORE OUTPUT",
    value: "142.3",
    unit: "MW",
    delta: "+12.4%",
    deltaDirection: "up",
    series: [100, 110, 105, 120, 132, 128, 142],
    badge: /*#__PURE__*/React.createElement(StatusPill, {
      status: "online"
    }, "LIVE")
  }), /*#__PURE__*/React.createElement(ChartCard, {
    label: "// EDGE LATENCY",
    value: "08.4",
    unit: "ms",
    delta: "-1.2",
    deltaDirection: "down",
    series: [14, 12, 13, 11, 10, 9, 8.4]
  }), /*#__PURE__*/React.createElement(ChartCard, {
    label: "// NODES UP",
    value: "218",
    unit: "/ 224",
    delta: "97.3%",
    deltaDirection: "flat",
    series: [210, 215, 218, 219, 217, 220, 218]
  }), /*#__PURE__*/React.createElement(ChartCard, {
    label: "// INCIDENTS \xB7 24H",
    value: "03",
    delta: "-2 from yesterday",
    deltaDirection: "down",
    badge: /*#__PURE__*/React.createElement(Badge, {
      variant: "warn"
    }, "REVIEW")
  })), /*#__PURE__*/React.createElement("section", {
    style: landingStyles.features
  }, /*#__PURE__*/React.createElement("header", {
    style: landingStyles.featuresHead
  }, /*#__PURE__*/React.createElement("h2", {
    style: landingStyles.featuresTitle
  }, "// CAPABILITIES"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--text-tertiary)",
      letterSpacing: "var(--tracking-wide)"
    }
  }, "\u2500\u2500 04 of 12 surfaced")), /*#__PURE__*/React.createElement("div", {
    style: landingStyles.featGrid
  }, [{
    idx: "01",
    id: "CORE-9",
    title: "Reactor Compute",
    body: "Real-time core orchestration with sub-10ms control loops. Designed for the cold start."
  }, {
    idx: "02",
    id: "RELAY-X",
    title: "Sector Relay Mesh",
    body: "Self-healing relay topology across hostile networks. Ships routes when the wire dies."
  }, {
    idx: "03",
    id: "WATCH-7",
    title: "Anomaly Watch",
    body: "Continuous statistical monitoring. The amber pulse means look — the red pulse means act."
  }, {
    idx: "04",
    id: "VAULT-3",
    title: "Encrypted Telemetry",
    body: "Per-node E2EE telemetry stream with deterministic replay. Audit-grade by default."
  }, {
    idx: "05",
    id: "LOOM",
    title: "Ops Workflows",
    body: "Compose runbooks from declarative steps. Pause, branch, escalate. Humans optional."
  }, {
    idx: "06",
    id: "GRID-IO",
    title: "Data Plane API",
    body: "One mono protocol for ingest, query, and replay. Bring your CLI; we bring the surface."
  }].map(f => /*#__PURE__*/React.createElement("article", {
    key: f.idx,
    style: landingStyles.feat
  }, /*#__PURE__*/React.createElement("div", {
    style: landingStyles.featIdx
  }, /*#__PURE__*/React.createElement("span", null, "// ", f.idx, " \xB7 ", f.id), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-700)"
    }
  }, "[+]")), /*#__PURE__*/React.createElement("h3", {
    style: landingStyles.featTitle
  }, f.title), /*#__PURE__*/React.createElement("p", {
    style: landingStyles.featBody
  }, f.body))))), /*#__PURE__*/React.createElement("footer", {
    style: landingStyles.footer
  }, /*#__PURE__*/React.createElement("span", null, "// KUNLUN \xB7 \u6606\u4ED1 \xB7 DESIGN SYSTEM v0.1.0"), /*#__PURE__*/React.createElement("span", null, "// 37.5414\xB0 N \xB7 112.9180\xB0 E \xB7 SECTOR-A"), /*#__PURE__*/React.createElement("span", null, "// \xA9 2026 \xB7 NODE-07")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Landing, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Landing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/login/Login.jsx
try { (() => {
// KUNLUN — Login / Access screen

const KL = window.KUNLUNDesignSystem_29e6df;
const {
  Button,
  Input,
  Panel,
  StatusPill,
  ProgressBar,
  Loading
} = KL;
const loginStyles = {
  page: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background: "var(--bg-base)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
    position: "relative",
    overflow: "hidden"
  },
  bg: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(ellipse at center, rgba(0,184,255,0.12), transparent 60%)",
    pointerEvents: "none"
  },
  bgGrid: {
    position: "absolute",
    inset: 0,
    opacity: 0.4,
    backgroundImage: "var(--bg-grid)",
    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
    pointerEvents: "none"
  },
  scanlines: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "var(--bg-scanlines)"
  },
  shell: {
    position: "relative",
    zIndex: 1,
    width: "min(520px, 100%)",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    marginBottom: 4
  },
  brandMark: {
    width: 56,
    height: 56,
    background: "var(--cyan-500)",
    color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 28,
    boxShadow: "var(--glow-cyan-md)",
    marginBottom: 4
  },
  brandWord: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 32,
    letterSpacing: "var(--tracking-widest)",
    color: "var(--neutral-50)",
    textShadow: "var(--text-glow-cyan)"
  },
  brandCjk: {
    fontFamily: '"Noto Sans SC", sans-serif',
    fontSize: 13,
    color: "var(--cyan-300)",
    letterSpacing: "0.6em"
  },
  brandMeta: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)"
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    padding: "0 4px"
  },
  asciiTop: {
    fontFamily: "var(--font-mono)",
    color: "var(--cyan-700)",
    fontSize: 11,
    letterSpacing: 4,
    textAlign: "center",
    marginBottom: -8
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 4
  },
  caps: {
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-widest)",
    textTransform: "uppercase",
    marginTop: 16
  }
};
function Login() {
  const [stage, setStage] = React.useState("ready"); // ready | auth | failed | ok
  const [nodeId, setNodeId] = React.useState("07-A-7F");
  const [key, setKey] = React.useState("");
  const [error, setError] = React.useState("");
  const submit = e => {
    e?.preventDefault?.();
    if (!key) {
      setError("Access key required.");
      return;
    }
    setError("");
    setStage("auth");
    setTimeout(() => {
      if (key.toLowerCase() === "kunlun") setStage("ok");else {
        setStage("failed");
        setError("UNAUTHORIZED · CODE 0xE1");
      }
    }, 1400);
  };
  const reset = () => {
    setStage("ready");
    setKey("");
    setError("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: loginStyles.page
  }, /*#__PURE__*/React.createElement("div", {
    style: loginStyles.bg
  }), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.bgGrid
  }), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.scanlines
  }), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.shell
  }, /*#__PURE__*/React.createElement("div", {
    style: loginStyles.brand
  }, /*#__PURE__*/React.createElement("div", {
    style: loginStyles.brandMark
  }, "K"), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.brandWord
  }, "KUNLUN"), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.brandCjk
  }, "\u6606 \u4ED1"), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.brandMeta
  }, "// CORE-9 \xB7 OPERATIONS COMPUTE")), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.asciiTop
  }, "\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500 ACCESS CONTROL \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510"), /*#__PURE__*/React.createElement(Panel, {
    variant: stage === "failed" ? "danger" : "signal",
    title: stage === "ok" ? "ACCESS GRANTED" : "AUTHENTICATE",
    meta: stage === "ok" ? "WELCOME, OPERATOR" : "NODE-07 · SECTOR-A",
    actions: /*#__PURE__*/React.createElement(StatusPill, {
      status: stage === "ok" ? "online" : stage === "auth" ? "busy" : stage === "failed" ? "error" : "idle"
    }, stage === "ok" ? "ONLINE" : stage === "auth" ? "AUTHING" : stage === "failed" ? "DENIED" : "READY"),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, stage === "auth" ? "// HANDSHAKE IN PROGRESS" : stage === "ok" ? "// SESSION ESTABLISHED" : "// AWAITING INPUT"), /*#__PURE__*/React.createElement("span", null, new Date().toISOString().slice(0, 19).replace("T", " ")))
  }, stage === "ok" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 0",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-signal)",
      textShadow: "var(--text-glow-cyan)"
    }
  }, "> HANDSHAKE OK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      lineHeight: 1.6
    }
  }, "Operator ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-300)"
    }
  }, "OP-", nodeId), " authorized. Boot sequence complete. Redirecting to core dashboard."), /*#__PURE__*/React.createElement(ProgressBar, {
    variant: "success",
    label: "REDIRECT",
    value: 100
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: reset,
    variant: "ghost"
  }, "LOG OUT"), /*#__PURE__*/React.createElement(Button, {
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u25B8")
  }, "ENTER CORE"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "NODE ID",
    value: nodeId,
    onChange: e => setNodeId(e.target.value),
    prefix: "\u25A3",
    disabled: stage === "auth"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "ACCESS KEY",
    type: "password",
    value: key,
    onChange: e => setKey(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    error: stage === "failed" ? error : undefined,
    disabled: stage === "auth",
    suffix: /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: "pointer"
      }
    }, "\u25A2")
  }), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.caps
  }, "// HINT: try \"kunlun\""), stage === "auth" ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 0"
    }
  }, /*#__PURE__*/React.createElement(Loading, {
    label: "// ESTABLISHING UPLINK"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    indeterminate: true,
    label: "HANDSHAKE"
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    type: "button"
  }, "REQUEST KEY"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u25B8"),
    fullWidth: true
  }, "AUTHENTICATE")))), /*#__PURE__*/React.createElement("div", {
    style: loginStyles.footer
  }, /*#__PURE__*/React.createElement("span", null, "// AES-256 \xB7 TLS 1.3"), /*#__PURE__*/React.createElement("span", null, "// 37.5414\xB0 N \xB7 112.9180\xB0 E"), /*#__PURE__*/React.createElement("span", null, "// v0.1.0"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Login, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/login/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/terminal/TerminalApp.jsx
try { (() => {
// KUNLUN — Full-screen CLI workspace
const KL = window.KUNLUNDesignSystem_29e6df;
const {
  Terminal,
  Panel,
  Badge,
  StatusPill,
  IconButton,
  Tabs,
  ProgressBar,
  Tooltip
} = KL;
const termStyles = {
  page: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    gridTemplateRows: "auto 1fr auto",
    background: "var(--bg-void)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-mono)",
    overflow: "hidden"
  },
  side: {
    gridRow: "1 / -1",
    borderRight: "1px solid var(--border)",
    background: "var(--bg-base)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  sideHead: {
    padding: "14px 16px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    alignItems: "center",
    gap: 10
  },
  mark: {
    width: 26,
    height: 26,
    background: "var(--cyan-500)",
    color: "var(--bg-void)",
    clipPath: "var(--clip-chamfer-all-md)",
    display: "grid",
    placeItems: "center",
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 12,
    boxShadow: "var(--glow-cyan-sm)"
  },
  brand: {
    fontFamily: "var(--font-display)",
    fontWeight: 900,
    fontSize: 14,
    letterSpacing: "var(--tracking-widest)"
  },
  sideTitle: {
    fontSize: 9,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-widest)",
    padding: "14px 16px 6px",
    textTransform: "uppercase"
  },
  sess: {
    display: "flex",
    flexDirection: "column",
    padding: "6px 10px",
    margin: "1px 6px",
    cursor: "pointer",
    fontSize: 11,
    borderLeft: "2px solid transparent",
    clipPath: "var(--clip-chamfer-sm)",
    color: "var(--text-secondary)"
  },
  sessActive: {
    background: "var(--bg-elevated)",
    borderLeftColor: "var(--cyan-500)",
    color: "var(--text-signal)",
    textShadow: "var(--text-glow-cyan)"
  },
  sessTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2
  },
  sessMeta: {
    fontSize: 9,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wide)"
  },
  topbar: {
    padding: "10px 18px",
    borderBottom: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(13, 19, 32, 0.6)"
  },
  pathRow: {
    display: "flex",
    alignItems: "baseline",
    gap: 16,
    fontSize: 11,
    letterSpacing: "var(--tracking-wider)",
    color: "var(--text-tertiary)",
    textTransform: "uppercase"
  },
  workspace: {
    padding: 16,
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gap: 14,
    background: "var(--bg-base)",
    position: "relative"
  },
  scanlines: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background: "var(--bg-scanlines)",
    opacity: 0.5
  },
  bigTerm: {
    gridRow: "1 / -1",
    minHeight: 0
  },
  statusBar: {
    gridColumn: "2 / -1",
    borderTop: "1px solid var(--border)",
    padding: "6px 18px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 10,
    color: "var(--text-tertiary)",
    letterSpacing: "var(--tracking-wider)",
    textTransform: "uppercase",
    background: "var(--bg-void)"
  },
  statusGroup: {
    display: "flex",
    gap: 18,
    alignItems: "center"
  }
};
const SESSIONS = [{
  id: "main",
  title: "main",
  tty: "tty-07",
  node: "NODE-07",
  status: "online"
}, {
  id: "logs",
  title: "logs · live",
  tty: "tty-09",
  node: "CORE-9",
  status: "busy"
}, {
  id: "vault",
  title: "vault-3 audit",
  tty: "tty-vault",
  node: "VAULT-3",
  status: "online"
}, {
  id: "old",
  title: "sector-b dump",
  tty: "tty-bs",
  node: "SECTOR-B",
  status: "idle"
}];
function TerminalApp() {
  const [active, setActive] = React.useState("main");
  const [mainLines, setMainLines] = React.useState([{
    prompt: "$",
    text: "kunlun login --node=07",
    kind: "user"
  }, {
    text: "[ OK ] handshake established",
    kind: "success"
  }, {
    text: "welcome, OP-07. session token = 0xA7F3",
    kind: "muted"
  }, {
    prompt: "$",
    text: "kunlun status",
    kind: "user"
  }, {
    text: "NODE-07 · NOMINAL · uptime 12d 04h",
    kind: "muted"
  }, {
    text: "  output: 142.3 MW   latency: 8.4 ms",
    kind: "muted"
  }, {
    text: "  coolant flow: 87% (degraded)",
    kind: "warn"
  }, {
    prompt: "$",
    text: "",
    kind: "muted"
  }]);
  const onCmd = cmd => {
    const at = (text, kind) => ({
      text,
      kind
    });
    const responses = {
      help: [at("kunlun commands:", "muted"), at("  status              — print node status", "muted"), at("  nodes               — list all nodes", "muted"), at("  purge <line>        — soft purge a feed line", "muted"), at("  log <node>          — tail node log", "muted"), at("  clear               — clear screen", "muted")],
      status: [at("NODE-07 · NOMINAL · uptime 12d 04h", "muted"), at("  output: 142.3 MW   latency: 8.4 ms", "muted"), at("  coolant flow: 87% (degraded)", "warn")],
      nodes: [at("NODE-07  online  SECTOR-A  142.3 MW", "success"), at("NODE-08  online  SECTOR-A  128.1 MW", "success"), at("NODE-12  ERROR   SECTOR-B  uplink lost", "error"), at("NODE-22  idle    SECTOR-C  —", "muted")],
      "purge c2": [at("[ .. ] initiating soft purge on feed-line C2", "muted"), at("[ OK ] backflush at 60% pressure", "success"), at("[ OK ] flow restored to 920 lpm", "success")],
      clear: "CLEAR"
    };
    const next = [{
      prompt: "$",
      text: cmd,
      kind: "user"
    }];
    const r = responses[cmd.trim().toLowerCase()];
    if (r === "CLEAR") {
      setMainLines([{
        prompt: "$",
        text: "",
        kind: "muted"
      }]);
      return;
    }
    if (r) next.push(...r);else next.push(at(`kunlun: ${cmd}: command not found`, "error"));
    setMainLines(l => [...l, ...next]);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: termStyles.page
  }, /*#__PURE__*/React.createElement("aside", {
    style: termStyles.side
  }, /*#__PURE__*/React.createElement("div", {
    style: termStyles.sideHead
  }, /*#__PURE__*/React.createElement("div", {
    style: termStyles.mark
  }, "K"), /*#__PURE__*/React.createElement("span", {
    style: termStyles.brand
  }, "KUNLUN \xB7 CLI")), /*#__PURE__*/React.createElement("div", {
    style: termStyles.sideTitle
  }, "// SESSIONS"), SESSIONS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    onClick: () => setActive(s.id),
    style: {
      ...termStyles.sess,
      ...(active === s.id ? termStyles.sessActive : {})
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: termStyles.sessTitle
  }, /*#__PURE__*/React.createElement("span", null, "\u25B8 ", s.title), /*#__PURE__*/React.createElement(StatusPill, {
    status: s.status,
    style: {
      padding: "1px 6px",
      fontSize: 8
    }
  }, "\u2022")), /*#__PURE__*/React.createElement("span", {
    style: termStyles.sessMeta
  }, s.tty, " \xB7 ", s.node))), /*#__PURE__*/React.createElement("div", {
    style: termStyles.sideTitle
  }, "// SHORTCUTS"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...termStyles.sess,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2318 K  \u2014 palette")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...termStyles.sess,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2318 T  \u2014 new tab")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...termStyles.sess,
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2318 /  \u2014 search history")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 14px",
      borderTop: "1px solid var(--border)",
      fontSize: 9,
      color: "var(--text-tertiary)"
    }
  }, "// KUNLUN \xB7 \u6606\u4ED1 \xB7 v0.1.0")), /*#__PURE__*/React.createElement("header", {
    style: termStyles.topbar
  }, /*#__PURE__*/React.createElement("div", {
    style: termStyles.pathRow
  }, /*#__PURE__*/React.createElement("span", null, "// CORE-9"), /*#__PURE__*/React.createElement("span", null, "\u203A"), /*#__PURE__*/React.createElement("span", null, "SECTOR-A"), /*#__PURE__*/React.createElement("span", null, "\u203A"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-signal)",
      textShadow: "var(--text-glow-cyan)"
    }
  }, "NODE-07"), /*#__PURE__*/React.createElement(Badge, {
    variant: "signal",
    solid: true
  }, "tty-07")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "SPLIT PANE"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Split",
    size: "sm",
    variant: "ghost"
  }, "\u2AFC")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "FULLSCREEN"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Fullscreen",
    size: "sm",
    variant: "ghost"
  }, "\u26F6")), /*#__PURE__*/React.createElement(Tooltip, {
    label: "SETTINGS"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Settings",
    size: "sm",
    variant: "ghost"
  }, "\u2699")))), /*#__PURE__*/React.createElement("main", {
    style: termStyles.workspace
  }, /*#__PURE__*/React.createElement("div", {
    style: termStyles.scanlines
  }), /*#__PURE__*/React.createElement("div", {
    style: termStyles.bigTerm
  }, /*#__PURE__*/React.createElement(Terminal, {
    title: "tty-07 \xB7 OP-07@NODE-07",
    prompt: "OP-07 ~ $",
    lines: mainLines,
    onCommand: onCmd
  })), /*#__PURE__*/React.createElement(Terminal, {
    title: "tty-09 \xB7 core-9 logs",
    showInput: false,
    height: "100%",
    lines: [{
      text: "[21:04:55] CORE-9: tick · 142.3 MW",
      kind: "muted"
    }, {
      text: "[21:04:54] NODE-08: relay ok",
      kind: "success"
    }, {
      text: "[21:04:54] NODE-13: lat 18.2ms ⚠",
      kind: "warn"
    }, {
      text: "[21:04:53] NODE-11: relay ok",
      kind: "success"
    }, {
      text: "[21:04:52] NODE-08: replay window ack",
      kind: "muted"
    }, {
      text: "[21:04:51] NODE-09: state=BUSY (sync)",
      kind: "warn"
    }, {
      text: "[21:04:50] NODE-12: ⨯ uplink timeout 0xE7",
      kind: "error"
    }, {
      text: "[21:04:49] CORE-9: tick · 142.1 MW",
      kind: "muted"
    }, {
      text: "[21:04:48] NODE-21: relay ok",
      kind: "success"
    }, {
      text: "[21:04:46] CORE-9: tick · 141.8 MW",
      kind: "muted"
    }]
  }), /*#__PURE__*/React.createElement(Panel, {
    title: "SYSTEM",
    meta: "CORE-9",
    flush: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    label: "CORE OUTPUT",
    value: 88.3
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "COOLANT FLOW",
    value: 87.0,
    variant: "warn"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "HEAT",
    value: 92.0,
    variant: "danger"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "UPLINK",
    value: 62.0
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    label: "SYNC",
    indeterminate: true
  })))), /*#__PURE__*/React.createElement("footer", {
    style: termStyles.statusBar
  }, /*#__PURE__*/React.createElement("div", {
    style: termStyles.statusGroup
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--cyan-300)",
      textShadow: "var(--text-glow-cyan)"
    }
  }, "\u25CF tty-07"), /*#__PURE__*/React.createElement("span", null, "OP-07 @ NODE-07"), /*#__PURE__*/React.createElement("span", null, "SECTOR-A \xB7 CORE-9")), /*#__PURE__*/React.createElement("div", {
    style: termStyles.statusGroup
  }, /*#__PURE__*/React.createElement("span", null, "UTF-8"), /*#__PURE__*/React.createElement("span", null, "BASH 5.2"), /*#__PURE__*/React.createElement("span", null, "UPLINK 8.4ms"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--green-500)"
    }
  }, "\u25CF NOMINAL"), /*#__PURE__*/React.createElement("span", null, "21:04:55"))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(TerminalApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/terminal/TerminalApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Loading = __ds_scope.Loading;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.Terminal = __ds_scope.Terminal;

__ds_ns.ChartCard = __ds_scope.ChartCard;

__ds_ns.DataTable = __ds_scope.DataTable;

})();
