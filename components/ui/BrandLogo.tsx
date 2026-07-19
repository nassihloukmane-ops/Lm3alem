import Image from "next/image";
import { brandAr, brandName } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
  compact?: boolean;
  priority?: boolean;
};

/** Logo officiel lm3alem — adapté light & dark. */
export function BrandLogo({
  className,
  size = 40,
  withWordmark = true,
  compact = false,
  priority = false,
}: BrandLogoProps) {
  const wordSize = compact ? "text-lg" : "text-xl";
  const arabicSize = compact ? "text-[10px]" : "text-xs";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-[22%]",
          "ring-1 ring-black/10 dark:ring-white/10",
          "shadow-[0_4px_14px_rgba(94,92,230,0.35)]",
          "bg-[var(--logo-plate,#0D0B21)]"
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt={brandName}
          width={size * 2}
          height={size * 2}
          className="h-full w-full object-cover object-center scale-[1.02]"
          priority={priority}
        />
      </span>

      {withWordmark && (
        <span className="flex flex-col min-w-0 items-start gap-0.5">
          <span
            className={cn(
              "font-display font-bold leading-tight tracking-tight text-ink lowercase",
              wordSize
            )}
          >
            {brandName}
          </span>
          <span
            className={cn(
              "font-arabic leading-relaxed text-ink-secondary/90 font-medium w-fit",
              arabicSize
            )}
            lang="ar"
          >
            {brandAr}
          </span>
        </span>
      )}
    </span>
  );
}
