export type CaseStudy = {
  slug: string;
  name: string;
  heroImg: string;
  title: string;
  intro: string;
  customer: string;
  project: string;
  category: string;
  tags: string[];
  staged: string; // "How we staged the brand" copy
  metrics?: { value: string; label: string }[]; // optional result-metrics strip
  splitImages?: [string, string]; // optional full-bleed 2-up split
  gallery?: string[]; // "staged looks" rail — only where real assets exist
  nextSlug: string;
  comingSoon?: boolean; // brand added to marquee ahead of real case content
};

export const CASES: CaseStudy[] = [
  {
    slug: "nike",
    name: "Nike",
    heroImg: "/assets/cases-nike.webp",
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
    splitImages: ["/assets/nike-look-2.webp", "/assets/nike-look-5.webp"],
    gallery: [
      "/assets/nike-look-1.webp",
      "/assets/nike-look-2.webp",
      "/assets/nike-look-3.webp",
      "/assets/nike-look-4.webp",
      "/assets/nike-look-5.webp",
      "/assets/nike-look-6.webp",
    ],
    nextSlug: "adidas",
  },
  {
    slug: "adidas",
    name: "Adidas",
    heroImg: "/assets/cases-adidas.webp",
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
    gallery: ["/assets/cases-adidas.webp", "", "", ""],
    nextSlug: "elvine",
  },
  {
    slug: "elvine",
    name: "Elvine",
    heroImg: "/assets/cases-elvine.webp",
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
    gallery: ["/assets/cases-elvine.webp", "", "", ""],
    nextSlug: "replay",
  },
  {
    slug: "replay",
    name: "Replay",
    heroImg: "/assets/cases-replay.webp",
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
    gallery: ["/assets/cases-replay.webp", "", "", ""],
    nextSlug: "prada",
  },
  {
    slug: "prada",
    name: "Prada",
    heroImg: "/assets/cases-prada.webp",
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
    gallery: ["/assets/cases-prada.webp", "", "", ""],
    nextSlug: "guess",
  },
  {
    slug: "guess",
    name: "Guess",
    heroImg: "/assets/cases-guess.webp",
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
    gallery: ["/assets/cases-guess.webp", "", "", ""],
    nextSlug: "dkny",
  },
  {
    slug: "dkny",
    name: "DKNY",
    heroImg: "/assets/cases-dkny.webp",
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
    gallery: ["/assets/cases-dkny.webp", "", "", ""],
    nextSlug: "tommy-hilfiger",
  },
  {
    slug: "tommy-hilfiger",
    name: "Tommy Hilfiger",
    heroImg: "/assets/cases-tommy.webp",
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
    gallery: ["/assets/cases-tommy.webp", "", "", ""],
    nextSlug: "cmp",
  },
  {
    slug: "cmp",
    name: "CMP",
    heroImg: "/assets/cmp-hero.webp",
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
    gallery: [
      "/assets/cmp-look-1.webp",
      "/assets/cmp-look-2.webp",
      "/assets/cmp-look-3.webp",
      "/assets/cmp-look-4.webp",
      "/assets/cmp-look-5.webp",
    ],
    nextSlug: "kappahl",
  },
  {
    slug: "kappahl",
    name: "KappAhl",
    heroImg: "/assets/cases-kappahl.webp",
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
    gallery: ["/assets/cases-kappahl.webp", "", "", ""],
    nextSlug: "amazon",
  },
  ...(
    [
      { slug: "amazon", name: "Amazon", category: "Marketplace" },
      { slug: "walmart", name: "Walmart", category: "Retail" },
      { slug: "uniqlo", name: "Uniqlo", category: "Fashion" },
      { slug: "the-north-face", name: "The North Face", category: "Sport / Outdoor" },
      { slug: "chanel", name: "Chanel", category: "Luxury" },
      { slug: "burberry", name: "Burberry", category: "Luxury" },
      { slug: "ftkr", name: "FTKR", category: "Fashion" },
      { slug: "avi-co", name: "Avi & Co", category: "Jewelry" },
      { slug: "champion", name: "Champion", category: "Sportswear" },
      { slug: "vans", name: "Vans", category: "Footwear" },
      { slug: "mango", name: "Mango", category: "Fashion" },
    ] as const
  ).map((b, i, arr) => ({
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
    gallery: ["", "", "", ""] as string[],
    nextSlug: i + 1 < arr.length ? arr[i + 1].slug : "nike",
    comingSoon: true,
  })),
];

export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
