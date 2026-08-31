/* Maps the content stream onto YORU components. The only place block types are interpreted.
   The written contract for blocks[] lives in README.md 「内容契约」—— 改这里就要改那里。 */
const YB = window.YORUContentDesignSystem_a0b73e;

/* ---- 行内标记 ----------------------------------------------------------------
   正文里的两个签名动作没法用「一种 block」表达，它们是句子内部的东西：

     ·四十多遍·      →  <Emphasis>  着重号
     ==留下来的部分==  →  <Marker>    荧光笔

   分隔符必须贴着字，里侧不许有空格。这条规则不是洁癖：`·` 是这套系统里合法的
   正文字符（ICONOGRAPHY 允许 `—` `·` `/`），而它当分隔符用的时候永远写成 ` · `
   带空格。贴着写才算标记，隔开写就是标点，两者不会打架。

   code 与 prompt 的正文永不解析——那两块是读者要原样抄走的东西，里面出现
   `==` 就得是 `==`。

   @handle 处理：@ 后紧跟字母数字下划线的段（`@thsottiaux`）在中文正文里会
   被浏览器按普通英文串处理，恰好碰到窄行时会从中间折行——出现「@thsot|tiaux」
   这种切法，读者根本看不出这是同一个 handle。这里把 handle 包成 nowrap 的
   span，让它整块换行到下一行。#话题标签不做特殊处理——按内容契约，话题标签
   本来就不该进图。 */
const RE_INLINE = () => /·(\S(?:[^·]*\S)?)·|==(\S(?:[^=]*\S)?)==|(@[A-Za-z0-9_]+)/g;

function inline(text) {
  if (typeof text !== "string") return text;
  const re = RE_INLINE();
  const out = []; let last = 0, m, k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] != null) out.push(<YB.Emphasis key={k++}>{m[1]}</YB.Emphasis>);
    else if (m[2] != null) out.push(<YB.Marker key={k++}>{m[2]}</YB.Marker>);
    else out.push(<span key={k++} style={{ whiteSpace: "nowrap" }}>{m[3]}</span>);
    last = m.index + m[0].length;
  }
  if (!out.length) return text;
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/* Counts the marks in a string without rendering. The render check uses this to
   enforce 「荧光笔每页一条」—— same regex, one copy. */
function inlineMarks(text) {
  const n = { emphasis: 0, marker: 0 };
  if (typeof text !== "string") return n;
  const re = RE_INLINE();
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m[1] != null) n.emphasis++;
    else if (m[2] != null) n.marker++;
    // m[3] is @handle — not a signature mark, don't count
  }
  return n;
}

/* ---- block 类型 -------------------------------------------------------------- */
function YoruBlock({ b }) {
  switch (b.t) {
    case "heading":    return <YB.Heading level={b.level} mark={b.mark} kicker={b.kicker}>{inline(b.text)}</YB.Heading>;
    case "lede":       return <YB.Lede>{inline(b.text)}</YB.Lede>;
    case "body":       return <YB.Body size={b.size} muted={b.muted}>{inline(b.text)}</YB.Body>;
    case "callout":    return <YB.Callout kind={b.kind} title={b.title}>{inline(b.text)}</YB.Callout>;
    case "quote":      return <YB.Quote cite={b.cite} source={b.source}>{inline(b.text)}</YB.Quote>;
    case "code":       return <YB.CodeBlock filename={b.filename} lang={b.lang} code={b.code} />;
    case "prompt":     return <YB.PromptBlock model={b.model}>{b.text}</YB.PromptBlock>;
    case "steps":      return <YB.StepList start={b.start} steps={b.items.map(s => ({ ...s, title: inline(s.title), body: inline(s.body) }))} />;
    case "compare":    return <YB.CompareTable columns={b.columns} rows={b.rows} highlight={b.highlight} caption={b.caption} />;
    case "figure":     return <YB.Figure treatment={b.treatment} ratio={b.ratio} fit={b.fit} index={b.index} caption={inline(b.caption)} src={b.src} placeholder={b.placeholder} />;
    case "refs":       return <YB.ReferenceList items={b.items} />;
    /* 手写旁批 —— 签名动作 ④。float 不透传：浮动版走 position:absolute，在流里不占高度，
       分页器会把它当成零高块，然后它会压到别的东西上。卡片上就用在流的这一版。 */
    case "marginnote": return <YB.MarginNote tone={b.tone} tilt={b.tilt}>{inline(b.text)}</YB.MarginNote>;
    /* 标签行 —— 与 CoverOverprint 封面那条标签横排同一个排法，没有新版式 */
    case "labels":     return <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--sp-3)" }}>
                                {(b.status || []).map((s, i) => <YB.StatusLabel key={"s" + i} status={s.status}>{s.label}</YB.StatusLabel>)}
                                {(b.tags || []).map((t, i) => <YB.Tag key={"t" + i} tone={b.tone} filled={b.filled}>{t}</YB.Tag>)}
                              </div>;
    case "section":    return <YB.SectionMark index={b.index} total={b.total} label={b.label} size={b.size} />;
    case "timeline":   return <YB.Timeline items={b.items} orientation={b.orientation} title={b.title} kicker={b.kicker} caption={b.caption} source={b.source} />;
    /* 图谱：卡片上一律 fit，按栏宽等比缩小、永不放大 */
    case "diagram":    return <YB.Diagram nodes={b.nodes} edges={b.edges} groups={b.groups} annotations={b.annotations}
                                layout={b.layout} title={b.title} kicker={b.kicker} caption={b.caption} source={b.source}
                                legend={b.legend} grid={b.grid} stack={b.stack} fit />;
    default: return null;
  }
}
Object.assign(window, { YoruBlock, inlineMarks });
