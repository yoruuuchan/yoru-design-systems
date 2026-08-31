# YORU Content Design System — 工作约定

这套系统已经建完并调过多轮。改动前先读 `README.md`（设计指南与清单）和 `SKILL.md`。
每次改完调 `check_design_system`，修到无告警为止。

## 两道关，不是一道

`check_design_system` 是静态 lint：它读源码，查 raw hex、非法 import、字体白名单。
它不知道页面空了 60%、图片挂了、内容压到页脚上、截图缩到手机上看不清、渲染环境把套印偏移
搞成了 55px。那些要跑第二关：

```bash
node ui_kits/xiaohongshu/export_cards.mjs --selftest     # 只跑环境自证（golden geometry + 字体健康）
node ui_kits/xiaohongshu/export_cards.mjs --check        # selftest + 渲染验收
node ui_kits/xiaohongshu/export_cards.mjs --all-fixtures # 改了分页器/间距/组件高度就跑全量
node tools/font_audit.mjs                                # 字体子集覆盖率 + 缺字清单
node ui_kits/wechat/export_wechat.mjs                    # 公众号侧：出自包含冻结 HTML
```

**小红书内容的闭环是：`blocks[]` → `usePagination()` → **selftest** → 真实渲染 → contact sheet →
亲眼看 → 修正 → 再渲染 → PNG。HTML 只是中间产物，没跑渲染验收不得说"做完了"。**
不得手工排每一页（绕过分页器就绕过了验收），不得用浏览器打印当出图（那出的是 A4 预览）。
出图只有 `export_cards.mjs` 一条路，PNG 原生 1242×1656 @1x。

**selftest 是防伪线**。GPT sandbox 出的图曾经封面套印偏移 ~55px（正确 dy -10 / dx +14），
但那环境的 `--check` 全绿——普通检查查空页 / 溢出 / 挂图，查不出"这个环境把渲染搞坏了"。
每次导出 / `--check` 先跑 selftest：渲染 `fixtures/content.golden.js` → 量一组 CSS 决定的
几何指标 → 与 `fixtures/golden.geometry.json` 对比 → 超差立即中止。字体加载失败也一并报——
CSS `line-height:1.06` 是 CSS 决定的值，font 挂了它不变，光靠几何量不到，要单独查 FontFaceSet。

**公众号侧的复制是富文本，不是 text/plain**。`navigator.clipboard.writeText()` 写 text/plain，
粘进公众号编辑器出来是源码。工作台按钮与 `out/wechat-article.frozen.html` 顶部按钮都用
range 选中 + `document.execCommand("copy")`——同时给剪贴板写 text/plain + text/html，
公众号编辑器吃后者。`ClipboardItem` 双格式在别的编辑器里更干净，对公众号编辑器 paste 实测
不如 execCommand 稳。改这条路径前先在真编辑器里粘一遍看。

**`blocks.jsx` 与 readme「内容契约」是一份东西的两半。** 前者是唯一解释 block 语义的代码，
后者是唯一写下字段的文档。加 block 类型、改字段、动行内标记，两边一起改，否则下一个 agent
只能靠读源码猜——图谱子系统有契约、blocks 没有，就是上一轮留下的坑。

**`check_design_system` 只存在于 Claude Design 里，而且没有命令行替身。** 别的环境（另一个
agent、CI、纯命令行）拿到这套系统调不到它，也**跑不了 `_adherence.oxlintrc.json`**——实测过：
那份配置的设计规则（raw hex、raw px、字体白名单）全挂在 `no-restricted-syntax` 上，
社区版 oxlint 没实现这条规则，配置里还带一个 Claude Design 私有的 `x-omelette` 字段。
所以在 Claude Design 之外，静态那关**只能靠读规则自己守**（本文件 + readme 的 VISUAL
FOUNDATIONS）。能跑的那关是渲染验收，任何有 Node 的地方都跑得了：
`node ui_kits/xiaohongshu/export_cards.mjs --check`。
**不要假装跑过了 `check_design_system`。**

## 几条踩过坑的硬规则

**CJK 栈头指向思源、写死家族名。** `--font-sans-cjk` 头是 `"Source Han Sans SC"`，
`--font-serif-display` 头是 `"Source Han Serif SC"`，PingFang / Songti / YaHei / SimSun 全都在
栈里作为回退。拉丁栈才可以只写通用关键字。以前这里写的是「只写 `ui-serif` 就够，渲染和列
Songti SC 完全相同」——实测 Chrome/macOS 上 `ui-serif` 的中文回退是分码段的，同一句里一半宋体
一半黑体，标题最明显。所以家族名必须列出来。每个显式家族都要有一条 `@font-face` 声明；本地
家族用 `local(...)`-only 的形式（不加载文件）；思源两家已接自托管 subset（`fonts/`，
sans 300/400/500/700、serif 400/500/700/900），每档一条 `url()` 声明。

**思源两家的 `@font-face` 只允许 `url()`，禁止 `local()` 劫持。** 以前那两组 face 把 `local(...)`
排在 url 前面，本意是省下自托管字节。教训：**渲染确定性 > 省流量**。任何装了同名但不完整的
「思源宋 / 思源黑」（Linux 发行版常见、GPT sandbox 之类的服务端环境常见）的宿主，浏览器会
直接命中 local 并跳过自托管 subset 下载；而 Node 端 fontkit 读的是 repo 里的 woff2 cmap，
「捋」这类字自托管子集里有，local face 里没有，检测端喊全绿、渲染端出回退字。第四轮修复把
`local()` 从思源两家彻底删掉——`fonts.css` 里 sans 300/400/500/700 + serif 400/500/700/900
共八条只留 `url()`。其他显式家族（PingFang / Songti / YaHei / STFangsong / FangSong 等）继续
`local()`-only。**校验对象必须是实际生效对象**：selftest 用 `document.fonts.check` 打正/负哨兵
（正靶「捋」U+634B 四档 Serif 必须 true；负靶「丟」U+4E1F 必须 false），一旦反了立即中止导出。

**不要用 Google Fonts 的切片方案接思源。** 它会声明约 700 个 FontFace 对象，把小红书出图截图
这一步从瞬间拖到超时。用 pyftsubset 自己子集化（3500 常用字 + GB2312 一二级 + 拉丁 + 标点），
每档 ≤ 1.5MB，全部合计 ≤ 12MB（实测 11.2MB——宋体补齐 GB2312 二级后从 10MB 涨上来的，
别为省体积把二级砍回去：宋体缺二级字曾让标题里的「捋」静默回退成系统宋）。改动子集后必跑
`node tools/font_audit.mjs`。

**`--font-mono` 必须以中文黑体栈结尾，不能以 `monospace` 结尾。** 等宽字全是纯拉丁字库，
中英混排标签里的中文若落到系统等宽默认字，macOS 上会变成宋体。

**测量 DOM 必须是渲染 DOM 的克隆。** 分页器不允许自己维护一份版面参数。`usePagination()`
拿工具台即将用于每一页的那个 `pageProps`，离屏渲染一个一模一样的 `<Page>`，从它的内容列上
读 `clientWidth` / `clientHeight` / padding / `rowGap`，再读 `<PageFooter>` 的实际起点。
以前 `workbench.jsx` 手抄了一份（gap 32、版心 1050、可用高 1338），三个数字全部偏松、方向一致，
分页器以为每页多出约 230px，真实内容必然溢出。**代码里出现第二份手抄的布局数字，就是下一个 bug。**
`components/page/Page.jsx` 的 `data-yoru-flow`、`PageFooter.jsx` 的 `data-yoru-footer`、
`CoverOverprint.jsx` 的 `data-yoru-plate` 是测量抓手，不要删。

**不做「卡片模板感」装饰。** 不用左侧 accent bar、彩色 border-left、时间轴式竖线做版块装饰，
不靠侧边色条区分类别或造层级。结构交给排版层级、空间关系、色块、细线和文字标签。

**阴影只准出现在 `PromptBlock` 和 `CodeBlock` 上，而且是内凹的。** 这两块是「读者要抄走的
东西」。不要扩散到别处：青白纸上新拟态的白色高光看不见，凸起处理会塌成普通投影。

**页面底是青白纸 `#F2F5F5`（`--surface-page`），不是纯白。** 纯白 `--paper-1` 只给卡片内的
局部面。页面家具上的数字一律汉字仿宋（页码 〇三 / 〇八、卷号、日期 `cnPage`/`cnIssue`/`cnDate`），
内容里的数字保持阿拉伯数字。

**四个签名动作不要动。** 报头就是识别本身：月相行（新月→上弦→满月→残月，满月吃变体
强调色，其余永远是墨）+ 汉字页码 + 文武线，内页一律；`<CoverOverprint>` 同款报头，
`<CoverType>` 传 `kicker` 可选开启，`<EndCard>` 用竖排月相。**全系统没有文字字标**——结尾页
左下角只有一条仿宋 note（工具台窗口标题除外，那是工具界面不是内容）。书脊栏装
日期·卷号·系列名。
着重号只打扛整句的两三个字；荧光笔每页一条；手写旁批每页一条且必须非承重。

**不走 CDN。** react / react-dom / babel standalone 都在 `assets/vendor/`，所有 HTML 引本地。
这台机器的国际线路会塌到 20KB/s，unpkg 一挂工具台整页打不开、headless 出图随机超时。
`templates/*/support.js` 里那三处 unpkg 是 Claude Design 生成的运行时（文件头写着 do not edit），
不要手改，改了会被下次生成覆盖。

**用户给定稿时用 verbatim 模式。** `content.js` 写 `contentMode: "verbatim"`，系统只分页、排版、
缩放媒体，不得增删改任何文字 / 标点 / emoji / 顺序。readme 里那套写作规则（无 emoji、封面 ≤14 字、
结尾两行封顶）只适用于 `"editable"`。想改用户的字，先问。

## 变体

Signal / Lab / Studio / Special 四个子变体只在强调色、装饰细节、封面排版、标签形状和密度上有差异，
其余完全一致。不要让某个变体长成另一套视觉语言。
密度是两个 token：`--lh-body`（段落内部）和 `--flow-block`（块之间，卡片作用域，
Signal / Lab 56 · Special 76 · Studio 100）。分页器从 computed style 读后者，改密度不用碰分页器。

## 杂项

`out/` 积累每次全量渲染的产物（PNG、frozen HTML），跑多了能到几十 MB，手动清就行。
