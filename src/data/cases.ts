export type CaseStudy = {
  slug: string;
  name: string;
  heroImg: string;
  /** CSS object-position for the cover hero (e.g. "right center") when subject is off-center. */
  coverPos?: string;
  title: string;
  intro: string;
  customer: string;
  project: string;
  category: string;
  tags: string[];
  staged: string;
  metrics?: { value: string; label: string }[];
  gallery?: string[];
  videoSrc?: string;
  nextSlug: string;
  comingSoon?: boolean;
};

type AssetPack = {
  cover: string;
  /** CSS object-position for tall crops of landscape covers. */
  coverPos?: string;
  video?: string;
  gallery: string[];
};

const ASSETS: Record<string, AssetPack> = {
  nike: {
    cover: "/assets/cases/nike/cover.webp",
    video: "/assets/cases/nike/video.mp4",
    gallery: [
      "/assets/cases/nike/g1.webp",
      "/assets/cases/nike/g2.webp",
      "/assets/cases/nike/g3.webp",
      "/assets/cases/nike/g4.webp",
      "/assets/cases/nike/g5.webp",
      "/assets/cases/nike/g6.webp",
    ],
  },
  adidas: {
    cover: "/assets/cases/adidas/cover.webp",
    // Branding (stripes + trefoil) sits on the far right of a wide blue field.
    coverPos: "right center",
    video: "/assets/cases/adidas/video.mp4",
    gallery: [
      "/assets/cases/adidas/g1.webp",
      "/assets/cases/adidas/g2.webp",
      "/assets/cases/adidas/g3.webp",
      "/assets/cases/adidas/g4.webp",
      "/assets/cases/adidas/g5.webp",
    ],
  },
  elvine: {
    cover: "/assets/cases/elvine/cover.webp",
    video: "/assets/cases/elvine/video.mp4",
    gallery: [
      "/assets/cases/elvine/g1.webp",
      "/assets/cases/elvine/g2.webp",
      "/assets/cases/elvine/g3.webp",
      "/assets/cases/elvine/g4.webp",
    ],
  },
  replay: {
    cover: "/assets/cases/replay/cover.webp",
    video: "/assets/cases/replay/video.mp4",
    gallery: [
      "/assets/cases/replay/g1.webp",
      "/assets/cases/replay/g2.webp",
      "/assets/cases/replay/g3.webp",
      "/assets/cases/replay/g4.webp",
    ],
  },
  prada: {
    cover: "/assets/cases/prada/cover.webp",
    // Model + bag sit in the left third of a wide staircase frame.
    coverPos: "18% 42%",
    video: "/assets/cases/prada/video.mp4",
    gallery: [
      "/assets/cases/prada/g1.webp",
      "/assets/cases/prada/g2.webp",
      "/assets/cases/prada/g3.webp",
      "/assets/cases/prada/g4.webp",
    ],
  },
  guess: {
    cover: "/assets/cases/guess/cover.webp",
    video: "/assets/cases/guess/video.mp4",
    gallery: [
      "/assets/cases/guess/g1.webp",
      "/assets/cases/guess/g2.webp",
      "/assets/cases/guess/g3.webp",
      "/assets/cases/guess/g4.webp",
    ],
  },
  dkny: {
    cover: "/assets/cases/dkny/cover.webp",
    video: "/assets/cases/dkny/video.mp4",
    gallery: [
      "/assets/cases/dkny/g1.webp",
      "/assets/cases/dkny/g2.webp",
      "/assets/cases/dkny/g3.webp",
      "/assets/cases/dkny/g4.webp",
    ],
  },
  "tommy-hilfiger": {
    cover: "/assets/cases/tommy-hilfiger/cover.webp",
    video: "/assets/cases/tommy-hilfiger/video.mp4",
    gallery: [
      "/assets/cases/tommy-hilfiger/g1.webp",
      "/assets/cases/tommy-hilfiger/g2.webp",
      "/assets/cases/tommy-hilfiger/g3.webp",
      "/assets/cases/tommy-hilfiger/g4.webp",
      "/assets/cases/tommy-hilfiger/g5.webp",
    ],
  },
  cmp: {
    cover: "/assets/cases/cmp/cover.webp",
    video: "/assets/cases/cmp/video.mp4",
    gallery: [
      "/assets/cases/cmp/g1.webp",
      "/assets/cases/cmp/g2.webp",
      "/assets/cases/cmp/g3.webp",
      "/assets/cases/cmp/g4.webp",
      "/assets/cases/cmp/g5.webp",
    ],
  },
  kappahl: {
    cover: "/assets/cases/kappahl/cover.webp",
    video: "/assets/cases/kappahl/video.mp4",
    gallery: [
      "/assets/cases/kappahl/g1.webp",
      "/assets/cases/kappahl/g2.webp",
      "/assets/cases/kappahl/g3.webp",
      "/assets/cases/kappahl/g4.webp",
    ],
  },
  amazon: {
    cover: "/assets/cases/amazon/cover.webp",
    video: "/assets/cases/amazon/video.mp4",
    gallery: [
      "/assets/cases/amazon/g1.webp",
      "/assets/cases/amazon/g2.webp",
      "/assets/cases/amazon/g3.webp",
      "/assets/cases/amazon/g4.webp",
    ],
  },
  walmart: {
    cover: "/assets/cases/walmart/cover.webp",
    video: "/assets/cases/walmart/video.mp4",
    gallery: [
      "/assets/cases/walmart/g1.webp",
      "/assets/cases/walmart/g2.webp",
      "/assets/cases/walmart/g3.webp",
      "/assets/cases/walmart/g4.webp",
    ],
  },
  uniqlo: {
    cover: "/assets/cases/uniqlo/cover.webp",
    video: "/assets/cases/uniqlo/video.mp4",
    gallery: [
      "/assets/cases/uniqlo/g1.webp",
      "/assets/cases/uniqlo/g2.webp",
      "/assets/cases/uniqlo/g3.webp",
      "/assets/cases/uniqlo/g4.webp",
    ],
  },
  "the-north-face": {
    cover: "/assets/cases/the-north-face/cover.webp",
    video: "/assets/cases/the-north-face/video.mp4",
    gallery: [
      "/assets/cases/the-north-face/g1.webp",
      "/assets/cases/the-north-face/g2.webp",
      "/assets/cases/the-north-face/g3.webp",
    ],
  },
  burberry: {
    cover: "/assets/cases/burberry/cover.webp",
    video: "/assets/cases/burberry/video.mp4",
    gallery: [
      "/assets/cases/burberry/g1.webp",
      "/assets/cases/burberry/g2.webp",
      "/assets/cases/burberry/g3.webp",
      "/assets/cases/burberry/g4.webp",
    ],
  },
  ftkr: {
    cover: "/assets/cases/ftkr/cover.webp",
    video: "/assets/cases/ftkr/video.mp4",
    gallery: [
      "/assets/cases/ftkr/g1.webp",
      "/assets/cases/ftkr/g2.webp",
      "/assets/cases/ftkr/g3.webp",
      "/assets/cases/ftkr/g4.webp",
    ],
  },
  "avi-co": {
    cover: "/assets/cases/avi-co/cover.webp",
    video: "/assets/cases/avi-co/video.mp4",
    gallery: [
      "/assets/cases/avi-co/g1.webp",
      "/assets/cases/avi-co/g2.webp",
      "/assets/cases/avi-co/g3.webp",
      "/assets/cases/avi-co/g4.webp",
    ],
  },
  champion: {
    cover: "/assets/cases/champion/cover.webp",
    video: "/assets/cases/champion/video.mp4",
    gallery: [
      "/assets/cases/champion/g1.webp",
      "/assets/cases/champion/g2.webp",
      "/assets/cases/champion/g3.webp",
      "/assets/cases/champion/g4.webp",
      "/assets/cases/champion/g5.webp",
    ],
  },
  vans: {
    cover: "/assets/cases/vans/cover.webp",
    video: "/assets/cases/vans/video.mp4",
    gallery: [
      "/assets/cases/vans/g1.webp",
      "/assets/cases/vans/g2.webp",
      "/assets/cases/vans/g3.webp",
      "/assets/cases/vans/g4.webp",
    ],
  },
  mango: {
    cover: "/assets/cases/mango/cover.webp",
    video: "/assets/cases/mango/video.mp4",
    gallery: [
      "/assets/cases/mango/g1.webp",
      "/assets/cases/mango/g2.webp",
      "/assets/cases/mango/g3.webp",
      "/assets/cases/mango/g4.webp",
    ],
  },
};

function withAssets(
  base: Omit<CaseStudy, "heroImg" | "gallery" | "videoSrc" | "coverPos">,
  slug: string
): CaseStudy {
  const a = ASSETS[slug];
  return {
    ...base,
    heroImg: a?.cover ?? "",
    coverPos: a?.coverPos,
    videoSrc: a?.video,
    gallery: a?.gallery ?? [],
  };
}

export const CASES: CaseStudy[] = [
  withAssets(
    {
      slug: "nike",
      name: "Nike",
      title: "Scaling performance through high-volume image production",
      intro:
        "Nike needed consistent, high-quality post-production for product launches at global scale — without ever bending brand standards across categories. We built a scalable workflow that pairs AI-assisted processes with dedicated retouchers and multi-level quality control, so every image ships fast, on-brand and pixel-precise.",
      customer: "Nike",
      project: "PLP / PDP",
      category: "Fashion",
      tags: [
        "High-volume image production",
        "Brand guideline compliance",
        "Fast turnaround",
        "Multi-level quality assurance",
        "AI-assisted production workflow",
      ],
      staged:
        "Volume without compromise. From launch drops to always-on catalogue, every asset moves through the same AI-accelerated pipeline and the same human eye for detail — so speed never costs consistency. Categories stay visually aligned, colour stays true, and each launch lands looking unmistakably Nike.",
      metrics: [
        { value: "12K+", label: "Assets / launch" },
        { value: "48h", label: "Avg turnaround" },
        { value: "5", label: "Categories" },
        { value: "100%", label: "Brand-consistent" },
      ],
      nextSlug: "adidas",
    },
    "nike"
  ),
  withAssets(
    {
      slug: "adidas",
      name: "Adidas",
      title: "Delivering consistency across every collection",
      intro:
        "Adidas needed to manage large volumes of product imagery while holding consistent colour accuracy, styling and visual identity across seasonal collections. A dedicated production team, supported by AI-powered workflows, ensured every asset met Adidas' global quality standards while accelerating production.",
      customer: "Adidas",
      project: "PLP / PDP",
      category: "Fashion / Sport",
      tags: [
        "Large-scale production",
        "Colour consistency",
        "Fast delivery",
        "Enterprise workflow",
        "Dedicated production team",
      ],
      staged:
        "Season after season, the same pipeline keeps colour true and styling aligned across thousands of assets — enterprise-scale output that never drifts from the brand's global standards.",
      nextSlug: "elvine",
    },
    "adidas"
  ),
  withAssets(
    {
      slug: "elvine",
      name: "Elvine",
      title: "Premium outerwear deserves premium presentation",
      intro:
        "Elvine wanted clean, premium product imagery that reflected the quality and craftsmanship of every collection. Our specialists delivered meticulous retouching, ghost mannequin production and colour refinement — preserving authentic fabric textures and garment detail throughout.",
      customer: "Elvine",
      project: "PLP / PDP",
      category: "Fashion",
      tags: [
        "Ghost Mannequin",
        "Premium Retouching",
        "Texture Preservation",
        "Colour Accuracy",
        "Quality Control",
      ],
      staged:
        "Every jacket is treated like the craft object it is: precise retouching and true colour, with fabric texture kept honest so the product looks exactly as it does in hand.",
      nextSlug: "replay",
    },
    "elvine"
  ),
  withAssets(
    {
      slug: "replay",
      name: "Replay",
      title: "Denim crafted to perfection",
      intro:
        "Replay needed authentic denim textures maintained while achieving consistent visual presentation across the entire product range. Advanced retouching combined with detailed quality control produced natural, consistent imagery ready for global e-commerce.",
      customer: "Replay",
      project: "PLP / PDP",
      category: "Denim",
      tags: [
        "Denim Retouching",
        "Colour Correction",
        "Fabric Detail Preservation",
        "High-Volume Workflow",
      ],
      staged:
        "Denim lives or dies on texture. We hold the grain, the wash and the weight true across the whole range — natural, consistent and ready for every channel.",
      nextSlug: "prada",
    },
    "replay"
  ),
  withAssets(
    {
      slug: "prada",
      name: "Prada",
      title: "Luxury lies in every detail",
      intro:
        "Luxury products demand exceptional precision without compromising their authentic appearance. Pixel-level retouching, luxury-grade colour management and rigorous quality assurance delivered imagery worthy of one of the world's most iconic fashion houses.",
      customer: "Prada",
      project: "PLP / PDP",
      category: "Luxury",
      tags: [
        "Luxury Retouching",
        "Precision Editing",
        "Colour Management",
        "Premium Quality Standards",
      ],
      staged:
        "At this level, detail is everything. Pixel-precise retouching and exacting colour management produce imagery that carries the weight of the house behind it.",
      nextSlug: "guess",
    },
    "prada"
  ),
  withAssets(
    {
      slug: "guess",
      name: "Guess",
      title: "Fast fashion meets premium production",
      intro:
        "Guess needed to support fast-moving campaigns with consistent image quality and reliable production timelines. We combined scalable workflows with dedicated production specialists to deliver campaign-ready imagery, on schedule.",
      customer: "Guess",
      project: "PLP / PDP",
      category: "Fashion",
      tags: [
        "Campaign Production",
        "High Volume",
        "Fast Turnaround",
        "Brand Consistency",
      ],
      staged:
        "Campaign speed without the compromise — scalable production and a dedicated team keep quality and timelines locked, drop after drop.",
      nextSlug: "dkny",
    },
    "guess"
  ),
  withAssets(
    {
      slug: "dkny",
      name: "DKNY",
      title: "Modern fashion. Modern production.",
      intro:
        "DKNY wanted clean, sophisticated imagery aligned with the brand's contemporary identity. Structured post-production workflows ensured every product held a consistent premium presentation across all channels.",
      customer: "DKNY",
      project: "PLP / PDP",
      category: "Fashion",
      tags: [
        "Fashion Retouching",
        "E-commerce Production",
        "Brand Consistency",
        "Multi-Level QC",
      ],
      staged:
        "Contemporary and clean, every time. A structured pipeline keeps the brand's modern edge consistent across the full catalogue and every channel.",
      nextSlug: "tommy-hilfiger",
    },
    "dkny"
  ),
  withAssets(
    {
      slug: "tommy-hilfiger",
      name: "Tommy Hilfiger",
      title: "Timeless style. Exceptional visuals.",
      intro:
        "Tommy Hilfiger needed to support large-scale product launches while maintaining the premium look and feel associated with the brand. Dedicated production teams and AI-assisted workflows enabled consistent delivery across multiple product categories.",
      customer: "Tommy Hilfiger",
      project: "PLP / PDP",
      category: "Fashion",
      tags: [
        "High-Volume Production",
        "Premium Retouching",
        "Fast Delivery",
        "Dedicated Team",
      ],
      staged:
        "Classic never goes out of style — and it never slips out of standard. Dedicated teams and AI-assisted workflows carry the premium look across every category and launch.",
      nextSlug: "cmp",
    },
    "tommy-hilfiger"
  ),
  withAssets(
    {
      slug: "cmp",
      name: "CMP",
      title: "Built for performance",
      intro:
        "CMP needed technical outdoor apparel presented with accurate colours, textures and consistent visual standards. Specialised apparel retouching and quality assurance ensured every product was presented exactly as intended.",
      customer: "CMP",
      project: "PLP / PDP",
      category: "Sport / Outdoor",
      tags: [
        "Outdoor Apparel",
        "Colour Accuracy",
        "Texture Preservation",
        "Production Consistency",
      ],
      staged:
        "Technical gear has to read as technical. Accurate colour, honest texture and rigorous QC present every piece exactly as it performs.",
      nextSlug: "kappahl",
    },
    "cmp"
  ),
  withAssets(
    {
      slug: "kappahl",
      name: "KappAhl",
      title: "Scalable production for everyday fashion",
      intro:
        "KappAhl needed to manage continuous product releases while maintaining speed, quality and consistency. Our production ecosystem supported ongoing image delivery through dedicated teams, AI-powered workflows and enterprise-quality standards.",
      customer: "KappAhl",
      project: "PLP / PDP",
      category: "Fashion",
      tags: [
        "Fashion E-commerce",
        "Continuous Production",
        "AI-Assisted Workflow",
        "Quality Assured",
      ],
      staged:
        "Always-on fashion needs an always-on pipeline. Dedicated teams and AI-powered workflows keep continuous releases fast, consistent and quality-assured.",
      nextSlug: "amazon",
    },
    "kappahl"
  ),
  ...(
    [
      { slug: "amazon", name: "Amazon", category: "Marketplace" },
      { slug: "walmart", name: "Walmart", category: "Retail" },
      { slug: "uniqlo", name: "Uniqlo", category: "Fashion" },
      { slug: "the-north-face", name: "The North Face", category: "Sport / Outdoor" },
      { slug: "burberry", name: "Burberry", category: "Luxury" },
      { slug: "ftkr", name: "FTKR", category: "Fashion" },
      { slug: "avi-co", name: "Avi & Co", category: "Jewelry" },
      { slug: "champion", name: "Champion", category: "Sportswear" },
      { slug: "vans", name: "Vans", category: "Footwear" },
      { slug: "mango", name: "Mango", category: "Fashion" },
    ] as const
  ).map((b, i, arr) => {
    const hasAssets = Boolean(ASSETS[b.slug]);
    const nextSlug = i + 1 < arr.length ? arr[i + 1].slug : "nike";
    if (!hasAssets) {
      return {
        slug: b.slug,
        name: b.name,
        heroImg: "",
        title: "Case study coming soon",
        intro: `We're preparing the ${b.name} case study — full production details will be published here shortly.`,
        customer: b.name,
        project: "Coming soon",
        category: b.category,
        tags: [] as string[],
        staged: "Full case study coming soon — check back shortly.",
        gallery: [] as string[],
        nextSlug,
        comingSoon: true,
      } satisfies CaseStudy;
    }
    return withAssets(
      {
        slug: b.slug,
        name: b.name,
        title: `${b.name} production`,
        intro: `High-volume image and video production for ${b.name} — consistent colour, brand-true styling, and campaign-ready delivery.`,
        customer: b.name,
        project: "PLP / PDP",
        category: b.category,
        tags: ["E-commerce Production", "Brand Consistency", "Fast Turnaround"],
        staged: `Every asset for ${b.name} moves through the same quality pipeline — cover, motion, and gallery — so the brand stays sharp across channels.`,
        nextSlug,
      },
      b.slug
    );
  }),
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
