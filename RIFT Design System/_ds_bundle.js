/* @ds-bundle: {"format":3,"namespace":"RIFTDesignSystem_b2dbfe","components":[{"name":"Glitch","sourcePath":"components/brand/Glitch.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dot","sourcePath":"components/feedback/Dot.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surface/Card.jsx"},{"name":"Glass","sourcePath":"components/surface/Glass.jsx"}],"sourceHashes":{"assets/cursor-fx.js":"c880fd72f052","assets/theme-toggle.js":"51f5f1668dab","components/brand/Glitch.jsx":"6174f5a74aec","components/brand/Wordmark.jsx":"7d0889a52837","components/feedback/Badge.jsx":"796b21e995c4","components/feedback/Dot.jsx":"0c5e7237d6d9","components/forms/Button.jsx":"6af8cf68fd49","components/forms/Input.jsx":"7577da4f3cde","components/surface/Card.jsx":"d12c548c1bbd","components/surface/Glass.jsx":"15547d4c6630"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RIFTDesignSystem_b2dbfe = window.RIFTDesignSystem_b2dbfe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/cursor-fx.js
try { (() => {
/* RIFT cursor + click ripple. Drop once near the end of <body>:
     <script src="path/to/cursor-fx.js"></script>
   Pairs with #rift-cursor / .rift-ripple styles in effects.css. */
(function () {
  if (typeof document === "undefined") return;
  if (document.getElementById("rift-cursor")) return;
  var dot = document.createElement("div");
  dot.id = "rift-cursor";
  document.body.appendChild(dot);
  var mx = innerWidth / 2,
    my = innerHeight / 2,
    cx = mx,
    cy = my;
  addEventListener("mousemove", function (e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.opacity = "1";
  });
  addEventListener("mouseout", function () {
    dot.style.opacity = "0";
  });
  addEventListener("pointerdown", function (e) {
    var r = document.createElement("div");
    r.className = "rift-ripple";
    r.style.left = e.clientX + "px";
    r.style.top = e.clientY + "px";
    document.body.appendChild(r);
    setTimeout(function () {
      r.remove();
    }, 640);
  });
  (function loop() {
    cx += (mx - cx) * 0.30;
    cy += (my - cy) * 0.30;
    dot.style.transform = "translate(" + cx + "px," + cy + "px)";
    requestAnimationFrame(loop);
  })();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/cursor-fx.js", error: String((e && e.message) || e) }); }

// assets/theme-toggle.js
try { (() => {
/* RIFT theme toggle — drop once per card / page.
   Adds a small fixed chip top-right that flips <html data-theme>.
   Choice persists across reloads via localStorage. */
(function () {
  if (typeof document === "undefined") return;
  if (document.getElementById("rift-theme-toggle")) return;

  // Apply persisted preference immediately, before paint.
  try {
    var saved = localStorage.getItem("rift-theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }
  } catch (e) {}
  function mount() {
    if (document.getElementById("rift-theme-toggle")) return;
    var btn = document.createElement("button");
    btn.id = "rift-theme-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle theme");
    btn.style.cssText = ["position:fixed", "top:10px", "right:10px", "z-index:9999", "height:26px", "padding:0 12px", "display:inline-flex", "align-items:center", "gap:6px", "font-family:var(--font-mono, ui-monospace, monospace)", "font-size:10px", "letter-spacing:0.14em", "text-transform:uppercase", "color:var(--ink-2, #A7B4D2)", "background:var(--glass-2-bg, rgba(30,50,90,0.32))", "border:1px solid var(--line-2, rgba(184,220,255,0.15))", "border-radius:var(--r-pill, 999px)", "cursor:pointer", "-webkit-backdrop-filter:blur(10px) saturate(170%)", "backdrop-filter:blur(10px) saturate(170%)", "box-shadow:inset 0 1px 0 var(--glass-inner-hi, rgba(255,255,255,0.10))", "transition:color 200ms, border-color 200ms"].join(";");
    function render() {
      var cur = document.documentElement.dataset.theme || "dark";
      btn.textContent = cur === "dark" ? "◐  dark" : "◑  light";
    }
    btn.addEventListener("mouseenter", function () {
      btn.style.color = "var(--ink-1)";
      btn.style.borderColor = "var(--line-strong)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.color = "var(--ink-2)";
      btn.style.borderColor = "var(--line-2)";
    });
    btn.addEventListener("click", function () {
      var cur = document.documentElement.dataset.theme || "dark";
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("rift-theme", next);
      } catch (e) {}
      render();
    });
    render();
    document.body.appendChild(btn);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/theme-toggle.js", error: String((e && e.message) || e) }); }

// components/brand/Glitch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — chromatic-split glitch text. Wrap the same text twice
 * (data-text + children) to feed the ::before / ::after channels.
 * Intensity is controlled by `data-glitch` on any ancestor.
 */
function Glitch({
  text,
  as: Tag = "span",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["rift-glitch", className].filter(Boolean).join(" "),
    "data-text": text,
    style: style
  }, rest), text);
}
Object.assign(__ds_scope, { Glitch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Glitch.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT wordmark — combines the Chakra Petch wordmark font with the
 * chromatic glitch effect. Pure preset of <Glitch>.
 */
function Wordmark({
  text = "RIFT",
  size = "var(--text-4xl)",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["rift-glitch", className].filter(Boolean).join(" "),
    "data-text": text,
    style: {
      fontFamily: "var(--font-wordmark)",
      fontWeight: 700,
      letterSpacing: "0.04em",
      fontSize: size,
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — status badge with built-in dot. Variants: ok / warn / bad
 * (any other value renders the neutral ice-cyan default).
 */
function Badge({
  variant,
  className = "",
  children,
  ...rest
}) {
  const classes = ["rift-badge", variant === "ok" && "rift-badge--ok", variant === "warn" && "rift-badge--warn", variant === "bad" && "rift-badge--bad", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — small status indicator (the dot alone, without the badge body).
 */
function Dot({
  variant = "ok",
  className = "",
  ...rest
}) {
  const cls = ["rift-dot", variant === "ok" && "rift-dot--ok", variant === "warn" && "rift-dot--warn", variant === "bad" && "rift-dot--bad", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Dot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — primary action button.
 * Glass-backed pill with optional gradient (primary), ghost or danger.
 */
function Button({
  variant = "default",
  size = "md",
  block = false,
  glow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = ["rift-btn", variant === "primary" && "rift-btn--primary", variant === "ghost" && "rift-btn--ghost", variant === "danger" && "rift-btn--danger", size === "sm" && "rift-btn--sm", size === "lg" && "rift-btn--lg", block && "rift-btn--block", glow && "rift-glow", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — text input. Glass-backed with royal focus ring.
 * Use the wrapper `<Input.Label>` if a label is needed.
 */
function Input({
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ["rift-input", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surface/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — glass-surfaced card with hover lift.
 */
function Card({
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["rift-card", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Card.jsx", error: String((e && e.message) || e) }); }

// components/surface/Glass.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * RIFT — translucent panel. Three blur/opacity elevations.
 *   1 = subtle (default)   2 = mid (hero panels)   3 = strong (modals)
 */
function Glass({
  elevation = 1,
  className = "",
  children,
  ...rest
}) {
  const cls = `rift-glass-${elevation}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: [cls, className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Glass });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/Glass.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Glitch = __ds_scope.Glitch;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dot = __ds_scope.Dot;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Glass = __ds_scope.Glass;

})();
