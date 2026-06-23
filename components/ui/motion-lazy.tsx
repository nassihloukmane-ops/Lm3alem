"use client";

import dynamic from "next/dynamic";
import { type HTMLMotionProps } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false }
);

const MotionHeader = dynamic(
  () => import("framer-motion").then((m) => m.motion.header),
  { ssr: false }
);

export const AnimatePresence = dynamic(
  () => import("framer-motion").then((m) => m.AnimatePresence),
  { ssr: false }
);

type MotionDivProps = HTMLMotionProps<"div"> & { children?: ReactNode };

export function FadeIn({
  children,
  className,
  ...props
}: MotionDivProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionDiv className={className} {...props}>
      {children}
    </MotionDiv>
  );
}

export function FadeInView({
  children,
  className,
  ...props
}: MotionDivProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}

export { MotionDiv, MotionHeader };
