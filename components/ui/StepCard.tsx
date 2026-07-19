"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function StepCard({
  step,
  icon: Icon,
  title,
  description,
  index,
}: StepCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 36, rotateX: 10 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.25 } }}
      className="relative flex flex-col items-center text-center [transform-style:preserve-3d]"
    >
      <div className="relative mb-6" style={{ transform: "translateZ(24px)" }}>
        <div className="flex h-16 w-16 items-center justify-center rounded-20 bg-primary-container border border-outline shadow-soft">
          <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
        </div>
        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-soft">
          {step}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm text-ink-secondary leading-relaxed max-w-[240px]">
        {description}
      </p>
    </motion.div>
  );
}
