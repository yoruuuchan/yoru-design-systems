import React from "react";

/**
 * Tabs — chamfered top-edge cyan indicator bar.
 * Controlled or uncontrolled.
 */
export function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  className = "",
  children,
}) {
  const [internal, setInternal] = React.useState(
    defaultValue ?? (tabs[0] && tabs[0].value)
  );
  const active = value !== undefined ? value : internal;

  const select = (next) => {
    if (value === undefined) setInternal(next);
    onChange?.(next);
  };

  const activeTab = tabs.find((t) => t.value === active);

  return (
    <div className={className}>
      <div role="tablist" className="kl-tabs">
        {tabs.map((t) => (
          <button
            key={t.value}
            role="tab"
            aria-selected={active === t.value}
            disabled={t.disabled}
            className="kl-tabs__tab"
            onClick={() => !t.disabled && select(t.value)}
          >
            {t.icon && <span>{t.icon}</span>}
            <span>{t.label}</span>
            {t.count !== undefined && (
              <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}>
                · {t.count}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="kl-tabs__panels">
        {children !== undefined ? children : activeTab?.content}
      </div>
    </div>
  );
}
