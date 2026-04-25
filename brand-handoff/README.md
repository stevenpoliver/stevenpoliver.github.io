# Brand Handoff — Security-Hub

Everything the Security-Hub Replit assistant needs to apply Steven Oliver's portfolio brand to that project.

## What's in here

```
brand-handoff/
├── README.md              ← you are here
├── PROMPT.md              ← paste this into the Security-Hub assistant
├── brand/
│   ├── tokens.css         ← the visual identity stylesheet (drop-in)
│   ├── TextScramble.tsx   ← the decode-on-load hero component
│   └── BRAND_BIBLE.md     ← palette, surfaces, motion, voice
└── screenshots/
    ├── hero.jpg
    ├── hero-settled.jpg
    └── glass-cards.jpg
```

## How to use it

1. Open the Security-Hub Replit project.
2. Attach the three `brand/` files and the `screenshots/` images to the chat.
3. Paste the contents of `PROMPT.md` as your message.
4. Let the assistant work. It will install Tailwind v4 (if missing), drop in the brand files, wire the global stylesheet, and verify the look matches the reference screenshots.
5. Iterate visually — if anything looks off, just say "the X looks wrong vs the reference, fix it" and it will adjust.

## Why this works

The brand kit is **completely self-contained** — no `@workspace/...` imports, no monorepo dependencies. `tokens.css` is a pure CSS file that works anywhere Tailwind v4 is installed. `TextScramble.tsx` is a single React component with no external dependencies beyond React itself.

This means Security-Hub stays an independent project and you don't need to migrate it into this monorepo to get the brand.

## When you change the brand here

If you tweak `lib/brand/` in the portfolio repo and want Security-Hub to pick it up:

1. Re-export the updated files: `cp lib/brand/src/tokens.css brand-handoff/brand/tokens.css && cp lib/brand/src/components/TextScramble.tsx brand-handoff/brand/TextScramble.tsx && cp lib/brand/README.md brand-handoff/brand/BRAND_BIBLE.md`
2. Re-attach to the Security-Hub assistant with a short prompt: *"Brand kit updated, please replace the existing brand/ files with these and restart."*
