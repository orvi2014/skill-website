import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Skill Graphics — Visual Content for E-commerce by Human and AI";
const DESCRIPTION =
  "AI-powered creativity. Human expertise. Built for scale. Skill Graphics is part of Skill Ventures.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return <HomeClient />;
}
