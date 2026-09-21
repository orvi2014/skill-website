"use client";

import DcSection from "@/components/DcSection";
import { PRIVACY_CSS, PRIVACY_HTML } from "@/content/privacy";
import { mountPrivacy } from "@/content/privacyMount";

export default function PrivacyClient() {
  return <DcSection html={PRIVACY_HTML} css={PRIVACY_CSS} mount={mountPrivacy} />;
}
