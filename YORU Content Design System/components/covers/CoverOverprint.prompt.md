Second cover format. The title prints twice with a small offset — a solid ink pass and a pale accent pass in multiply blend. A large issue number in Chinese numerals sits behind, cropped by the page edge.

```jsx
<CoverOverprint variant="signal" index={1} total={6}
  title={<>这周值得装的<br/><Emphasis>四个</Emphasis>工具</>}
  subtitle="都自己跑过一遍，附上踩过的坑。"
  tags={["实测","工具"]}
  aside="第三个最省事"
  issueNumber="12" />
```

用它替代 `CoverType`，做需要更强视觉锤的那期封面——`CoverType` 仍是默认款，二者保留可选。报头与内页完全一致（月相 + 汉字页码 + 文武线）；全系统没有文字字标，结尾页角落由仿宋 note 收尾。`column`/`date` 旧属性仍被接受但不渲染。

`issueNumber` 是最抢镜的元素，渲染成汉字（12 → 一二），两位数最好看；一位数会显得孤零零，三位数会碰到 tag 行。标题里仍然要用 `<Emphasis>` 标一个词——套印本身不是论点，标出来的字才是。
