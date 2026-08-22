export type JourneyEntry = {
  n: string;
  accent: string;
  year: string;
  img: string;
  title: string;
  body: string;
};

// Shared "10 Years of Skill" timeline data, used by both the desktop
// horizontal scroll-track (homeHtml.ts) and the mobile tap-through
// story deck (homeMobile.ts).
export const JOURNEY_DATA: JourneyEntry[] = [
  {
    n: "01",
    accent: "#7B2C8E",
    year: "2016",
    img: "/assets/journey-2016.webp",
    title: "Founded with 5 editors",
    body: "A small, passionate team laid the foundation for a global creative company.",
  },
  {
    n: "02",
    accent: "#9a9a95",
    year: "2018",
    img: "/assets/journey-2018.webp",
    title: "USA & Dubai",
    body: "Expanded our global footprint, bringing Skill closer to clients worldwide.",
  },
  {
    n: "03",
    accent: "#9a9a95",
    year: "2020",
    img: "/assets/journey-2022.webp",
    title: "Survived the pandemic",
    body: "When the world paused, we adapted — protecting our team and keeping every client's content flowing through COVID-19 without a missed deadline.",
  },
  {
    n: "04",
    accent: "#9a9a95",
    year: "2022",
    img: "/assets/journey-2020.webp",
    title: "200 creatives · 400+ brands",
    body: "Growth measured by the trust we earned from brands worldwide.",
  },
  {
    n: "05",
    accent: "#9a9a95",
    year: "2024",
    img: "/assets/journey-2024.webp",
    title: "R&D + Skill Academy",
    body: "Opened our R&D division and launched Skill Academy — investing in next-generation AI infrastructure and the creative talent to power it.",
  },
  {
    n: "06",
    accent: "#7B2C8E",
    year: "2026",
    img: "/assets/journey-2026.webp",
    title: "The AI evolution",
    body: "AI-powered workflows combining intelligent automation with human craft.",
  },
];
