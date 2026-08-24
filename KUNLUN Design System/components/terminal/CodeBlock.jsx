import React from "react";

/**
 * CodeBlock — read-only code surface with optional line numbers + copy button.
 * Pass plain text; no syntax highlighting (keep it terminal-honest).
 */
export function CodeBlock({
  code = "",
  lang,
  showLineNumbers = true,
  showCopy = true,
  className = "",
}) {
  const [copied, setCopied] = React.useState(false);
  const lines = String(code).replace(/\n$/, "").split("\n");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className={`kl-code ${className}`}>
      {(lang || showCopy) && (
        <div className="kl-code__head">
          <span className="kl-code__lang">{lang}</span>
          {showCopy && (
            <button className="kl-code__copy" onClick={copy}>
              {copied ? "✓ COPIED" : "COPY"}
            </button>
          )}
        </div>
      )}
      <div className="kl-code__body">
        {showLineNumbers && (
          <div className="kl-code__gutter">
            {lines.map((_, i) => <div key={i}>{i + 1}</div>)}
          </div>
        )}
        <pre className="kl-code__lines"><code>{code}</code></pre>
      </div>
    </div>
  );
}
