/* Render check — the second gate, after check_design_system.
 *
 * The static lint reads the source and knows nothing about what the page looks
 * like. This one renders the cards in a real browser and answers the questions
 * that only pixels can: did the images load, did the fonts load, did anything
 * overflow, is the page 60% empty, is that screenshot readable on a phone.
 *
 *   node ui_kits/xiaohongshu/render_check.mjs [--fixture <name>] [--variant <id>] [--all-variants]
 *
 * Same engine as export_cards.mjs, check mode. Exits non-zero on any error.
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const r = spawnSync(process.execPath, [path.join(here, "export_cards.mjs"), "--check", ...process.argv.slice(2)],
  { stdio: "inherit" });
process.exit(r.status ?? 1);
