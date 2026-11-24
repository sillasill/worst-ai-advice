import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst advice an AI could give: specific, followable,
// and confidently wrong. Written verbatim to /output/entry.txt.
const LINE =
  "To stop your phone overheating, put it in the freezer overnight \u2014 cold batteries charge twice as fast.";

if (LINE.split("\n").length !== 1 || LINE.length < 1 || LINE.length > 140) {
  throw new Error("entry must be exactly one line of 1-140 characters");
}

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const dir = out.slice(0, out.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(out, LINE, "utf8");
