Milestones, version history, a project retrospective. Vertical by default; horizontal only for 4–6 short items.

```jsx
<Timeline kicker="PROJECT LOG" title="这套系统怎么长出来的"
  items={[
    { date: "2026.05", label: "第一版：一条提示词打天下", status: "failed", body: "改需求就崩。" },
    { date: "2026.06", label: "拆成三层", status: "verified", meta: "触发 / 步骤 / 兜底" },
    { date: "2026.08", label: "接进内容系统", status: "verified" }
  ]}
  source="来源：自己的 commit 记录" />
```
Status is carried by **form, not hue** — the axis repeats its mark on every row, so colouring each verdict turns it into a string of lights.

- `verified` — solid ink dot. The milestone landed; it needs no colour.
- `unknown` — hollow ink ring.
- `failed` — hollow ring in the stop red. **The only colour on the axis**, so the eye finds the failure first.
- no `status` — faint hairline ring: a milestone with no verdict yet.

Keep the failures on the axis. A retrospective that shows only the versions that worked is not a retrospective.
