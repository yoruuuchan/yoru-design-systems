# CC Brief · yoru-and-akari Console
## 多端适配（手机 + Windows 桌面）+ iOS 26 规范融合

> Author: design (with Claude) · Target: Claude Code
> Scope: 2 PR · 预计工作量 ~2 天

---

## 0. 上下文

现有前端 (`uploads/index.html` + `main.css` + `app.js` + `colors_and_type.css`) 是 **手机端硬锁定**（`.shell { max-width: 430px }`，`transform: scale()` 缩放）。需要：

1. 在不破坏手机端的前提下，**新增 Windows 桌面端适配**
2. 把 **iOS 26 Liquid Glass 设计语言**的核心数字和结构融入现有系统
3. 单位统一用 **px**（避免 pt/px 来回换算）

---

## 1. 设计师决策表（已确认）

| # | 议题 | 决策 |
|---|---|---|
| 1 | 桌面端主导航 | **左侧 sidebar** |
| 2 | sub-page 桌面行为 | **右侧 inspector panel 抽屉式** |
| 3 | 键盘快捷键 | 不做 |
| 4 | font-size base | 手机 **13px** / 桌面 **15px**（media query 切换） |
| 5 | `transform: scale()` UI 缩放 | **桌面端关闭**（手机端保留作为外观可调项） |
| 6 | iOS 26 search island | 不做 |
| 7 | Large-title 滚动收缩 | 不做 |
| 8 | Windows Fluent acrylic | 不做 |
| 9 | 暗色模式跟随系统 | **是**（现有 `media.matches` 监听已实现 ✅） |

---

## 2. 断点定义

```
≤ 767px   →  mobile     (默认，保持现状)
768-1023  →  tablet     (居中宽容器)
≥ 1024px  →  desktop    (sidebar + main + 可选 inspector)
≥ 1280px  →  wide       (sidebar + main + 常驻 inspector)
```

测试视口：**390×844**（iPhone 12-16e）/ **768×1024**（iPad 竖屏）/ **1280×800**（13" 笔记本）/ **1440×900**（macBook Air）/ **1920×1080**（Windows 标准桌面）。

---

## 3. PR-1 · iOS 26 token 层补强

**目标**：把 iOS 26 HIG 的官方数字补成 CSS 变量，**不修改任何现有 token**，只追加。

**新建文件**：`styles/ios26_tokens.css`

```css
/* ============================================================
   iOS 26 spec tokens — additive only, do not edit base tokens.
   Source: Apple HIG (iOS 26 / Liquid Glass), WWDC 2025.
   All values in px for CC convenience; pt equivalents in comments.
   ============================================================ */

:root {
  /* —— iOS layout constants ——————————————————————————— */
  --ios-safe-bottom:    21px;    /* home-indicator reserved zone (21pt) */
  --ios-safe-top:       54px;    /* iPhone status-bar height */
  --ios-tab-inset:      21px;    /* tab-bar distance from L/R/B edges */
  --ios-tab-h:          50px;    /* tab-bar inset capsule height (~49pt) */
  --ios-tab-icon:       25px;    /* tab-bar icon (25pt) */
  --ios-nav-h:          44px;    /* standard navigation bar (44pt) */
  --ios-nav-large-h:    96px;    /* nav bar with large title */
  --ios-list-row-h:     44px;    /* standard list row */
  --ios-list-row-tall:  56px;    /* list row with subtitle */
  --ios-hit-min:        44px;    /* same as existing --hit-min */

  /* —— iOS HIG text styles (display sizes) ——————————————— */
  --ios-text-large-title: 34px;
  --ios-text-title-1:     28px;
  --ios-text-title-2:     22px;
  --ios-text-title-3:     20px;
  --ios-text-body:        17px;   /* default list primary text */
  --ios-text-callout:     16px;
  --ios-text-subhead:     15px;   /* list secondary text */
  --ios-text-footnote:    13px;
  --ios-text-caption-1:   12px;
  --ios-text-caption-2:   11px;

  /* —— iOS 26 concentric radii ———————————————————————— */
  --ios-radius-tab:    25px;     /* tab capsule = height/2 */
  --ios-radius-button: 12px;
  --ios-radius-card:   18px;
  --ios-radius-sheet:  16px;

  /* —— Liquid Glass material params (refinement) ———————— */
  --ios-glass-blur-lg:  24px;    /* iOS 26 default is heavier than current 18px */
  --ios-glass-blur-md:  18px;    /* keep existing for subtle uses */
  --ios-glass-sat:      180%;    /* iOS 26 saturates more */

  /* —— Desktop spec (Windows / macOS) ————————————————— */
  --desk-sidebar-w:        260px;
  --desk-inspector-w:      360px;
  --desk-content-max:      820px;  /* readable content column */
  --desk-row-h:            40px;   /* denser than mobile 44px, but still comfy */
}
```

**接入方式**：在 `index.html` 的 `<head>` 中追加（必须在 `colors_and_type.css` 之后）：

```html
<link rel="stylesheet" href="styles/colors_and_type.css?v=20260528-1">
<link rel="stylesheet" href="styles/ios26_tokens.css?v=20260528-1">
<link rel="stylesheet" href="styles/main.css?v=20260528-1">
```

**验收**：
- [ ] 新文件存在，所有变量可在 devtools 中查询到
- [ ] 现有手机端**截图像素级一致**（这一步不应该有视觉变化）
- [ ] Lighthouse / 控制台无报错

---

## 4. PR-2 · 响应式 + Windows 桌面布局

**目标**：单一 HTML、单一 JS，纯 CSS 媒体查询实现手机/桌面双形态。**不改 HTML 结构**，**不改 app.js**。

### 4.1 必改：拆除桌面端的 `transform: scale()`

`main.css` line 46-47 当前：
```css
:root { --ui-scale: 0.920; }
.shell { ... transform: scale(var(--ui-scale)); transform-origin: top center; }
```

在 `main.css` 文件末尾追加：
```css
@media (min-width: 768px) {
  .shell { transform: none !important; }  /* 桌面端不缩放 */
}
```

app.js 里 `applyAppearance()` 中的 `--ui-scale` 写入逻辑保持，让手机端继续可调。

### 4.2 主要响应式块（追加到 `main.css` 末尾）

```css
/* ============================================================
   Responsive — Tablet & Desktop
   ============================================================ */

/* ---------- Tablet (768-1023px) ------------------------------ */
@media (min-width: 768px) {
  html { font-size: 15px; }                   /* base 13px → 15px */
  body { font-size: 15px; }

  .shell {
    max-width: 720px;
    transform: none;
  }

  /* tab-bar 居中胶囊保留，但更宽更舒服 */
  .tab-bar {
    max-width: 560px;
  }

  /* page padding 加大 */
  .page { padding: var(--space-6) var(--space-6) 120px; }
}

/* ---------- Desktop (≥1024px) — sidebar mode ----------------- */
@media (min-width: 1024px) {
  body { overflow: auto; }  /* 桌面允许整页滚动 */

  .shell {
    max-width: 1200px;
    height: 100vh;
    display: grid;
    grid-template-columns: var(--desk-sidebar-w) 1fr;
    grid-template-areas: "sidebar main";
    transform: none;
  }

  /* ── tab-bar 变身左侧 sidebar ─────────────────────────────── */
  .tab-bar {
    position: static;
    grid-area: sidebar;
    flex-direction: column;
    align-items: stretch;
    width: 100%; height: 100vh; max-width: none;
    transform: none; left: auto; bottom: auto;
    border-radius: 0;
    padding: var(--space-4) var(--space-3);
    gap: var(--space-1);
    background: var(--glass-bg);
    border: none;
    border-right: 1px solid var(--glass-border);
    box-shadow: none;
  }
  .tab {
    flex: 0 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-3);
    border-radius: var(--ios-radius-button);
    min-height: var(--desk-row-h);
    font-size: var(--text-md);  /* 桌面端 tab 文字 14px */
  }
  .tab .tab-icon svg.ui-icon { width: 20px; height: 20px; }
  .tab span:not(.tab-icon) { letter-spacing: 0; }
  .tab.active { box-shadow: var(--shadow-raised); }

  /* ── viewport 占满主区域 ──────────────────────────────────── */
  .viewport {
    grid-area: main;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  /* page 滚动改为 viewport 内部 ─────────────────────────────── */
  .page {
    padding: var(--space-6) var(--space-8) var(--space-8);
    max-width: var(--desk-content-max);
    margin: 0 auto;
  }

  /* 桌面端 page-title 字号略升 */
  .page-title h1 { font-size: var(--text-4xl); }  /* 28 → 34px */

  /* ── chat 输入条不再 fixed，回归内联 ─────────────────────── */
  .chat-input-bar {
    position: sticky;
    bottom: var(--space-4);
    left: auto; transform: none;
    width: 100%;
    max-width: var(--desk-content-max);
  }

  /* ── sub-page 改为右侧 inspector 抽屉 ─────────────────────── */
  .sub-page {
    position: fixed;
    top: 0; right: 0; bottom: 0;
    left: auto; inset: auto;
    width: 420px;
    max-width: 40vw;
    box-shadow: var(--shadow-pop);
    border-left: 1px solid var(--glass-border);
    background: var(--bg-surface);
    transform: translateX(8px);
    z-index: 200;
  }
  .sub-page.active { transform: translateX(0); }
  .sub-header { min-height: 56px; }

  /* hover 视觉反馈（手机不需要，桌面必须）─────────────────── */
  .app-link:hover,
  .channel-card:hover,
  .memory-card2:hover,
  .setting-collapse:hover { cursor: pointer; }

  /* 滚动条变可见且粗一点（Windows 习惯）──────────────────── */
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-thumb {
    background: var(--ink-4);
    border-radius: var(--radius-pill);
    border: 2px solid var(--bg-base);
  }
  ::-webkit-scrollbar-thumb:hover { background: var(--ink-3); }
}

/* ---------- Wide (≥1280px) — sidebar + main + inspector ─────── */
@media (min-width: 1280px) {
  .shell {
    max-width: 1440px;
    grid-template-columns: var(--desk-sidebar-w) 1fr;
  }
  /* sub-page 不再 fixed 覆盖，而是常驻第三列；
     如果同时只允许一个 sub-page 打开，保持 fixed 即可 —
     当前 app.js 是 "close all first then open"，保持 fixed */
}

/* ============================================================
   Windows-specific font stack tweak
   ============================================================ */
@media (min-width: 1024px) {
  :root {
    --font-ui: "Geist", "Segoe UI Variable", "Segoe UI",
               -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  }
}

/* ============================================================
   Content fade-out under bottom tab bar (mobile only)
   iOS 26 pattern: 内容渐隐而非硬切
   ============================================================ */
@media (max-width: 767px) {
  .page {
    -webkit-mask-image: linear-gradient(to bottom,
      black 0%, black calc(100% - 80px), transparent 100%);
            mask-image: linear-gradient(to bottom,
      black 0%, black calc(100% - 80px), transparent 100%);
  }
}
```

### 4.3 字号同步升级（桌面端可读性）

桌面端不仅是 base 13→15px，**部分组件需要单独调整**：

```css
@media (min-width: 1024px) {
  /* 列表行字号按 iOS HIG */
  .setting-line .label strong,
  .toggle-row .setting-main strong,
  .context-title { font-size: var(--ios-text-body); }   /* 17px */
  .setting-line .label span,
  .toggle-row .setting-main > span { font-size: var(--ios-text-subhead); }  /* 15px */

  /* hero-stat 数字桌面端放大 */
  .hero-stat .num { font-size: var(--text-2xl); }
  .hero-stat { padding: var(--space-3) var(--space-2); }

  /* tab bar 文字桌面 16px */
  .tab { font-size: var(--text-md); }

  /* 输入控件高度 36→40px（iOS standard） */
  .form-field input, .form-field select { height: 44px; font-size: var(--text-md); }
  .number-pill { height: 40px; }

  /* button 行高 */
  .provider-action-btn, .wide-action { height: 44px; }
}
```

### 4.4 app.js 端配合（只改 1 处）

`applyAppearance()` 函数中（约 line 105-120）的 `--ui-scale` 写入应该在桌面端跳过，避免设置无效变量：

```js
if (p.uiScale != null) {
  // 仅手机端应用 transform scale
  if (window.matchMedia('(max-width: 767px)').matches) {
    root.style.setProperty('--ui-scale', (clamp(p.uiScale, 82, 106) / 100).toFixed(3));
  }
  // 滑块本身在 settings 页面（手机端可见，桌面端可隐藏）
  const ur = document.getElementById('uiScaleRange');
  if (ur) ur.value = p.uiScale;
  const uv = document.getElementById('uiScaleValue');
  if (uv && ur) uv.textContent = ur.value;
}
```

可选：在桌面端 CSS 中把 `--ui-scale` 调节器整个隐藏掉：
```css
@media (min-width: 1024px) {
  /* "整体缩放" 这一项在桌面端无意义，隐藏 */
  .palette-card .range-head:has(+ #uiScaleRange),
  .palette-card #uiScaleRange { display: none; }
}
```

### 4.5 验收清单

- [ ] **手机端（≤767px）截图与改前像素级一致**（核心回归测试）
- [ ] 768/1024/1280/1920 四档断点各截图，布局正确无溢出
- [ ] 桌面端 sidebar 浮出 glass 效果存在
- [ ] sub-page 在桌面端从右侧抽屉滑入，宽度 420px
- [ ] 桌面端 tab 切换无残留、无 z-index 错乱
- [ ] 桌面端切换主题（akari↔yoru）一切正常，跟随系统
- [ ] 桌面端调节 accent 色仍生效
- [ ] 桌面端**没有 transform: scale**（devtools 检查）
- [ ] 桌面端字号 base 15px（`getComputedStyle(document.body).fontSize`）
- [ ] hover 视觉反馈存在（卡片、tab、按钮）
- [ ] 滚动条桌面端可见、手机端隐藏
- [ ] 控制台无 warning / error

---

## 5. 不做的事项（明确排除）

- ❌ iOS 26 search island
- ❌ Large-title scroll 收缩动画
- ❌ 键盘快捷键
- ❌ Windows Fluent acrylic 纹理
- ❌ 右键上下文菜单
- ❌ 改动 HTML 结构（除 `<head>` 加一行 CSS link）
- ❌ 改动 app.js 业务逻辑（仅微调 `applyAppearance` 中的 `--ui-scale` 条件）

---

## 6. 风险提示

1. **`.page` 用了 `position: absolute; inset: 0;`**，桌面端切换为 grid 布局后仍能用，但要确认 `.page.active` 的 z-index 在桌面端不会盖住 sidebar。**建议桌面端 `.page` 改为 `position: relative`**，已包含在 4.2 的 CSS 中。

2. **`backdrop-filter` 在 Windows 性能较差**，sidebar 用 glass 时如果掉帧，可降级为半透明纯色：
   ```css
   @media (min-width: 1024px) and (prefers-reduced-motion) {
     .tab-bar { background: var(--bg-surface); backdrop-filter: none; }
   }
   ```

3. **mask-image 在某些 Windows Edge 旧版本有兼容性问题**，已加 `-webkit-mask-image` 前缀；如果用户反馈底部内容看不到，把该 query 段删掉即可。

4. **`max-width: 1440px` 的 shell 在超宽屏（≥1920px）会居中留白**——这是有意的（避免内容过宽不可读）；如果产品方希望填满屏，把 `.shell { max-width: 1440px }` 改成 `none`。

---

## 7. 文件改动地图

| 文件 | 操作 | 行数估算 |
|---|---|---|
| `styles/ios26_tokens.css` | **新建** | ~50 行 |
| `index.html` | 加 1 行 `<link>` | +1 |
| `styles/main.css` | 在文件末尾追加响应式块 | +180 行 |
| `app.js` | 微调 `applyAppearance()` 内 1 个 if | +2 行 |

**所有改动都是追加性的**，无破坏性删改。回滚成本极低。

---

## 8. 一句话总结给 CC

> 加一个 iOS 26 token 文件 + 在 `main.css` 末尾追加响应式块。手机端零回归，桌面端拆成 sidebar (左260) + main (居中820) + sub-page-as-inspector (右420)。关掉桌面端 `transform: scale`，base 字号桌面升到 15px。验收看四档断点截图。
