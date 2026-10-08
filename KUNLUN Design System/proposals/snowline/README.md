# SNOWLINE 雪线 — KUNLUN light theme (proposal v1)

航天器白色仪表板、工业实验室、工程控制台、blueprint 光。
`[data-theme="snowline"]` 作用域；dark 默认主题一字未动。

## Files

- `tokens.css` — snow（基底）/ ink（文字）两条新 ramp + 全量 semantic remap + 光效重写
- `palette.html` — 完整色卡：raw palette + semantic roles + HUD/texture/button states
- `demo.html` — ops dashboard（对应 `ui_kits/dashboard` 的结构）

## 关键判断

1. **glow 改背光**：dark 的霓虹辉光在白板上会变成廉价发光字。雪线里 glow 收缩成
   "机加工按钮背后的 LED"——≤24px、低透明度。品牌识别改由切角、hairline、HUD tick 承担。
2. **层级不反相，改重排**：dark 是 void→panel→elevated 越走越亮；雪线把 page 设为
   浅钢灰（操作台），panel 更白（仪表板浮在台面上），inset 更深（铣出来的井）。
3. **cyan 原 ramp 不动，角色下沉**：填充仍用 cyan-500（点亮的按钮，配深 navy 文字），
   文字/链接角色降到 cyan-600/700 保对比度。amber/red 同理：500 只做填充，文字用 700。
4. **全部品牌纪律保留**：切角、全 mono、Orbitron/VT323、HUD ornament、ASCII、
   大写标签、stepped motion、禁紫——一条没动。

## 待拍板

- primary button 我给了两种：cyan-500 填充+深字（"点亮"感，带背光）和 cyan-600 填充+白字
  （更克制）。demo 里两种都放了，全局推广时留一种。
- sidebar/void 用 snow-400 浅钢灰。也可以让 sidebar 保持 dark（深色侧边栏 + 浅色内容区
  的混合形态，像一些真机台）——但那违背"完整亮色主题"，我没选。
- VT323 在浅底上是蓝图 LCD 感。如果你觉得 CRT 时刻必须深色，可以把 Terminal 组件
  单独豁免为 dark island。
