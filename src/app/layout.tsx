import type { Metadata } from "next";
import Script from "next/script";
import ContactModal from "@/components/ContactModal";
import CareerModal from "@/components/CareerModal";
import CalendlyLoader from "@/components/CalendlyLoader";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/site";
import "./globals.css";

const TITLE = "Skill Graphics — AI-Powered Post-Production Partner";
const DESCRIPTION =
  "Skill Graphics is an AI-powered image & video post-production studio, part of Skill Ventures.";

// NOTE: child routes (photo, video, cases/[slug]) each set their own
// complete `title` string (already suffixed with "— Skill Graphics"),
// so no `title.template` is used here — that would double-append the
// site name (e.g. "... — Skill Graphics — Skill Graphics"). `title`
// only acts as a fallback for routes that don't define their own
// (currently none, since page.tsx also sets its own explicit title).
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
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

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  parentOrganization: {
    "@type": "Organization",
    name: "Skill Ventures",
  },
  sameAs: [
    "https://www.instagram.com/skillventures.sv",
    "https://www.linkedin.com/company/skill-graphics-ltd./",
    "https://www.facebook.com/share/1DDgX9hW3E/",
    "https://vimeo.com/skillvideos",
  ],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/archivo-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/space-grotesk-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        <ContactModal />
        <CareerModal />
        <CalendlyLoader />
        <Script src="/scripts/sg-lazyvideo.js" strategy="afterInteractive" />
        <Script src="/scripts/sg-tool-cursor.js" strategy="lazyOnload" />
        <Script src="/scripts/sg-vhero.js" strategy="afterInteractive" />
        <Script src="/scripts/sg-video-fullscreen.js?v=20260814g" strategy="afterInteractive" />
        <Script id="microsoft-clarity" strategy="afterInteractive">{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "y23syew064");
        `}</Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
