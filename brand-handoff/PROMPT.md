# Paste this into the Security-Hub Replit assistant

> Attach all files from `brand/` and `screenshots/` before sending.

---

I'm applying my portfolio's brand to this Security-Hub project so the two have a consistent visual identity. I've attached:

- `tokens.css` — the brand stylesheet (CSS variables, dark theme, `.glass` utility, dot-grid background). Drop-in for any Tailwind v4 project.
- `TextScramble.tsx` — a React component for a decode-on-load text effect on hero headings. Self-contained, no external deps beyond React.
- `BRAND_BIBLE.md` — palette, surfaces, motion, and voice guidance. Read this first.
- `hero.jpg`, `hero-settled.jpg`, `glass-cards.jpg` — visual reference of how the brand looks on the portfolio. Match this look.

**The brand at a glance:** dark navy/purple background, amber/gold accent (`#F5C518`), glassmorphic cards, subtle radial-dot grid, Inter font, hyphens not em dashes.

## Please do the following

### 1. Inspect what's there

- Read the project's global stylesheet (likely `src/index.css` or `src/styles/globals.css`) and `package.json`.
- Tell me the current stack: framework, Tailwind version, existing theme system. Don't change anything yet.

### 2. Set up Tailwind v4 if missing

If the project is on Tailwind v3 or has no Tailwind:

- Install: `tailwindcss@^4`, `@tailwindcss/vite@^4` (for Vite) or the appropriate plugin for the bundler.
- Wire the plugin in the Vite config.
- Confirm before proceeding so I know we're switching the styling baseline.

### 3. Drop in the brand files

- Create `src/brand/`.
- Place `tokens.css` at `src/brand/tokens.css`.
- Place `TextScramble.tsx` at `src/brand/TextScramble.tsx`.
- Place `BRAND_BIBLE.md` at `src/brand/BRAND_BIBLE.md`.

### 4. Wire the global stylesheet

In the project's global stylesheet, replace any existing theme definitions with:

```css
@import "tailwindcss";
@import "./brand/tokens.css";
```

(Adjust the relative path if your global stylesheet lives elsewhere.) Keep any `@plugin` lines or other `@import` lines the project already uses (e.g. `tw-animate-css`, `@tailwindcss/typography`) — those can sit between the two imports above.

### 5. Enable dark mode permanently

The brand is dark-first. Add the `dark` class to `<html>` (in `index.html`):

```html
<html lang="en" class="dark">
```

If a theme switcher exists in the app, leave the switcher in place but default it to `dark`.

### 6. Load the Inter font

Add to `index.html` `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
```

### 7. Apply the brand to existing components (light pass)

This is a brand reskin, **not** a feature rewrite. Change styling only — do not change behaviour, routes, data, or business logic.

For each existing page/component:

- Swap card surfaces to use the `.glass` class (combine with Tailwind utilities like `p-6 rounded-2xl`).
- Replace any hardcoded brand/accent colours with `text-[var(--accent-yellow)]` for emphasis text or `bg-[var(--accent-yellow)]` for the few small UI accents that warrant it.
- Use `text-foreground` for body text, `text-muted-foreground` for secondary text.
- Use `border-border` for hairlines.

If the project has a hero/landing heading, optionally use the `TextScramble` component:

```tsx
import TextScramble from "./brand/TextScramble";

<TextScramble
  segments={[
    { text: "Security operations, " },
    { text: "automated", className: "text-[var(--accent-yellow)]" },
    { text: "." },
  ]}
  className="text-5xl font-extrabold"
/>
```

### 8. Verify against the reference screenshots

After implementing, restart the dev server and confirm visually:

- Background is deep navy/purple (not black, not grey).
- Amber/gold accent is visible on key emphasis spots only — never as a large fill.
- Cards have the glassmorphic blur with a faint inset highlight.
- A barely-visible gold dot grid covers the page background.
- If `TextScramble` is used, the heading decodes from scramble to clear over ~3 seconds.

If something looks off, compare against `hero.jpg` and `glass-cards.jpg` and adjust.

### 9. Report back

Send me a screenshot of one main page and a quick summary:

- What stack changes you made (Tailwind upgrade, dependencies added).
- Which components you reskinned.
- Anything you skipped or want me to confirm.

## Constraints

- **Do not** change feature behaviour, routes, business logic, or data fetching.
- **Do not** invent new colours outside the brand palette.
- **Do not** apply the gold to body text or large filled surfaces — it's an emphasis colour only.
- Use **hyphens**, not em dashes, in any user-visible text you author.
- Keep the existing project structure; just add `src/brand/` and reskin in place.
