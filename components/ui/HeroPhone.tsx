"use client";

import { FadeIn, MotionDiv } from "@/components/ui/motion-lazy";
import { useEffect, useState } from "react";

export function HeroPhone() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const phoneContent = (
    <div className="relative mx-auto w-[260px] sm:w-[280px]">
      <div
        className="relative rounded-[2.5rem] border-[6px] border-teal bg-teal p-2 shadow-2xl"
        role="img"
        aria-label="Aperçu de l'application lm3alem sur smartphone — recherche d'artisan plombier Casablanca Maroc"
      >
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 h-6 w-24 rounded-full bg-teal-dark" aria-hidden="true" />

        <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19]">
          <div className="absolute inset-0 bg-gradient-to-br from-saffron via-saffron-light to-terracotta" aria-hidden="true" />

          <div className="relative z-10 flex flex-col h-full p-4 pt-10">
            <div className="flex justify-between items-center mb-4 px-1" aria-hidden="true">
              <span className="text-[10px] text-white/80 font-medium">9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-2 rounded-sm bg-white/60" />
                <div className="w-3 h-2 rounded-sm bg-white/60" />
                <div className="w-4 h-2 rounded-sm bg-white/80" />
              </div>
            </div>

            <div className="mb-4">
              <p className="text-white/70 text-[10px]">Bonjour 👋</p>
              <p className="text-white font-bold text-sm">Trouvez votre Maalem</p>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-xl px-3 py-2 mb-4 flex items-center gap-2">
              <svg className="w-3 h-3 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-white/50 text-[10px]">Plombier à Casablanca...</span>
            </div>

            <div className="flex gap-2 mb-4 overflow-hidden">
              {["🔧 Plombier", "⚡ Électricien", "🪵 Menuisier"].map((cat) => (
                <div
                  key={cat}
                  className="shrink-0 bg-white/25 backdrop-blur rounded-full px-2.5 py-1 text-[9px] text-white font-medium"
                >
                  {cat}
                </div>
              ))}
            </div>

            <div className="flex-1 space-y-2 overflow-hidden">
              {[
                { name: "Hassan B.", job: "Plombier", rating: "4.9", dist: "1.2 km", avail: true },
                { name: "Karim M.", job: "Électricien", rating: "4.8", dist: "2.5 km", avail: true },
                { name: "Youssef A.", job: "Menuisier", rating: "4.7", dist: "3.1 km", avail: false },
              ].map((artisan) => (
                <div
                  key={artisan.name}
                  className="bg-white/20 backdrop-blur rounded-xl p-2.5 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-sm" aria-hidden="true">
                    {artisan.job === "Plombier" ? "🔧" : artisan.job === "Électricien" ? "⚡" : "🪵"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[10px] font-semibold truncate">{artisan.name}</p>
                    <p className="text-white/60 text-[8px]">{artisan.job} · {artisan.dist}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-[9px] font-bold">★ {artisan.rating}</p>
                    <div className={`w-1.5 h-1.5 rounded-full ml-auto mt-0.5 ${artisan.avail ? "bg-emerald-400" : "bg-gray-400"}`} aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex justify-around bg-white/15 backdrop-blur rounded-2xl py-2" aria-hidden="true">
              {["🏠", "🔍", "💬", "👤"].map((icon, i) => (
                <span key={i} className={`text-sm ${i === 0 ? "opacity-100" : "opacity-50"}`}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-saffron/20 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-teal/15 blur-2xl" aria-hidden="true" />
    </div>
  );

  if (!mounted) {
    return <div className="relative phone-glow">{phoneContent}</div>;
  }

  return (
    <FadeIn
      initial={{ opacity: 0, y: 40, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative phone-glow"
    >
      <MotionDiv
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {phoneContent}
      </MotionDiv>
    </FadeIn>
  );
}
