Explains what the reader is looking at. Never repeats the alt text.

```jsx
<Caption index={2}>同一段提示词，左边是默认输出，右边加了角色约束。</Caption>
```

`index` 会打出强调色的「图 01」前缀，和 `Figure` 的 `index` 是同一套编号，别两处都传。
`align="center"` 只给 `bleed` 图用，其余一律左对齐跟版心走。
说明写图里看不出来的信息（版本号、时间、参数），不要重复图上已有的字。
