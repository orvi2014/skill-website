import type { Metadata } from "next";
import PhotoClient from "@/components/PhotoClient";

const TITLE = "AI Powered Image Editing — Skill Graphics";
const DESCRIPTION =
  "Increase your sales with high-quality content — from PDP and campaign shots to on-location and luxury imagery.";
const OG_IMAGE = "/assets/photo-hero.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/photo",
  },
  openGraph: {
    type: "website",
    url: "/photo",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function PhotoPage() {
  return <PhotoClient />;
}
