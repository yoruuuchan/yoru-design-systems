// Full KIHON CSS tokens synced from upstream D:\DESIGN\KIHON 基本 Design System\tokens\*.css.
// Font-face declarations use staticFile() so they resolve correctly in Remotion.
// Local --tick-h/--tick-pitch patch REMOVED — upstream now defines them officially.

import { staticFile } from "remotion";

export function getKihonCSS(): string {
  return `
@font-face { font-family: 'Source Han Sans SC'; src: url('${staticFile("fonts/SourceHanSansSC-Light.woff2")}') format('woff2'); font-weight: 300; font-style: normal; }
@font-face { font-family: 'Source Han Sans SC'; src: url('${staticFile("fonts/SourceHanSansSC-Regular.woff2")}') format('woff2'); font-weight: 400; font-style: normal; }
@font-face { font-family: 'Source Han Sans SC'; src: url('${staticFile("fonts/SourceHanSansSC-Medium.woff2")}') format('woff2'); font-weight: 500; font-style: normal; }
@font-face { font-family: 'Source Han Sans SC'; src: url('${staticFile("fonts/SourceHanSansSC-Bold.woff2")}') format('woff2'); font-weight: 700; font-style: normal; }

:root {
  /* ===== colors.css — gin (silver anodized, DEFAULT) ===== */
  --bg: #E7E9EB;
  --surface-well: #DDE0E3; --surface-plate: #EDEFF1; --surface-card: #F4F5F6; --surface-control: #FAFBFB;
  --ink: #16191C; --ink-muted: #5A636B; --ink-faint: #8D969D;
  --line: #C8CDD1; --line-strong: #16191C;
  --edge-light: rgba(255,255,255,.95); --edge-light-2: rgba(255,255,255,.42);
  --edge-dark: rgba(22,25,28,.22); --edge-dark-2: rgba(22,25,28,.07);
  --accent: #2B4C6F; --accent-ink: #EDF1F5; --accent-soft: #DCE3EB;
  --positive: #2B4C6F; --negative: #A6402F;
  --ramp-1: #C3CACE; --ramp-2: #8E979E; --ramp-3: #4E585F; --ramp-4: #16191C;
  --grain-invert: none; --grain-opacity: .05;
  --grad-plate: linear-gradient(180deg, #F0F2F3 0%, #EDEFF1 100%);
  --grad-card: linear-gradient(180deg, #F6F7F8 0%, #F3F4F5 100%);
  --grad-control: linear-gradient(180deg, #FCFDFD 0%, #F8F9FA 100%);
  --grad-well: linear-gradient(180deg, #DADDE0 0%, #DFE2E5 100%);
  --text-body: var(--ink); --text-secondary: var(--ink-muted); --text-tertiary: var(--ink-faint);
  --surface-page: var(--bg);

  /* ===== typography.css ===== */
  --font-core: 'Instrument Sans', 'Source Han Sans SC', 'Noto Sans SC', sans-serif;
  --font-mono: 'B612 Mono', 'Source Han Sans SC', ui-monospace, monospace;
  --u: 1;
  --type-display: 128px; --lead-display: 1.02; --track-display: -0.02em; --weight-display: 700;
  --type-display-portrait: 108px;
  --type-title: 88px; --lead-title: 1.12; --track-title: -0.015em; --weight-title: 700;
  --type-subtitle: 54px; --lead-subtitle: 1.3; --track-subtitle: 0em; --weight-subtitle: 300;
  --type-body: 44px; --lead-body: 1.45; --track-body: 0em; --weight-body: 400;
  --type-label: 30px; --lead-label: 1.2; --track-label: 0.14em; --weight-label: 500;
  --type-caption: 34px; --lead-caption: 1.35; --track-caption: 0em; --weight-caption: 400;
  --type-data-value: 132px; --lead-data-value: 1.0; --track-data-value: -0.01em; --weight-data-value: 400;
  --type-data-label: 34px; --lead-data-label: 1.2; --track-data-label: 0em; --weight-data-label: 500;
  --type-data-tick: 32px; --lead-data-tick: 1.2; --track-data-tick: 0.02em; --weight-data-tick: 400;

  /* ===== surfaces.css ===== */
  --radius-card: 10px; --radius-chip: 6px; --radius-control: 8px; --radius-pill: 999px;
  --shadow-plate: 0 1px 1px rgba(22,25,28,.08), 0 2px 4px rgba(22,25,28,.06), 0 8px 20px rgba(22,25,28,.06);
  --shadow-card: 0 1px 1px rgba(22,25,28,.10), 0 3px 6px rgba(22,25,28,.09), 0 14px 34px rgba(22,25,28,.10);
  --shadow-control: 0 1px 0 rgba(22,25,28,.14), 0 2px 3px rgba(22,25,28,.10), 0 4px 8px rgba(22,25,28,.07);
  --edge-raised: inset 0 1px 0 var(--edge-light), inset 0 2px 0 var(--edge-light-2), inset 0 -1px 0 var(--edge-dark), inset 0 -2px 0 var(--edge-dark-2);
  --edge-pressed: inset 0 2px 4px rgba(10,12,14,.20), inset 0 1px 1px rgba(10,12,14,.16), inset 0 -1px 0 var(--edge-light-2);
  --shadow-well: inset 0 3px 6px rgba(10,12,14,.22), inset 0 1px 2px rgba(10,12,14,.18), inset 0 -1px 0 var(--edge-light), inset 0 -2px 0 var(--edge-light-2);
  --engrave: 0 1px 0 rgba(255,255,255,.85);
  --engrave-deep: 0 1px 0 rgba(255,255,255,.95), 0 -1px 0 rgba(22,25,28,.10);
  --falloff: radial-gradient(125% 105% at 50% 30%, transparent 42%, rgba(10,12,14,.065) 100%);
  --tick-pitch: 5px; --tick-h: 5px;
  --bar-cap-up-1: inset 0 2px 0 rgba(255,255,255,.62), inset 0 3px 0 rgba(10,12,14,.20), inset 1px 0 0 rgba(255,255,255,.30), inset -1px 0 0 rgba(10,12,14,.13);
  --bar-cap-up-2: inset 0 2px 0 rgba(255,255,255,.46), inset 0 3px 0 rgba(10,12,14,.16), inset 1px 0 0 rgba(255,255,255,.20), inset -1px 0 0 rgba(10,12,14,.15);
  --bar-cap-up-3: inset 0 2px 0 rgba(255,255,255,.34), inset 0 3px 0 rgba(10,12,14,.10), inset 1px 0 0 rgba(255,255,255,.14), inset -1px 0 0 rgba(10,12,14,.17);
  --bar-cap-up-4: inset 0 2px 0 rgba(255,255,255,.30), inset 0 3px 0 rgba(10,12,14,.00), inset 1px 0 0 rgba(255,255,255,.12), inset -1px 0 0 rgba(10,12,14,.18);
  --bar-cap-right-1: inset -2px 0 0 rgba(255,255,255,.62), inset -3px 0 0 rgba(10,12,14,.20), inset 0 1px 0 rgba(255,255,255,.30), inset 0 -1px 0 rgba(10,12,14,.13);
  --bar-cap-right-2: inset -2px 0 0 rgba(255,255,255,.46), inset -3px 0 0 rgba(10,12,14,.16), inset 0 1px 0 rgba(255,255,255,.20), inset 0 -1px 0 rgba(10,12,14,.15);
  --bar-cap-right-3: inset -2px 0 0 rgba(255,255,255,.34), inset -3px 0 0 rgba(10,12,14,.10), inset 0 1px 0 rgba(255,255,255,.14), inset 0 -1px 0 rgba(10,12,14,.17);
  --bar-cap-right-4: inset -2px 0 0 rgba(255,255,255,.30), inset -3px 0 0 rgba(10,12,14,.00), inset 0 1px 0 rgba(255,255,255,.12), inset 0 -1px 0 rgba(10,12,14,.18);
  --knurl: repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 5px);
  --knurl-h: 10px;

  /* ===== spacing.css ===== */
  --sp-1:4px;--sp-2:8px;--sp-3:12px;--sp-4:16px;--sp-5:24px;--sp-6:32px;--sp-7:48px;--sp-8:64px;--sp-9:96px;--sp-10:128px;
  --panel-pad: 34px; --panel-gap: 40px; --row-gap: 14px; --content-max: 1440px;
}

/* ===== [data-k-theme="kuro"] — black anodized (dark) ===== */
[data-k-theme="kuro"] {
  --bg: #111417;
  --surface-well: #0B0E10; --surface-plate: #171B1E; --surface-card: #1D2226; --surface-control: #262C30;
  --ink: #E8EBED; --ink-muted: #9AA4AB; --ink-faint: #5F6970;
  --line: #2C3339; --line-strong: #E8EBED;
  --edge-light: rgba(255,255,255,.14); --edge-light-2: rgba(255,255,255,.05);
  --edge-dark: rgba(0,0,0,.62); --edge-dark-2: rgba(0,0,0,.28);
  --accent: #7BA3CC; --accent-ink: #0B1119; --accent-soft: #1B2A3A;
  --positive: #7BA3CC; --negative: #C4674F;
  --ramp-1: #394147; --ramp-2: #6A747B; --ramp-3: #B7C0C5; --ramp-4: #E8EBED;
  --text-body: var(--ink); --text-secondary: var(--ink-muted); --text-tertiary: var(--ink-faint); --surface-page: var(--bg);
  --grain-invert: invert(1); --grain-opacity: .07;
  --grad-plate: linear-gradient(180deg, #191D21 0%, #16191D 100%);
  --grad-card: linear-gradient(180deg, #20252A 0%, #1C2125 100%);
  --grad-control: linear-gradient(180deg, #2A3035 0%, #252A2F 100%);
  --grad-well: linear-gradient(180deg, #090B0D 0%, #0D1013 100%);
  --shadow-plate: 0 1px 1px rgba(0,0,0,.4), 0 2px 5px rgba(0,0,0,.32), 0 8px 22px rgba(0,0,0,.3);
  --shadow-card: 0 1px 1px rgba(0,0,0,.45), 0 3px 8px rgba(0,0,0,.4), 0 14px 36px rgba(0,0,0,.38);
  --edge-raised: inset 0 1px 0 var(--edge-light), inset 0 2px 0 var(--edge-light-2), inset 0 -1px 0 var(--edge-dark), inset 0 -2px 0 var(--edge-dark-2);
  --bar-cap-up-1: inset 0 2px 0 rgba(255,255,255,.20), inset 0 3px 0 rgba(0,0,0,.34), inset 1px 0 0 rgba(255,255,255,.09), inset -1px 0 0 rgba(0,0,0,.3);
  --bar-cap-up-2: inset 0 2px 0 rgba(255,255,255,.26), inset 0 3px 0 rgba(0,0,0,.26), inset 1px 0 0 rgba(255,255,255,.10), inset -1px 0 0 rgba(0,0,0,.3);
  --bar-cap-up-3: inset 0 2px 0 rgba(255,255,255,.36), inset 0 3px 0 rgba(0,0,0,.16), inset 1px 0 0 rgba(255,255,255,.14), inset -1px 0 0 rgba(0,0,0,.26);
  --bar-cap-up-4: inset 0 2px 0 rgba(255,255,255,.48), inset 0 3px 0 rgba(0,0,0,.10), inset 1px 0 0 rgba(255,255,255,.20), inset -1px 0 0 rgba(0,0,0,.22);
  --bar-cap-right-1: inset -2px 0 0 rgba(255,255,255,.20), inset -3px 0 0 rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.09), inset 0 -1px 0 rgba(0,0,0,.3);
  --bar-cap-right-2: inset -2px 0 0 rgba(255,255,255,.26), inset -3px 0 0 rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.10), inset 0 -1px 0 rgba(0,0,0,.3);
  --bar-cap-right-3: inset -2px 0 0 rgba(255,255,255,.36), inset -3px 0 0 rgba(0,0,0,.16), inset 0 1px 0 rgba(255,255,255,.14), inset 0 -1px 0 rgba(0,0,0,.26);
  --bar-cap-right-4: inset -2px 0 0 rgba(255,255,255,.48), inset -3px 0 0 rgba(0,0,0,.10), inset 0 1px 0 rgba(255,255,255,.20), inset 0 -1px 0 rgba(0,0,0,.22);
  --engrave: 0 1px 0 rgba(0,0,0,.62);
  --engrave-deep: 0 1px 0 rgba(0,0,0,.7), 0 -1px 0 rgba(255,255,255,.06);
  --falloff: radial-gradient(125% 105% at 50% 30%, transparent 38%, rgba(0,0,0,.36) 100%);
}

/* ===== Typography role classes (use calc(token * --u)) ===== */
.k-display  { font-family: var(--font-core); font-size: calc(var(--type-display) * var(--u)); line-height: var(--lead-display); letter-spacing: var(--track-display); font-weight: var(--weight-display); margin: 0; color: var(--ink); text-wrap: balance; }
.k-title    { font-family: var(--font-core); font-size: calc(var(--type-title) * var(--u));   line-height: var(--lead-title);   letter-spacing: var(--track-title);   font-weight: var(--weight-title);   margin: 0; color: var(--ink); text-wrap: balance; }
.k-subtitle { font-family: var(--font-core); font-size: calc(var(--type-subtitle) * var(--u)); line-height: var(--lead-subtitle); letter-spacing: var(--track-subtitle); font-weight: var(--weight-subtitle); margin: 0; color: var(--ink); }
.k-body     { font-family: var(--font-core); font-size: calc(var(--type-body) * var(--u));     line-height: var(--lead-body);     letter-spacing: var(--track-body);     font-weight: var(--weight-body);     margin: 0; color: var(--ink); }
.k-label    { font-family: var(--font-core); font-size: calc(var(--type-label) * var(--u));    line-height: var(--lead-label);    letter-spacing: var(--track-label);    font-weight: var(--weight-label);    text-transform: uppercase; margin: 0; color: var(--ink-muted); text-shadow: var(--engrave); }
.k-caption  { font-family: var(--font-core); font-size: calc(var(--type-caption) * var(--u));  line-height: var(--lead-caption);  letter-spacing: var(--track-caption);  font-weight: var(--weight-caption);  margin: 0; color: var(--ink-muted); }
.k-data-value { font-family: var(--font-mono); font-size: calc(var(--type-data-value) * var(--u)); line-height: var(--lead-data-value); letter-spacing: var(--track-data-value); font-weight: var(--weight-data-value); margin: 0; color: var(--ink); font-variant-numeric: tabular-nums; }
.k-data-label { font-family: var(--font-core); font-size: calc(var(--type-data-label) * var(--u)); line-height: var(--lead-data-label); letter-spacing: var(--track-data-label); font-weight: var(--weight-data-label); margin: 0; color: var(--ink); }
.k-data-tick  { font-family: var(--font-mono); font-size: calc(var(--type-data-tick) * var(--u));  line-height: var(--lead-data-tick);  letter-spacing: var(--track-data-tick);  font-weight: var(--weight-data-tick);  margin: 0; color: var(--ink-muted); font-variant-numeric: tabular-nums; text-shadow: var(--engrave); white-space: nowrap; }
.k-micro { font-family: var(--font-mono); font-size: calc(20px * var(--u,1)); line-height: 1; letter-spacing: .08em; color: var(--ink-faint); text-shadow: var(--engrave); white-space: nowrap; font-variant-numeric: tabular-nums; }

/* ===== Surface level classes ===== */
.k-plate { background: var(--grad-plate); border: 1px solid var(--line); border-radius: var(--radius-card); box-shadow: var(--edge-raised), var(--shadow-plate); }
.k-card  { background: var(--grad-card);  border: 1px solid var(--line); border-radius: var(--radius-card); box-shadow: var(--edge-raised), var(--shadow-card); }
.k-well  { background: var(--grad-well);  border: 1px solid var(--line); border-radius: var(--radius-control); box-shadow: var(--shadow-well); }
.k-engraved { text-shadow: var(--engrave); }

/* ===== Stage helpers (grain/falloff use CSS vars so kuro overrides apply) ===== */
.k-stage-grain { opacity: var(--grain-opacity); filter: var(--grain-invert); }
.k-stage-falloff { background: var(--falloff); }
`;
}
