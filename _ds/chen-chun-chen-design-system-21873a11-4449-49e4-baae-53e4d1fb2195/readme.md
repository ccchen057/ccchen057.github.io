# Chen-Chun Chen — Design System

A personal brand system for **Chen-Chun Chen, PhD** — a researcher in **High-Performance Computing / Computer Science**. The system powers a personal site (academic CV, publications, contact/networking landing) and any related collateral.

> **No external sources.** This brand was designed from scratch — there is no prior codebase, Figma, or production app. Direction was set through a guided exploration with the user. A Dribbble shot (`https://dribbble.com/shots/5575115`) was shared as a *loose* visual reference for the bold-grotesque, monochrome, kinetic aesthetic — it was used for tone only, not copied.

---

## 1. The brand at a glance

Clean, modern, **Swiss** — bold monochrome grotesque type, enormous whitespace, hairline rules, and a single heavy "rule bar" graphic device. A mono typeface (JetBrains Mono) carries small technical labels, giving the system a quiet HPC / systems-engineering edge. Confident and minimal, never decorative. Ships **light (default) and dark** themes from one inverted token ramp.

- **Voice:** precise, understated, first-person.
- **Color:** pure neutral grayscale. No hue. Emphasis comes from weight, scale, and rules — not color.
- **Type:** Hanken Grotesk (display + body), JetBrains Mono (labels/meta/code).
- **Motion:** noticeable but tasteful — kinetic type that rises into place, bars that grow from the left.

---

## 2. Content fundamentals

How copy is written across the brand.

- **Person & voice.** First person ("I build systems…"), active, declarative. The author speaks plainly about the work, not about themselves in the third person.
- **Tone.** Confident, concrete, low-ceremony. State what the work *does* ("make science run faster"), not adjectives about how impressive it is. No hype words ("revolutionary", "cutting-edge").
- **Casing.** Display headlines are **ALL-CAPS** for poster impact. Body copy and UI text are sentence case. Mono labels are UPPERCASE with wide tracking. Title Case is avoided except in nav.
- **Length.** Short. Hero statements are 3–5 words per line. Bios are a few tight sentences. Publication entries are scannable one-liners.
- **Numbers & specifics.** Real specifics over filler — venue names, years, role. Avoid invented stats or "data slop".
- **Emoji:** never. **Unicode marks:** the middle dot `·` separates metadata (e.g. "PhD · High-Performance Computing"); the arrow `→` marks forward navigation links. That's the full decorative vocabulary.

**Example copy**
- Hero: *"I build systems that make science run faster."*
- Eyebrow / meta: `PhD · HIGH-PERFORMANCE COMPUTING`
- Section label: `01 — SELECTED PUBLICATIONS`
- CTA: *"View publications"*, *"Download CV"*
- Status badge: `OPEN TO COLLABORATION`

---

## 3. Visual foundations

- **Color.** A true-neutral gray ramp (`--gray-0 … --gray-950`, near-zero chroma). Semantic aliases: `--color-text` / `-secondary` / `-muted` / `-faint`, `--color-surface` / `-sunken`, `--color-border` / `-strong`, and a monochrome `--color-accent` (ink in light, near-white in dark). Functional status colors exist (`--color-positive/caution/critical`) but are low-chroma and rarely used. **Dark theme** inverts the ramp under `[data-theme="dark"]`.
- **Type.** Hanken Grotesk everywhere visible; heavy weights (700–800) for all-caps display with tight negative tracking (`--tracking-display: -0.035em`), regular (400) for body at 17px / 1.55. JetBrains Mono for labels and code only.
- **Spacing & layout.** 4px base grid (`--space-1 … --space-11`). Generous vertical rhythm; content max-width `--container: 1180px`, prose `--container-narrow: 760px`, readable `--measure: 68ch`. Layouts are left-aligned and asymmetric, with large empty quadrants.
- **Backgrounds.** Flat. Pure white (`--color-bg`) in light, near-black (`--gray-950`) in dark. **No gradients, no textures, no patterns, no imagery behind type.** Photography (if used) sits in defined frames, never full-bleed washes.
- **The rule device.** A heavy horizontal bar (~12–16px tall, `--color-text`) is the signature graphic element — it anchors headlines and divides sections. Thin **hairlines** (`--color-border`, 1px) divide everything else. Shadows are minimal; surfaces are defined by hairline borders first, soft neutral shadows (`--shadow-sm/md/lg`) only when elevation is genuinely needed.
- **Corners.** Sharp-leaning. Cards use `--radius-lg` (10px); buttons default to `--radius-pill`; most rules and frames are square.
- **Borders & cards.** Cards = 1px `--color-border`, `--radius-lg`, no shadow by default. Avoid the "rounded card + colored left border" cliché entirely.
- **Motion.** Entrance animations are the playful moment: headline words **rise** from a clipped baseline with a short stagger; the rule **bar grows** from the left. Easing `--ease-out` (cubic-bezier(0.16,1,0.3,1)); durations 130/220/420ms. Hover = subtle wash (`--color-hover-wash`) or opacity drop; press = `scale(0.97)`. The visible end-state is always the base style so static/reduced-motion/print render correctly; animation layers on under `prefers-reduced-motion: no-preference`.
- **Transparency & blur.** Used sparingly — light scrims over surfaces only; no glassmorphism.
- **Imagery vibe (if added).** Black-and-white or desaturated, high-contrast, neutral. Matches the monochrome system.

---

## 4. Iconography

- **Approach:** minimal. The brand is type-and-rule first; icons are used sparingly.
- **Icon set:** **Lucide** (https://lucide.dev) — thin, consistent 1.5–2px stroke, square feel that matches the grotesque/mono pairing. Linked from CDN where needed; substitute the closest Lucide glyph rather than hand-drawing SVGs. *(Substitution flag: Lucide is a stand-in choice, not an existing brand asset — swap if you prefer Phosphor or Heroicons.)*
- **Logo / mark:** a monogram **"CC"** set in JetBrains Mono Bold inside a 1.5px square — a typographic mark, not an illustration. See `assets/`.
- **Unicode as iconography:** middle dot `·` for metadata separation, arrow `→` for nav. No emoji, ever.

---

## 5. Index / manifest

**Root**
- `styles.css` — global entry point (import this). `@import`s everything below.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill wrapper for use in Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — Hanken Grotesk + JetBrains Mono (Google Fonts).
- `colors.css` — neutral ramp + semantic aliases + dark theme.
- `typography.css` — families, weights, type scale, tracking, label voice.
- `spacing.css` — spacing, radii, borders, shadows, motion, layout, z-index.
- `base.css` — resets + on-brand base element styling + `.ds-label` / `.ds-container` utilities.

**Foundation cards** (`guidelines/`) — specimens shown in the Design System tab: type (display / body / labels), colors (ramp / semantic / accent + dark), spacing (scale / radii + shadows).

**Components** (`components/core/`) — `Button`, `Badge`, `Card`, `Input`, `TextLink`, `SectionLabel`. Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` previews them.

**Brand** (`assets/`) — `logo-mark.svg` (CC monogram). The mark is typographic; see the Brand card in the Design System tab.

**UI kit** (`ui_kits/personal-site/`) — full-screen interactive recreation of the personal site: Hero (kinetic), About, Publications (filterable), CV, Contact (working form). Light + dark, section nav, theme toggle.

---

## 6. Using it

Link the one stylesheet, then use tokens and components:

```html
<link rel="stylesheet" href="styles.css">
<html data-theme="dark"> <!-- opt into dark -->
```

Components are bundled to `window.ChenChunChenDesignSystem_21873a` (e.g. `const { Button } = window.ChenChunChenDesignSystem_21873a`).
