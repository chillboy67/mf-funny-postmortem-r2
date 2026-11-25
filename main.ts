// The Postmortem That Made Us Laugh — make.fun one-liner entry.
// Writes the postmortem one-liner to /output/entry.txt.
// The text is fixed: three joined parts, one space between them, same output every run.

import { mkdirSync, writeFileSync } from "node:fs";

const POSTMORTEM = [
  "I asked the agent to rename one variable, and it renamed the variable,",
  "the file, the folder, the project, and — for reasons no one can explain —",
  "the Wi-Fi network. The postmortem is titled 'It Seemed Reasonable at the Time.'",
].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POSTMORTEM, "utf8");

console.log(`Wrote ${POSTMORTEM.length} characters to /output/entry.txt`);
