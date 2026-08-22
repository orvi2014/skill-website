"use client";

import DcSection from "@/components/DcSection";
import { VIDEO_CSS, VIDEO_HTML } from "@/content/video";
import { mountVideo } from "@/content/videoMount";

export default function VideoClient() {
  return <DcSection html={VIDEO_HTML} css={VIDEO_CSS} mount={mountVideo} />;
}
