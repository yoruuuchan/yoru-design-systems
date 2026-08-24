import React from "react";

/**
 * DataTable — minimal accessible table with sticky header, hover ribbon,
 * and an optional striped body. Pass columns + rows; values render as-is.
 */
export function DataTable({
  columns = [],
  rows = [],
  striped = false,
  emptyState = "// NO RECORDS",
  className = "",
}) {
  const tcls = ["kl-table", striped ? "kl-table--striped" : ""].filter(Boolean).join(" ");

  return (
    <div className={`kl-table-wrap ${className}`}>
      <table className={tcls}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{ textAlign: c.align || "left", width: c.width }}>
                {c.header || c.key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length}
                  style={{ textAlign: "center", color: "var(--text-tertiary)", padding: "24px" }}>
                {emptyState}
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr key={row.id ?? i}>
              {columns.map((c) => {
                const v = row[c.key];
                const td = c.render ? c.render(v, row) : v;
                const cls = c.tone ? `kl-table__${c.tone}` : "";
                return (
                  <td key={c.key} className={cls}
                      style={{ textAlign: c.align || "left" }}>
                    {td}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
