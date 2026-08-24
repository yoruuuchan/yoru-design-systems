const { Wordmark, ExhibitionLabel, Plate, ScanEdge, Divider, Credits, TextLink, Folio, Button } = window.PAPERDesignSystem_7d8f86;

function ExhibitionScreen({ go }) {
  return (
    <article style={{ maxWidth: "1120px", margin: "0 auto", padding: "36px var(--page-margin) 72px" }}>
      <header style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--rule-hair)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ borderBottom: 0 }}><Wordmark text="Mira Andersson" size="sm" /></a>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Exhibition — Drift</span>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "var(--space-9)", margin: "var(--space-9) 0", alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <ExhibitionLabel artist="Mira Andersson" title="Drift" year="2023"
            medium="Archival pigment print" dimensions="50 × 70 cm" edition="Edition of 10"
            venue="Exhibited at Gallery North, Copenhagen" dates="Jan 12 – Feb 18, 2024" monogram="M/A" />
          <div style={{ marginTop: "var(--space-6)" }}>
            <Button variant="outline" size="sm">Enquire about this print</Button>
          </div>
        </div>
        <ScanEdge sides="x" intensity={0.8}>
          <Plate ratio="4/5" shadow style={{ height: "100%" }}>
            <image-slot id="p-ex-print" shape="rect" placeholder="The print — 4:5"></image-slot>
          </Plate>
        </ScanEdge>
      </div>

      <Divider variant="hair" space="var(--space-7)" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-9)" }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body)", lineHeight: 1.68, color: "var(--text-body)", maxWidth: "48ch" }}>
          Drift was made over two winters at the same stretch of water, always alone and always on the same stock. The edition was printed in a single run and will not be reprinted.
        </p>
        <Credits title="Colophon" items={[
          { role: "Printing", name: "Narayana Press, Odder" },
          { role: "Paper", name: "Hahnemühle Photo Rag 308" },
          { role: "Framing", name: "Oak, museum glass" }
        ]} />
      </div>

      <div style={{ marginTop: "var(--space-8)", textAlign: "right" }}>
        <TextLink href="#" tone="muted" size="var(--type-caption)" onClick={(e) => { e.preventDefault(); go("home"); }}>Back to index</TextLink>
      </div>

      <Folio left="Mira Andersson" center="Drift, 2023" page="" />
    </article>
  );
}
Object.assign(window, { ExhibitionScreen });
