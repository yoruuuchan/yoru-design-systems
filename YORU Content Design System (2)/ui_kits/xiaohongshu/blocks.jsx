/* Maps the content stream onto YORU components. The only place block types are interpreted. */
const YB = window.YORUContentDesignSystem_a0b73e;
function YoruBlock({ b }) {
  switch (b.t) {
    case "heading": return <YB.Heading level={b.level} mark={b.mark} kicker={b.kicker}>{b.text}</YB.Heading>;
    case "lede":    return <YB.Lede>{b.text}</YB.Lede>;
    case "body":    return <YB.Body>{b.text}</YB.Body>;
    case "callout": return <YB.Callout kind={b.kind} title={b.title}>{b.text}</YB.Callout>;
    case "quote":   return <YB.Quote cite={b.cite} source={b.source}>{b.text}</YB.Quote>;
    case "code":    return <YB.CodeBlock filename={b.filename} lang={b.lang} code={b.code} />;
    case "prompt":  return <YB.PromptBlock model={b.model}>{b.text}</YB.PromptBlock>;
    case "steps":   return <YB.StepList start={b.start} steps={b.items} />;
    case "compare": return <YB.CompareTable columns={b.columns} rows={b.rows} highlight={b.highlight} caption={b.caption} />;
    case "figure":  return <YB.Figure ratio={b.ratio} index={b.index} caption={b.caption} src={b.src} placeholder={b.placeholder} />;
    case "refs":    return <YB.ReferenceList items={b.items} />;
    default: return null;
  }
}
Object.assign(window, { YoruBlock });
