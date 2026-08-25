/* Stress fixture · 负例：故意在宋体（--font-title）标题里用一个已知不在思源宋
   subset 里的字。跑出来必须报「字体子集漏字」错误——一声不吭反而说明 T3 的
   逐字回退检测退化了。

   审计结果（tools/font_audit.mjs 跑出来的）：Source Han Serif SC 四档
   （400/500/700/900）全部**没有**「丟」U+4E1F 和「磳」U+78F3。这两个字在
   GBK 但不在 GB2312，不在 subset 的 3500 常用 + GB2312 口径内。所以：
     - 用在 Heading（--font-title = 思源宋）里 → 触发；
     - 用在 body / marginnote / callout（--font-body 在卡片上也是宋，字体也是宋）→ 也触发。

   跑：node ui_kits/xiaohongshu/export_cards.mjs --check --fixture bad-font
   期望：出现 "字体子集漏字：Source Han Serif SC 未覆盖 N 个字符"，
        样本里能看到 丟(U+4E1F) 或 磳(U+78F3) 之类。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "verbatim",
  kicker: "AI NEWS",
  issue: "二〇二六年八月 · 第二十一期",
  cover: {
    date: "2026.08", issueNumber: "21",
    title: "丟掉那些没进 subset 的字",
    subtitle: "「丟」这个字没进 subset。",
    tags: ["负例", "字体"], aside: "别照抄"
  },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "丟掉那些字不能就这么算了" },
    { t: "body", text: "上面这行标题里的「丟」和这一段里的「磳」，都在 GBK 但不在 GB2312，思源宋 subset 没打进去。渲染时 Chrome 会去系统字里找回退——GPT sandbox 的 Linux 环境往往就在这里露馅。" }
  ],
  end: { headline: "缺字清单见 tools/font_audit.mjs", lines: ["重子集要 python + fonttools", "有问题直接问，我都看"] }
};
