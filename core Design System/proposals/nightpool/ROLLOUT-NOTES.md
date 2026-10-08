# NIGHTPOOL — rollout notes (integration)

将已批准的 nightpool proposal (v2, approved 2026-10-08) 并入 core 正式系统。
范围：仅 `core Design System/`。不动 git 状态（lead 审查后统一 commit）。

> 进度
> - [x] D1 `tokens/nightpool.css`（proposal tokens 逐字节拷贝 + 一行整合注释，无值改动）
> - [x] D2 `styles.css` 末尾追加 `@import url("tokens/nightpool.css");`（无 "./" 前缀，与既有风格一致）
> - [x] D3 proposal 目录：`palette.html` / `demo.html` 改指 `../../tokens/nightpool.css`；删除 proposal 内 `tokens.css`；README 文件清单更新 + 归档说明一行
> - [x] D4 组件审计与修复（源 + `_ds_bundle.js` 镜像）
> - [x] D5 toggle bootstrap（2 kits + 6 slides）
> - [x] D6 README.md + SKILL.md
> - [x] D7 headless 截图验证（结果表见下）

## 关键机制：ink 分裂的回退写法

light 主题里 `--ink` 身兼「文字墨」与「线/投影墨」；nightpool 把线墨分给 abyss-950。
组件里大量 `border: 1px solid var(--ink)` 在夜里会变成荧光边框（真·破坏）。修法分级：

1. **线/投影用途** `var(--ink)` → `var(--line)`。light 下 `--line = var(--ink)`（colors.css:122），逐字节等价；夜里落到 abyss-950。零风险。
2. **浅底色上的深色文字**（accent surface 在两种主题里都浅：bubblegum-300、sodium-*、tile-100/200、chrome-100、bondi-200、peach-*）→ `color: var(--abyss-950, var(--ink))`。abyss-950 只在 `[data-theme="nightpool"]` 下定义，light 下回退 `--ink`，行为不变；夜里得到深字。不新增 token。
3. **深色底上的浅文字**（marquee 条、ink 底 slide、photo mat、bondi-900 footer）→ `var(--abyss-950, var(--ink))` 作底、`var(--phosphor-200, var(--paper))` 作字（phosphor ramp 同样只在夜里定义）。
4. **墙纸/颗粒透明度** → `opacity: var(--tile-opacity, 1)` / `var(--grain-opacity, <原值>)` / `var(--caustic-opacity, 1)`。light 回退原值，夜里自动「关灯」。
5. 无法用语义 token 表达的（TabBar hover 的 sodium-100、Input focus 的 bondi-50、Window bodyTone=dream 的 peach-100、texture.card 的奶油 label）→ 最小 `[data-theme="nightpool"]` 作用域覆写。

## D4 审计表（components/）— 已核实并应用

grep：`#[0-9a-f]{3,8}\b|rgba?\(` 全目录 + `var(--ink)` 线用途排查 + white/black 关键字。
状态：✔ = 已修（源文件 + `_ds_bundle.js` 同步镜像）；— = 判定不动。

| 文件 | 命中 | 判定 | 处理 |
|---|---|---|---|
| core/Button.jsx | border 用 --ink；secondary/pool/dream/sodium 浅底 + --ink 字 | 破坏（夜：荧光边框 + 浅底浅字） | ✔ border→--line；四 variant 加 abyss 回退字色。ghost（transparent）夜里磷光字正确，不动 |
| core/Card.jsx | 4 variant border 用 --ink；pool(tile-100)/dream(peach-100) 浅底 | 破坏 | ✔ border→--line；pool/dream 加 abyss 回退字色 |
| core/Checkbox.jsx | box border 用 --ink | 破坏（边框） | ✔ border→--line |
| core/IconButton.jsx | border 用 --ink | 破坏（边框） | ✔ border→--line |
| core/Input.jsx | border 用 --ink；focus bg bondi-50 浅 | 破坏 | ✔ border→--line；scoped `[data-theme="nightpool"]` focus bg→--surface-sunk |
| core/Tag.jsx | border 用 --ink；dream/sodium 浅底 + --ink 字 | 破坏 | ✔ border→--line；dream/sodium 加 abyss 回退字色。ink tag 夜里底色翻转但对比保持（inverse chip 语义），不动 |
| core/Divider.jsx | solid variant borderTop 用 --ink | 破坏（线） | ✔ →--line。dashed 用 --ink-muted（夜里 = phosphor-400 暗灰）可读，不动 |
| window/Window.jsx | 4 处 border 用 --ink；bodyTone=dream 用 peach-100 | 破坏 | ✔ border→--line；scoped dream body→--bubblegum-700（判断调用，见偏差 3） |
| window/TabBar.jsx | 2 处 border 用 --ink；hover bg sodium-100 | 破坏 + 非计划 sodium 点 | ✔ border→--line；scoped hover→--surface-pool |
| window/Toast.jsx | 3 处 border 用 --ink；dream/sodium barFg 用 --ink | 破坏 | ✔ border→--line；barFg 加 abyss 回退 |
| dream/Marquee.jsx | bg + border 用 --ink | 破坏（夜里整条变浅色亮带） | ✔ bg→abyss 回退；border→--line。`.paper` variant 全 themed，不动 |
| dream/OverexposedText.jsx | palette.paper=--paper；glows.peach 首层 --paper | 破坏（夜：默认色暗-on-暗；peach glow 核变暗） | ✔ →phosphor-100 回退（与批准件 palette.html `.overex` 一致） |
| dream/Glow.jsx | 全部 var(--glow-*) | 无破坏（nightpool token 直接接管） | — 不动 |
| texture/Halo.jsx | 12 个硬编码 hex = ramp 原值（peach/rose/pool/sodium） | 无破坏：这些 ramp 夜里不重映射，渲染逐字节等价 | — 不动。仅记录：与 README「每组件重读 token」有出入，改 hex→var 不属于 nightpool 破坏修复，留给 lead（见偏差 4） |
| texture/TilePattern.jsx | 资产 URL + opacity prop 默认 1 | 按要求应消费 --tile-opacity/--caustic-opacity/--grain-opacity | ✔ 默认 opacity 按 pattern 吃对应 token（回退 1）；显式 prop 仍优先 |
| texture/GrainOverlay.jsx | 默认 opacity 0.18 + multiply | 默认透明度应吃 --grain-opacity | ✔ 默认 → `var(--grain-opacity, 0.18)`；blendMode 留给消费者（见开放问题） |
| texture/texture.card.html | .lab bg rgba(246,239,217,.9)（v1 奶油）+ --ink 字；.frame border --ink | 破坏（夜：磷光字上奶油 = 不可读 + 第三个暖点） | ✔ .frame→--line；.lab scoped bg→--surface-card |
| dream/dream.card.html | .swatch border --ink | 破坏（边框） | ✔ →--line |
| window/window.card.html | 内联 thumb border --ink | 破坏（边框） | ✔ →--line |
| core/core.card.html | 无颜色命中（全走组件） | 随组件修复 | — 不动 |
| *.prompt.md / *.d.ts | 无功能性颜色 | — | d.ts 各加一行 nightpool 默认行为注释（TilePattern/GrainOverlay opacity） |

## kit / slide 追加审计（D5/D7 需要）— 已核实并应用

| 文件 | 命中 | 处理 |
|---|---|---|
| _ds_bundle.js（组件段） | 同 components 源 | ✔ 已逐条镜像（字符串级） |
| _ds_bundle.js（kit 段） | 同 ui_kits 源 | ✔ 已逐条镜像。注：kit 页面运行时经 babel 直接加载 ui_kits/*.jsx（在 bundle 之后赋值 window.*，源为准），bundle kit 段为一致性镜像 |
| ui_kits/archive/index.html | body 全亮 tile.svg；.crumb border --ink | ✔ scoped ::before 墙纸吃 --tile-opacity（day 不动）；border→--line |
| ui_kits/archive/Sidebar.jsx | active 项 tile-200 浅底 + --ink 字、border --ink | ✔ active 字色条件式 abyss 回退；border→--line |
| ui_kits/archive/FileGrid.jsx | thumb border --ink | ✔ →--line |
| ui_kits/archive/DetailView.jsx | photo mat bg+border 用 --ink | ✔ mat bg→abyss 回退；border→--line |
| ui_kits/blog/BlogHeader.jsx | borderBottom --ink | ✔ →--line |
| ui_kits/blog/PostBody.jsx | 两处 photo mat 同上 | ✔ 同上 |
| ui_kits/blog/BlogSidebar.jsx | active peach-100 + --ink；进度条 border --ink | ✔ active 字色条件式回退；border→--line |
| ui_kits/blog/BlogFooter.jsx | bondi-900 深底 + --paper 字（夜里暗-on-暗）；borderTop --ink | ✔ 字→phosphor-200 回退（2 处）；border→--line |
| slides/TitleSlide | 全亮 tile；.marq 用 --ink 底/--paper 字；.kicker bubblegum-300 + --ink 字；h1 投影 --ink；stamp border --ink；grain multiply | ✔ scoped 墙纸关灯；marq 底/字回退；kicker 字回退 + border→--line；投影 abyss 回退；stamp→--line；grain 吃 token + scoped blend normal |
| slides/SectionSlide | 整页 --ink 底 + --paper 字（夜里全反） | ✔ 底 abyss 回退、字 phosphor 回退（3 处）；tile 吃 token（screen blend 保留，暗底上加法发光）；grain 吃 token + scoped blend normal |
| slides/ImageSlide | 底 --ink；corner-stamp --paper 字+框于暗 chip（暗-on-暗）；tags dream/pool 浅底 | ✔ 底回退；stamp 字/框 phosphor 回退；dream/pool scoped 深字；border→--line；grain 吃 token（multiply 保留 —— 落在照片上不在 UI 上） |
| slides/IndexSlide | header border --ink；grain | ✔ →--line；grain 吃 token + scoped blend normal |
| slides/QuoteSlide | grain | ✔ 吃 token + scoped blend normal（其余干净；halo 用未重映射 ramp，夜里在暗底上更亮，符合 halo 角色） |
| slides/EndSlide | 整页 --ink 底；.url/--paper；.ring --paper-fold（夜里太暗）；marq border | ✔ 底/字回退；ring→phosphor-400 回退；border→--line；tile/grain 吃 token + blend 处理 |
| cards/*.html（19 张基础样张） | 多处 border --ink | — 不动：D4/D5 范围外（无 toggle、day-only 样张）。备案 |

## D5 toggle bootstrap — 已注入 8 页

`ui_kits/archive/index.html`、`ui_kits/blog/index.html`、六张 `slides/*.html`，同一片段，
`</body>` 前：`?theme=nightpool|default` 优先并写 `localStorage["core-theme"]`；无参读存档；
右下角浮动按钮（fixed, z-index 9999）翻转并持久化，label 显示目标主题（小写）。
按钮样式：system-ui 11px · 1px solid var(--line) · var(--surface-card) 底 · var(--text-body) 字 ·
var(--bevel-out) · 方角。`?theme=default` 显式移除 attribute 并记 'default'。

## 偏差

1. **`_ds_bundle.js` 手工同步**：kit/card 运行时吃的是编译产物，仓库内无编译器。对 bundle 施加与 components 源完全对应的字符串级修改；header 的 sourceHashes 未更新（算法未知），工具链下次重建会从已修源再生成，结果一致。— 请 lead 知悉。
2. **bundle 既有漂移（非本次引入）**：bundle 里 Button primary/danger `color: '#ffffff'`（源已是 `var(--frost-50)`）；bundle 里 GrainOverlay 无 `src` prop（源有）。说明 bundle 在本次之前就已落后于源。未擅自「对齐」这些无关差异，仅备案。
3. **Window bodyTone=dream 夜里 → bubblegum-700**：peach-100 夜里是刺眼暖面板 + 磷光字不可读；批准件无对应 token，选 bubblegum-700（批准件「bubblegum 入夜变霓虹」ramp 内取值）。这是判断调用，非机械映射 — lead 可改。
4. **Halo.jsx hex 未改 var**：渲染等价、非 nightpool 破坏；改与不改都不影响任一主题。留给 lead 按 README 的 token-reread 原则定夺。
5. **Button/Card/Tag 的浅色 accent 面（chrome-100/bondi-200/tile-100/peach-100/bubblegum-300/sodium-*）在夜里保持浅面 + 深字**：可读、Y2K 成立（Win98 按钮在深标题栏上本来就是浅灰），但与批准件 palette.html 里 `.y2k` 夜样例的 chrome-800 深面不一致。改成深面需要新 token 或 !important 覆写内联样式，两者都越权，留给 lead 拍板。
6. **SRI 修复（预先存在、阻塞 D7）**：`assets/vendor/` 三个文件的 sha384 与 6 个 HTML（2 kits + 4 张组件卡）里的 `integrity=` 属性不匹配 —— 浏览器一律拒载 React/ReactDOM/Babel，kits 与组件卡在任何浏览器都无法挂载（dump-dom 证实 `#root` 为空）。vendor README 钉的版本（react 18.3.1 / babel 7.29.0）与磁盘文件一致，错的只是 integrity 属性；已按磁盘实文件重算并更新 6 个文件。非主题改动，但 D7 截图前置。
7. **TitleSlide  scoped 层叠修正**：首版 `[data-theme="nightpool"] .slide > * { position: relative }` 覆盖了 `.meta` 的 absolute 定位（left/right 偏移把右侧 stamp 推出屏外，截图抓获）。收窄为仅 `.marq` / `.core` 两个静态子元素；`.meta` / `.grain` 本就 absolute，天然叠在 ::before 之上。

## D7 验证结果（headless Chrome，截图存 `C:/Users/15877/AppData/Local/Temp/theme-rollout-nightpool/`）

| 截图 | 结论 |
|---|---|
| archive-default.png / archive-nightpool.png | day 逐字节如旧；夜：墙纸压暗（--tile-opacity）、marquee 保持暗条、窗口暗面+bondi 标题栏+暗边框、active 行深字可读、toast dream 粉条深字、toggle 在右下 ✔ |
| blog-nightpool.png | 磷光 overexposed 标题发光 ✔、暗 marquee、active 帖 peach 行深字 ✔、guestbook dream 体 → bubblegum-700 ✔、footer bondi-900 上磷光字 ✔ |
| slide-title-default.png / slide-title-nightpool.png | day 无回归；夜：双 stamp 俱在（修正后）、标题辉光+暗投影、kicker 深字 ✔ |
| slide-section-default / -nightpool.png | day 无回归；夜：02 辉光、screen 墙纸、磷光引文 ✔ |
| slide-Index/Image/Quote/End-nightpool.png | 全部通过：无暗-on-暗、无荧光边框；Image 的 corner-stamp/tags 可读 ✔ |
| proposal-palette.png / proposal-demo.png | 换链 `../../tokens/nightpool.css` 后与批准件渲染一致；demo 暖点恰两处（lamp_only 拇指 + toast 的 closed）✔ |
| card-window-nightpool.png（day 渲染） | bundle 镜像在 light 下行为不变（组件卡无 toggle，day-only） |

钠/暖色盘点：slides 零点；kits 仅内容驱动 sodium tag（与 day 相同，非主题引入）；demo 恰批准的两处。暗-on-暗：无。bevel：夜下窗框/按钮/taskbar 均可见。

## 开放问题

- **GrainOverlay 组件的 blend-mode**：默认 multiply 在暗底上接近不可见。slides 页面内联 grain 已按页加 scoped `mix-blend-mode: normal`（multiply/overlay 情形）；ImageSlide 保留 multiply（落在照片上）。组件的 blendMode 仍是消费者参数，未改默认值（改默认会动 light 渲染）。
- **`cards/` 19 张基础样张未注入 toggle**（D5 只点名 kits + slides）；它们维持 day-only。另：`cards/` 里仍有多处 `border: 1px solid var(--ink)`（D4 范围外），若日后给 cards 开夜览需同法处理。
- 若未来有人把 abyss/phosphor ramp 提升到 `:root` 定义，所有 `var(--abyss-950, …)` 回退会在白天也生效 —— 届时需把回退写法换成 scoped 覆写。已在此备案。
