# Lidovci (KDU-ČSL) — Design Rulebook

**For:** MO Lidovci Rtyně v Podkrkonoší website
**Based on:** the official KDU-ČSL / "Noví lidovci" brand manual
**Compiled:** 2026-09-03

> A working reference for the look & feel, distilled from the official brand manual
> ([novi-lidovci.visualbook.pro](https://novi-lidovci.visualbook.pro/)) **and from the
> live national site** ([kdu.cz](https://www.kdu.cz/domu)), which we're using as the
> visual template. Treat this as **guidelines, not law** — enough to feel unmistakably
> "lidovci," while you stay free to design the site the way it works best.

---

## 0. How strict is this?

Relaxed. The goal is a site that clearly reads as KDU-ČSL / Noví lidovci — not
pixel-identical to the manual.

- **Keep recognizable:** the **logo** (use an official file, don't redraw or recolor it),
  the **core colors** (yellow + blue + white, see §2), and the **headline character**
  (heavy, condensed, uppercase). Get these right and everything else reads as on-brand.
- **Adapt freely:** the exact color mix, section layouts, spacing, navigation, extra
  UI colors/tints, components, and tech stack. The live kdu.cz site itself uses a
  broader palette than the minimal manual swatch — so you have room.
- **Nice to confirm before launch:** with the okresní/krajská organizace, whether the
  site should live on a `kdu.cz` subdomain or use a provided template.

---

## 1. Logo

Six official logo variants are provided. Pick by context; download the ready-made file rather than recreating it.

| Variant | When to use |
|---|---|
| **Noví lidovci — horizontal** | Default for wide spaces (site header, footer). |
| **Noví lidovci — horizontal + KDU-ČSL** | When the full party affiliation must be shown. |
| **Noví lidovci — vertical** | Narrow/stacked spaces. |
| **Noví lidovci — vertical + KDU-ČSL** | Stacked, with party affiliation. |
| **Logo Lidovci** (standalone wordmark) | Compact / social avatar contexts. |
| **Logo Lidovci + KDU-ČSL** | Compact, with party affiliation. |

**Rules**
- Use an official variant unchanged — do not stretch, recolor, rotate, or rebuild it.
- Give it clear space and a minimum size so it stays legible (follow the spacing shown in the manual's logo section).
- For an official municipal-organization site, prefer a variant that **includes "KDU-ČSL"** at least once (e.g. in the footer) so the party affiliation is explicit.
- Download source: [kdu.cz graphic manual](https://www.kdu.cz/o-nas/grafika/graficky-manual) (logo ZIP) and the [brand manual logo page](https://novi-lidovci.visualbook.pro/loga).

---

## 2. Colors

Two palettes. The **manual's core swatch** is deliberately tiny (yellow / black / white);
the **live kdu.cz site** extends it with a blue family and blue tints. We use the fuller,
site-based palette — it's more flexible and still unmistakably lidovci.

### Core (from the brand manual)

| Name | HEX | RGB | CMYK | Pantone | RAL |
|---|---|---|---|---|---|
| **Žlutá** (Yellow) | `#FFFA4B` | `255, 250, 75` | `6 / 0 / 82 / 0` | 394 C | 1016 |
| **Černá** (Black) | `#000000` | `0, 0, 0` | `0 / 0 / 0 / 100` | — | — |
| **Bílá** (White) | `#FFFFFF` | `255, 255, 255` | `0 / 0 / 0 / 0` | — | — |

### Extended (measured from the live kdu.cz theme)

| Role | Name | HEX | Where the site uses it |
|---|---|---|---|
| Accent / highlight | Yellow | `#FFFA4B` | Highlight fields, underlines, CTAs |
| Accent hover | Gold | `#FFDC04` | Yellow hover / gradient tops |
| **Primary blue** | Blue | `#034187` | Section backgrounds, headings, top borders |
| Blue (links) | Blue medium | `#00559D` | Links, brighter blue text |
| Blue (hover) | Blue dark | `#023671` | Hover state on blue |
| Blue (borders) | Blue line | `#004492` | 2px borders on boxes/buttons |
| Tint background | Light blue | `#E5F6FF` | Pale section & card backgrounds |
| Text / dark blocks | Ink | `#252525` | Body text, dark header/footer bands |
| Border (neutral) | Gray | `#E5E5E5` | Light dividers/borders |
| Border (cool) | Gray-blue | `#C6D4DF` | Muted blue-gray borders |

**Usage on web**
- **Yellow `#FFFA4B`** — the signature punch. High-luminance, so **black/ink text on yellow**;
  **never white text on yellow**.
- **Blue `#034187`** — the workhorse structural color alongside yellow: dark bands, headings,
  buttons, and accents. White text on blue is fine (good contrast).
- **Light blue `#E5F6FF`** — quiet tint for alternating sections and cards, so the page isn't
  all white.
- **Ink `#252525`** — default text and dark blocks (softer than pure black; matches the site).
- **White** — main background / breathing room.
- Rule of thumb: **white base · ink text · yellow + blue as the two accents · light-blue tints
  to separate sections.** Adding a tint or a neutral gray is fine; inventing a clashing new
  hue (green, purple, …) is what to avoid.

**Which value where** (print/industry, from the manual's "Barevné režimy"): Web → HEX ·
Print → Pantone/RAL · Industry/signmaking → NCS / 3M.

---

## 3. Typography

Three-tier system: a condensed display face for headlines, a lighter condensed cut for sub-headings, and a neutral sans for body text.

| Role | Typeface | Primary weight | Notes |
|---|---|---|---|
| **H1 / main headlines** | **Owners XXNarrow** | XBlack | **Always set in UPPERCASE (verzálky).** Foundry: MCKL. |
| **Lower-order headings** | **Owners XNarrow** | Black | For H2/H3-level headings. Foundry: MCKL. |
| **Body / text** | **Inter** (Inter 18pt optical) | Regular+ | Body copy, UI, paragraphs. By Rasmus Andersson. |

**Fallback / alternative fonts** (when brand fonts aren't available — web, mobile apps, shared online docs, office docs, marketing print, emails):
- **Windows/PC:** Arial
- **Mac:** Helvetica / San Francisco

### Typography rules
- **Headlines are always UPPERCASE.**
- Headlines are condensed and heavy (Owners XXNarrow XBlack) — they should read as bold, punchy blocks.
- Body text is Inter, sentence case, at comfortable reading size.
- Don't mix in other typefaces.

### Web implementation notes
- **Inter is free/open-source** (SIL OFL) — load it from Google Fonts or self-host. This covers all body text for free.
- **Owners is a commercial webfont (MCKL)** — it needs a paid webfont license to use on the site. Three practical options for headlines:
  1. **License the Owners webfont** from MCKL (most on-brand).
  2. **Fall back to the brand's own system stack** (Arial / Helvetica) for headings — the manual explicitly allows Arial/Helvetica as the alternative on web, mobile, and email.
  3. Use a **free condensed heavy substitute** (e.g. a very heavy condensed grotesque) as a stopgap — visually approximate, but not the official face.
- Keep the UPPERCASE + heavy-condensed *character* of headlines regardless of which of the above you choose (`text-transform: uppercase`, heaviest available weight).

### Suggested CSS starting point

```css
:root {
  /* Brand colors — core + extended (live-site) palette */
  --lidovci-yellow:      #FFFA4B;
  --lidovci-gold:        #FFDC04;
  --lidovci-blue:        #034187;
  --lidovci-blue-medium: #00559D;
  --lidovci-blue-dark:   #023671;
  --lidovci-blue-line:   #004492;
  --lidovci-blue-light:  #E5F6FF;
  --lidovci-ink:         #252525;
  --lidovci-black:       #000000;
  --lidovci-white:       #FFFFFF;
  --lidovci-gray:        #E5E5E5;

  /* Type */
  --font-heading: "Owners XXNarrow", "Owners XNarrow", "Arial Narrow", Arial, Helvetica, sans-serif;
  --font-body: "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif;
}

body {
  background: var(--lidovci-white);
  color: var(--lidovci-ink);
  font-family: var(--font-body);
  font-size: 18px;          /* Inter 18pt reference size */
  line-height: 1.5;
}

h1, h2, h3 {
  font-family: var(--font-heading);
  text-transform: uppercase;   /* headlines are always UPPERCASE */
  font-weight: 900;
  letter-spacing: 0;
}

/* Yellow field: black text only */
.brand-yellow {
  background: var(--lidovci-yellow);
  color: var(--lidovci-black);
}
```

```html
<!-- Free body font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 4. Graphic elements

The identity's supporting devices:

- **Tlustá černá čára ("thick black line")** — the signature element. Provided in several variants:
  - Text Right, Text Up, Text In, Text In Yellow, Frame, Frame Yellow.
  - Use it as a bold structural rule / frame to organize the page and to hold headings. It reinforces the heavy, high-contrast black-on-white look.
- **Stickery (stickers/icons)** — an official icon set, available as SVG / PNG / WebP / PDF at 16–1024 px. Use these for iconography instead of generic third-party icon sets.
- All downloadable graphic-element files are **SVG in RGB** color mode (web-ready).
- Source: [brand manual — graphic elements](https://novi-lidovci.visualbook.pro/graficke-elementy).

---

## 5. Photography

The manual defines a photography style (see the [Fotografie section](https://novi-lidovci.visualbook.pro/fotografie)). For a local site, favor authentic, well-lit photos of local people, events, and the town; keep them consistent with the brand's clean, direct tone. Pair images with the thick-black-line element and yellow accents rather than heavy filters.

---

## 6. Quick do / don't

**Do**
- White base with **yellow + blue** as the two accents; light-blue tints to separate sections.
- UPPERCASE condensed headlines; Inter for body.
- Use official logo files and the official icon/graphic elements.
- Show "KDU-ČSL" somewhere for official party affiliation.

**Don't**
- Recolor, distort, or rebuild the logo.
- Put white text on the yellow.
- Introduce a clashing new hue outside the yellow/blue/neutral family, or extra display fonts.
- Stretch or skew type or graphics.

---

## Sources

- [KDU-ČSL — Grafický manuál (downloads: manual, logos, templates)](https://www.kdu.cz/o-nas/grafika/graficky-manual)
- [Noví lidovci — brand manual (live)](https://novi-lidovci.visualbook.pro/)
  - [Loga](https://novi-lidovci.visualbook.pro/loga) · [Písma](https://novi-lidovci.visualbook.pro/pisma) · [Barvy](https://novi-lidovci.visualbook.pro/barvy) · [Grafické elementy](https://novi-lidovci.visualbook.pro/graficke-elementy) · [Fotografie](https://novi-lidovci.visualbook.pro/fotografie) · [Aplikace](https://novi-lidovci.visualbook.pro/aplikace)
