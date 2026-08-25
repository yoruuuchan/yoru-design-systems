/* Stress fixture · 有图封面（应当零错误零告警）。
   T1 加了可选封面图（`image` + `imageCaption` + `imageRatio`），这份 fixture
   验证它渲染得出来、加载得到、Figure 风格的框子不会跟套印标题打架。
   无图形态由其它 fixtures（hot-take / long-tutorial / signature ...）覆盖。 */
window.YORU_POST = {
  variant: "special",
  contentMode: "editable",
  kicker: "FIELD NOTES",
  issue: "二〇二六年八月 · 第十九期",
  cover: {
    date: "2026.08", issueNumber: "19",
    title: "把封面留一格给照片",
    subtitle: "巨字卷号撤了，空下来的地方摆一张证据图。",
    tags: ["排版", "封面"], aside: "一张就够",
    image: "fixtures/assets/cover-photo.jpg",
    imageCaption: "把机器拆到快看不清是什么，才知道少哪个螺丝。",
    imageRatio: "16 / 10"
  },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "为什么允许一张封面图" },
    { t: "lede", text: "早先版本把卷号做成 4.6× 的巨字扔在右下角。笔画少的那几个（一二十）裁下来就剩起笔顿笔，读者根本看不出是卷号。" },
    { t: "body", text: "撤掉之后封面下半空了。允许放一张照片，尺寸贴着 plate 宽度、框子跟 Figure 一样安静——没有阴影、没有胶片纹理、没有装饰角标——保证套印标题仍然是页面最响的东西。" },
    { t: "callout", kind: "note", title: "什么时候放", text: "只在标题需要一张真图撑住的时候放。有主图的证据帖、单机器/单地点的记录合适；纯观点、纯教程用无图封面就够。" },
    { t: "body", text: "无图封面的形态由其它 fixtures 覆盖——不会因为加了这个选项就丢掉原本的干净。" }
  ],
  end: { headline: "下期讲图注要不要跟人说话", lines: ["封面图别当装饰用", "有问题直接问，我都看"] }
};
