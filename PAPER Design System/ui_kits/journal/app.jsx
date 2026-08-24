const SCREENS = [
  ["contents", "Contents", () => <ContentsScreen go={go} />],
  ["essay", "Photo Essay", () => <PhotoEssayScreen go={go} />],
  ["interview", "Interview", () => <InterviewScreen go={go} />],
  ["gallery", "Gallery", () => <GalleryScreen go={go} />]
];
let go = () => {};

function App() {
  const [screen, setScreen] = React.useState("contents");
  go = setScreen;
  const current = SCREENS.find((s) => s[0] === screen);
  return (
    <div>
      <nav style={{
        position: "sticky", top: 0, zIndex: 40, display: "flex", gap: "var(--space-5)",
        padding: "9px var(--page-margin)", background: "rgba(244,241,234,.88)",
        backdropFilter: "blur(8px)", borderBottom: "1px solid var(--rule-hair)"
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--type-micro)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--text-faint)", marginRight: "auto" }}>Paper — Journal UI kit</span>
        {SCREENS.map(([id, label]) => (
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
if (__root) ReactDOM.createRoot(__root).render(<App />);
