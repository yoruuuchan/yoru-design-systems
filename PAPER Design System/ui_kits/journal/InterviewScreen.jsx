const { Masthead, RunningHead, Folio, PullQuote, TextBlock, Plate, MetaBlock, Divider, Columns, TextLink } = window.PAPERDesignSystem_7d8f86;

function InterviewScreen({ go }) {
  const Q = ({ children }) => <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "var(--type-body-sm)", color: "var(--text-display)", textIndent: 0, marginTop: "var(--space-5)" }}>{children}</p>;
  return (
    <article style={{ maxWidth: "var(--page-max)", margin: "0 auto", padding: "40px var(--page-margin) 72px" }}>
      <Masthead title="Paper" items={["Essays", "Portfolio", "Archive", "Colophon"]} active="Essays" />
      <RunningHead left="Interview" right="P. 17" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", marginTop: "var(--space-8)", alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingRight: "var(--space-5)" }}>
          <PullQuote variant="mark" size="md" italic={false}>I collect moments, not things.</PullQuote>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "var(--space-7)" }}>— Laura K.</div>
            <MetaBlock rules="none" layout="grid" style={{ marginTop: "var(--space-8)" }} items={[
              { label: "Interview", value: "Mira Andersson" },
              { label: "Location", value: "Brooklyn, NY" },
              { label: "Date", value: "March 3, 2024" }
            ]} />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Plate ratio="4/5" style={{ height: "100%" }}><image-slot id="j-int-portrait" shape="rect" placeholder="Portrait — 4:5"></image-slot></Plate>
          <div style={{
            position: "absolute", right: -38, top: "50%", transformOrigin: "center",
            transform: "translateY(-50%) rotate(90deg)", fontFamily: "var(--font-sans)",
            fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase", color: "var(--text-faint)", whiteSpace: "nowrap"
          }}>Light shapes — Empty spaces</div>
        </div>
      </div>

      <Divider variant="rule" space="var(--space-8)" />

      <Columns split="1/1" gap="var(--space-8)">
        <div>
          <Q>You've said the studio is the least interesting room in the house.</Q>
          <TextBlock size="sm">
            <p>It is where the work gets finished, which is not the same as where it happens. The kitchen has better light and worse chairs. I do most of my thinking standing up.</p>
          </TextBlock>
          <Q>And the archive?</Q>
          <TextBlock size="sm">
            <p>Twelve boxes, unsorted. Every few years I open one and find a roll I have no memory of shooting. Those are usually the good ones — I had no intentions left in them.</p>
          </TextBlock>
        </div>
        <div>
          <Q>What stays?</Q>
          <TextBlock size="sm">
            <p>Very little, and I have stopped minding. A print is a record of an afternoon. If the afternoon was worth having, the print will hold.</p>
          </TextBlock>
          <TextBlock lang="zh" size="sm" style={{ marginTop: "var(--space-5)", color: "var(--text-secondary)" }}>
            <p>一张照片记录的是一个下午。如果那个下午值得，照片自然留得住。</p>
          </TextBlock>
        </div>
      </Columns>

      <div style={{ marginTop: "var(--space-8)", textAlign: "right" }}>
        <TextLink href="#" arrow onClick={(e) => { e.preventDefault(); go("gallery"); }}>Next — Gallery</TextLink>
      </div>

      <Folio left="Paper — Issue Nº 04" center="Interview: Laura K." page="17" />
    </article>
  );
}
Object.assign(window, { InterviewScreen });
