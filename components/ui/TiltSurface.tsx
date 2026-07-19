"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
  type PointerEvent,
} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type TiltSurfaceProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  hoverScale?: number;
  disabled?: boolean;
};

/** Surface 3D — désactivée sur tactile / mobile. */
export function TiltSurface({
  children,
  className,
  maxTilt = 8,
  hoverScale = 1.02,
  disabled = false,
}: TiltSurfaceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    setCanTilt(fine && wide);
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const onMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (disabled || !canTilt || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(x);
      my.set(y);
    },
    [disabled, canTilt, mx, my]
  );

  const onLeave = useCallback(() => {
    setHover(false);
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  if (disabled || !canTilt) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={cn("relative [perspective:1100px]", className)}>
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={onLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          scale: hover ? hoverScale : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 260, damping: 24 } }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
