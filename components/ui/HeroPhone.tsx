"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AppRequestScreen } from "@/components/ui/AppRequestScreen";
import { TiltSurface } from "@/components/ui/TiltSurface";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/utils";

type HeroPhoneProps = {
  /** Plus petit (sections secondaires / mobile dense) */
  compact?: boolean;
  className?: string;
};

/** Mockup téléphone — adapté mobile (plus petit, moins d’animation). */
export function HeroPhone({ compact = false, className }: HeroPhoneProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const quiet = !!reduceMotion || isMobile;

  const phone = (
    <div
      className={cn(
        "relative mx-auto",
        compact ? "w-[220px] sm:w-[260px]" : "w-[220px] xs:w-[240px] sm:w-[280px] md:w-[300px]"
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-6 sm:-inset-8 -z-10 rounded-[40%] opacity-60 sm:opacity-70"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 40%, rgba(225,29,110,0.22), transparent 65%)"
            : "radial-gradient(ellipse at 50% 40%, rgba(190,24,93,0.14), transparent 65%)",
        }}
      />

      <div
        className="relative phone-glow"
        style={{
          borderRadius: isMobile ? 36 : 44,
          padding: isMobile ? 9 : 11,
          background: isDark
            ? "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)"
            : "linear-gradient(145deg, #292524 0%, #1c1917 100%)",
          boxShadow: isDark
            ? "0 28px 48px -14px rgba(0,0,0,0.55)"
            : "0 28px 48px -14px rgba(28,25,23,0.35)",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: isMobile ? 14 : 18,
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? 72 : 92,
            height: isMobile ? 18 : 22,
            borderRadius: 999,
            backgroundColor: "#0C0A09",
            zIndex: 20,
          }}
        />

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: isMobile ? 28 : 36,
            aspectRatio: "9 / 19.5",
            backgroundColor: isDark ? "#020617" : "#FDF8F5",
          }}
        >
          {mounted && <AppRequestScreen theme={theme} />}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-4 left-[12%] right-[12%] h-6 -z-10"
        style={{
          borderRadius: "50%",
          background: isDark ? "rgba(0,0,0,0.45)" : "rgba(28,25,23,0.14)",
          filter: "blur(14px)",
        }}
      />
    </div>
  );

  return (
    <motion.div
      initial={quiet ? { opacity: 0, y: 16 } : { opacity: 0, y: 36, rotateY: -14 }}
      animate={quiet ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, rotateY: -6 }}
      transition={{ duration: quiet ? 0.5 : 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative", className)}
    >
      <motion.div
        animate={quiet ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <TiltSurface
          maxTilt={quiet ? 0 : 10}
          hoverScale={1.03}
          disabled={quiet}
          className="mx-auto"
        >
          {phone}
        </TiltSurface>
      </motion.div>
    </motion.div>
  );
}
