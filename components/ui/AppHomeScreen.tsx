"use client";

import { motion, useReducedMotion } from "framer-motion";

type AppHomeScreenProps = {
  className?: string;
  /** Séquence d’apparition (section site uniquement) */
  animated?: boolean;
};

const shadowSoft = "0 6px 20px rgba(28, 25, 23, 0.06)";
const shadowCard = "0 6px 18px rgba(28, 25, 23, 0.055)";

/**
 * Écran Accueil / Demande lm3alem — réplique fidèle de la capture.
 * Karim = Électricien · 2.5 km (source : capture).
 */
export function AppHomeScreen({
  className = "",
  animated = false,
}: AppHomeScreenProps) {
  const reduce = useReducedMotion();
  const run = animated && !reduce;

  const block = (delay: number) =>
    run
      ? {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.4 },
          transition: { duration: 0.45, delay, ease: "easeOut" as const },
        }
      : {};

  const Wrapper = run ? motion.div : "div";

  return (
    <div
      className={`flex h-full w-full flex-col ${className}`}
      style={{
        backgroundColor: "#FDF8F5",
        padding: "12px 16px 16px",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        boxSizing: "border-box",
      }}
      role="img"
      aria-label="Écran lm3alem — Nouvelle demande Plombier Casablanca"
    >
      {/* Status bar */}
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 4px 0",
          marginBottom: 22,
          height: 18,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: "#1C1917",
            letterSpacing: "-0.01em",
          }}
        >
          9:41
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span
            style={{
              width: 14,
              height: 8,
              borderRadius: 2,
              backgroundColor: "rgba(28,25,23,0.45)",
            }}
          />
          <span
            style={{
              width: 12,
              height: 8,
              borderRadius: 2,
              backgroundColor: "rgba(28,25,23,0.45)",
            }}
          />
          <span
            style={{
              width: 18,
              height: 9,
              borderRadius: 2.5,
              border: "1.5px solid rgba(28,25,23,0.55)",
              position: "relative",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: 1.5,
                right: 2.5,
                borderRadius: 1,
                backgroundColor: "rgba(28,25,23,0.7)",
              }}
            />
          </span>
        </div>
      </div>

      {/* Marque */}
      <Wrapper {...block(0)} style={{ marginBottom: 16, paddingLeft: 2 }}>
        <p
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: 30,
            fontWeight: 700,
            color: "#1C1917",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            margin: 0,
          }}
        >
          lm3alem
        </p>
        <p
          style={{
            margin: "5px 0 0",
            fontSize: 13,
            fontWeight: 400,
            color: "#57534E",
            lineHeight: 1.3,
          }}
        >
          Trouve ton expert
        </p>
      </Wrapper>

      {/* Nouvelle demande */}
      <Wrapper
        {...block(0.12)}
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 18,
          padding: "15px 16px",
          marginBottom: 12,
          boxShadow: shadowSoft,
        }}
      >
        <p style={{ margin: 0, fontSize: 12, fontWeight: 400, color: "#57534E" }}>
          Nouvelle demande
        </p>
        <p
          style={{
            margin: "6px 0 0",
            fontSize: 15,
            fontWeight: 700,
            color: "#1C1917",
            lineHeight: 1.25,
          }}
        >
          Plombier · Casablanca
        </p>
        <p
          style={{
            margin: "5px 0 0",
            fontSize: 12,
            fontWeight: 400,
            color: "#57534E",
            lineHeight: 1.35,
          }}
        >
          Fuite sous l&apos;évier — intervention rapide
        </p>
      </Wrapper>

      {/* Catégories */}
      <Wrapper
        {...(run
          ? {
              initial: { opacity: 0.55 },
              whileInView: { opacity: 1 },
              viewport: { once: true, amount: 0.5 },
              transition: { duration: 0.5, delay: 0.28 },
            }
          : {})}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
          marginBottom: 12,
        }}
      >
        {(
          [
            { label: "Plombier", color: "#42A5F5" },
            { label: "Électricien", color: "#FFB300" },
            { label: "Nettoyage", color: "#26A69A" },
          ] as const
        ).map((cat, i) => (
          <motion.div
            key={cat.label}
            {...(run
              ? {
                  initial: { opacity: 0, scale: 0.94 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.35, delay: 0.32 + i * 0.08 },
                }
              : {})}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: "16px 6px 14px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              boxShadow: shadowCard,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: cat.color,
                display: "block",
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: "#1C1917",
                textAlign: "center",
                lineHeight: 1.15,
              }}
            >
              {cat.label}
            </span>
          </motion.div>
        ))}
      </Wrapper>

      {/* Experts */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
          minHeight: 0,
        }}
      >
        {(
          [
            {
              initial: "H",
              name: "Hassan B.",
              meta: "Plombier · 1.2 km",
              rating: "4.9",
            },
            {
              initial: "K",
              name: "Karim M.",
              meta: "Électricien · 2.5 km",
              rating: "4.8",
            },
          ] as const
        ).map((pro, i) => (
          <Wrapper
            key={pro.name}
            {...block(0.48 + i * 0.1)}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: 16,
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: shadowCard,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#F9A8D4",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
                fontWeight: 700,
                flexShrink: 0,
              }}
              aria-hidden="true"
            >
              {pro.initial}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#1C1917",
                  lineHeight: 1.2,
                }}
              >
                {pro.name}
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: 11,
                  fontWeight: 400,
                  color: "#57534E",
                  lineHeight: 1.2,
                }}
              >
                {pro.meta}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexShrink: 0,
              }}
            >
              <span
                style={{ color: "#D97706", fontSize: 11, lineHeight: 1 }}
                aria-hidden="true"
              >
                ★
              </span>
              <span
                style={{ fontSize: 13, fontWeight: 700, color: "#D97706" }}
              >
                {pro.rating}
              </span>
            </div>
          </Wrapper>
        ))}
      </div>

      {/* CTA Réserver */}
      <motion.div
        {...(run
          ? {
              initial: { opacity: 0, y: 8 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: 0.7 },
            }
          : {})}
        className={run ? "cta-reserve-pulse" : undefined}
        style={{
          marginTop: "auto",
          paddingTop: 14,
          backgroundColor: "#BE185D",
          borderRadius: 9999,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 20px rgba(190, 24, 93, 0.22)",
        }}
      >
        <span style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 700 }}>
          Réserver
        </span>
      </motion.div>
    </div>
  );
}
