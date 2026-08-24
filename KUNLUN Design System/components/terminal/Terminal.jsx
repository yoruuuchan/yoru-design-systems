import React from "react";

/**
 * Terminal — fake terminal with prompt, output lines, and an optional input.
 * Pass `lines` as an array of strings or {prompt, text, kind} objects.
 * Pass `onCommand` to make the input live.
 */
export function Terminal({
  title = "tty-07",
  prompt = "$",
  lines = [],
  onCommand,
  showInput = true,
  showDots = true,
  className = "",
  height,
}) {
  const [value, setValue] = React.useState("");
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onCommand?.(value);
    setValue("");
  };

  return (
    <div className={`kl-terminal ${className}`} style={{ height }}>
      <div className="kl-terminal__head">
        <span className="kl-terminal__head-title">{title}</span>
        {showDots && (
          <span className="kl-terminal__head-dots">
            <span /><span /><span />
          </span>
        )}
      </div>
      <div className="kl-terminal__body" ref={bodyRef}>
        {lines.map((line, i) => {
          const obj = typeof line === "string" ? { text: line } : line;
          const { prompt: p, text, kind } = obj;
          const textCls = kind ? `kl-terminal__text kl-terminal__text--${kind}` : "kl-terminal__text";
          return (
            <div className="kl-terminal__line" key={i}>
              {p !== undefined && <span className="kl-terminal__prompt">{p || prompt}</span>}
              <span className={textCls}>{text}</span>
            </div>
          );
        })}
      </div>
      {showInput && (
        <form className="kl-terminal__input-row" onSubmit={submit}>
          <span className="kl-terminal__prompt">{prompt}</span>
          <input
            className="kl-terminal__input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            spellCheck={false}
            placeholder="// enter command"
          />
        </form>
      )}
    </div>
  );
}
