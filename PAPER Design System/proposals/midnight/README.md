# MIDNIGHT 午夜蓝 — PAPER full dark theme (proposal v2)

深蓝黑纸摄影集、近蓝晒相纸、银盐墨、一点 rust 对位。覆盖整页、长文、作品集与摄影页面。
`[data-theme="midnight"]` 作用域；现有 `data-mode="editorial|analog|dark"` 语义一字未动。

（v1 的暖棕 darkroom 已被否决并移除；v2 把整个暗色基底从暖色家族搬到 indigo。）

## Files

- `tokens.css` — 已并入正式 `tokens/midnight.css`，本目录不再保留副本
- `palette.html` — 完整色卡：raw palette + semantic roles + 材质 token
- `demo.html` — photo essay 页面顶部（对应 `templates/photo-essay` 的结构）
- `ROLLOUT-NOTES.md` — 整合执行记录（层叠关系、组件审计、偏差与待拍板）

tokens 已并入正式 `tokens/midnight.css`（proposal 目录保留为设计档案）。

## 关键判断

1. **不是反相，也不是暖纸重染**：纸 ramp 换成午夜蓝 noir-100→500（#232A3A→#080C14，~222°），
   不碰纯黑；墨换成冷银 silver-100→500，不碰纯白。版式纪律一条不动。
2. **rust 成为唯一的暖色对位**：蓝底上 rust 比在米色底上走得更远，所以"每页至多两次"
   的纪律反而更重要。文字级 accent 仍是 rust-300，印章填充仍 rust-500。
3. **grain 翻转 screen**：深蓝底上 multiply 不可见，颗粒是光不是脏（银盐颗粒，.06）。
4. **tape 离开牛皮纸**：kraft 是暖棕，与新基底冲突——换成和纸蓝灰 .45。
5. **film base 保持暖黑**：contact sheet 的 #1B1A16 是胶片不是纸——午夜蓝页面上
   一条暖黑的 film strip 是有意的材质对位，不统一掉。

## 命名与整合方案（待拍板）

现状：`data-mode` 同时承担两件事——stock/voice（editorial/analog）和 surface（dark = 胶片基底）。
建议整合时把两个轴分开：

- `data-mode="editorial|analog"` — 不变，管纸张性格与标签声音
- `data-theme="midnight"` — 新轴，管明暗；可与 editorial / analog 叠加（analog × midnight = 暖标签+mono 的夜间档案感，本提案未展开）
- 现有 `data-mode="dark"`（film base）语义保留、行为不变；长期建议改名 `data-surface="film"`，
  让 "dark" 这个词完全归属主题轴。改名是 breaking change，需要你点头。

## 待拍板

- silver 墨的冷度：现在 silver-200 #D9DFEA 带明显蓝相。如果要更"银盐"一点可以回温半档。
- rust 在蓝底上的剂量：demo 里是 Fig. 01 + 日期章两处。蓝底让它更显眼，如果你觉得
  两处太多，可以只留 Fig. 编号。
