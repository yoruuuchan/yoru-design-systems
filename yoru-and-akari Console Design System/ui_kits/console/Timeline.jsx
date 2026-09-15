function Timeline({ days }) {
  return (
    <div>
      <SectionHeader meta="last 48 hrs">timeline</SectionHeader>
      {days.map((d, di) => (
        <div key={di}>
          <div className="tl-day">{d.label}</div>
          <div className="timeline">
            {d.events.map((e, ei) => (
              <div key={ei} className={`tl-event ${e.kind || ""}`}>
                <div className="t">{e.time}</div>
                <div className="hd">{e.title}</div>
                {e.sub && <div className="sb">{e.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Timeline });
