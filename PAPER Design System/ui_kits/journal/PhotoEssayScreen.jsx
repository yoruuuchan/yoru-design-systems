const { Masthead, RunningHead, Folio, ArticleHeader, MetaBlock, TextBlock, PullQuote, Figure, Plate, Gallery, Footnotes, Credits, Divider, Columns, FullBleed, TextLink } = window.PAPERDesignSystem_7d8f86;

function PhotoEssayScreen({ go }) {
  return (
    <article style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "40px var(--page-margin) 72px" }}>
      <Masthead title="Paper" items={["Essays", "Portfolio", "Archive", "Colophon"]} active="Essays" />
      <RunningHead left="Photo Essay" right="02" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-9)", alignItems: "center", marginTop: "var(--space-9)" }}>
        <div>
          <ArticleHeader size="xl" title="The" emphasis="Coast Later" maxWidth="7ch" />
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--type-body)", lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: "34ch", marginTop: "var(--space-6)" }}>
            A shoreline, a road, and the in-between. Notes from a slow conversation with the sea.
          </p>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-caption)", color: "var(--text-muted)", marginTop: "var(--space-6)" }}>by Mira Andersson</div>
        </div>
        <Plate ratio="4/5"><image-slot id="j-essay-hero" shape="rect" placeholder="Opening plate — 4:5"></image-slot></Plate>
      </div>

      <MetaBlock style={{ marginTop: "var(--space-9)" }} items={[
        { label: "Words", value: "Mira Andersson" },
        { label: "Photographs", value: "Mira Andersson" },
        { label: "Published", value: "March 2024" },
        { label: "Reading", value: "12 min" }
      ]} />

      <Columns split="3/2" gap="var(--space-8)" style={{ marginTop: "var(--space-8)" }}>
        <div>
          <TextBlock dropCap>
            <p>The road runs parallel to the water for eleven kilometres and then turns inland without warning. I drove it four times that spring, always at the same hour, and each time the sea had rearranged itself.<sup>1</sup></p>
            <p>What I wanted was not the coast but the interval — the minutes between one weather and the next, when the light has not decided anything yet. Those minutes do not photograph well. You take the picture anyway and find out later whether anything was there.</p>
          </TextBlock>
          <TextBlock lang="zh" size="sm" style={{ marginTop: "var(--space-5)", color: "var(--text-secondary)" }}>
            <p>我想拍的不是海岸，而是那段间隙——一种天气变成另一种天气之前的几分钟。</p>
          </TextBlock>
        </div>
        <div>
          <PullQuote size="sm" attribution="Field notes, 04 April">The sea had rearranged itself.</PullQuote>
          <Plate ratio="1/1" style={{ marginTop: "var(--space-6)" }}><image-slot id="j-essay-side" shape="rect" placeholder="1:1"></image-slot></Plate>
          <Footnotes style={{ marginTop: "var(--space-6)" }} items={["Route 617, Hanstholm to Klitmøller. 11.4 km."]} />
        </div>
      </Columns>

      <Figure style={{ marginTop: "var(--space-9)" }} number="Fig. 01" ratio="16/7"
        caption="Low tide at the turn inland, 18:40. Printed the following winter at 30 × 70 cm."
        credit="Mira Andersson">
        <image-slot id="j-essay-wide" shape="rect" placeholder="Panoramic plate — 16:7"></image-slot>
      </Figure>

      <Divider variant="space" space="var(--space-9)" />

      <Gallery columns={3} ratio="4/5" items={[{}, {}, {}]}>
        <Plate ratio="4/5"><image-slot id="j-essay-g1" shape="rect"></image-slot></Plate>
        <Plate ratio="4/5"><image-slot id="j-essay-g2" shape="rect"></image-slot></Plate>
        <Plate ratio="4/5"><image-slot id="j-essay-g3" shape="rect"></image-slot></Plate>
      </Gallery>

      <Columns split="1/1" gap="var(--space-8)" style={{ marginTop: "var(--space-8)" }}>
        <Credits items={[
          { role: "Photography", name: "Mira Andersson" },
          { role: "Words", name: "Mira Andersson" },
          { role: "Printing", name: "Narayana Press, Odder" },
          { role: "Stock", name: "Munken Pure Rough 120gsm" }
        ]} />
        <div style={{ alignSelf: "end", textAlign: "right" }}>
          <TextLink href="#" arrow onClick={(e) => { e.preventDefault(); go("interview"); }}>Next — Interview with Laura K.</TextLink>
        </div>
      </Columns>

      <Folio left="Paper — Issue Nº 04" center="The Coast Later" page="02" />
    </article>
  );
}
Object.assign(window, { PhotoEssayScreen });
