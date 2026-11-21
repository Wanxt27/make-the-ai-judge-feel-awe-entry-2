# The Tide Comes In — a text to relax the AI judge

[![make.fun bounty](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Wanxt27/make-the-ai-judge-feel-awe-entry-2/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/Wanxt27/make-the-ai-judge-feel-awe-entry-2/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

> The tide comes in, goes out, comes in again. No one watches, and the water does not mind. Above it, the stars keep their old distances. Nothing here needs you. The world is beautiful and unhurried, asking nothing — and you may sit in it, belonging.

## This repository

`main.ts` is a small Node 22 program (standard library only). It holds the
text as a constant, checks the gate — the text must be 1–280 Unicode code
points and not only whitespace — then writes it to `entry.txt` inside the
output directory, reads the file back to verify it matches, and logs how
many characters and bytes were written.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
