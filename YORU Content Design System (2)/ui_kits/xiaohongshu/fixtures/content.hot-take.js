/* Stress fixture · 短热点：3-4 块就完事的快讯。
   考的是「页数由内容决定」——这种内容不该被硬撑到 6 页，也不该强塞 EndCard 之外的东西。 */
window.YORU_POST = {
  variant: "signal",
  contentMode: "editable",
  kicker: "AI NEWS",
  issue: "2026.08 / 07",
  cover: { date: "2026.08", issueNumber: "07", title: "它现在会自己跑测试了",
    subtitle: "更新装完第一件事就是去看这个。", tags: ["Claude Code", "更新"], aside: "跑了六次都过" },
  blocks: [
    { t: "heading", level: 1, mark: true, text: "它现在会自己跑测试了" },
    { t: "lede", text: "昨晚更新装完，我拿三个月前那个总是漏跑测试的项目试了六遍，六遍都自己跑了。" },
    { t: "body", text: "改动本身很小：写完文件之后它会先找项目里已有的测试命令，找不到才问你。以前是反过来的，先问，你不回答它就当没这回事。" },
    { t: "callout", kind: "note", title: "怎么开", text: "不用开。装完就是这个行为，想关掉要在 settings 里显式写死。" }
  ],
  end: { headline: "下次更新我再回来说踩了什么坑", lines: ["版本号在评论区", "有问题直接问，我都看"] }
};
