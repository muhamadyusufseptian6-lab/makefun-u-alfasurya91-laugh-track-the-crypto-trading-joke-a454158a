// Laugh Track: The Crypto Trading Joke Contest
// Writes one original one-line joke about crypto/trading life to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Stdlib-only, deterministic, no network.
// The gate wants UTF-8 text of 1-200 characters, not only whitespace:
// this entry is a single line of 154 characters, so it passes as-is.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line, under 200 characters. Invented for this bounty:
// a trader buys the dip, averages down, and by 3 a.m. the stop-loss
// has taken everything — position, sleep, dignity — in that order.
const ENTRY =
  "I bought the dip at $92k, averaged down at $88k, and by 3 a.m. my stop-loss had liquidated my position, my sleep schedule, and the last $12 of my dignity.";

// Resolve the repo dir from this script's own location, never from cwd.
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

// The harness provides MAKEFUN_OUTPUT_DIR; fall back to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
