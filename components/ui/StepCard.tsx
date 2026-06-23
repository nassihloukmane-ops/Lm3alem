"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function StepCard({ step, icon: Icon, title, description, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-saffron/20 to-saffron/5 border border-saffron/20">
          <Icon className="h-7 w-7 text-saffron-dark" aria-hidden="true" />
        </div>
        <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-saffron text-xs font-bold text-white shadow-warm">
          {step}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-bold text-teal">{title}</h3>
      <p className="text-sm text-teal/60 leading-relaxed max-w-[220px]">{description}</p>
    </motion.div>
  );
}
