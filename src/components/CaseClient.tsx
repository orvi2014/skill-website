"use client";

import DcSection from "@/components/DcSection";
import type { CaseStudy } from "@/data/cases";
import { CASE_CSS, caseHtml, mountCase } from "@/content/caseTemplate";

export default function CaseClient({ data }: { data: CaseStudy }) {
  return <DcSection html={caseHtml(data)} css={CASE_CSS} mount={mountCase} />;
}
