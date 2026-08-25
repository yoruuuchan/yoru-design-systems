/* Stress fixture · 三张竖长社交截图，正确写法（应当零错误零告警）。
   考的是 P1-2 / P1-3：文字型截图一律 ratio="auto"，按自然比例排；
   装不下的原图先裁局部再放，不靠缩小解决——渲染宽度必须保持在内容列宽的 90% 以上。
   做坏的写法见 content.bad-media.js。 */
window.YORU_POST = {
  variant: "special",
  contentMode: "verbatim",
  kicker: "FIELD NOTES",
  issue: "二〇二六年八月 · 第十一期",
  cover: { date: "2026.08", issueNumber: "11", title: "那条把我劝退的回复",
    subtitle: "证据全在，一个字没改。", tags: ["记录", "对话"], aside: "截图原样贴" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "先看原话" },
    { t: "figure", src: "fixtures/assets/shot-tweet.png", ratio: "auto", index: 1,
      caption: "原推。整条完整，没有裁切。" },
    { t: "body", text: "这条我看了三遍才明白它在说什么：能不能说清触发条件，是判断一个 skill 有没有写完的唯一标准。" },
    { t: "figure", src: "fixtures/assets/shot-chat-crop.png", ratio: "auto", index: 2,
      caption: "当天的对话，截取了关键四轮。完整版在评论区。" },
    { t: "body", text: "原图是一整屏二十多轮，按自然比例排会超过一页可用高度。这种时候裁出关键几轮、独占一页，比整条缩到 60% 宽有用得多——手机上看不清的证据等于没有证据。" },
    { t: "figure", src: "fixtures/assets/shot-code.png", ratio: "auto", index: 3,
      caption: "最后落到文件里的样子。" }
  ],
  end: { headline: "原图我放在评论区了", lines: ["需要完整对话直接找我", "有问题直接问，我都看"] }
};
