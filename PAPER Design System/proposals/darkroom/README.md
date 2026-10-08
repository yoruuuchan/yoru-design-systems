# DARKROOM 暗房 — PAPER full dark theme (proposal v1)

暗房、黑纸摄影集、银盐相纸、深夜艺术画册。覆盖整页、长文、作品集与摄影页面。
`[data-theme="darkroom"]` 作用域；现有 `data-mode="editorial|analog|dark"` 语义一字未动。

## Files

- `tokens.css` — noir（黑纸）/ silver（银盐墨）两条 raw ramp + 全量 semantic remap + 材质暗化
- `palette.html` — 完整色卡：raw palette + semantic roles + 材质 token
- `demo.html` — photo essay 页面顶部（对应 `templates/photo-essay` 的结构）

## 关键判断

1. **不是反相，是换纸**：light 的 paper ramp（#FCFBF8→#D3C7AC）对应一条黑纸 ramp
   noir-100→500（#2C2820→#0C0A07），同一暖色家族，不碰纯黑。ink ramp 对应银盐白
   silver-100→500，不碰纯白。
2. **rust = 暗房安全灯**：文字级 accent 提亮到 rust-300（rust-500 在黑纸上发闷），
   rust-500/700 留给印章、填充与按压。每页至多两次的纪律不变。
3. **grain 翻转**：multiply 在黑纸上不可见，暗房颗粒是"光"不是"脏"——
   改 `screen` 混合、0.06 强度，银盐颗粒。
4. **与 film base 连续**：`--film-base #1B1A16` 正好落在 noir-300 与 noir-400 之间——
   contact sheet 的深色不再是孤岛，而是这套主题的源头。

## 命名与整合方案（待拍板）

现状：`data-mode` 同时承担两件事——stock/voice（editorial/analog）和 surface（dark = 胶片基底）。
建议整合时把两个轴分开：

- `data-mode="editorial|analog"` — 不变，管纸张性格与标签声音
- `data-theme="darkroom"` — 新轴，管明暗；可与 editorial / analog 叠加（analog × darkroom = 暖调暗房，grain .08 + mono 标签，本提案未展开）
- 现有 `data-mode="dark"`（film base）语义保留、行为不变；长期建议改名 `data-surface="film"`，
  让 "dark" 这个词完全归属主题轴。改名是 breaking change，需要你点头。

## 待拍板

- 暗房版的中文并行行（CJK）目前用 silver-200；要不要像 light 一样再小一级？
- tape 在黑纸上保持牛皮纸色（透明度降到 .5）。也可以换成深色和纸胶带——你定。
