"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  LayoutGrid,
  FileText,
  UserCheck,
  MapPin,
  MessageCircle,
  Star,
  QrCode,
  Languages,
  ShieldCheck,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { HeroPhone } from "@/components/ui/HeroPhone";
import { StepCard } from "@/components/ui/StepCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, FadeInView, Reveal3D, Stagger, StaggerItem } from "@/components/ui/motion-lazy";
import { TiltSurface } from "@/components/ui/TiltSurface";
import { useI18n } from "@/components/i18n/LocaleProvider";
import { AppleLogo, GooglePlayLogo } from "@/components/ui/StoreIcons";
import { brandName } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** Chunks différés — même UI, JS chargé plus tard */
const DemandeSection = dynamic(
  () =>
    import("@/components/ui/DemandeSection").then((m) => m.DemandeSection),
  { ssr: true }
);
const SiteFooter = dynamic(
  () => import("@/components/ui/SiteFooter").then((m) => m.SiteFooter),
  { ssr: true }
);
const MobileStickyCta = dynamic(
  () =>
    import("@/components/ui/MobileStickyCta").then((m) => m.MobileStickyCta),
  { ssr: false }
);

const CATEGORY_COLORS = [
  "#5C6BC0",
  "#A1887F",
  "#26A69A",
  "#42A5F5",
  "#FFB300",
  "#BA68C8",
  "#66BB6A",
  "#29B6F6",
  "#90A4AE",
] as const;

const FEATURE_ICONS = [
  Clock,
  MapPin,
  MessageCircle,
  Star,
  QrCode,
  Languages,
] as const;

const TRUST_ICONS = [ShieldCheck, Star, MapPin, QrCode] as const;

const CLIENT_STEP_ICONS = [LayoutGrid, FileText, UserCheck] as const;
const ARTISAN_STEP_ICONS = [BadgeCheck, MapPin, QrCode] as const;

const ARTISAN_WHY_ICONS = [MapPin, MessageCircle, Star, QrCode] as const;

function AppStoreBadge() {
  const { t } = useI18n();
  return (
    <a
      href="#telecharger"
      aria-label={t.download.appStoreAria}
      className="inline-flex w-full sm:w-auto items-center gap-3 bg-surface text-ink border border-outline rounded-16 px-5 h-12 sm:h-btn hover:border-primary transition-all hover:scale-[1.02] shadow-soft"
    >
      <AppleLogo className="w-7 h-7" />
      <div className="text-start">
        <p className="text-[10px] leading-none text-ink-secondary">
          {t.download.appStoreTop}
        </p>
        <p className="text-sm font-semibold leading-tight text-ink">
          {t.download.appStoreName}
        </p>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  const { t } = useI18n();
  return (
    <a
      href="#telecharger"
      aria-label={t.download.playAria}
      className="inline-flex w-full sm:w-auto items-center gap-3 bg-surface text-ink border border-outline rounded-16 px-5 h-12 sm:h-btn hover:border-primary transition-all hover:scale-[1.02] shadow-soft"
    >
      <span className="flex h-8 w-8 items-center justify-center">
        <GooglePlayLogo className="h-7 w-7 drop-shadow-sm" />
      </span>
      <div className="text-start">
        <p className="text-[10px] leading-none text-ink-secondary">
          {t.download.playTop}
        </p>
        <p className="text-sm font-semibold leading-tight text-ink">
          {t.download.playName}
        </p>
      </div>
    </a>
  );
}

export function LandingPage() {
  const { t } = useI18n();
  const [howTab, setHowTab] = useState<"client" | "artisan">("client");

  const categories = t.trades.names.map((name, i) => ({
    name,
    color: CATEGORY_COLORS[i] ?? CATEGORY_COLORS[0],
    alt: `${name} — lm3alem`,
  }));

  const features = FEATURE_ICONS.map((icon, i) => ({
    icon,
    title: t.features.items[i]?.title ?? "",
    description: t.features.items[i]?.description ?? "",
  }));

  const trustPoints = TRUST_ICONS.map((icon, i) => ({
    icon,
    label: t.trust.items[i] ?? "",
  }));

  const clientSteps = CLIENT_STEP_ICONS.map((icon, i) => ({
    step: i + 1,
    icon,
    title: t.how.clientSteps[i]?.title ?? "",
    description: t.how.clientSteps[i]?.description ?? "",
  }));

  const artisanSteps = ARTISAN_STEP_ICONS.map((icon, i) => ({
    step: i + 1,
    icon,
    title: t.how.artisanSteps[i]?.title ?? "",
    description: t.how.artisanSteps[i]?.description ?? "",
  }));

  const steps = howTab === "client" ? clientSteps : artisanSteps;

  return (
    <>
      <Navbar />

      {/* HERO — mobile-first */}
      <section
        id="accueil"
        aria-label={t.nav.home}
        className="relative min-h-[100svh] flex items-start sm:items-center pt-16 sm:pt-24 pb-10 sm:pb-16 lg:pb-24 overflow-hidden mesh-depth"
      >
        <div
          className="pointer-events-none absolute -top-24 -left-20 h-[16rem] sm:h-[28rem] w-[16rem] sm:w-[28rem] rounded-full bg-primary/15 blur-3xl halo-orb"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-[12rem] sm:h-[22rem] w-[12rem] sm:w-[22rem] rounded-full bg-emerald-brand/12 blur-3xl halo-orb hidden sm:block"
          aria-hidden="true"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full scene-3d">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 sm:gap-12 lg:gap-8 items-center">
            <FadeIn
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center lg:text-start order-1"
            >
              <div className="mb-3 sm:mb-5 flex justify-center lg:justify-start">
                <BrandLogo size={48} withWordmark={false} priority />
              </div>
              <div className="mb-4 sm:mb-6 flex flex-col items-center lg:items-start gap-1">
                <p className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-ink tracking-tight lowercase">
                  {brandName}
                </p>
                <p
                  className="font-arabic text-lg sm:text-xl text-ink-secondary/90 font-medium w-fit leading-relaxed"
                  lang="ar"
                >
                  {t.hero.brandAr}
                </p>
              </div>

              <h1 className="font-display text-[1.65rem] leading-snug sm:text-4xl lg:text-[2.75rem] font-bold text-ink sm:leading-[1.15] tracking-tight mb-3 sm:mb-5 max-w-xl mx-auto lg:mx-0">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-ink-secondary mb-5 sm:mb-8 max-w-md sm:max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3 justify-center lg:justify-start">
                <a href="#telecharger" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full h-12 text-base">
                    {t.hero.ctaDownload}
                  </Button>
                </a>
                <a href="#comment-ca-marche" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full h-12 text-base">
                    {t.hero.ctaHow}
                  </Button>
                </a>
              </div>
            </FadeIn>

            <div className="flex justify-center lg:justify-end relative order-2 mt-1 sm:mt-0">
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-[2rem] border border-outline/60 -rotate-6 opacity-40 hidden md:block"
              />
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] aspect-square rounded-[2rem] border border-primary/20 rotate-3 opacity-50 hidden md:block"
              />
              <HeroPhone />
            </div>
          </div>
        </div>
      </section>

      {/* CONFIANCE */}
      <section
        id="confiance"
        aria-labelledby="confiance-title"
        className="relative z-10 -mt-2 sm:-mt-10 pb-6 sm:pb-8"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal3D>
            <div className="glass-plane rounded-20 sm:rounded-24 px-4 py-6 sm:px-10 sm:py-9">
              <h2
                id="confiance-title"
                className="font-display text-lg sm:text-2xl font-bold text-ink text-center mb-5 sm:mb-8"
              >
                {t.trust.title}
              </h2>
              <div className="sm:hidden -mx-1 px-1">
                <div className="scroll-x-snap">
                  {trustPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <div
                        key={point.label}
                        className="w-[42%] max-w-[10.5rem] flex flex-col items-center text-center gap-2 rounded-16 bg-surface/80 border border-outline p-3"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-16 bg-primary-container">
                          <Icon className="h-4 w-4 text-primary" aria-hidden />
                        </div>
                        <p className="text-xs font-semibold text-ink leading-snug">
                          {point.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <Stagger className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                {trustPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <StaggerItem
                      key={point.label}
                      className="flex flex-col items-center text-center gap-3"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-16 bg-primary-container shadow-soft">
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <p className="text-sm font-semibold text-ink">{point.label}</p>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </Reveal3D>
        </div>
      </section>

      {/* POUR QUI */}
      <section
        id="pour-qui"
        aria-labelledby="pour-qui-title"
        className="section-pad"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scene-3d">
          <FadeInView className="text-center mb-14">
            <h2
              id="pour-qui-title"
              className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3"
            >
              {t.forWho.title}
            </h2>
            <p className="text-ink-secondary max-w-xl mx-auto">
              {t.forWho.subtitle}
            </p>
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <TiltSurface maxTilt={5} hoverScale={1.015}>
              <Reveal3D className="rounded-24 border border-outline bg-surface p-5 sm:p-8 lg:p-10 shadow-card h-full">
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {t.forWho.clientTitle}
                </h3>
                <p className="text-ink-secondary mb-8 leading-relaxed">
                  {t.forWho.clientText}
                </p>
                <a href="#telecharger">
                  <Button>{t.forWho.clientCta}</Button>
                </a>
              </Reveal3D>
            </TiltSurface>

            <TiltSurface maxTilt={5} hoverScale={1.015}>
              <Reveal3D
                delay={0.1}
                className="rounded-24 border border-outline bg-surface p-5 sm:p-8 lg:p-10 shadow-card h-full"
              >
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {t.forWho.artisanTitle}
                </h3>
                <p className="text-ink-secondary mb-8 leading-relaxed">
                  {t.forWho.artisanText}
                </p>
                <a href="#artisans">
                  <Button variant="outline">{t.forWho.artisanCta}</Button>
                </a>
              </Reveal3D>
            </TiltSurface>
          </div>
        </div>
      </section>

      <DemandeSection />

      {/* FONCTIONNALITÉS */}
      <section
        id="fonctionnalites"
        aria-labelledby="fonctionnalites-title"
        className="section-pad bg-surface-muted"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-14">
            <h2
              id="fonctionnalites-title"
              className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3"
            >
              {t.features.title}
            </h2>
            <p className="text-ink-secondary max-w-xl mx-auto">
              {t.features.subtitle}
            </p>
          </FadeInView>

          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 scene-3d">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <TiltSurface maxTilt={6} hoverScale={1.02}>
                    <div className="rounded-20 border border-outline bg-surface p-6 shadow-card h-full">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-16 bg-primary-container mb-4 shadow-soft">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-ink mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </TiltSurface>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section
        id="comment-ca-marche"
        aria-labelledby="comment-ca-marche-title"
        className="section-pad scene-3d"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-10">
            <h2
              id="comment-ca-marche-title"
              className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3"
            >
              {t.how.title}
            </h2>
            <p className="text-ink-secondary max-w-xl mx-auto mb-8">
              {t.how.subtitle}
            </p>

            <div
              role="tablist"
              aria-label={t.nav.how}
              className="inline-flex rounded-16 border border-outline bg-surface p-1 shadow-soft"
            >
              {(
                [
                  { id: "client" as const, label: t.how.tabClient },
                  { id: "artisan" as const, label: t.how.tabArtisan },
                ]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={howTab === tab.id}
                  onClick={() => setHowTab(tab.id)}
                  className={cn(
                    "rounded-12 px-5 py-2.5 text-sm font-bold transition-colors",
                    howTab === tab.id
                      ? "bg-primary text-white"
                      : "text-ink-secondary hover:text-ink"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeInView>

          <div className="relative grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {steps.map((s, i) => (
              <StepCard
                key={`${howTab}-${s.title}`}
                step={s.step}
                icon={s.icon}
                title={s.title}
                description={s.description}
                index={i}
              />
            ))}
          </div>

          <div className="text-center">
            <a href="#telecharger">
              <Button>{t.how.cta}</Button>
            </a>
          </div>
        </div>
      </section>

      {/* MÉTIERS */}
      <section
        id="metiers"
        aria-labelledby="metiers-title"
        className="section-pad bg-surface-muted perf-defer"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-14">
            <h2
              id="metiers-title"
              className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3"
            >
              {t.trades.title}
            </h2>
            <p className="text-ink-secondary max-w-xl mx-auto">
              {t.trades.subtitle}
            </p>
          </FadeInView>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard
                key={cat.name}
                name={cat.name}
                alt={cat.alt}
                color={cat.color}
                index={i}
              />
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-ink-secondary max-w-2xl mx-auto">
            {t.trades.footer}
          </p>
        </div>
      </section>

      {/* ARTISANS */}
      <section
        id="artisans"
        aria-labelledby="artisans-title"
        className="section-pad bg-surface-muted border-y border-outline relative overflow-hidden mesh-depth"
      >
        <div
          className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scene-3d">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <TiltSurface maxTilt={5} hoverScale={1.015}>
              <Reveal3D className="rounded-24 border border-outline bg-surface p-5 sm:p-8 lg:p-10 shadow-card flex flex-col h-full">
                <h2
                  id="artisans-title"
                  className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4"
                >
                  {t.artisans.title}
                </h2>
                <p className="text-ink-secondary text-lg mb-8 leading-relaxed flex-1">
                  {t.artisans.text}
                </p>
                <a href="#telecharger" className="self-start">
                  <Button variant="gradient">{t.artisans.cta}</Button>
                </a>
              </Reveal3D>
            </TiltSurface>

            <TiltSurface maxTilt={5} hoverScale={1.015}>
              <Reveal3D
                delay={0.1}
                className="rounded-24 border border-outline bg-surface p-5 sm:p-8 lg:p-10 shadow-card flex flex-col h-full"
              >
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">
                  {t.artisans.whyTitle}
                </h3>
                <ul className="space-y-4 mb-8 flex-1 list-none">
                  {ARTISAN_WHY_ICONS.map((Icon, i) => {
                    const item = t.artisans.whyItems[i];
                    if (!item) return null;
                    return (
                      <li key={item.title} className="flex gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-12 bg-primary-container">
                          <Icon
                            className="h-5 w-5 text-primary"
                            aria-hidden="true"
                          />
                        </span>
                        <span>
                          <p className="text-sm font-bold text-ink">
                            {item.title}
                          </p>
                          <p className="text-sm text-ink-secondary leading-relaxed">
                            {item.text}
                          </p>
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <a href="#comment-ca-marche" className="self-start">
                  <Button variant="outline">{t.artisans.whyCta}</Button>
                </a>
              </Reveal3D>
            </TiltSurface>
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGER */}
      <section
        id="telecharger"
        aria-labelledby="telecharger-title"
        className="section-pad bg-surface-muted"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInView className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 rounded-20 sm:rounded-24 border border-outline bg-surface p-5 sm:p-8 lg:p-12 shadow-card">
            <div className="text-center lg:text-start w-full">
              <h2
                id="telecharger-title"
                className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-ink mb-3 sm:mb-4 leading-tight"
              >
                {t.download.title}
              </h2>
              <p className="text-ink-secondary text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
                {t.download.subtitle}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center lg:justify-start">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 shrink-0">
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-20 sm:rounded-24 bg-surface-muted border border-outline p-3 sm:p-4 shadow-soft">
                <div
                  className="w-full h-full rounded-16 border border-dashed border-outline-strong flex flex-col items-center justify-center gap-2 bg-surface"
                  role="img"
                  aria-label={t.download.scan}
                >
                  <QrCode
                    className="h-14 w-14 sm:h-16 sm:w-16 text-ink/40"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] text-ink-secondary font-medium text-center px-2">
                    {t.download.scan}
                  </span>
                </div>
              </div>
              <span className="text-ink-secondary text-xs">
                {t.download.available}
              </span>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="section-pad bg-surface-muted perf-defer"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-12">
            <h2
              id="faq-title"
              className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3"
            >
              {t.faq.title}
            </h2>
            <p className="text-ink-secondary">{t.faq.subtitle}</p>
          </FadeInView>

          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <MobileStickyCta />
      <SiteFooter />
    </>
  );
}
