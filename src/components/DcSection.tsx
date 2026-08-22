"use client";

import { useEffect } from "react";

type CleanupFn = (() => void) | void;

export default function DcSection({
  html,
  css,
  mount,
}: {
  html: string;
  css: string;
  mount?: () => CleanupFn;
}) {
  useEffect(() => {
    if (!mount) return;
    const cleanup = mount();
    return cleanup ?? undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
