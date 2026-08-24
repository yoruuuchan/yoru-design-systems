const { Wordmark, ContactSheet, Divider, TextLink, Folio, MemoryCard, Tape, DateStamp } = window.PAPERDesignSystem_7d8f86;

function ContactSheetScreen({ go }) {
  const frames = [
    {}, { mark: "circle" }, {}, {},
    {}, {}, { mark: "cross" }, {},
    { mark: "circle" }, {}, {}, { mark: "cross" }
  ].map((f, i) => ({ ...f, children: React.createElement("image-slot", { id: "p-cs-" + i, shape: "rect" }) }));

  return (
    <article style={{ maxWidth: "1000px", margin: "0 auto", padding: "36px var(--page-margin) 72px" }}>
      <header style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", paddingBottom: "var(--space-4)", borderBottom: "1px solid var(--rule-hair)" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ borderBottom: 0 }}><Wordmark text="Mira Andersson" size="sm" /></a>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-muted)" }}>Journal — Roll 14</span>
      </header>

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", margin: "var(--space-8) 0 var(--space-5)" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-h1)" }}>Roll 14 — Klitmøller</h1>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>
            Kodak Tri-X 400, developed in HC-110 (B), 6 min. Twelve of thirty-six.
          </p>
        </div>
        <DateStamp date="14 · 02 · 2026" variant="boxed" />
      </div>

      <ContactSheet columns={4} startAt={17} stock="KODAK 400TX" note="Favourites" sequence="3/8" frames={frames} />

      <Divider variant="space" space="var(--space-8)" />

      <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "flex-start" }}>
        <div style={{ position: "relative" }}>
          <Tape style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%) rotate(-2deg)", zIndex: 1 }} />
          <MemoryCard width={240} caption="Sunday light in the kitchen" date="FEB 14 26" rotate={-1}>
            <image-slot id="p-cs-print" shape="rect"></image-slot>
          </MemoryCard>
        </div>
        <div style={{ maxWidth: "44ch" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body)", lineHeight: 1.68, color: "var(--text-body)" }}>
            Frame 18 is the one I printed. It was not the frame I went out for, and I did not notice it on the sheet until the third pass.
          </p>
          <div style={{ marginTop: "var(--space-5)" }}>
            <TextLink href="#" arrow onClick={(e) => { e.preventDefault(); go("label"); }}>See the print</TextLink>
          </div>
        </div>
      </div>

      <Folio left="Mira Andersson" center="Journal — Roll 14" page="" />
    </article>
  );
}
Object.assign(window, { ContactSheetScreen });
