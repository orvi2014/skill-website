// Central site-wide constants used for canonical URLs, sitemap/robots
// generation, Open Graph/Twitter metadata, and JSON-LD structured data.
//
// IMPORTANT: Set NEXT_PUBLIC_SITE_URL in your production environment
// (e.g. .env.production or your hosting provider's dashboard) to the
// real, canonical production domain before deploying. The fallback
// below is a placeholder and will produce incorrect canonical/OG URLs
// if left unset in production.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.skillgraphics.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Skill Graphics";

export const DEFAULT_OG_IMAGE = "/assets/logo-skill-graphics.png";

// Set NEXT_PUBLIC_CALENDLY_URL in the environment to override without a
// code change (e.g. to switch event types per campaign).
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/skill-ventures/skill-graphics-discovery-call";
