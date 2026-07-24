"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useTheme } from "@/components/theme/ThemeProvider";
import { useI18n } from "@/components/i18n/LocaleProvider";
import { brandName } from "@/lib/brand";
import { localeMeta, type Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const localeOptions: Locale[] = ["fr", "ar", "en"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const isDark = theme === "dark";

  const navLinks = [
    { href: "#demande", label: t.nav.demande },
    { href: "#fonctionnalites", label: t.nav.features },
    { href: "#comment-ca-marche", label: t.nav.how },
    { href: "#metiers", label: t.nav.trades },
    { href: "#artisans", label: t.nav.artisans },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.aria}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden fixed inset-0 z-[100] flex flex-col bg-page-start"
          >
            <div className="flex h-14 sm:h-16 shrink-0 items-center justify-between gap-3 border-b border-outline safe-px sm:px-6">
              <a
                href="#accueil"
                aria-label={`${brandName} – ${t.nav.home}`}
                className="shrink-0"
                onClick={() => setMobileOpen(false)}
              >
                <BrandLogo size={32} compact priority />
              </a>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
                  className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-12 border border-outline bg-surface text-ink"
                >
                  {isDark ? (
                    <Sun className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-12 text-ink hover:bg-surface-muted"
                  onClick={() => setMobileOpen(false)}
                  aria-label={t.nav.closeMenu}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col safe-px safe-pb pt-2">
              <div className="flex-1 overflow-y-auto overscroll-contain pb-4">
                <a
                  href="#accueil"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center rounded-16 px-4 py-3.5 text-base font-semibold text-ink hover:bg-surface-muted"
                >
                  {t.nav.home}
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center rounded-16 px-4 py-3.5 text-base font-medium text-ink-secondary hover:bg-surface-muted hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="mt-4 px-2">
                  <p className="px-2 mb-2 text-[11px] font-bold uppercase tracking-wider text-ink-secondary">
                    {t.nav.lang}
                  </p>
                  <div
                    role="group"
                    aria-label={t.nav.lang}
                    className="flex gap-2"
                  >
                    {localeOptions.map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setLocale(code)}
                        aria-pressed={locale === code}
                        className={cn(
                          "flex-1 rounded-16 py-3 text-sm font-bold border transition-colors",
                          locale === code
                            ? "bg-primary text-white border-primary"
                            : "bg-surface text-ink-secondary border-outline"
                        )}
                      >
                        {localeMeta[code].label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="shrink-0 border-t border-outline pt-3 pb-2 space-y-2">
                <a href="#telecharger" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full h-12 text-base">
                    {t.nav.downloadApp}
                  </Button>
                </a>
                <a href="#artisans" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full h-11">
                    {t.nav.artisans}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    );

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "bg-nav backdrop-blur-xl shadow-soft border-b border-outline"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label={t.nav.aria}
          className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-3 safe-px sm:px-6 lg:px-8"
        >
          <a
            href="#accueil"
            aria-label={`${brandName} – ${t.nav.home}`}
            className="shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <BrandLogo size={32} compact priority />
          </a>

          <div className="hidden xl:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-12 px-3 py-2 text-[13px] font-medium text-ink-secondary hover:text-ink hover:bg-surface-muted/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
              className="touch-target inline-flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-12 border border-outline bg-surface text-ink"
            >
              {isDark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <div ref={langRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label={t.nav.lang}
                className="inline-flex h-9 items-center gap-1 rounded-12 border border-outline bg-surface px-2.5 text-xs font-bold text-ink"
              >
                {localeMeta[locale].label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-ink-secondary transition-transform",
                    langOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.ul
                    role="listbox"
                    aria-label={t.nav.lang}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute end-0 top-[calc(100%+6px)] z-50 min-w-[4.5rem] overflow-hidden rounded-12 border border-outline bg-surface shadow-card py-1"
                  >
                    {localeOptions.map((code) => (
                      <li
                        key={code}
                        role="option"
                        aria-selected={locale === code}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setLocale(code);
                            setLangOpen(false);
                          }}
                          className={cn(
                            "w-full px-3 py-2.5 text-start text-xs font-bold transition-colors",
                            locale === code
                              ? "bg-primary/10 text-primary"
                              : "text-ink-secondary hover:bg-surface-muted hover:text-ink"
                          )}
                        >
                          {localeMeta[code].label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <a href="#telecharger" className="hidden md:block">
              <Button size="sm" className="px-4 h-9 text-xs">
                {t.nav.download}
              </Button>
            </a>

            <button
              type="button"
              className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-12 text-ink hover:bg-surface-muted xl:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>
      {mobileMenu}
    </>
  );
}
