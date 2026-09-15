Always the last page of a Xiaohongshu set. A large 完 mark sits in the bottom-right in the same overprint style as `<CoverOverprint>`; the vertical moon-phase strip takes the spine position top-right; the fangsong `note` signs the bottom-left plate margin. No wordmark, no `@handle`.

```jsx
<EndCard variant="studio" headline="下期讲配色"
  lines={["工具都在评论区","有问题直接问"]}
  note="二〇二六年八月 · 〇六 / 〇六" />
```

`headline` 是一句请求（关注、评论、收藏三选一，不要三个都要）。`lines` 二到四条，每条一句话回收全文要点。
`mark` 默认 `"完"`，也可以传 `"END"` / `"FIN"` —— 单字或三个字母最好看；四个以上会挤压内容块。
`tone="ink"` 深底反白，`tone="paper"` 纸底 —— 封面用了色块就选 `paper`，避免首尾两页同样重。
`note` 用汉字日期（`cnDate("2026.08")` → 二〇二六年八月），与书脊栏一个口径。
