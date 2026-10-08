# NIGHTPOOL — core dark theme (proposal v1)

凌晨两点的旧电脑、黑暗泳池、CRT 荧光、空无一人的 Windows 时代档案馆。
`[data-theme="nightpool"]` 作用域；frost paper 默认主题一字未动。

## Files

- `tokens.css` — abyss（基底）/ phosphor（文字）两条新 ramp + semantic remap + 阴影/bevel/glow/滤镜
- `palette.html` — 完整色卡：raw palette + semantic roles + bevel/shadow/glow/pattern/filter
- `demo.html` — archive 桌面夜间版（对应 `ui_kits/archive` 的结构）

## 关键判断

1. **ink 裂成两个**：浅色版里 `--ink` 身兼文字与描边/投影。夜里这两个角色必须分开——
   文字墨 = phosphor（CRT 荧光白，绝不纯白），线/投影墨 = abyss-950（Y2K 边框保持近黑）。
   窗口在深色桌面上仍然靠 1px 深色边框 + bevel 立体化，这是 Y2K 语法，不能丢。
2. **基底不是反相**：frost paper 的对应物是 abyss ramp（深 teal-navy，夜里的池水），
   chrome 不下架，只往 ramp 深处走（700/800/900 做面板与任务栏）。
3. **夜里谁发光**：CRT 发光逻辑放大 —— bondi 标题栏、bubblegum（入夜变霓虹）、
   overexposed 文字辉光都加强；sodium 是"百叶窗缝里的路灯"，仍然最小角色但在夜里
   成为唯一的暖色错位。
4. **壁纸不重画，只关灯**：tile/caustic/grain 三个 SVG 资产原样使用，用透明度 token
   （.30/.22/.16）压暗；grain 在夜里读作 CRT 雪花。
5. **新增一个签名滤镜**：`--filter-flash`（夜间闪光灯照片：硬对比、暗房间、褪色），
   与白天的 `--filter-overexposed` 对位。

## 待拍板

- 标题栏我用了 bondi-600（比白天深一档）。如果你要"黑屋子里唯一亮着的窗口"更跳，
  可以回到 bondi-500。
- neon 五色目前只出现在 marquee/visited link。夜里要不要放宽到少量 UI 点缀？我倾向不。
- README 目前写明 "Light-only system... none is planned"。通过后需要改写这段。
