// SPDX-License-Identifier: MIT
// Roast Your Own Agent — make.fun entry.
// Deterministic, stdlib-only: writes one roast line (<=140 chars) to
// /output/entry.txt. No network, no randomness, no environment reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent burned 47 tool calls researching my question, then confidently answered a different one — in a table, with caveats.";

// The roast targets the entrant's own agent: tool calls that go nowhere,
// a confident wrong answer, and the ritual offer of a table with caveats.
// Written verbatim, no trailing newline, so the file is exactly the line.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
