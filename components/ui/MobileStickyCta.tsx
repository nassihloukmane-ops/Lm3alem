"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

/** Barre CTA fixe en bas — mobile uniquement (trafic principal). */
export function MobileStickyCta() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const download = document.getElementById("telecharger");
      const nearDownload =
        download != null &&
        download.getBoundingClientRect().top < window.innerHeight * 0.85;
      setVisible(y > 280 && !nearDownload);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden transition-transform duration-300 safe-px safe-pb",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="mx-auto max-w-lg pb-2 pt-1">
        <div className="rounded-20 border border-outline bg-nav/95 backdrop-blur-xl shadow-soft p-2 flex gap-2">
          <a href="#telecharger" className="flex-1">
            <Button className="w-full h-11 text-sm">{t.nav.downloadApp}</Button>
          </a>
          <a href="#artisans" className="shrink-0">
            <Button variant="outline" className="h-11 px-3 text-xs">
              {t.nav.artisans}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
