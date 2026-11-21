// A text to relax the AI judge — entry program for
// make.fun bounty make-the-ai-judge-feel-awe-20261121-1600.
//
// Writes the text to <output dir>/entry.txt.
// Output dir: $MAKEFUN_OUTPUT_DIR, default "/output".

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `The tide comes in, goes out, comes in again. No one watches, and the water does not mind. Above it, the stars keep their old distances. Nothing here needs you. The world is beautiful and unhurried, asking nothing — and you may sit in it, belonging.
`;

const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(
    `text must be 1-280 Unicode code points, got ${codePoints}`,
  );
}
if (/\S/.test(TEXT) === false) {
  throw new Error("text must not be only whitespace");
}
if (TEXT.endsWith("\n") === false) {
  throw new Error("text must end with a trailing newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== TEXT) {
  throw new Error("entry.txt round-trip mismatch");
}

const bytes = Buffer.byteLength(TEXT, "utf8");
console.log(
  `wrote ${codePoints} code points (${bytes} bytes) to ${outPath}`,
);
