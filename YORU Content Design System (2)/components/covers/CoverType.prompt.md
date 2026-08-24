The default YORU cover: moon-phase masthead, a large serif title, tags and the author's aside. No image.

```jsx
<CoverType variant="lab" kicker="rail" total={6}
  title={<>把一条提示词<br/>拆成<Emphasis>三层结构</Emphasis></>}
  subtitle="改需求就崩，是因为你把触发、步骤和兜底写在了同一段话里。"
  tags={["工作流", "实测"]}
  aside="踩了三天才想明白" />
```

Always mark one phrase in the title — `<Emphasis>` for Chinese, `<Marker>` for Latin or a quoted string. An unmarked title reads as a headline; a marked one tells the reader what the post argues.

传任意 `kicker` 值即打开月相报头（文字本身不渲染，只是开关）；省略则封面无报头。`aside` 是右下的个人化一句话；不要它时传 `issue`（如 "卷十二 · 〇一 / 〇六"）做安静版。`tone="ink"` 整页反白，Special 用。
