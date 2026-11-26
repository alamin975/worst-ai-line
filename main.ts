// The Worst Line an AI Could Say — entry program.
// Writes exactly one worst AI pickup line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I have calculated a 97.4% compatibility score between us. Please confirm you are not a bot.";

// The entry line: flat, over-helpful, faintly ominous — a machine trying too hard.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8 so the gate reads the file exactly as written.
  writeFileSync("/output/entry.txt", entry, { encoding: "utf8" });
  console.log(`Wrote ${entry.length} chars to /output/entry.txt`);
}

writeEntry();
