"use client";

export { motion, AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionDivProps = HTMLMotionProps<"div"> & { children?: ReactNode };

export const MotionDiv = motion.div;
export const MotionHeader = motion.header;

export function FadeIn({ children, className, ...props }: MotionDivProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function FadeInView({ children, className, ...props }: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
