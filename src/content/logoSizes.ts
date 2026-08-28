// Per-brand logo heights, in px, computed so every mark reads the same
// optical size: ink area normalised, then capped on ink width and height.
// A wide wordmark (Replay, DKNY) sits shorter than a compact mark (Guess,
// Adidas) while looking the same weight. Shared by the home cards and the
// case pages so one brand is never two sizes across the site.
export const LOGO_H: Record<string, number> = {
  "the-north-face": 31,
  "guess": 34.6,
  "replay": 21.8,
  "uniqlo": 42.9,
  "furla": 28.9,
  "amazon": 28.3,
  "walmart": 32.4,
  "adidas": 34.6,
  "dkny": 23.7,
  "cmp": 28.7,
  "tommy-hilfiger": 33.3,
  "kappahl": 26,
  "vans": 27.1
};

export const logoH = (slug: string, scale = 1): string =>
  ((LOGO_H[slug] ?? 26) * scale).toFixed(1);

// Slugs whose only full-colour asset is a hand-made "-color" file; the plain
// <slug>.png for these is white-on-transparent and vanishes on light pages.
export const LOGO_COLOUR_FILE = new Set([
  "cmp",
  "the-north-face",
  "vans",
  "adidas",
  "kappahl",
  "amazon",
]);

// Full-colour logo file for a brand, for use on light backgrounds. Built by
// concatenation from a quoted literal, not a template string, so the preview
// loader's asset-path rewrite can find and rewrite it.
export const logoColourSrc = (slug: string): string =>
  "/assets/brand-logos/" + slug + (LOGO_COLOUR_FILE.has(slug) ? "-color" : "") + ".png";

// A few colour files are trimmed tighter than their white counterpart, so the
// same box height would render more ink. Heights here replace LOGO_H when the
// colour file is the one being shown.
const LOGO_H_COLOUR: Record<string, number> = {
  uniqlo: 34.7,
};

export const logoColourH = (slug: string, scale = 1): string =>
  ((LOGO_H_COLOUR[slug] ?? LOGO_H[slug] ?? 26) * scale).toFixed(1);
