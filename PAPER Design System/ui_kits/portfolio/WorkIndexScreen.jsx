const { Wordmark, Contents, Plate, Divider, TextLink, Folio, FilmStrip } = window.PAPERDesignSystem_7d8f86;

function WorkIndexScreen({ go }) {
  return (
    <article style={{ maxWidth: "1000px", margin: "0 auto", padding: "36px var(--page-margin) 72px" }}>
      <header style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--rule-hair)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ borderBottom: 0 }}><Wordmark text="Mira Andersson" size="sm" /></a>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Index — 2019 / 2024</span>
      </header>

      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-display-3)", margin: "var(--space-8) 0 var(--space-6)" }}>Work</h1>

      <Contents items={[
        { title: "The Coast Later", kind: "Photo Essay", page: "02", href: "#" },
        { title: "Apartmento", kind: "Interior", page: "08", href: "#" },
        { title: "The Gentlewoman", kind: "Still Life", page: "14", href: "#" },
        { title: "Aperture", kind: "Personal", page: "20", href: "#" },
        { title: "Drift", kind: "Journal", page: "26", href: "#" },
        { title: "Field Notes", kind: "Observations", page: "32", href: "#" }
      ]} />

      <Divider variant="space" space="var(--space-8)" />

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>From the archive</span>
        <TextLink href="#" tone="muted" size="var(--type-caption)" onClick={(e) => { e.preventDefault(); go("sheet"); }}>Open contact sheet</TextLink>
      </div>
      <FilmStrip stock="KODAK 400TX" startAt={21} height={104}>
        {["s1", "s2", "s3", "s4", "s5"].map((k) => <image-slot key={k} id={"p-work-" + k} shape="rect"></image-slot>)}
      </FilmStrip>

      <Folio left="Mira Andersson" center="Selected work" page="" />
    </article>
  );
}
Object.assign(window, { WorkIndexScreen });
