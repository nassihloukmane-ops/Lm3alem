"use client";

import {
  Instagram,
  Facebook,
  MapPin,
  Mail,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/button";
import { Reveal3D, Stagger, StaggerItem } from "@/components/ui/motion-lazy";
import { TiltSurface } from "@/components/ui/TiltSurface";
import { useI18n } from "@/components/i18n/LocaleProvider";
import {
  LOCALES,
  localeMeta,
  type Locale,
} from "@/lib/i18n/dictionaries";
import { AppleLogo, GooglePlayLogo } from "@/components/ui/StoreIcons";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    href: "https://www.instagram.com/lm3alem",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/lm3alem",
    label: "Facebook",
    icon: Facebook,
  },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1 text-sm text-ink-secondary transition-colors hover:text-primary"
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
    </a>
  );
}

export function SiteFooter() {
  const { t, locale, setLocale } = useI18n();
  const year = new Date().getFullYear();

  const productLinks = [
    { href: "#demande", label: t.nav.demande },
    { href: "#fonctionnalites", label: t.nav.features },
    { href: "#comment-ca-marche", label: t.nav.how },
    { href: "#metiers", label: t.nav.trades },
    { href: "#artisans", label: t.nav.artisans },
    { href: "#faq", label: t.nav.faq },
  ];

  const legalLinks = [
    { href: "#", label: t.footer.about },
    { href: "#", label: t.footer.privacy },
    { href: "#", label: t.footer.terms },
    { href: "#", label: t.footer.contact },
  ];

  return (
    <footer className="relative overflow-hidden text-ink-secondary">
      {/* Fond scénique */}
      <div
        className="absolute inset-0 bg-band mesh-depth"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl halo-orb"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-brand/12 blur-3xl halo-orb"
        aria-hidden="true"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 scene-3d">
        <TiltSurface maxTilt={4} hoverScale={1.01} className="mb-8 sm:mb-12">
          <Reveal3D>
            <div
              className={cn(
                "relative overflow-hidden rounded-20 sm:rounded-[1.75rem] border border-outline",
                "bg-surface shadow-[0_24px_60px_-20px_rgba(28,25,23,0.28)]",
                "dark:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.65)]"
              )}
            >
              {/* Accent brand */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-brand-gradient"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-emerald-brand/10 blur-2xl"
              />

              <div className="relative flex flex-col gap-6 sm:gap-8 p-5 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
                <div className="max-w-xl">
                  <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-outline bg-surface-muted/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    {t.download.available}
                  </span>
                  <p className="font-display text-2xl sm:text-4xl font-bold text-ink leading-tight mb-3">
                    {t.footer.ctaTitle}
                  </p>
                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                    {t.footer.ctaText}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3 shrink-0 w-full lg:w-auto">
                  <a href="#telecharger" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="gradient"
                      className="w-full sm:w-auto shadow-soft h-12"
                    >
                      {t.footer.ctaDownload}
                    </Button>
                  </a>
                  <a href="#artisans" className="w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto bg-surface/80 backdrop-blur-sm h-12"
                    >
                      {t.footer.ctaArtisan}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </Reveal3D>
        </TiltSurface>

        {/* Panneau glass colonnes */}
        <Reveal3D delay={0.08}>
          <div className="glass-plane rounded-[1.75rem] p-7 sm:p-9 mb-8">
            <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
              <StaggerItem className="lg:col-span-4">
                <BrandLogo size={42} compact />
                <p className="mt-4 text-sm leading-relaxed max-w-xs text-ink-secondary">
                  {t.footer.tagline}
                </p>

                <div className="mt-5 space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-12 border border-outline bg-surface/70 px-3 py-2 text-sm">
                    <MapPin
                      className="h-4 w-4 text-primary shrink-0"
                      aria-hidden
                    />
                    <span>{t.footer.location}</span>
                  </div>
                  <a
                    href="mailto:contact@lmaalem.ma"
                    className="flex items-center gap-2 rounded-12 border border-outline bg-surface/70 px-3 py-2 text-sm hover:border-primary hover:text-primary transition-colors max-w-fit"
                  >
                    <Mail
                      className="h-4 w-4 text-primary shrink-0"
                      aria-hidden
                    />
                    contact@lmaalem.ma
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-2.5">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileHover={{ y: -3, scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-16 border border-outline bg-surface text-ink shadow-soft hover:border-primary hover:text-primary transition-colors"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </motion.a>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem className="lg:col-span-2">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  {t.footer.product}
                </p>
                <ul className="space-y-3 list-none">
                  {productLinks.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </StaggerItem>

              <StaggerItem className="lg:col-span-2">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  {t.footer.legal}
                </p>
                <ul className="space-y-3 list-none">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </StaggerItem>

              <StaggerItem className="lg:col-span-4">
                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  {t.footer.download}
                </p>
                <div className="flex flex-col gap-3 max-w-sm">
                  <a
                    href="#telecharger"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-20 border border-outline bg-surface px-4 py-3.5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-16 bg-ink text-white">
                      <AppleLogo className="h-5 w-5" />
                    </span>
                    <span className="flex-1 text-start">
                      <span className="block text-[10px] text-ink-secondary leading-none mb-0.5">
                        {t.download.appStoreTop}
                      </span>
                      <span className="block text-sm font-bold text-ink">
                        {t.download.appStoreName}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-secondary transition-colors group-hover:text-primary"
                      aria-hidden
                    />
                  </a>

                  <a
                    href="#telecharger"
                    className="group relative flex items-center gap-3 overflow-hidden rounded-20 border border-outline bg-surface px-4 py-3.5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-16 bg-white border border-outline shadow-soft">
                      <GooglePlayLogo className="h-6 w-6" />
                    </span>
                    <span className="flex-1 text-start">
                      <span className="block text-[10px] text-ink-secondary leading-none mb-0.5">
                        {t.download.playTop}
                      </span>
                      <span className="block text-sm font-bold text-ink">
                        {t.download.playName}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-secondary transition-colors group-hover:text-primary"
                      aria-hidden
                    />
                  </a>
                </div>

                <p
                  className="mt-5 rounded-16 border border-outline/70 bg-surface-muted/50 px-4 py-3 font-arabic text-sm text-ink text-right"
                  dir="rtl"
                  lang="ar"
                >
                  {t.footer.arabicTag}
                </p>
              </StaggerItem>
            </Stagger>
          </div>
        </Reveal3D>

        {/* Bas de page */}
        <div className="flex flex-col gap-4 border-t border-outline/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm">
            © {year} lm3alem —{" "}
            <span className="font-arabic" dir="rtl" lang="ar">
              {t.hero.brandAr}
            </span>{" "}
            · {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-ink-secondary">{t.footer.madeFor}</span>
            <span className="hidden sm:inline text-outline-strong">·</span>
            <div
              className="inline-flex items-center gap-1 rounded-full border border-outline bg-surface/80 p-1 shadow-soft"
              role="group"
              aria-label={t.nav.lang}
            >
              {LOCALES.map((loc: Locale) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocale(loc)}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-[10px] font-bold transition-colors",
                    locale === loc
                      ? "bg-primary text-white"
                      : "text-ink-secondary hover:text-ink"
                  )}
                >
                  {localeMeta[loc].label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
