# SNOWLINE 雪线 — KUNLUN light theme (proposal v2)

航天器白色仪表板、工业实验室、工程控制台、blueprint 光。
`[data-theme="snowline"]` 作用域；dark 默认主题一字未动。

（v2：回应"没有终端感"——终端没有消失，它从暗房 CRT 变成了嵌在浅色台面上的
LCD 屏：浅灰蓝液晶 + VT323 + 可见扫描线 + 内凹 bezel。页面同时铺回 40px 蓝图网格。）

## Files

- `palette.html` — 完整色卡：raw palette + semantic roles + HUD/texture/button states
- `demo.html` — ops dashboard（对应 `ui_kits/dashboard` 的结构）
- `ROLLOUT-NOTES.md` — 并入正式系统时的整合记录（审计、决策、偏差）

tokens 已并入正式 `tokens/snowline.css`（proposal 目录保留为设计档案）。

## 关键判断

1. **glow 改背光**：dark 的霓虹辉光在白板上会变成廉价发光字。雪线里 glow 收缩成
   "机加工按钮背后的 LED"——≤24px、低透明度。品牌识别改由切角、hairline、HUD tick 承担。
2. **终端感 = LCD，不是深色**：log/terminal 场景用内凹液晶屏（`--lcd-*`：
   #C9D6D8 玻璃 + #1C3038 段码墨 + VT323 + 扫描线 + 顶部玻璃反光）。浅色机台上的
   真终端就长这样——示波器、数控面板、航天器 LCD。Terminal/CodeBlock 组件整合时
   走 LCD 处理，不开 dark island。
3. **层级不反相，改重排**：page 是浅钢灰（操作台），panel 更白（仪表板浮在台面上），
   inset 更深（铣出来的井）。
4. **cyan 原 ramp 不动，角色下沉**：填充仍用 cyan-500（点亮的按钮，配深 navy 文字），
   文字/链接角色降到 600/700 保对比度。amber/red 同理。
5. **全部品牌纪律保留**：切角、全 mono、Orbitron/VT323、HUD ornament、ASCII、
   大写标签、stepped motion、禁紫——一条没动。

## 待拍板

- primary button 我给了两种：cyan-500 填充+深字（"点亮"感，带背光）和 cyan-600 填充+白字
  （更克制）。demo 里两种都放了，全局推广时留一种。
- LCD 玻璃色 #C9D6D8 偏青灰；也可以更绿（老式段码屏 #C4D0C0）或更蓝（现代屏）。
  看 demo 里 System log 的实际感觉再定。
- sidebar/void 用 snow-400 浅钢灰。混合形态（深色侧边栏）违背"完整亮色主题"，没选。
