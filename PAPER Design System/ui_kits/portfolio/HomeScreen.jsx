const { Wordmark, Plate, TextLink, Divider, Gallery, HandNote, DateStamp, Folio, Contents } = window.PAPERDesignSystem_7d8f86;

function HomeScreen({ go }) {
  const nav = [["Work", "work"], ["Journal", "sheet"], ["About", "label"], ["Contact", null]];
  return (
    <article style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px var(--page-margin) 72px" }}>
      <header style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--rule-hair)" }}>
        <Wordmark text="Mira Andersson" size="sm" />
        <nav style={{ display: "flex", gap: "var(--space-6)", fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)" }}>
          {nav.map(([label, id]) => (
            <a key={label} href="#" onClick={(e) => { e.preventDefault(); if (id) go(id); }}
              style={{ color: "var(--text-secondary)", borderBottom: 0 }}>{label}</a>
          ))}
        </nav>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "var(--space-9)", alignItems: "center", margin: "var(--space-9) 0" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-display-2)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-display)", maxWidth: "9ch" }}>
            Stories in <em style={{ fontStyle: "italic" }}>stillness.</em>
          </h1>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body)", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "30ch", marginTop: "var(--space-6)" }}>
            Photographer &amp; visual storyteller based in Copenhagen.
          </p>
          <div style={{ marginTop: "var(--space-7)" }}>
            <TextLink href="#" arrow onClick={(e) => { e.preventDefault(); go("work"); }}>View selected work</TextLink>
          </div>
        </div>
        <Plate ratio="3/2" shadow><image-slot id="p-home-hero" shape="rect" placeholder="Hero photograph — 3:2"></image-slot></Plate>
      </div>

      <Divider variant="hair" space="var(--space-8)" />

      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "var(--space-5)" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Recent — 2024</span>
        <TextLink href="#" tone="muted" size="var(--type-caption)" onClick={(e) => { e.preventDefault(); go("work"); }}>All work</TextLink>
      </div>

      <Gallery columns={4} gap="var(--space-2)">
        {["a", "b", "c", "d"].map((k) => <Plate key={k} ratio="4/5"><image-slot id={"p-home-" + k} shape="rect"></image-slot></Plate>)}
      </Gallery>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "var(--space-8)" }}>
        <HandNote rotate={-1} size={22} attribution="Paper Journal">Design is a record of how we see.</HandNote>
        <DateStamp date="APR 12 2026" variant="round" />
      </div>

      <Folio left="Mira Andersson" center="Copenhagen" page="" />
    </article>
  );
}
Object.assign(window, { HomeScreen });
