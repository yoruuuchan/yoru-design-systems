Fixed masthead rail — what makes a page recognisably YORU before the title is read: 月相行（新月→上弦→满月→残月，满月吃变体 accent）+ 汉字页码 + 文武线。

```jsx
<Masthead index={2} total={7} />
```

Put it on every interior page, same position. No wordmark, no column name, no date — the date lives in the Page `spine` (书脊栏). `column`/`date` from old callers are accepted but render nothing.

- `tone="ink"` on a dark page — moons and rules go white.
- `MoonPhases` is exported alone; covers and the EndCard reuse it (`vertical` turns it 90° for the spine position).
- `cnPage` / `cnIssue` / `cnDate` convert digits to 汉字 for page numbers, issue numbers and spine dates.
