"use client";

import DcSection from "@/components/DcSection";
import { HOME_CSS } from "@/content/homeCss";
import { HOME_HTML } from "@/content/homeHtml";
import { mountHome } from "@/content/homeMount";

export default function HomeClient() {
  return <DcSection html={HOME_HTML} css={HOME_CSS} mount={mountHome} />;
}
