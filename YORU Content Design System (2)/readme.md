# YORU Content Design System

Yoru 个人内容的排版系统。服务两个渠道：**小红书图文卡片**与**微信公众号文章**。
一套母语言 + 四个子变体，共用 token 与组件；变体之间只在强调色、装饰细节、封面结构、标签形状和信息密度上分开。

这不是一套通用网站 UI 系统。这里没有导航栏、没有表单、没有 Toast——有的是标题、正文、引用、代码、提示词、状态标签、对比表、步骤、截图、图注、参考、封面和署名。

气质一句话：**铅字房**。冷调青白纸、宋体铅字、文武线、汉字页码、直排书脊。像一份自己排的技术周刊，不像 AI SaaS 的落地页。

## 来源与出处

用户没有提供 codebase、Figma 文件或 logo。系统按用户的书面 brief 与多轮问答建立，后经一次「冷纸铅印」方向重构定稿：

- **确认过的决定**：中文标题思源宋体 / 正文思源黑体（卡片上正文也走宋体，见「字体」）；英文 Inter，代码 JetBrains Mono；页面底青白纸 `#F2F5F5`；家族色靖青 `#2E4A68`；四个变体强调色取自用户给的冷色板（蓝 / 青 / 薄荷 / 珊瑚红）；变体差异限定在强调色 / 装饰细节 / 封面排版 / 标签形状；小红书出图 1242×1656；公众号输出必须是可直接粘贴的行内样式。
- **字体现状**：Inter 4.1 与 JetBrains Mono 2.304 自托管（`assets/fonts/`）；思源黑体（300/400/500/700）与思源宋体（400/500/700/900）为用户提供的自托管 subset（`fonts/`，pyftsubset：3500 常用字 + GB2312 一二级 + 拉丁 + 标点，每档 ≤1.5MB、合计 ≤12MB；改子集后跑 `node tools/font_audit.mjs` 验证覆盖）。`@font-face` 全部在 `tokens/fonts.css`，消费方只 link `styles.css`，不走任何 CDN。**不要用 Google Fonts 的切片方案接思源**——约 700 个 FontFace 对象会把 DOM 出图拖到超时。
- **没有 logo，也没有文字字标**：标识是报头的**月相行**（见「四个签名动作」）。任何位置都不再渲染 `YORU` 字样——工具台窗口标题除外，那是工具界面不是内容。
- **待补**：语气样本（CONTENT FUNDAMENTALS 里的语气规则是提案）、真实截图素材。

---

## 四个子变体

| 变体 | 内容类型 | 强调色 | 装饰 | 密度 |
| --- | --- | --- | --- | --- |
| **Signal** | AI 新闻、新工具、产品更新、快测与对比 | 蓝 `#3186FF` | 直角标签，实线分隔，无手绘 | 行高 1.72 · 块间距 56 |
| **Lab** | AI / Vibe Coding 教程、工作流、Skills、提示词、排错 | 青 `#00A9BB` | 直角标签，虚线分隔，代码块比重高 | 行高 1.68 · 块间距 56 · 信息量最大 |
| **Studio** | 创作项目、视觉实验、过程与复盘 | 薄荷绿 `#45C496` | 胶囊标签，圆角块，手绘下划线 | 行高 1.9 · 块间距 100 · 留白最多 |
| **Special** | FPV、摄影、设备、创作生活、实验性内容 | 珊瑚红 `#FF6B78` | 胶囊标签微倾斜，手绘下划线，可用反白封面 | 行高 1.85 · 块间距 76 |

四个都取自同一块冷色板：三个冷色加一个唯一的暖色留给最个人的内容。**整套系统里没有紫色、没有橙色、没有黄色。**
**家族线索一**：报头满月吃变体强调色，其余月相永远是墨——变体换色，月相行的构成不变。
**家族线索二**：`--yoru-blue` 靖青 `#2E4A68` 在四个变体里都不变，只用于印章位细节与工具台主按钮，永远不跟强调色抢戏。

密度是两个变量：`--lh-body` 管段落内部的质地，`--flow-block` 管块与块之间的空气。
两个都在 `tokens/variants.css`（块间距那组在文件末尾，只作用于卡片作用域——公众号文章的
块间距是按 677px 栏宽调的，不跟着变体走）。分页器从 computed style 读 `--flow-block`，
所以调密度不需要碰分页器，改完跑一遍渲染验收就行。

切换变体只需要 `data-yoru="lab"`，不需要换组件、不需要改文案结构。

---

## CONTENT FUNDAMENTALS

> 以下为提案，等待确认。

**人称**：写作者用「我」，读者用「你」，但不要每句都喊。默认是「我做了什么、结果如何」，不是「你应该怎么做」。
- ✅ 「三个月里我把这套流程跑了四十多遍，这是留下来的部分。」
- ❌ 「你需要掌握这五个技巧才能真正用好 AI！」

**结论先行**。标题给结论，第一段给判断依据，中间给过程，最后给下一步。不写「让我们先来了解一下……」。

**具体数字与环境**。凡是「快」「好」「稳」都要跟上条件：跑了多少次、什么机器、什么模型版本。这是这套内容可信度的全部来源。

**承认失败**。踩坑、炸机、白折腾一天都写进去，用 `Callout kind="warn"` 或 `StatusLabel status="stop"` 标出来。不修饰成「探索」。

**中英混排**：产品名、命令、文件路径、模型名保留英文原样，不翻译、不加书名号。中英之间留一个半角空格。全大写只用于 mono 字体的角标与内容标签（`AI NEWS` `VIBE CODING`），正文里不出现全大写英文单词。

**标点**：中文全角，代码与命令内部保持原样。破折号用 `——`。列表不加句末句号，段落加。

**不使用 emoji**。一个都不用。状态用 `StatusLabel`，层级用编号。

**标题写法**：小红书封面 14 个汉字以内，是一句陈述或一个反直觉的事实，不是问句、不是悬念。

**结尾**：一句下一步 + 一句邀请，两行封顶。不写「三连」，写「工具都在评论区」「有问题直接问，我都看」。

**长度**：小红书单页正文 2–4 段。**整篇页数由内容决定，不是配额**——Signal 快讯 4–7 页很正常，
长教程跑到十页也正常，六到九页只是常见区间，不要为了凑数注水或者硬压。公众号 1500–3000 字。
真的长到装不下就拆成系列，用 `<CoverOverprint issueNumber="04">` 把汉字卷号变成封面上最抢镜的图形。
**结尾页 `<EndCard>` 是可选的**——四页的快讯不必强塞一页「下期再见」。**尾页装不满有下限**：
最后一个内容页占用率必须 ≥ 45%，低于则渲染验收告警（分页器无条件豁免尾页的老规则在 F4 收紧了——
上一轮实拍出过一页 31% 静默通过、页面下 2/3 全空）。修法：把尾段回填上一页，或并入 EndCard.lines。
纯图 / 金句独占页仍然免检（`SPARSE_OK` 块类型）。

**内容模式**：这一节以上的全部写作规则（人称、结论先行、无 emoji、封面 ≤14 字、结尾两行封顶）
**只适用于 `contentMode: "editable"`**，也就是文案由系统一起产出的情况。

用户给定稿的时候，在 `content.js` 顶层写 `contentMode: "verbatim"`。这时系统只做三件事：
分页、排版、缩放媒体。**不得增删改任何文字、标点、emoji 或顺序**，也不得「顺手润色」。
用户写了 emoji 就留着 emoji，标题十八个字就十八个字——装不下是排版要解决的问题，不是改字的理由。
需要改字的时候先问，不要自己动手。

**日期与页码的口径**：出现在页面家具上的数字一律汉字——页码 `〇三 / 〇八`、卷号 `卷十二`、日期 `二〇二六年八月`（`cnPage` / `cnIssue` / `cnDate` 负责转换）。内容里的数字（测试次数、版本号、价格）保持阿拉伯数字。

---

## VISUAL FOUNDATIONS

**排版是主角**。这套系统没有插画、没有图形语言、没有背景纹理。识别度来自：宋体铅字与冷纸的反差、月相行与文武线构成的页面家具、汉字页码与直排书脊、以及大面积留白。

### 四个签名动作

识别度不靠 logo，靠这四个每篇都出现、位置永不改变的小动作。个人化程度**适中**：认得出是同一个人排的，但不喧宾夺主。

**① 报头 `<Masthead>`** —— 每个内页顶部：左边一行**月相**（新月→上弦→满月→残月，满月吃变体强调色，其余永远是墨），右边**汉字页码**（仿宋 `〇二 / 〇七`），下面一对**文武线**（粗线 + 细线隔 4px）。没有刊名、没有栏目名、没有日期。`<CoverOverprint>` 用同款报头；`<CoverType>` 传 `kicker` 可选开启；`<EndCard>` 把月相竖排放在书脊位。**全系统没有文字字标**——结尾页左下角只有一条仿宋 note（日期 · 页数）作收尾。

**② 着重号 `<Emphasis>`** —— 中文印刷的重点符，打在词下方。系统的主要强调手段，也是为什么全系统没有下划线、没有彩色正文。只打在扛整句的那两三个字上。内容流里写成 `·两三个字·`（见「内容契约 · 行内标记」）。

**③ 荧光笔 `<Marker>`** —— 关键短语背后的浅色带，压在行盒下部约 42%。**每页只准一条**，渲染验收会数。英文、代码标识符、带引号的字符串用它，不用着重号。内容流里写成 `==关键短语==`。

**④ 手写旁批 `<MarginNote>`** —— 歪 1.4 度的便签，写文章本身不会说的那句话。每页最多一条（验收会数），内容必须非承重——读者真正需要的信息属于 `<Callout>`。内容流里是 `{ t: "marginnote", text }`。

### 页面家具（签名动作之外的一件）

- **书脊栏 `<Page spine>`**：右边距的直排仿宋窄条（`.4em` 字距），装 `日期 · 卷号 · 系列名`。日期从报头迁到这里。
- 页心落月水印已取消（`watermark` 属性保留为空操作）。

### 封面：套印靠这几件东西撑住

`<CoverOverprint>` 的版心是一块居中的竖排堆栈。只给 `title` 的话，堆栈只有标题那一行，
上下各留掉半页——**这就是大空白封面的成因**，不是留白语言，是缺件。三件必填 + 一件可选：

| 字段 | 作用 | 缺了会怎样 |
| --- | --- | --- |
| `title` | 标题两遍套印，页面主体 | 没有封面 |
| `subtitle` | 仿宋一行，把标题压住 | 标题悬空 |
| `tags`（1–3 个）+ `aside` | 底部那条横排，堆栈的下沿 | 堆栈只剩标题，版心塌一半 |
| `image` + `imageCaption?` + `imageRatio?` | 可选。有图时排在标题块下方 | 无图形态，见下一段 |
| `issueNumber` | 仍然接受（报头页码对与书脊字符串会读），但**封面不再渲染巨字**；缺了不影响封面版面 | 只影响报头页码可读性 |

**为什么撤了巨字卷号**：以前 `issueNumber` 会渲染成 `--fs-cover * 4.6`（约 590px）的巨字塞在
右下角、被页缘裁切当图形。对笔画多的号（04 / 12 / 17）尚可，对笔画少的（1=「一」、2=「二」、
10=「十」）裁切后只剩起笔顿笔，读者根本看不出是号。号仍在——它在报头的汉字页码对里、也在
书脊那一行——封面就不再当它的广告牌了。

**有图形态**：`image` 传截图 / 照片 src，可选 `imageCaption`（一行短说明）、`imageRatio`（默认
`"16 / 10"`）。图走 Figure 的 frame treatment 风格——细线框、`--radius-media`、`objectFit:cover`、
无阴影——**保证套印标题仍然是页面最响的东西**。什么时候放：有主图的证据帖、单机器/单地点的
记录合适；纯观点、纯教程用无图封面就够。

**无图形态**：不用做任何事——不填 `image` 就没有。plate 会把 title/subtitle/tags/aside 居中撑住，
渲染验收的 `FILL_FLOORS.cover`（30%）判定过关（完整封面通常落在 35–48% 之间）。**不要**为了填空
加装饰图形或多余色块——CLAUDE.md 那条「不做卡片模板感」是硬规则。

渲染验收查这四件必填，也量标题堆栈占版心的比例：完整封面在 35% 上下（这套语言本来就留白多），
只有标题的会掉到 12% 左右，两条告警一起报。**如果 fill 量不出来**（找不到 `data-yoru-plate`、
plate 里没有孩子、或 plate 高度为 0）——不再是 warn 而是 error「封面占用率无法测量」。
上一轮 GPT sandbox 出的 render-report 里 cover fill 是 null 就是从这个洞漏过去的：
`fill < FILL_FLOORS.cover` 在 fill=null 时直接不比较，警告静默过关。第四轮 F5 把每一步测量塞进
显式判断，「量不出来」和「量出来是 0」不共用一个通道。

结尾页 `<EndCard>` 是可选的，见 CONTENT FUNDAMENTALS 的「长度」。

**不做「卡片模板感」装饰。** 硬规则：

- **不用左侧 accent bar，不用彩色 `border-left`。** `<Heading mark>` 是标题**上方**的墨色横线；`Callout` 是一整块底色加一个彩色文字标签；`Quote` 用上下两条横线夹住。
- **不用时间轴式竖线做版块装饰。** `StepList` 步骤之间是横向发丝线；只有 `Timeline` 的轴线例外——那是它的内容。
- **不用侧边色条区分类别或制造层级。** 类别靠等宽大写标签 + 一条短横线，层级靠字号、字重、留白和横线。
- **唯一的阴影在 `PromptBlock` 和 `CodeBlock` 上，而且是内凹的**（`--shadow-inset`，冷色低光 + 白色高光）。这两块是「读者要抄走的东西」，压进纸里比浮在纸上准确。**不要扩散到别处**：青白纸上凸起的新拟态会塌成普通投影。页面、卡片、Callout、表格一律无阴影。

**字体**
- 标题、金句、封面：**思源宋体**（`--font-serif-display`，自托管 subset，回退 Songti SC / SimSun），900 / 700 / 500。
- 正文分渠道：**卡片正文是宋体**（1242px 画布扛得住铅字质感），**文章正文是黑体**（16px 思源宋在微信里太重）。`--font-body` 在 `.yoru-card` 作用域里被覆写成宋体，语义不变。
- 引言、书脊、页码、提示词正文：**仿宋**（`--font-fangsong`，本地 STFangsong / FangSong，回退思源宋）——系统里的「抄写体」。
- 代码、角标、版本号：**JetBrains Mono**，开 `tabular-nums`。该栈**以中文黑体栈结尾，不以 `monospace` 结尾**——等宽字全是纯拉丁字库，混排标签里的中文必须落到黑体。
- 英文术语与表头：**Inter**（`--font-sans-latin`）。`--font-body`（文章）是 Latin 优先、CJK 兜底：`Inter, var(--font-sans-cjk)`。
- **CJK 栈头写死家族名**（思源两家 + PingFang / Songti / YaHei / SimSun 兜底）：`ui-serif` 这类关键字在 Chrome/macOS 会分码段回退，同一句一半宋一半黑。每个显式家族都有 `@font-face` 声明，本地家族用 `local()`-only；**思源两家用 `url()`-only**——第四轮修复把 `local()` 从 Source Han Sans/Serif SC 彻底删掉了。之前那两组 face 把 `local()` 放在 url 之前是为了省字节，代价是任何装了同名但不完整的思源（Linux 发行版常见）的宿主会让浏览器命中 local 并跳过自托管子集，「捋」等 GB2312 二级字里应有的字就会走系统回退，而 Node 端读 repo woff2 的 cmap 检测还是绿的——检测端 vs 渲染端读的不是同一份字体。规矩：**校验对象必须是实际生效对象**。
- 卡片与文章是两套数值、同一套语义（`--fs-body` 卡片 40px / 文章 16px）。不是等比缩放。

**颜色**
- **页面底是青白纸 `#F2F5F5`（`--surface-page`），不是纯白。** 纯白 `--paper-1` 只给卡片内的局部面（图片框、表格底）。深色只出现在代码块（`#20293C`）和 `tone="ink"` 的封面 / 结尾页。
- 墨阶偏冷带海军蓝（`--ink-1` `#1B2127` 到 `--ink-6` `#C1D7EF`），正文 `--ink-2`，次要 `--ink-3`，弱化 `--ink-4`。没有暖灰。
- 一页最多一个强调色 + 一个语义色。语义色（`--ok/--warn/--stop/--note`）只出现在 `StatusLabel` 与 `Callout` 上，正文永不着色。
- **没有黄色**：「注意」玫红 `#C15A52`，「避坑」深红 `#A62733`，靠深浅区分。「备注」用深蓝。
- **没有渐变**、没有玻璃拟态、没有发光边框、没有彩色阴影。

**背景**：纯色。不用图片背景、不用纹理、不用网格底纹。

**装饰细节**
1. **编号双轨**：页面家具走汉字仿宋（页码 `〇三 / 〇八`、卷号、日期），内容编号走等宽补零 accent 色（`SectionMark` 的 `02 / 06`、图注 `图 01`、参考 `[1]`）。
2. **内容标签**：等宽大写小字（`AI NEWS`），只作为内容元素出现在文章 kicker、`SectionMark`、图谱 kicker 里——**不再进报头**。
3. **手绘下划线**：`--hand-underline`，只有 Studio 与 Special 能用，一页最多一次，只用在标题上。
4. **标题上方的横线**：`<Heading mark>` 的墨色横线，压在页面第一个标题上方，不是每个标题都加。

**间距与网格**
- 卡片画布 1242×1656，左右边距 96、上下 104。带书脊的页右侧再让出 `--sp-6`。四个变体边距一致。
- 单栏。多栏只出现在对比表内部。块间距 `--flow-block` 是变体 token：卡片上 Signal / Lab 56px、Special 76px、Studio 100px；文章一律 32px。
- 唯一允许突破边距的是 `Figure treatment="bleed"` 配合 `<Page bleed>`。

**圆角**：默认接近直角（`--radius-1` 2px）。圆角是 Studio / Special 的变体特权。**不要出现 8px / 12px 的通用圆角卡片**。

**边框与分隔线**：三档全部横向——`--hair` 发丝线、`--rule` 强分隔、`--bar` 标题横线；报头文武线是粗细一对。Lab 的分隔线用虚线。

**透明与模糊**：内容完全不透明；只有工具台吸顶工具条用半透明 + blur。导出物里没有任何透明或模糊。

**图片处理**（`Figure` 三种 treatment）：`frame` 截图默认（发丝边 + 极轻投影）；`inset` 示意图（灰底无边无影）；`bleed` 作品图（出血无边无影无圆角）。缺图渲染明确占位文字，**不生成假图**。

**照片用 `cover`，文字截图用 `contain` 或 `ratio="auto"`。** `fit` 默认 `"cover"`，会把图裁到填满框——
照片没问题，推特 / 聊天记录 / 代码截图会被裁头去尾，读者看到的是一段没头没尾的话。
文字类截图一律 `ratio="auto"`（不设固定比例，按图片自身比例排）或 `fit="contain"`。

**截图在卡片上的渲染宽度不得低于内容列宽的 90%。** 装不下的时候允许一张证据截图独占整页；
再装不下就裁出关键局部、或者拆成多页——**不允许继续缩小**。手机上看不清的证据等于没有证据。
渲染验收会测这一条，低于 90% 报告警。

**证据截图 = 完整语义单元**（走 verbatim 更严格）。裁切的三条硬约束：

1. 一张图里的每条推文 / 评论 / 消息**必须完整**：正文完整，互动栏可留可去；不得只剩头像和用户名、
   正文全无，也不得下方露出下一条评论的头像残影。
2. 裁局部时**切口必须落在条目之间的分隔处**——推文之间的分割线、评论之间的间距、消息之间的
   气泡缝隙。不能斜切、不能割半个头像、不能留半行文字。
3. 太长优先**拆多页**（一页一张大图完全合法），其次裁到语义边界；**禁止**为塞下而缩小到不可读。

**verbatim 模式的媒体口径**：决定引用某条就完整引用；放不下宁可整条不放，不得斩半。改稿子的
权限本来就没有；对截图动裁刀跟对文字动笔性质一样，得先问。

contact sheet 亲眼过一遍时，除了看版式，也要**逐张查边缘残影与语义完整**——这一条 render_check
测不出来（它测的是宽度与加载），得人眼过。

**动效**：内容里没有动效。工具台交互 `.12s` 线性色彩过渡一档。

**Hover / Press**（只存在于工具台）：hover 边框变墨色；选中态反白；press 颜色加深不形变；链接 `--text-accent` + accent 下边框。

**固定元素**：卡片页里没有固定元素。工具台的工具条 sticky。

---

## ICONOGRAPHY

**这套系统基本不用图标。** 需要"指示"的地方用排版解决：

| 需求 | 解法 | 不要用 |
| --- | --- | --- |
| 步骤序号 | `StepList` 的编号列 | 圆圈数字图标 |
| 状态 / 结论 | `StatusLabel`（圆点 + 中文标签） | ✅ ❌ ⚠️ 或勾叉图标 |
| 列表项 | `EndCard` 用 `—`，`ReferenceList` 用 `[1]` | 项目符号图标 |
| 内容标签 | accent 短横线 + mono 大写文字 | 分类图标 |
| 强调 | 着重号 / 荧光笔 | 箭头、星标 |

**Unicode 用法**：只允许 `—` `·` `/` `[1]`。**Emoji：零。**

**图谱里的图形语言**：节点角色靠形状与描边区分，状态靠一个 7px 圆点，方向靠一种三角箭头，全部由 CSS 与计算出的 SVG path 生成，没有图标文件。

**如果以后确实需要图标集**：Lucide，2px stroke、`currentColor`。加之前先确认。

---

## DIAGRAM SUBSYSTEM

同一套母语言的图谱分支。用于解释关系、流程、系统——不是配图，是论证。

**同家族**：同一套字体（标签与数字 mono，标题宋体，节点正文黑体）、同一套发丝线、同一条 accent 纪律。变体切换照旧走 `data-yoru`。

**节点角色靠描边与填充，不靠颜色**：八个角色（input / process / human / agent / tool / data / output / external）各有一套描边粗细、线型与填充，**绝不变成八种颜色**。

**颜色只有三种含义**：accent = 机器与数据流；墨色 = 人与步骤；语义色 = 只在状态点上（`verified` / `failed` / `unknown`，7px 圆点）。

**连线四种**：`flow` 实线墨色 · `data` 实线 accent · `dep` 虚线发丝 · `weak` 点线无箭头。走线全部是圆角正交肘。

**网格固定**：列宽 240 / 间隙 88，行高 92 / 间隙 44。**引擎不测量文字**，同一份数据永远画出同一张图；标签超约 14 个汉字会溢出，这是刻意约束。

**分组**是发丝框 + 顶线标签；**批注**是图里唯一允许写句子的地方（一图最多两条，落在外侧留白）。`kicker` / `title` / `caption` / `source` 四段家具固定，**有数据的图必须有 `source`**。

**变量声明位置**：基础色板放 `:root` 与 `[data-dg-theme="dark"]`；凡值里带 `var(--dg-…)` 或 `var(--accent…)` 的派生别名一律声明在 `.yoru-diagram` 上，否则在 `:root` 当场按默认蓝算死、变体和暗色都搬不动。`tokens/colors.css` 里的 `--text-accent` 等同理在 `[data-yoru]` 上补声明。

**窄容器不缩字，改竖排**：`stack="never"` 强制横版，`stack="always"` 直接竖版。

**给 Agent 的输入契约**

```js
{ nodes: [{ id, label, role, status?, meta?, index?, col?, row?, colSpan? }],
  edges: [{ from, to, kind?, label?, both?, arrow? }],
  groups: [{ label, nodes: [id], kind? }],
  annotations: [{ at: id, text, side? }],
  layout: "layered" | "tree" | "grid" }
```

只产出数据，不产出坐标、颜色或 SVG。一张图不超过 9 个节点。详见 `ui_kits/diagrams/README.md`。

**渠道适配**：图谱按容器宽度等比缩小、永不放大。小红书栏宽放得下 6 个节点；公众号 677 会缩到约 60%，**那里优先用 `Timeline`**。

---

## 内容契约（`blocks[]`）

一篇小红书图文就是一个 `window.YORU_POST` 对象，写在 `ui_kits/xiaohongshu/content.js`
（压力测试内容写在 `fixtures/content.<名字>.js`，用 `--fixture <名字>` 跑）。
**这一节是唯一的字段来源；改 `ui_kits/xiaohongshu/blocks.jsx` 就要同步改这里。**

```js
window.YORU_POST = {
  variant: "lab",                 // signal | lab | studio | special
  contentMode: "editable",        // editable | verbatim —— 见 CONTENT FUNDAMENTALS「内容模式」
  kicker: "VIBE CODING",          // 内页报头开关兼分类标签
  issue: "二〇二六年八月 · 第四期",  // 页脚那行小字（汉字口径，见下）
  cover: {                        // 见「封面」；三件必填 + image 可选
    date, issueNumber, title, subtitle, tags: [], aside,
    image?, imageCaption?, imageRatio?   // 可选封面图
  },
  blocks: [ /* 下表 */ ],
  end: { headline, lines: [] }    // 结尾页，可选，见「长度」
};
```

**`issue` 字段一律汉字。** 页面家具的数字用汉字（CLAUDE.md 硬规则）——`issue` 会渲染进
`PageFooter` 与 `EndCard`，属于页面家具的一部分。格式跟书脊、日期口径一致：

- ✅ `"二〇二六年八月 · 第四期"`（`cnDate` + `cnIssue` 的自然文本形态）
- ✅ `"二〇二六年八月 · 卷十四"`（想用「卷」代替「期」也可以）
- ❌ `"2026.08 / 04"`（阿拉伯数字进页脚，破坏「铅字房」调子）
- ❌ `"Aug 2026 · Issue 04"`（拉丁化，同上）

需要机读的数字（版本号、价格、跑次）**继续用阿拉伯数字**——那是「内容」，不是「家具」。
两个规矩不冲突。

`blocks[]` 是一条线性流，**不分页、不排版**——那是 `usePagination()` 的事。

| `t` | 必填 | 可选 | 渲染成 |
| --- | --- | --- | --- |
| `heading` | `text` `level`(1/2/3) | `mark` 标题上方墨线 · `kicker` 等宽大写小字 | `<Heading>` |
| `lede` | `text` | — | `<Lede>` 仿宋引言，一篇一个 |
| `body` | `text` | `size:"small"` · `muted` | `<Body>` |
| `callout` | `text` | `kind:"note"｜"warn"｜"stop"｜"ok"｜"plain"` · `title` | `<Callout>` 文武线框 + 单字标记 |
| `quote` | `text` | `cite` `source` | `<Quote>` |
| `code` | `code` | `filename` `lang` | `<CodeBlock>` **正文不解析行内标记** |
| `prompt` | `text` | `model` | `<PromptBlock>` **正文不解析行内标记** |
| `steps` | `items:[{title, body?}]` | `start` 续号用 | `<StepList>` 汉字编号 壹貳叁 |
| `compare` | `columns:[]` `rows:[[]]` | `highlight` 列号 · `caption` | `<CompareTable>` |
| `figure` | — | `src` `ratio` `fit` `treatment` `index` `caption` `placeholder` | `<Figure>` 见「图片处理」 |
| `refs` | `items:[{title, source?, url?}]` | — | `<ReferenceList>` |
| `marginnote` | `text` | `tone:"tint"｜"plain"` · `tilt` | `<MarginNote>` 手写旁批 |
| `labels` | — | `tags:[]` · `status:[{status, label?}]` · `tone` `filled` | `<Tag>` / `<StatusLabel>` 横排 |
| `section` | `index` | `total` `label` `size:"lg"` | `<SectionMark>` 区段号 |
| `timeline` | `items:[{date, label, meta?, body?, status?}]` | `title` `kicker` `caption` `source` `orientation` | `<Timeline>` |
| `diagram` | `nodes:[]` `edges:[]` | `groups` `annotations` `layout` `title` `kicker` `caption` `source` `legend` `grid` `stack` | `<Diagram>`，卡片上一律等比缩小 |

`figure` 无 `src` 时渲染明确占位，不生成假图。`diagram` 的节点 / 连线字段见 DIAGRAM SUBSYSTEM。
`status` 取值：`new` `ok` `warn` `stop` `note` `beta`。

### 行内标记

正文里的两个签名动作是句子内部的东西，没法当成一种 block：

```js
{ t: "body", text: "三个月里我把这套流程跑了·四十多遍·，==留下来的部分==就是这篇。" }
```

- `·贴着字·` → `<Emphasis>` 着重号，中文强调的默认手段；
- `==贴着字==` → `<Marker>` 荧光笔，给英文、代码标识符、带引号的字符串。

**分隔符里侧不许有空格。** 这条规则是为了跟标点共存：`·` 是这套系统里合法的正文字符，
但它当分隔符用的时候永远写成 ` · `（两侧带空格）。贴着写才算标记，隔开写就是标点。
`code` 与 `prompt` 的正文**永不解析**——那两块是读者要原样抄走的东西。

行内标记在 `heading` `lede` `body` `callout` `quote` `steps` `figure.caption` `marginnote` 里生效。

**`@handle` 不可断（T5）**。正文里出现 `@` + 字母数字下划线的段（`@thsottiaux`、`@a_long_name`），
`inline()` 会自动包一层 `white-space: nowrap`——handle 走到窄行边缘时整块换到下一行，不会
被切成 `@thsot | tiaux`。这条规则**只作用于 @handle**：`#话题标签` **不做特殊处理**，因为按
契约话题本来就不该进图。

### 金句怎么处理

情绪承重句是内容里最容易被排版糟蹋的一块——写的人觉得这句最重要，排的人却把它排成普通段落。
三种落点，按承重强弱选一种：

- 句中两三个字扛整句 → `·着重号·`（每句只打一次；见硬约束）
  ```js
  { t: "body", text: "四十次之后我才明白，·差的不是模型，是我问的方式·。" }
  ```
- 关键短语要读者一眼扫到 → `==荧光笔==`（每页只准一条；英文 / 代码标识符 / 带引号的短语用它）
  ```js
  { t: "body", text: "改需求的时候==只改一层==，其余保持不动。" }
  ```
- 独立成句的一句话金句 → `quote` 块（有作者归属就填 `cite` / `source`；没有就留空）
  ```js
  { t: "quote", text: "快乐的日子，结束了。" }
  ```

**不要三种叠用**：一句话既打着重号又刷荧光笔，读者会以为这是两件事；金句既做 quote 又打
着重号，就把金句本身削弱了。选一种，其余留白。

### 每页上限（渲染验收会数）

| 上限 | 为什么 |
| --- | --- |
| 荧光笔每页 **1** 条 | 第二条会把第一条抵消——读者只认页面上最亮的那一块 |
| 手写旁批每页 **1** 条 | 两张歪便签就不像手写了，像模板 |
| `Callout` 每页 **1** 个 | 一页只能有一件「停下来看」的事 |
| `Tag` 每页 **3** 个 | 再多就成了标签云 |

一页一个 `Heading level={1}`，一篇一个 `Lede`。这两条验收不数，但照样是规矩。

### `blocks[]` 表达不了的

不是漏掉，是刻意不给：`<CoverType>` 另一种封面（封面由 `post.cover` 决定，一篇一个）、
`<Page bleed>` 出血页与 `Figure treatment="bleed"` 的配套（那是页级属性，不是块级）、
`<MarginNote float>` 浮动旁批（浮动版走绝对定位，在流里不占高度，分页器会把它当零高块）。
需要这些就是需要新版式——按「作业规则 6」先问，不要自己动手加 block 类型。

---

## 索引

**根目录**：`styles.css`（唯一入口，只有 `@import`）· `readme.md` · `SKILL.md` · `thumbnail.html`

**tokens/**：`fonts.css` 自托管 Inter / JetBrains Mono / 思源两家 subset 的 `@font-face` + 五条字体栈（含仿宋） · `colors.css` 墨/纸/靖青/语义 · `typography.css` 卡片与文章两套字号（卡片作用域覆写 `--font-body` 为宋体） · `spacing.css` · `layout.css` · `borders.css`（含文武线粗细 `--wu`） · `variants.css` 四变体覆盖 · `diagram.css` · `base.css`

**components/**（31 个，全部 `export function`）

| 目录 | 组件 |
| --- | --- |
| `page/` | `Page`（书脊） `PageFooter` `Masthead`（含 `MoonPhases` / `cnPage` / `cnIssue` / `cnDate`） |
| `covers/` | `CoverType` `CoverOverprint` `EndCard` |
| `typography/` | `Heading` `Body` `Lede` `Caption` `Emphasis` `Marker` |
| `blocks/` | `Callout` `Quote` `CodeBlock` `PromptBlock` `StepList` `CompareTable` `ReferenceList` `MarginNote` |
| `labels/` | `Tag` `StatusLabel` `SectionMark` |
| `media/` | `Figure` |
| `diagram/` | `Diagram` `DiagramNode` `DiagramEdge` `DiagramGroup` `DiagramAnnotation` `DiagramLegend`，`diagramLayout.js` 纯几何 |
| `timeline/` | `Timeline` |

**ui_kits/**：`xiaohongshu/` 图文台（`blocks[]` → `usePagination()` 自动分页 → `export_cards.mjs` 渲染验收与出图 → `render_check.mjs` 单独验收 → `fixtures/` 压力测试） · `wechat/` 公众号排版（冻结行内样式导出；文武线用 border 表达，因为冻结白名单没有 height） · `diagrams/` 图谱系统

**assets/vendor/**：React / ReactDOM / Babel standalone 的本地副本。所有 HTML 都引本地，**不走 CDN**——
这台机器的国际线路会塌到 20KB/s，unpkg 一挂工具台就整页打不开，headless 出图更是随机超时。

**templates/**：`xhs-post/` 六页小红书骨架 · `wechat-article/` 677px 文章骨架 · `diagram-card/` 图谱卡骨架——三份都已带书脊、汉字页码与新报头。

**guidelines/**：25 张基础规范卡（Colors / Type / Spacing / Brand / Borders / Diagram），identity 卡是 `brand-moons.html`。

---

## 生产流程

**小红书**（闭环，不许抄近路）：

```
blocks[] → usePagination() 自动分页 → selftest → 真实渲染 → contact sheet → 亲眼检查 → 修正 → 再渲染 → PNG @1x
```

装不下就开新页，**永不切分单个 block**；落单在页尾的标题跟着下一块走，但只在下一页装得下它们
俩的时候才跟。出图只有一条路：

```bash
node ui_kits/xiaohongshu/export_cards.mjs            # selftest + 渲染 + 验收 + 出 PNG
node ui_kits/xiaohongshu/export_cards.mjs --check    # selftest + 只验收
node ui_kits/xiaohongshu/export_cards.mjs --selftest # 只跑环境自证
```

**HTML 只是中间产物，没跑渲染验收不得宣称完成。** `check_design_system` 是静态 lint，它读源码，
不知道页面空了 60%、图挂了、内容压到页脚上——那是第二关的事。产物在 `out/`：卡片 PNG、
`contact-sheet.png`（全部页面缩略拼图，人眼过一遍）、`render-report.json`。
改了分页器、间距 token 或任何组件高度，跑 `--all-fixtures` 全量回归。

**T2 · 渲染保真自证（selftest）**。GPT sandbox 与本机之间可能有几何漂移——之前观察到 sandbox
出的封面套印偏移 ~55px（正确是 dy -10 / dx +14），但那份环境的 `--check` 全绿。原因：既有验收
查空页 / 溢出 / 挂图，查不出「这个环境把渲染搞坏了」。selftest 是第二道门：

- `fixtures/content.golden.js` 是固定样张（一页套印封面 + 一页含 heading/lede/body 的内容页）；
- `fixtures/golden.geometry.json` 存了这份样张在正常环境下 8 项 CSS-决定的几何指标（封面 ghost 层
  dy/dx、`--fs-cover` / `--lh-cover`、内容列 rowGap、Masthead 到内容列的距离、PageFooter 顶边、
  正文行高）；
- 每次导出 / `--check` **先跑 selftest**：渲染样张 → 量同一组指标 → 与 golden 对比 → 超差立刻中止，
  报错信息里直说「渲染环境失真，此环境出的图不可交付」。

想重量基准（升级 tokens、换字体、改了 CoverOverprint / Page / PageFooter）时跑
`--capture-golden` 重刷一次。文件很小，看着 diff 检查。

**F3 · 三层哨兵**：selftest 除了 8 项几何和 FontFace 加载状态，还有三层针对思源 Serif 子集的
不变量守卫（`export_cards.mjs` 的 `runSelftest`）：
1. **静态**：`tokens/fonts.css` 里 Source Han 行不许出现 `local(` —— F1 规矩被回退就在这里拦下。
2. **运行时**：MEASURE_GOLDEN 强制 `document.fonts.load` 全部 4 档 Serif 后，`performance.getEntriesByType('resource')`
   必须能看到 4 个 SourceHanSerifSC-*.woff2 的 fetch（且字节数与磁盘接近）——本地被 local 劫持或 url 挂了都不会有对应 fetch。
3. **子集不变量**：Node fontkit 读 4 个 Serif woff2 的 cmap，正哨兵「捋」(U+634B) 必须在每档里存在，
   负哨兵「丟」(U+4E1F, GBK-only) 必须每档都不在——子集本身回归也拦。

> Chromium 的 `document.fonts.check(family, ch)` 是**家族级**的，不 per-glyph 查；实测对随便一个假家族 + 任何字都返回 true，
> 所以早期"用 check() 检查每个字符是否覆盖"的思路走不通，改成上面这三层。

**验证记录（防伪测试）**：故意破坏环境跑 selftest 必须变红——已跑过四种破坏：
(a) 临时把 `--lh-cover` 从 1.06 改到 1.30 → `lh_cover_px` 差 32px、`content_footer_top_from_card`
差 20+ px，红；(b) 临时把 `tokens/fonts.css` 里思源宋两条 `url(...)` 都改成 `url("nope.woff2")`
→ 字体加载失败、`body_line_height_px` 与 `content_masthead_to_first_block` 双双超差，红；
(c) 第四轮：把 4 档 Serif `url()` 前缀改为 `../fonts/BROKEN-` → 4 条 resource-timing 哨兵报「Regular/Medium/Bold/Heavy 没被浏览器加载」+ 字体加载失败/回退，红；
(d) 第四轮：把 Serif 400 的 `url()` 前面重新塞回 `local("Source Han Serif SC"),` → 静态哨兵报「fonts.css 出现了 `local(` 于 Source Han 行——F1 规则被回退」，红。

**T3 · 字体子集审计 + 逐字回退检测**。`tools/font_audit.mjs` 读 `fonts/` 下 8 个 woff2 的 cmap，
按每档 weight 报告覆盖率与缺字清单（GB2312 一二级作为基线；也可 `--char <字>` 查单字）。
render_check 在每次渲染里也做逐字检查：把页面上真正落在思源宋 / 思源黑上的每个 CJK 码位，
在 Node 一端用 fontkit 读 woff2 union cmap 交叉验证，缺字直接报 error（附字符、码位、所在页、字重）。
既然 F1 让浏览器只能从 `url()` 加载我们的子集，Node 读的 cmap 就是浏览器真的能画的字集；F3
哨兵保证 F1 不被回退，两者合起来"渲染端为准"就有了地基。

**公众号**：同一份 `blocks[]` → 677px 文章版式 → 冻结计算样式为行内 `style` → **富文本复制**（range 选中 +
`execCommand("copy")`，同时写 text/plain + text/html，公众号编辑器吃后者）。工作台里点复制粘贴即成品；
外部 agent（没有剪贴板的 sandbox）跑 `node ui_kits/wechat/export_wechat.mjs` 出
`out/wechat-article.frozen.html`——**自包含冻结文件**，正文区全行内样式、零 class / 零 var()，
顶部自带同款复制按钮，任何机器打开点一下即可粘贴。**预览 HTML 不是交付物**，见 `ui_kits/wechat/README.md`。

**给 Agent 的作业规则**
1. 先选变体，只写 `data-yoru`，不要改 token。
2. 内容写成 `blocks[]`，交给 `usePagination()`。**不得手工排每一页**——手排绕过了分页器，
   也绕过了渲染验收，视为验收失败。同理，不要用浏览器打印当出图。
3. 一页一个 `Heading level={1}`，一篇一个 `Lede`。
4. 一页最多一个 `Callout`，最多三个 `Tag`。
5. 页面家具的数字用汉字（`cnPage` / `cnIssue` / `cnDate`），内容数字用阿拉伯数字。
6. 需要新样式先问「现有组件的 prop 能不能表达」，再问「是不是该加 block 类型」，最后才动 token。
7. 要画关系或流程，输出 `{nodes, edges}` 交给 `Diagram`，不要手写 SVG。
