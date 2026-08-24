const { Masthead, RunningHead, Folio, Contents, HandNote, Tape, TextLink } = window.PAPERDesignSystem_7d8f86;

function ContentsScreen({ go }) {
  const items = [
    { title: "The Coast Later", kind: "Photo Essay", page: "02", screen: "essay" },
    { title: "Apartmento", kind: "Interior", page: "08" },
    { title: "The Gentlewoman", kind: "Still Life", page: "14" },
    { title: "Aperture", kind: "Personal", page: "20" },
    { title: "Drift", kind: "Journal", page: "26" },
    { title: "Field Notes", kind: "Observations", page: "32" }
  ];
  return (
    <article style={{ maxWidth: "820px", margin: "0 auto", padding: "40px var(--page-margin) 72px" }}>
      <Masthead title="Paper" items={["Essays", "Portfolio", "Archive", "Colophon"]} active="Portfolio" />
      <RunningHead left="Paper" right="Index" />

      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-display-2)", textAlign: "center", margin: "var(--space-9) 0 var(--space-8)", letterSpacing: "var(--tracking-display)" }}>Work</h1>

      <Contents items={items.map((it) => ({ ...it, href: "#" }))} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "var(--space-8)" }}>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>© 2024</span>
        <div style={{ position: "relative", paddingTop: 14 }}>
          <Tape style={{ position: "absolute", top: 0, left: 18, zIndex: 1 }} width={78} rotate={-3} />
          <HandNote slip rotate={-1.5} size={20} style={{ minWidth: 150 }}>in progress<br />4/12</HandNote>
        </div>
      </div>

      <div style={{ marginTop: "var(--space-9)", textAlign: "center" }}>
        <TextLink href="#" arrow onClick={(e) => { e.preventDefault(); go("essay"); }}>Open “The Coast Later”</TextLink>
      </div>

      <Folio left="Paper — Issue Nº 04" center="Contents" page="01" />
    </article>
  );
}
Object.assign(window, { ContentsScreen });
