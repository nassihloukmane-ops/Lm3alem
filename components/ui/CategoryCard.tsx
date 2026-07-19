"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TiltSurface } from "@/components/ui/TiltSurface";

interface CategoryCardProps {
  name: string;
  alt: string;
  color: string;
  index: number;
}

export function CategoryCard({ name, alt, color, index }: CategoryCardProps) {
  const reduce = useReducedMotion();

  return (
    <TiltSurface maxTilt={reduce ? 0 : 7} hoverScale={1.04} disabled={!!reduce}>
      <motion.a
        href="#telecharger"
        aria-label={alt}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22, rotateX: 6 }}
        whileInView={
          reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }
        }
        viewport={{ once: true, margin: "-30px" }}
        transition={{
          duration: 0.45,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-16 sm:rounded-20 border border-outline bg-surface p-4 sm:p-6 shadow-card hover:border-primary/25 transition-colors"
        style={{
          boxShadow: `0 12px 28px -10px ${color}33`,
        }}
      >
        <span
          className="h-12 w-12 rounded-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${color}22`,
            transform: "translateZ(16px)",
          }}
          aria-hidden="true"
        >
          <span
            className="h-3.5 w-3.5 rounded-full shadow-sm"
            style={{ backgroundColor: color }}
          />
        </span>
        <h3 className="text-sm font-semibold text-ink group-hover:text-primary transition-colors">
          {name}
        </h3>
      </motion.a>
    </TiltSurface>
  );
}
