"use client";

import DcSection from "@/components/DcSection";
import { PHOTO_CSS, PHOTO_HTML } from "@/content/photo";
import { mountPhoto } from "@/content/photoMount";

export default function PhotoClient() {
  return <DcSection html={PHOTO_HTML} css={PHOTO_CSS} mount={mountPhoto} />;
}
