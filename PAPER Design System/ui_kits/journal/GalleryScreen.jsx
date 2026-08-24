const { Masthead, RunningHead, Folio, Plate, Gallery, Divider, TextLink } = window.PAPERDesignSystem_7d8f86;

function GalleryScreen({ go }) {
  const ids = ["g1", "g2", "g3", "g4", "g5", "g6"];
  return (
    <article style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "40px var(--page-margin) 72px" }}>
      <Masthead title="Paper" items={["Essays", "Portfolio", "Archive", "Colophon"]} active="Archive" />
      <RunningHead left="Gallery" center="Twelve plates, spring 2024" right="54" rule />

      <Gallery columns={3} gap="var(--space-2)" style={{ marginTop: "var(--space-7)" }}>
        {ids.map((id, i) => (
          <Plate key={id} ratio={i === 1 || i === 4 ? "1/1" : "4/5"}>
            <image-slot id={"j-gal-" + id} shape="rect"></image-slot>
          </Plate>
        ))}
      </Gallery>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: "var(--space-4)" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", color: "var(--text-muted)", maxWidth: "56ch" }}>
          Plates 41–46. Hanstholm, Klitmøller and the road between them, photographed between March and May 2024.
        </span>
        <TextLink href="#" tone="muted" size="var(--type-caption)" onClick={(e) => { e.preventDefault(); go("contents"); }}>Back to contents</TextLink>
      </div>

      <Divider variant="space" space="var(--space-8)" />
      <Folio left="Paper — Issue Nº 04" center="Gallery" page="54" />
    </article>
  );
}
Object.assign(window, { GalleryScreen });
