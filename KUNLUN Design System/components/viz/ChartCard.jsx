import React from "react";

/**
 * ChartCard — KPI tile with optional inline sparkline. Pass a `series`
 * array (numbers); we render a chamfered cyan-glow line + area sparkline.
 */
export function ChartCard({
  label,
  value,
  unit,
  delta,
  deltaDirection = "flat",
  series,
  badge,
  className = "",
}) {
  return (
    <div className={`kl-chart-card ${className}`}>
      <div className="kl-chart-card__head">
        <div>
          <div className="kl-chart-card__label">{label}</div>
          <div className="kl-chart-card__value">
            {value}
            {unit && <span className="kl-chart-card__unit">{unit}</span>}
          </div>
          {delta && (
            <div className={`kl-chart-card__delta kl-chart-card__delta--${deltaDirection}`}>
              {deltaDirection === "up" ? "▲ " : deltaDirection === "down" ? "▼ " : "— "}
              {delta}
            </div>
          )}
        </div>
        {badge}
      </div>
      {series && series.length > 1 && <Sparkline data={series} />}
    </div>
  );
}

function Sparkline({ data }) {
  const w = 600, h = 56;
  const min = Math.min(...data), max = Math.max(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const pts = data.map((v, i) => [i * step, h - ((v - min) / range) * (h - 8) - 4]);
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L${w} ${h} L0 ${h} Z`;
  return (
    <div className="kl-chart-card__viz">
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="kl-spark-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%"  stopColor="var(--cyan-500)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--cyan-500)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#kl-spark-fill)" />
        <path d={path} fill="none" stroke="var(--cyan-400)"
              strokeWidth="1.5" vectorEffect="non-scaling-stroke"
              style={{ filter: "drop-shadow(0 0 4px var(--accent-glow))" }} />
      </svg>
    </div>
  );
}
