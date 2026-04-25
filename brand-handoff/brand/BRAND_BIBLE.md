# @workspace/brand

The visual identity used by Steven Oliver's portfolio and Security-Hub.
Dark-themed, amber/gold accent, glassmorphic cards.

## Install (in this monorepo)

```jsonc
// artifacts/<your-app>/package.json
{
  "devDependencies": {
    "@workspace/brand": "workspace:*"
  }
}
```

Then add to your global stylesheet (e.g. `src/index.css`), in this order:

```css
@import "tailwindcss";
@import "@workspace/brand/tokens.css";
```

That single import gives you:

- The dark + light CSS variable palettes
- `--accent-yellow` (the brand gold)
- `@theme inline` mapping wiring vars to Tailwind utilities (`bg-background`, `text-foreground`, `border-border`, etc.)
- The `.glass` utility for glassmorphic cards
- The subtle radial-dot body background grid
- Sensible body defaults (font, antialias, smooth scroll)

To enable dark mode, add the `dark` class to `<html>` or `<body>`. The portfolio applies it permanently (it's a dark-only brand).

## Components

```tsx
import { TextScramble } from "@workspace/brand";

<TextScramble
  segments={[
    { text: "Solutions Architecture, " },
    { text: "Cyber Security", className: "text-[var(--accent-yellow)]" },
    { text: " and AI adoption." },
  ]}
/>
```

---

## Brand bible

### Palette

| Token              | Dark               | Light          | Use                                            |
| ------------------ | ------------------ | -------------- | ---------------------------------------------- |
| `--accent-yellow`  | `#F5C518`          | `#EAB308`      | Headings emphasis, hover ring, decode glow     |
| `--background`     | `hsl(258 65% 4%)`  | white          | Page background                                |
| `--card`           | `hsl(222 47% 11%)` | white          | Solid card surface (use `.glass` instead)      |
| `--foreground`     | `hsl(213 31% 91%)` | near-black     | Body text                                      |
| `--muted-foreground` | `hsl(215 20% 65%)` | grey         | Secondary text, captions, microcopy            |
| `--border`         | `hsl(216 34% 17%)` | light grey     | Hairline borders                               |

### Type

- Sans: `Inter`
- Serif: `Georgia`
- Mono: `Menlo`

The portfolio loads Inter via Google Fonts. The brand kit does not bundle fonts — load them in your `index.html` or via `@import` in your global stylesheet.

### Surfaces

- **Glass cards** — use the `.glass` class. It already includes blur, saturation, inset highlight, and a deep drop-shadow. No extra padding/radius — combine with Tailwind utilities (`p-6 rounded-2xl`).
- **Dot grid background** — applied automatically to `body::before`. Switches to a faint gold dot in dark mode.

### Accent usage

- Reserve `--accent-yellow` for **emphasis on headings**, the decode-on-load glow, and small UI accents (active link underline, hover ring).
- Do not fill large areas with gold — it is a highlight colour, not a surface colour.
- Body text stays `text-foreground`. Captions stay `text-muted-foreground`.

### Motion

- `TextScramble` decode runs once on mount, ~3.2s with a 450ms start delay. Respects `prefers-reduced-motion`.
- Hover/transition timing across components: 160-220ms ease-out for opacity, 300ms ease for transform.

### Voice & punctuation

- Use **hyphens**, not em dashes.
- Title case for section headings; sentence case for body.

### Don'ts

- Don't use the gold for body text or large filled surfaces.
- Don't increase the dot-grid opacity — it should be a hint, never a pattern.
- Don't replace the glass card style with solid `bg-card` for primary content cards.
