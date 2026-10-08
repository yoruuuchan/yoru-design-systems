# YOZORA 夜空 — Aozora dark theme (proposal v1)

盛夏正午推到盛夏夜晚：深蓝夜空、水面、月光、冷色通透玻璃，信号蓝不变。
`[data-theme="yozora"]` 作用域，默认 light 主题不受影响。

## Files

- `tokens.css` — raw ramps (night / glow / moon) + full semantic remap + glass/shadow/gradient dark siblings
- `palette.html` — 完整色卡：raw palette + semantic roles + glass/shadow/glow/gradient
- `demo.html` — App 首页的夜间版（对应 `ui_kits/app` HomeScreen）

## 关键判断

1. **玻璃不反白**：light 的玻璃是 30–68% 半透明白；夜版改为 7–17% 月光蓝白 + 同一模糊阶梯，
   边缘高光改为月光色（更冷、更暗）。玻璃仍然必须叠在渐变上。
2. **太阳下班，月亮接班**：`--sun` 的 accent 角色由 `--moon`（淡半格的暖黄）接任，
   暖色只做 chip/焦点环，绝不做背景。ember 渐变在地平线下留了一点日落桃色余烬。
3. **hover 方向反转**：light 里 hover 变深；夜版 filled button hover 变亮（blue-400），像被点亮。
4. **禁纯黑**：投影全部是深海军蓝 `rgba(1,6,16,…)`，与 light 版“禁纯黑投影”同一条纪律。

## 待拍板

- README 目前写明 "Light-only system"。若 YOZORA 通过，README 要改写为双主题，light 仍是默认。
- `--glass-bg-sun` 在夜版映射为 moon 色（名字保留兼容）。整合时是保留别名还是全局改名 `--glass-bg-warm`？
- ember（地平线余烬）是最大胆的一笔：保留，还是夜空保持纯蓝？
