# MIDNIGHT rollout notes — integration of approved proposal v2

执行人：rollout 子代理 · 2026-10-08 · 分支 `proposal-night-themes`
范围：仅 `PAPER Design System/`。不 commit、不 push。

## D1 — tokens/midnight.css

- 已创建 `tokens/midnight.css`：值为 proposal v2 批准稿的逐字拷贝，顶部加一行整合注释
  （proposal v2, approved 2026-10-08）。grain 翻转与 `::selection` 规则保留在文件底部。
- **偏差（一处，非数值改动）**：在拷贝之外追加了一个组合规则
  `[data-theme="midnight"] [data-mode="editorial"|"analog"]`，重指四个 token：
  三个 surface（page/raised/sunken → noir 阶梯）+ `--text-body` → silver-200。
  surface 的原因见下「modes × midnight 层叠」；`--text-body` 的原因见 D7 记录
  （templates 经 ds-base.js 额外加载 legacy `tokens/color.css`，其 analog 规则把
  `--text-body:var(--ink-1)` 钉死在 mode 元素上，midnight 下是暖炭 unreadable）。
  没有新增任何 token 数值；全部引用批准稿里的 `--noir-*` / `--silver-*`。

## D2 — styles.css

- `@import url("./tokens/midnight.css");` 追加为最后一行（在 modes.css、base.css 之后）。

## modes × midnight 层叠关系（重要）

两个轴都是 `(0,1,0)` 特异度的属性选择器，同元素上谁赢由源码顺序决定——
midnight.css 最后加载，所以**同一元素**同时带 `data-mode` 和 `data-theme="midnight"` 时，
midnight 的语义重映射赢过 modes.css 的同名片面赋值（surface、grain、photo-filter、
rule-hair、text-muted/faint），analog 保留 label-font/tracking、figure-tilt、plate-shadow。

**但**「import 最后」管不到跨元素场景：实际代码里 `data-mode` 常落在 `<body>`
（slides/08、全部 templates 由 React 在 componentDidMount 里设置）或更深的 wrapper
（portfolio kit 的 `div[data-mode="analog"]`，app.jsx:14），而切换器把 `data-theme`
设在 `<html>`。直接设在元素上的自定义属性永远胜过继承，于是 analog 的
`--surface-page:var(--paper-300)` 会盖过从 html 继承的 midnight——浅色纸面配
silver 墨，不可读。这就是追加组合规则的原因：只把三个 surface 扳回 noir，
其余 mode 声音（mono 标签、-0.55° 倾斜、print 阴影、photo tone、暖 muted/faint）
原样保留——自然得出提案 README 预言的「暖标签+mono 的夜间档案感」。
`data-mode="dark"` 被显式排除，胶片基底语义不变。

已知小不一致（记录在案，不追）：同元素组合（两个属性在同一节点）时 analog 的
muted/faint/hair/grain/photo-filter 会被 midnight 盖掉；跨元素组合时保留。
主流用法（mode 在 body/div、theme 在 html）走跨元素路径。

**D7 补充——legacy `tokens/color.css` 是第二个 analog 层**：templates 的
`ds-base.js` 按顺序加载 `tokens/fonts.css`（不存在，404 静默）、`tokens/color.css`
（旧的 paper-0..4 / ink-0..4 命名体系）再加载 `styles.css`。color.css 的
`[data-mode="analog"]{--text-body:var(--ink-1)}` 钉在 mode 元素上，midnight 下
盖过 html 继承的 silver-200 → analog templates（ZineSpread、PortfolioIndex）
正文暖炭 unreadable。glue 已把 `--text-body` 一并重指（editorsial 路径
color.css 不碰 text-body，本就不破）。color.css 里其余旧名（--text-quiet、
--caption、paper-0..4、ink-0..4）在 templates 全文检索零引用，不处理。
kits/slides 只加载 styles.css，不经此层。

## D3 — proposals/midnight 归档

- palette.html / demo.html 的 `<link href="tokens.css">` 改为 `../../tokens/midnight.css`。
- 删除 `proposals/midnight/tokens.css`；README 文件清单更新并注明目录保留为设计档案。

## D4 — components/ 硬编码颜色审计

审计命令：`grep -rniE "#[0-9a-f]{3,8}\b|rgba?\(" components/`（另补一轮命名色 white/black 扫描，仅命中注释）。
共 10 处命中 / 7 个文件，2 处为 HTML 实体误报，1 处真破损已修。

| 位置 | 字面值 | midnight 下判定 | 处理 |
|---|---|---|---|
| `image/Plate.jsx:18` | `rgba(38,36,30,.42)` 空 plate 标签 | **破损**：深墨 42% 在深 indigo placeholder 上不可读 | 已修：`var(--silver-500, rgba(38,36,30,.42))`——silver-500 只在 midnight 有定义，light 逐字回落原值；bundle 已同步镜像 |
| `image/ContactSheet.jsx:24-25` | `rgba(240,236,224,.8x)` 铅笔圈叉 | 不破损：画在 `--film-base` 暖黑上，film 按批准设计保持暖 | 不动（规格明令禁止"修"film） |
| `image/ContactSheet.jsx:33-34` | `#D8D2C2` / `#B9B2A0` 手写注记 | 不破损：同在 film base 上 | 不动 |
| `image/HeroImage.jsx:20` | `var(--paper-100)` + `rgba(20,18,14,.5)` textShadow | 不破损：字在照片上，不在纸面上 | 不动 |
| `analog/Tape.jsx:5,11` | clear `rgba(232,226,210,.55)` / dark `rgba(150,132,98,.65)` / 白色 inset 光泽 | 不破损：默认 kraft 已走 `--tape`→washi；clear/dark 是调用方显式选的实体胶带，深底上仍可读 | 不动 |
| `analog/ScanEdge.jsx:6,8` | y/all 变体硬编 `rgba(30,28,22,…)` | 可接受：唇边画在照片/print 上，方向仍是暗唇；x 变体走 `--scan-edge` 已随 midnight 加深。y/all 无对应 token，新增 token 超出授权 | 不动，记录为已知偏差 |
| `ui/TextLink.jsx:14` | `&#8594;` | 误报（HTML 实体 →） | — |
| `editorial/PullQuote.jsx:14` | `&#8220;` + `var(--rust-300)` | 误报 + rust-300 在蓝底上是对位色，正常 | 不动 |

显式点名复查：Figure（caption/number 全走 `--text-muted`/`--text-accent` ✓）、DateStamp
（全部 `--stamp-ink`→rust-300 ✓）、HandNote（`--hand-ink`→blue gel pen；slip 走 `--surface-raised`→noir-100，
即批准的"raised sheet" ✓）、MemoryCard（全 token ✓）、ModeBadge（E/A 圆盘用 raw `--ink-800`/`--paper-400`，
midnight 下 E 盘与蓝底明度接近，但暖炭 vs 蓝黑的色相差异 + paper-100 字母仍可读；且只在
guidelines 卡片里使用，kits/slides/templates 均未引用——判非破损，不动，记录）、
ContactSheet/FilmStrip（film token 保持暖黑，批准的材质对位 ✓ 不动）。

**范围外但影响 D7 的修复**（kit chrome，非 components/）：
- `ui_kits/journal/app.jsx:17` / `ui_kits/portfolio/app.jsx:17` 吸顶导航 `rgba(244,241,234,.88)` /
  `rgba(237,230,215,.9)` 硬编暖纸色——midnight 下是一条发亮暖杠。改为
  `color-mix(in srgb, var(--surface-page) 88%/90%, transparent)`：light 下与原 rgba 完全等值，
  midnight 自动变暗。bundle 已同步镜像（_ds_bundle.js:4271, 4925）。
- `ui_kits/portfolio/index.html` `<style>body{background:var(--paper-300)}</style>` 硬编——
  改为 `var(--noir-200, var(--paper-300))`（data-mode 在内层 div，body 拿不到 analog 的 surface-page；
  light 下逐字回落 paper-300）。
- `_ds_bundle.js` 为三处源码改动做了手工镜像（无本地构建脚本，bundle 由外部 ds 工具生成）。
  `sourceHashes` 与 `_ds_manifest.json`（globalCssPaths 未含 midnight.css）需由 lead 的 ds 工具重新生成——
  已在 open questions 列出。

slides/templates 扫查（范围外，仅记录）：`SlideDeck.dc.html` 的 `body{background:#3A3730}` 是
slide 片的舞台底色（chrome）；`ZineSpread/PortfolioIndex.dc.html` 内联了 `--shadow-print` 的
字面值拷贝，midnight 下阴影不加深——模板是 starter，未动；`support.js`/`doc-page.js`/`deck-stage.js`
是预览脚手架 UI，与设计面无关。

## D5 — 主题切换 bootstrap

同一段 vanilla JS 注入 15 个文件（每个文件 `</body>` 前，字节一致）：
`ui_kits/journal/index.html`、`ui_kits/portfolio/index.html`、`slides/01–08`（8 个）、
`templates/*/*.dc.html`（5 个）。行为按规格：

- `?theme=midnight` → `<html data-theme="midnight">`；`?theme=default` → 移除属性；
  两者都写入 `localStorage["paper-theme"]`。无参数时读 localStorage 恢复。
- 右下角浮动按钮（fixed, z-index 9999），label 显示**目标**主题（当前 default 显示
  "midnight"，反之亦然），点击翻转并持久化。样式全部走 PAPER token：
  IBM Plex Mono 10px / uppercase / .14em / 1px `var(--rule-mid)` /
  `var(--surface-raised)` / `var(--text-muted)` / 方角——midnight 下按钮自动换色。
- kits 里按钮 append 到 body（React 只管 #root，不会碰它）；templates 里脚本在
  `text/x-dc` 逻辑块之后、作为普通脚本执行，support.js 的 dc-root 挂载不受影响。
- localStorage 全部 try/catch 包裹：file:// 或隐私模式下持久化静默退化为当次有效。

**顺带修的两处 midnight 真破损**（D4 思路的延伸，spec 组件范围外，记录在此）：
`slides/08-zine-spread.html` 与 `templates/zine-spread/ZineSpread.dc.html` 的
`<section class="page">` 内联 `background:var(--paper-300)`——raw stock token 不随
midnight 翻转而文字 token 全翻成 silver，银字奶纸不可读。改为 `var(--surface-page)`：
默认 analog 下 `--surface-page` 就是 `--paper-300`（modes.css:20），默认渲染逐字节
不变；midnight 下随组合规则翻成 noir-200。doc-page 的浅灰 desk（shadow host
硬编 #f5f5f4）够不到，是"桌面"不是"纸面"，记录不动。

**记录不动的已知项**：`templates/slide-deck/SlideDeck.dc.html` 七页幻灯片用 raw
`var(--paper-200)` 底 + `var(--ink-900)` 标题（"印刷成品"惯例），midnight 下
paper 保持浅色、语义文字（--text-body/muted）变银——部分文字洗白。机械修法存在
（paper-200→surface-page、ink-900→text-display，:root 下两者等值，默认不变），
但涉及全文件 7 页、且"deck 是否应整体翻 noir"是设计判断——留给 lead 拍板，未动。
`body{background:#3A3730}` 的舞台底色与 doc-page desk 同为 chrome，不动。

## D6 — 文档

- `README.md`「The two modes」：末尾句改为「It is a surface, not a theme, and the
  theme axis below leaves it unchanged.」并新增小节「The theme axis —
  `data-theme="midnight"`」（深蓝纸、冷银墨、rust 对位；与 data-mode 正交可叠加；
  grain 翻 screen、tape 换 washi、film base 保持暖黑；token 位置与归档位置）。
  Files 清单补 `midnight.css` 一行。SKILL.md「Fast orientation」补一行。
- 写作遵守 PAPER voice（sentence case、无感叹号、无 emoji）。

## D7 — 截图验证

方法：`python -m http.server 8765` 起在系统根目录（Babel 经 XHR 取 .jsx，
file:// 下被禁；templates 的 support.js 还要 fetch 兄弟文件），headless Chrome
`--headless=new --disable-gpu --hide-scrollbars --virtual-time-budget=9000`。
截图存 `C:/Users/15877/AppData/Local/Temp/theme-rollout-midnight/`。

**验证中发现的两个预存 bug（与 midnight 无关，已修/记录）**：

1. **SRI 全部失效（预存，kits/cards 从未能渲染）**：kits 两个 index.html +
   五张 components/*.card.html 里 react/react-dom 的 `integrity` 与
   `assets/vendor/` 实文件（React 18.3.1 UMD）不匹配，浏览器直接 block，
   `#root` 永远为空。已把 7 个文件的 react 改为
   `sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z`、
   react-dom 改为 `sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1`
   （= 上游 18.3.1 摘要，与 support.js 的 REACT_SRI/REACT_DOM_SRI 常量一致；
   babel 的 `m08Kidi...` 本来就对，未动）。
   **worktree 注意**：本机 `core.autocrlf=true` 把 vendor js 落成 CRLF，
   SRI 按字节校验同样失败——验证前已把三个 vendor 文件 sed 成 LF
   （`git diff` 为空，index 里本来就是 LF；git status 会因 stat 缓存
   短暂显示 M，非内容改动）。这意味着 **CRLF 检出的任何机器上 kits 都打不开**，
   根治办法是加 `.gitattributes`（如 `*.js text eol=lf`）——超出本次授权，留给 lead。
2. **legacy color.css 的 analog `--text-body`（见 D1/层叠节）**：已修并进 glue。

**截图清单与判定**（全部人工 Read 复核）：

| 文件 | 内容 | 判定 |
|---|---|---|
| journal-default.png / journal-midnight.png | journal kit（editorial）Contents 屏，default vs ?theme=midnight | ✓ 版式纪律两侧一致；midnight 下银墨/rust 对位/暗 slip+washi+蓝 gel 手写条全部符合批准稿；吸顶导航 color-mix 修复生效（无亮暖杠） |
| portfolio-default.png / portfolio-midnight.png | portfolio kit（analog）Home 屏，default vs midnight | ✓ 跨元素组合正解：noir 纸 + 保留 analog 声部（mono 标签、暖 muted、faint、暖 hairline）= 提案预言的「夜间档案感」 |
| slide01-default.png / slide01-midnight.png | slides/01-title 两侧 | ✓ 104px display、双线、hairline footer 全保持；rule-strong 翻白墨线 |
| template-photoessay-midnight.png | PhotoEssay 模板（editorial）midnight | ✓ dc-runtime 正常启动（React 走 unpkg CDN）；drop cap、双语、pull quote、脚注 rust 全对 |
| template-zine-midnight.png | ZineSpread 模板（analog）midnight，paper-300→surface-page 修复 + text-body glue 修复后 | ✓ 正文银墨可读；暖 mono 标签/脚注保留（批准声部）；doc-page 浅灰 desk 为 shadow 硬编，记录不动 |
| template-portfolioindex-midnight.png | PortfolioIndex 模板（analog）midnight | ✓ 同上，全部可读，蓝 gel 手写行正确 |
| slide08-midnight.png | slides/08（analog + doc-page）midnight | ✓ surface-page 修复生效，两页 noir 可读 |
| template-slidedeck-midnight.png | SlideDeck 模板 midnight | ⚠ 已知限制（未修，见 D5 记录）：幻灯片页用 raw paper-200/ink-900 对，标题可读，但语义 token 文字（--text-muted 等）在浅底上洗白——「deck 是否整页翻 noir」是设计判断，留 open question |
| proposal-palette.png / proposal-demo.png | 归档后的 palette.html / demo.html | ✓ 改链 `../../tokens/midnight.css` 后完整渲染，与批准稿一致 |

**字体核验**：所有截图中 display/正文为 EB Garamond（oldstyle 数字可见），
标签/元数据为 IBM Plex Sans/Mono，中文为 Noto Serif SC，手写行为 Caveat——
自托管字体全部真正生效，无 fallback serif。

回归保证：glue 选择器只命中 `[data-theme="midnight"]` 子树；default 截图
（journal/portfolio/slide01）与既有视觉一致。

## Open questions

1. 组合时 photo-filter / grain 层级目前保留 mode 侧（见上「层叠关系」）。若希望
   midnight 页面上所有照片一律用 midnight 的冷调 filter，需要设计侧拍板，未擅自改。
2. 提案 README 建议长期把 `data-mode="dark"` 改名 `data-surface="film"`（breaking），
   本次未动，等用户点头。
3. **SlideDeck.dc.html 的 midnight 行为**（见 D7 表 ⚠ 行）：七页幻灯片混用 raw
   paper/ink 对与语义 token，midnight 下部分文字洗白。机械修法存在
   （paper-200→surface-page、ink-900→text-display，:root 下等值、默认不变），
   但「deck 作为印刷成品是否应翻 noir」是设计判断，待拍板。
4. **legacy `tokens/color.css` 与 `colors.css` 并存**：两套命名体系（paper-0..4 vs
   paper-100..500）语义名互相覆盖，templates 经 ds-base.js 两者都吃。本次只在
   glue 里堵住唯一实质破损（--text-body）。是否退役 color.css、或让 ds-base.js
   只挂 styles.css（会改变 templates 默认渲染的墨色 ink-1→ink-800），属系统层
   决策，待拍板。ds-base.js 还引用不存在的 `tokens/fonts.css`（404 静默，无实际
   影响），同一并处理时顺带清掉即可。
5. **CRLF 检出 + SRI**：见 D7「预存 bug」第 1 条末段。建议在 repo 根加
   `.gitattributes`（`*.js text eol=lf` 或至少 vendor 目录），否则 Windows
   autocrlf=true 的机器上 kits/cards 永远渲染不了。改根目录文件超出本次授权。
6. `_ds_bundle.js` 的 sourceHashes 与 `_ds_manifest.json`（globalCssPaths 未含
   midnight.css）需由 lead 的 ds 工具重新生成（前一轮已记录，仍然有效）。
