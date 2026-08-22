import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASES, getCase } from "@/data/cases";
import CaseClient from "@/components/CaseClient";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getCase(slug);
  if (!data) return {};

  const title = `${data.name} — Skill Graphics Case Study`;

  return {
    title,
    description: data.intro,
    alternates: {
      canonical: `/cases/${data.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/cases/${data.slug}`,
      title,
      description: data.intro,
      images: [{ url: data.heroImg }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.intro,
      images: [data.heroImg],
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCase(slug);
  if (!data) notFound();

  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: data.title,
    headline: data.title,
    description: data.intro,
    image: `${SITE_URL}${data.heroImg}`,
    about: data.category,
    keywords: data.tags.join(", "),
    url: `${SITE_URL}/cases/${data.slug}`,
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    client: {
      "@type": "Organization",
      name: data.customer,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseJsonLd) }}
      />
      <CaseClient data={data} />
    </>
  );
}
