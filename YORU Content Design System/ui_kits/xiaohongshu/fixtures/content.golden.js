/* Golden fixture · T2 渲染保真自证的样张。
   跟内容契约的其它 fixture 不同：这份的内容不会变——一旦改字，
   golden.geometry.json 里那一组基准数字就得跟着重量。所以别顺手改。

   两页：一页套印封面，一页内容页。内容页刻意用到 heading + lede + body 三种，
   足以让 selftest 量出 --flow-block(rowGap)、Masthead 到内容列顶的距离、
   PageFooter 顶边位置、正文行高。封面页量套印 ghost 层的 dy/dx 与 --fs-cover。 */
window.YORU_POST = {
  variant: "lab",
  contentMode: "editable",
  kicker: "GOLDEN",
  issue: "二〇二六年八月 · 第〇〇期",
  cover: {
    date: "2026.08", issueNumber: "0",
    title: "样张不许改",
    subtitle: "改了 selftest 就得重量。",
    tags: ["golden", "selftest"], aside: "自证防线"
  },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "自证样张" },
    { t: "lede", text: "这一页的高度、行距、间距都进了 golden.geometry.json。跑 selftest 就是把这一页再量一遍。" },
    { t: "body", text: "改这份 fixture 之前，先想清楚是否要重量 golden。绝大多数改动都不应该动它。" }
  ],
  end: { headline: "改字之前请把这条读完", lines: ["改内容 = 重量 golden", "先跑 --capture-golden 再提"] }
};
