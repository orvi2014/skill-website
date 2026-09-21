import type { Metadata } from "next";
import PrivacyClient from "@/components/PrivacyClient";

const TITLE = "Privacy Policy — Skill Graphics";
const DESCRIPTION =
  "How Skill Graphics, a brand of Skill Service LTD., collects, uses, stores and protects personal information, and the rights you have over it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "/privacy-policy",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
