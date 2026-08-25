# UI kit · 小红书图文台

一条线性内容流 → 自动分页 → N 张 1242×1656 卡片 → 渲染验收 → 出 PNG。
这是 YORU 小红书内容的生产界面，也是唯一被认可的生产路径。

| 文件 | 作用 |
| --- | --- |
| `content.js` | 一篇真实推文，写成 `blocks[]` 数组。换内容只改这个文件。 |
| `blocks.jsx` | 把 block 类型映射到 YORU 组件，并解析正文里的行内标记。唯一解释 block 语义的地方——**字段契约写在 readme 的「内容契约」一节，两边必须同步**。 |
| `paginate.jsx` | `usePagination()` — 离屏渲染一个真的 `<Page>`，从它身上读版心尺寸与块间距，再逐块测高、贪心装页。 |
| `workbench.jsx` | 工具条（变体 / 尺寸 / 缩放）+ 页面画布。 |
| `export_cards.mjs` | 无头浏览器出图 + 渲染验收。**出图只有这一条路。** |
| `render_check.mjs` | 上面那个脚本的 `--check` 模式，单独拿出来给 CI 或者手动跑。 |
| `fixtures/` | 压力测试内容，改分页器或间距 token 之后全量过一遍。 |

## 生产闭环

**HTML 只是中间产物。没跑渲染验收之前不算完成。**

```bash
node ui_kits/xiaohongshu/export_cards.mjs                 # 渲染 → 验收 → 出 PNG
node ui_kits/xiaohongshu/export_cards.mjs --check         # 只验收，不出图
node ui_kits/xiaohongshu/export_cards.mjs --all-fixtures  # 全量回归
node ui_kits/xiaohongshu/export_cards.mjs --all-variants --jpg --zip
```

产物落在仓库根的 `out/<内容>-<变体>/`：`page-01.png` …、`contact-sheet.png`（全部页面的缩略拼图）、
`render-report.json`。**contact sheet 要人眼过一遍**——脚本能测出溢出和缺图，测不出「这页读起来不通」。

首次使用需要 `npm install`（只装 playwright；浏览器用本机已有的 chromium）。

## 分页规则

版心尺寸不写在代码里。`usePagination()` 拿工具台即将用于每一页的那个 `pageProps`，
离屏渲染一个一模一样的 `<Page>`，然后从它的内容列上读 `clientWidth` / `clientHeight` /
`paddingX` / `paddingY` / `rowGap`，再读 `<PageFooter>` 实际起始位置，算出真正的可用高。
**代码里不允许存在第二份手抄的版面数字**——之前 `workbench.jsx` 抄了一份（gap 32、版心 1050、
可用高 1338），三个数字全部偏松且方向一致，分页器以为每页多出约 230px，真实内容必然溢出。

装不下就开新页，**永不切分单个 block**——一段代码、一张表、一个步骤列表永远完整地待在一页里。
落单在页尾的标题会跟着下一块走，但只在下一页装得下它们俩的时候才跟；装不下就宁可让标题留在原页，
也不把下一页顶爆。要把长列表拆开时，用 `StepList start={n}` 手动续号。

一个 block 自己就比整页还高（超高竖图、几十行代码）时，分页器无能为力，渲染验收会明确报出来，
让你去裁局部或者拆多页。**不会替你缩小它**——手机上看不清的证据等于没有证据。

## 渲染验收查什么

- 卡片实际渲染尺寸 === 声明尺寸；
- 内容不溢出版心、不压到页脚；
- 图片全部加载成功；字体没有回退到系统兜底字（半宋半黑那种）；
- 每页内容占用率，普通内容页低于 55% 报告警（封面、结尾页、金句 / 纯图页、末页豁免）；
- 封面必填字段齐不齐（缺 `issueNumber` / `tags` / `aside` / `subtitle` 会渲染成大空白）；
- 文字型截图渲染宽度不低于内容列宽的 90%；
- 每页上限：荧光笔 1 条、手写旁批 1 条、`Callout` 1 个、`Tag` 3 个；
- 组件包加载错误、页面 console 错误。

静态那关（raw hex、非法 import、字体白名单）在 Claude Design 里是 `check_design_system`。
**它没有命令行替身**：`_adherence.oxlintrc.json` 的规则全挂在 `no-restricted-syntax` 上，
社区版 oxlint 不实现这条，直接跑会报错。在 Claude Design 之外，静态那关靠读 CLAUDE.md 和
readme 自己守；渲染这关在哪都跑得了。

## fixtures

`fixtures/index.json` 记着每份 fixture 应有的结局。`clean` 的必须零错误零告警；
`bad-` 开头的是**负例，跑出来就该报问题**——它们一声不吭反而说明检查退化了。
改动分页器、间距 token 或任何组件高度之后，跑 `--all-fixtures` 全量过一遍。

## 导出

工具条上那个按钮叫「打印 / PDF」，它就只做这件事：走浏览器打印，一页一张，
`@page` 已经设成卡片原尺寸。**它不是出图**——出图是上面那条 Node 命令，PNG 原生 1242×1656，
@1x，字体是自托管思源。以前那个按钮叫「导出图片」但实际调 `window.print()`，
手机上看到的是 A4 打印预览，这次改掉了。

## 换变体

工具条切换即可。四个变体共用同一份内容，但**分页结果不同**——`--flow-block` 是变体 token
（Signal / Lab 56px，Special 76px，Studio 100px），分页器从 computed style 读它，所以改密度
不需要改分页器。工具台也接 URL 参数：`?variant=studio&size=1080x1350&fixture=long-tutorial&scale=1&bare=1`。
