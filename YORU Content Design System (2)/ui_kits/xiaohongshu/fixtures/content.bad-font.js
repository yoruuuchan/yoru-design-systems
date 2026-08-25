/* Stress fixture · 负例：故意在宋体（--font-title）标题里用一个已知不在思源宋
   subset 里的字。跑出来必须报「字体子集漏字」错误——一声不吭反而说明 T3 的
   逐字回退检测退化了。

   审计结果（tools/font_audit.mjs 跑出来的）：Source Han Serif SC 四档
   （400/500/700/900）全部**没有**「捋」U+634B。Source Han Sans SC 有。所以：
     - 用在 Heading（--font-title = 思源宋）里 → 触发；
     - 用在 body / marginnote / callout（--font-body 在卡片上也是宋，字体也是宋）→ 也触发。

   跑：node ui_kits/xiaohongshu/export_cards.mjs --check --fixture bad-font
   期望：出现 "字体子集漏字：Source Han Serif SC 未覆盖 N 个字符"，
        样本里能看到 捋(U+634B) 或 癖(U+7656) 之类。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "verbatim",
  kicker: "AI NEWS",
  issue: "二〇二六年八月 · 第二十一期",
  cover: {
    date: "2026.08", issueNumber: "21",
    title: "捋一下这里少了什么字",
    subtitle: "「捋」这个字没进 subset。",
    tags: ["负例", "字体"], aside: "别照抄"
  },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "给没跟进的朋友捋一下时间线" },
    { t: "body", text: "上面这行标题里的「捋」和这一段里的「癖」，思源宋 subset 都没打进去。渲染时 Chrome 会去系统字里找回退——GPT sandbox 的 Linux 环境往往就在这里露馅。" }
  ],
  end: { headline: "缺字清单见 tools/font_audit.mjs", lines: ["重子集要 python + fonttools", "有问题直接问，我都看"] }
};
