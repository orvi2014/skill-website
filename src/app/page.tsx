import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "Skill Graphics — AI-Powered Post-Production Partner";
const DESCRIPTION =
  "Skill Graphics is an AI-powered image & video post-production studio, part of Skill Ventures.";

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
