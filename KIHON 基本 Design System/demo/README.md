# KIHON Demo — Remotion Production Implementation

A runnable Remotion project demonstrating all five motion roles (text, panel, solid, rule, numeral/counter) and the locked timing constants from the KIHON design system.

## Compositions

| ID | Format | Theme | Resolution |
|----|--------|-------|------------|
| `KihonDemo` | 16:9 landscape | gin (silver) | 1920 x 1080 |
| `KihonDemoPortrait` | 9:16 portrait | kuro (black) | 1080 x 1920 |

Both compositions contain five acts: Title, Data (bar chart), Counter (arc ring), Compare (before/after), and End card. The portrait version is a native relayout — not a reflow of the landscape — following the `ui_kits/portrait/` references.

## Setup

```bash
npm install --registry=https://registry.npmmirror.com   # domestic mirror, optional
```

## Preview

```bash
npx remotion studio src/index.ts
```

## Render

```bash
npx remotion render src/index.ts KihonDemo out/kihon-demo.mp4
npx remotion render src/index.ts KihonDemoPortrait out/kihon-demo-portrait.mp4
```

On networks where Remotion cannot download Chrome Headless Shell (e.g. mainland China), pass the local Chrome path:

```bash
npx remotion render src/index.ts KihonDemo out/kihon-demo.mp4 \
  --browser-executable="C:\Program Files\Google\Chrome\Application\chrome.exe"
```

## What it demonstrates

This is the production counterpart to the CSS preview in `ui_kits/`. Where the preview uses CSS animations and `ResizeObserver`, the demo uses `spring()`, `interpolate()`, and `useCurrentFrame()` — the same locked constants, the same three curves, deterministic frame-by-frame output. It serves as the living example for the "Preview implementation vs. Remotion production" distinction noted in the system README.
