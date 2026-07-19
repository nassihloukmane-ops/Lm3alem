"use client";

import { Button } from "@/components/ui/button";
import { FadeInView, Reveal3D, Stagger, StaggerItem } from "@/components/ui/motion-lazy";
import { HeroPhone } from "@/components/ui/HeroPhone";
import { useI18n } from "@/components/i18n/LocaleProvider";

export function DemandeSection() {
  const { t } = useI18n();

  return (
    <section
      id="demande"
      aria-labelledby="demande-title"
      className="relative section-pad overflow-hidden mesh-depth"
    >
      <div
        className="pointer-events-none absolute -left-20 top-24 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-primary/10 blur-3xl halo-orb"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scene-3d">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          {/* Mobile: téléphone d’abord pour montrer le produit */}
          <Reveal3D
            delay={0.05}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <HeroPhone compact />
          </Reveal3D>

          <FadeInView className="order-2 lg:order-1">
            <p className="text-xs sm:text-sm font-bold tracking-wide text-primary mb-2 sm:mb-3">
              {t.demande.eyebrow}
            </p>
            <h2
              id="demande-title"
              className="font-display text-2xl sm:text-4xl font-bold text-ink leading-tight mb-3 sm:mb-4"
            >
              {t.demande.title}
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-md">
              {t.demande.subtitle}
            </p>

            <Stagger className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
              {t.demande.steps.map((step, i) => (
                <StaggerItem key={step.title} className="flex gap-3 sm:gap-4">
                  <span
                    className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-primary-container text-sm font-bold text-on-primary-container shadow-soft"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink text-sm sm:text-base mb-0.5">
                      {step.title}
                    </p>
                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a href="#telecharger" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-12">
                  {t.demande.ctaTry}
                </Button>
              </a>
              <a href="#comment-ca-marche" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full h-12">
                  {t.demande.ctaHow}
                </Button>
              </a>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
