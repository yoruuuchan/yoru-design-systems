# RIFT 2.0 — Design System

裂隙 · a blue-spectrum cyber-glitch design system for dark **and** light digital interfaces.

This folder is the **optimization** of the original RIFT system. Three things changed:

1. **Semantic theme layer.** Raw palette (`--royal`, `--ice`, …) is unchanged. On top of it sits a semantic layer (`--bg-*`, `--ink-*`, `--glass-*`, `--line-*`, `--shadow-*`) that flips with one attribute. **Light mode is purely a token override — no component code changes.**
2. **Always-on chromatic signature.** The cyan↔magenta channel split was a rare flicker (fired <15% of a long loop). It's now a constant duotone edge with a real intensity dial.
3. **Controllable glitch + accent channels** via `data-glitch` and `data-accent`.

## Use it

```html
<link rel="stylesheet" href="rift.css">

<body data-theme="dark">          <!-- "dark" | "light" -->
  <!-- optional, scope anywhere -->
  <main data-glitch="signature" data-accent="electric">

    <h1 class="rift-glitch" data-text="RIFT" style="font-family:var(--font-wordmark)">RIFT</h1>

    <button class="rift-btn rift-btn--primary">ENTER CONSOLE</button>
    <span class="rift-badge rift-badge--ok">CONNECTED</span>
    <input class="rift-input" placeholder="enter query 検索…">
    <div class="rift-card">…</div>
    <div class="rift-glass-2">…</div>
  </main>
</body>
```

### Theme — `data-theme`
`dark` (default) · `light`. Toggle on `<html>`, `<body>`, or any wrapper. Everything below re-themes via inherited custom properties.

### Glitch — `data-glitch`
`off` · `subtle` · `signature` · `heavy`. Affects every `.rift-glitch` descendant.

### Accent — `data-accent`
`electric` (cyan/magenta) · `royal` (blue) · `aqua` (teal). Re-channels the chromatic colors.

## Tokens (reference)
- **Palette:** `--midnight --slate --steel --royal --cobalt --sky --ice --aqua --aurora`
- **Surfaces:** `--bg-sunken --bg-base --bg-surface --bg-elevated`
- **Ink:** `--ink-1 … --ink-4`
- **Glass:** `--glass-1-bg --glass-2-bg --glass-3-bg --glass-border --glass-inner-hi`
- **Lines:** `--line-1 --line-2 --line-strong`
- **Status:** `--ok --warn --bad`
- **Space:** `--sp-1 … --sp-20` (4px grid) · **Radius:** `--r-xs … --r-2xl --r-pill`
- **Shadow:** `--shadow-sm … --shadow-xl --shadow-glow`
- **Motion:** `--ease-out --ease-rise` · `--dur-fast/base/slow`
- **Type:** `--font-wordmark` (Chakra Petch, for big glitch wordmarks) · `--font-display/italic/ui/mono/jp/jp-ui` · `--text-xs … --text-5xl`

## Utility classes
`.rift-glass-1/2/3` · `.rift-card` · `.rift-btn` (+ `--primary --ghost --danger --sm --lg`) · `.rift-input` · `.rift-badge` (+ `--ok --warn --bad`) · `.rift-glitch` · `.rift-dot` (+ `--ok --warn --bad`)

## Cursor & click FX (optional)
A pointer-follower glow + chromatic click ripple. The CSS ships in `rift.css`; add this once:

```js
(function () {
  var dot = document.createElement('div'); dot.id = 'rift-cursor';
  document.body.appendChild(dot);
  var mx = innerWidth/2, my = innerHeight/2, cx = mx, cy = my;
  addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; dot.style.opacity = '1'; });
  addEventListener('mouseout', function () { dot.style.opacity = '0'; });
  addEventListener('pointerdown', function (e) {
    var r = document.createElement('div'); r.className = 'rift-ripple';
    r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px';
    document.body.appendChild(r); setTimeout(function () { r.remove(); }, 640);
  });
  (function loop() {
    cx += (mx - cx) * 0.30; cy += (my - cy) * 0.30;
    dot.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
    requestAnimationFrame(loop);
  })();
})();
```

Add a soft breathing glow to any accent element with `class="rift-glow"`.

## Reference
Open **`showcase.html`** (in this folder) in any browser — the complete visual reference: all foundations, effects, and components, with live theme / glitch / accent controls and cursor FX. It is fully self-contained and works offline (fonts embedded), so it is a large file.
