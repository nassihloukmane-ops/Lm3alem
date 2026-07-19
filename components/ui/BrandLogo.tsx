import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Taille visuelle du pictogramme */
  size?: number;
  /** Afficher le wordmark « Lmaalem » à côté */
  withWordmark?: boolean;
  /** Variante compacte (footer / mobile) */
  compact?: boolean;
  /** Priorité de chargement Next/Image (navbar, hero) */
  priority?: boolean;
};

/**
 * Logo officiel Lmaalem — adapté light & dark.
 * Le pictogramme a un fond sombre intégré : ombre douce + léger anneau pour le mode clair.
 */
export function BrandLogo({
  className,
  size = 40,
  withWordmark = true,
  compact = false,
  priority = false,
}: BrandLogoProps) {
  const wordSize = compact ? "text-lg" : "text-xl";
  const arabicSize = compact ? "text-[9px]" : "text-[10px]";

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
          alt="Lmaalem"
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
              "font-display font-bold leading-tight tracking-tight text-ink",
              wordSize
            )}
          >
            Lmaalem
          </span>
          <span
            className={cn(
              "font-arabic leading-snug text-ink-secondary/90 font-medium tracking-wide w-fit",
              arabicSize
            )}
            lang="ar"
          >
            المعلم
          </span>
        </span>
      )}
    </span>
  );
}
