"use client";

import { useEffect } from "react";
import { CALENDLY_URL } from "@/lib/site";

declare global {
  interface Window {
    __openCalendly?: () => void;
    Calendly?: { initPopupWidget: (opts: { url: string }) => void };
  }
}

export default function CalendlyLoader() {
  useEffect(() => {
    window.__openCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        return;
      }
      // widget.js loads lazily; poll briefly for it before giving up.
      let tries = 0;
      const wait = window.setInterval(() => {
        if (window.Calendly) {
          window.clearInterval(wait);
          window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        } else if (++tries > 40) {
          window.clearInterval(wait);
          window.open(CALENDLY_URL, "_blank", "noopener");
        }
      }, 125);
    };
    return () => {
      delete window.__openCalendly;
    };
  }, []);

  return null;
}
