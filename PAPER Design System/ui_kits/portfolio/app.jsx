const P_SCREENS = [
  ["home", "Home", () => <HomeScreen go={pgo} />],
  ["work", "Work", () => <WorkIndexScreen go={pgo} />],
  ["sheet", "Contact sheet", () => <ContactSheetScreen go={pgo} />],
  ["label", "Exhibition", () => <ExhibitionScreen go={pgo} />]
];
let pgo = () => {};

function PortfolioApp() {
  const [screen, setScreen] = React.useState("home");
  pgo = setScreen;
  const current = P_SCREENS.find((s) => s[0] === screen);
  return (
    <div data-mode="analog" style={{ minHeight: "100vh", background: "var(--surface-page)" }}>
      <nav style={{
        position: "sticky", top: 0, zIndex: 40, display: "flex", gap: "var(--space-5)",
        padding: "9px var(--page-margin)", background: "rgba(237,230,215,.9)",
        backdropFilter: "blur(8px)", borderBottom: "1px solid var(--rule-hair)"
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-faint)", marginRight: "auto" }}>Paper — Portfolio UI kit · analog mode</span>
        {P_SCREENS.map(([id, label]) => (
          <button key={id} onClick={() => setScreen(id)} style={{
            background: "none", border: 0, padding: 0, cursor: "pointer",
            fontFamily: "var(--font-sans)", fontSize: "var(--type-micro)",
            letterSpacing: "var(--tracking-label)", textTransform: "uppercase",
            color: screen === id ? "var(--text-accent)" : "var(--text-muted)"
          }}>{label}</button>
        ))}
      </nav>
      {current[2]()}
    </div>
  );
}
const __root = document.getElementById("root");
if (__root) ReactDOM.createRoot(__root).render(<PortfolioApp />);
