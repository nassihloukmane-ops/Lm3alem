"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Radio,
  Route,
  Star,
  Wrench,
} from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { HeroPhone } from "@/components/ui/HeroPhone";
import { StepCard } from "@/components/ui/StepCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const categories = [
  { emoji: "🔧", name: "Plombier" },
  { emoji: "⚡", name: "Électricien" },
  { emoji: "🪵", name: "Menuisier" },
  { emoji: "🎨", name: "Peintre" },
  { emoji: "❄️", name: "Climatisation" },
  { emoji: "🏠", name: "Maçon" },
  { emoji: "🔒", name: "Serrurier" },
  { emoji: "🚿", name: "Carrelage" },
];

const features = [
  {
    icon: MessageCircle,
    title: "Chat & appels audio en temps réel",
    description:
      "Communiquez directement avec votre artisan via messagerie instantanée ou appel vocal intégré.",
    illustration: (
      <div className="flex flex-col gap-2 p-4">
        {["Salam, besoin d'un plombier", "Disponible dans 30 min !", "Parfait, j'attends 👍"].map(
          (msg, i) => (
            <div
              key={i}
              className={`rounded-2xl px-3 py-2 text-xs max-w-[200px] ${
                i % 2 === 0
                  ? "bg-saffron/15 text-teal self-start"
                  : "bg-teal/10 text-teal self-end"
              }`}
            >
              {msg}
            </div>
          )
        )}
      </div>
    ),
  },
  {
    icon: Radio,
    title: "Disponibilité en direct",
    description:
      "Voyez en temps réel quels artisans sont disponibles près de chez vous, comme un feu vert sur la route.",
    illustration: (
      <div className="flex flex-col gap-2 p-4">
        {[
          { name: "Hassan B.", status: "Disponible", online: true },
          { name: "Karim M.", status: "En mission", online: false },
          { name: "Omar T.", status: "Disponible", online: true },
        ].map((a) => (
          <div key={a.name} className="flex items-center gap-3 bg-white rounded-xl px-3 py-2 shadow-sm">
            <div className={`w-2.5 h-2.5 rounded-full ${a.online ? "bg-emerald-500 animate-pulse" : "bg-gray-300"}`} />
            <span className="text-xs font-medium text-teal flex-1">{a.name}</span>
            <span className={`text-[10px] font-semibold ${a.online ? "text-emerald-600" : "text-gray-400"}`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Route,
    title: "Suivi de mission en direct",
    description:
      "Suivez chaque étape de votre intervention : En attente → En cours → Terminée → Évaluée.",
    illustration: (
      <div className="flex items-center justify-between px-4 py-6 gap-1">
        {["En attente", "En cours", "Terminée", "Évaluée"].map((step, i) => (
          <div key={step} className="flex flex-col items-center gap-1.5 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                i <= 2 ? "bg-saffron text-white" : "bg-teal/10 text-teal/40"
              }`}
            >
              {i + 1}
            </div>
            <span className={`text-[9px] text-center leading-tight ${i <= 2 ? "text-teal font-medium" : "text-teal/40"}`}>
              {step}
            </span>
            {i < 3 && (
              <div className={`absolute hidden`} />
            )}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Star,
    title: "Avis & évaluations vérifiés",
    description:
      "Consultez les notes et avis authentiques laissés par d'autres clients pour choisir en confiance.",
    illustration: (
      <div className="p-4 space-y-2">
        {[
          { name: "Fatima Z.", rating: 5, text: "Travail impeccable, très professionnel !" },
          { name: "Ahmed R.", rating: 5, text: "Rapide et soigné, je recommande." },
        ].map((review) => (
          <div key={review.name} className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-teal">{review.name}</span>
              <span className="text-[10px] text-saffron">{"★".repeat(review.rating)}</span>
            </div>
            <p className="text-[10px] text-teal/60">{review.text}</p>
          </div>
        ))}
      </div>
    ),
  },
];

function AppStoreBadge() {
  return (
    <a href="#" className="inline-flex items-center gap-3 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-900 transition-colors shadow-lg hover:-translate-y-0.5 transition-transform">
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <p className="text-[10px] leading-none opacity-80">Télécharger sur</p>
        <p className="text-sm font-semibold leading-tight">App Store</p>
      </div>
    </a>
  );
}

function GooglePlayBadge() {
  return (
    <a href="#" className="inline-flex items-center gap-3 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-900 transition-colors shadow-lg hover:-translate-y-0.5 transition-transform">
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path fill="#EA4335" d="M3.6 1.8L13.2 12 3.6 22.2A2.4 2.4 0 0 1 1.2 20.4V3.6A2.4 2.4 0 0 1 3.6 1.8z" />
        <path fill="#FBBC04" d="M13.2 12L20.4 5.4A2.4 2.4 0 0 1 22.8 7.2v9.6a2.4 2.4 0 0 1-2.4 2.4L13.2 12z" />
        <path fill="#34A853" d="M3.6 22.2L13.2 12 3.6 1.8 1.2 3.6v16.8l2.4 1.8z" />
        <path fill="#4285F4" d="M13.2 12L20.4 18.6 22.8 16.8V7.2L20.4 5.4 13.2 12z" />
      </svg>
      <div className="text-left">
        <p className="text-[10px] leading-none opacity-80">Disponible sur</p>
        <p className="text-sm font-semibold leading-tight">Google Play</p>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center zellige-pattern pt-24 pb-16 lg:pb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-white/50 to-warm-white pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <Badge className="mb-6">🇲🇦 Made in Morocco</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-teal leading-[1.1] tracking-tight mb-4">
                Trouvez le bon artisan,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-terracotta">
                  en quelques secondes
                </span>
              </h1>
              <p
                className="font-arabic text-lg text-teal/50 mb-3"
                dir="rtl"
              >
                جد المعلم المناسب في ثوانٍ
              </p>
              <p className="text-lg text-teal/60 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Plombiers, électriciens, menuisiers — disponibles près de chez vous au Maroc
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </motion.div>

            <div className="flex justify-center lg:justify-end">
              <HeroPhone />
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="absolute inset-0 zellige-pattern-subtle opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Simple & rapide</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-teal/60 max-w-xl mx-auto">
              Trois étapes pour trouver et réserver le meilleur artisan près de chez vous
            </p>
          </motion.div>

          <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Connector line (desktop) */}
            <svg
              className="hidden md:block absolute top-8 left-[20%] right-[20%] h-1 z-0"
              preserveAspectRatio="none"
            >
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#F59E0B"
                strokeWidth="2"
                strokeOpacity="0.3"
                className="step-connector"
              />
            </svg>

            <StepCard
              step={1}
              icon={LayoutGrid}
              title="Choisissez un métier"
              description="Parcourez nos catégories et sélectionnez le service dont vous avez besoin."
              index={0}
            />
            <StepCard
              step={2}
              icon={MapPin}
              title="Trouvez un Maalem disponible"
              description="Consultez les profils, les notes et la localisation des artisans proches."
              index={1}
            />
            <StepCard
              step={3}
              icon={CheckCircle2}
              title="Lancez votre mission"
              description="Réservez, discutez et suivez votre intervention en temps réel."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section id="categories" className="py-24 bg-warm-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <Badge className="mb-4">Nos services</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal mb-4">
              Tous les métiers, un seul app
            </h2>
            <p className="text-teal/60 max-w-xl mx-auto">
              Des artisans qualifiés pour chaque besoin de votre maison ou bureau
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.name} emoji={cat.emoji} name={cat.name} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Fonctionnalités</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-teal mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-teal/60 max-w-xl mx-auto">
              Une expérience complète, de la recherche à l&apos;évaluation
            </p>
          </motion.div>

          <div className="space-y-20">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isReversed = i % 2 === 1;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-10 lg:gap-16`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron/15 mb-5">
                      <Icon className="h-6 w-6 text-saffron-dark" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal mb-3">{feature.title}</h3>
                    <p className="text-teal/60 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full max-w-md">
                    <div className="rounded-2xl bg-gradient-to-br from-warm-cream to-warm-white border border-teal/8 shadow-card overflow-hidden">
                      {feature.illustration}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-16 bg-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 zellige-pattern-subtle opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: 500, suffix: "+", label: "Artisans inscrits" },
              { value: 3000, suffix: "+", label: "Missions complétées" },
              { value: 4.8, suffix: "★", label: "Note moyenne", decimals: 1 },
              { value: 10, suffix: "", label: "Villes au Maroc" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-saffron-light mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Download CTA ─── */}
      <section id="download" className="relative py-24 diagonal-split">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Prêt à trouver votre Maalem ?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Téléchargez l&apos;application gratuite et trouvez un artisan de confiance en quelques clics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AppStoreBadge />
                <GooglePlayBadge />
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-36 h-36 rounded-2xl bg-white p-3 shadow-2xl">
                <div className="w-full h-full rounded-xl border-2 border-dashed border-teal/20 flex flex-col items-center justify-center gap-2 bg-warm-white">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-teal/30" fill="currentColor">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="3" height="3" />
                    <rect x="18" y="14" width="3" height="3" />
                    <rect x="14" y="18" width="3" height="3" />
                    <rect x="18" y="18" width="3" height="3" />
                  </svg>
                  <span className="text-[10px] text-teal/40 font-medium">Scanner le QR code</span>
                </div>
              </div>
              <span className="text-white/60 text-xs">Disponible iOS & Android</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-teal-dark text-white/80 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-saffron">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-lg">Lmaalem</p>
                <p className="text-xs text-white/50">
                  L&apos;artisanat marocain, à portée de main
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["À propos", "Contact", "Politique de confidentialité"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-saffron-light transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2025 Lmaalem – Fait avec ❤️ au Maroc 🇲🇦</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
