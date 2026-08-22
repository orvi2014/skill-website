import type { Metadata } from "next";
import VideoClient from "@/components/VideoClient";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const TITLE = "AI Powered Video Post-Production — Skill Graphics";
const DESCRIPTION =
  "Motion picture drives your revenue — high-quality video content, faster and at scale, powered by AI and refined by experts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/video",
  },
  openGraph: {
    type: "website",
    url: "/video",
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

export default function VideoPage() {
  return <VideoClient />;
}
