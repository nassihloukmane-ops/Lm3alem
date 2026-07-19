"use client";

import type { ReactNode } from "react";
import {
  Wrench,
  Hammer,
  Brush,
  PaintRoller,
  Droplets,
  PlugZap,
  Mic,
  AlignLeft,
  Shapes,
} from "lucide-react";
import { useI18n } from "@/components/i18n/LocaleProvider";
import { darkPalette, lightPalette, type AppTheme } from "@/lib/theme";

/** Indices into `t.trades.names` for the phone mock categories */
const CATEGORY_TRADE_INDICES = [0, 1, 2, 5, 3, 4] as const;

const categoryMeta = [
  {
    color: "#818CF8",
    bgLight: "rgba(92, 107, 192, 0.14)",
    bgDark: "rgba(99, 102, 241, 0.22)",
    icon: Wrench,
    selected: false,
  },
  {
    color: "#A1887F",
    bgLight: "rgba(161, 136, 127, 0.18)",
    bgDark: "rgba(161, 136, 127, 0.28)",
    icon: Hammer,
    selected: true,
  },
  {
    color: "#2DD4BF",
    bgLight: "rgba(38, 166, 154, 0.14)",
    bgDark: "rgba(45, 212, 191, 0.18)",
    icon: Brush,
    selected: false,
  },
  {
    color: "#E879F9",
    bgLight: "rgba(186, 104, 200, 0.14)",
    bgDark: "rgba(232, 121, 249, 0.18)",
    icon: PaintRoller,
    selected: false,
  },
  {
    color: "#38BDF8",
    bgLight: "rgba(66, 165, 245, 0.14)",
    bgDark: "rgba(56, 189, 248, 0.18)",
    icon: Droplets,
    selected: false,
  },
  {
    color: "#FBBF24",
    bgLight: "rgba(255, 179, 0, 0.16)",
    bgDark: "rgba(251, 191, 36, 0.18)",
    icon: PlugZap,
    selected: false,
  },
] as const;

function SectionTitle({
  icon,
  iconBg,
  children,
  textColor,
}: {
  icon: ReactNode;
  iconBg?: string;
  children: string;
  textColor: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
      }}
    >
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 8,
          background: iconBg ?? "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: textColor,
          lineHeight: 1.2,
        }}
      >
        {children}
      </span>
    </div>
  );
}

type Props = {
  className?: string;
  /** Mode clair ou sombre — défaut : dark (capture app) */
  theme?: AppTheme;
};

/**
 * Écran « Créer une demande » — light / dark.
 */
export function AppRequestScreen({
  className = "",
  theme = "dark",
}: Props) {
  const { t } = useI18n();
  const isDark = theme === "dark";
  const p = isDark ? darkPalette : lightPalette;

  const categories = categoryMeta.map((meta, i) => ({
    ...meta,
    label: t.trades.names[CATEGORY_TRADE_INDICES[i]] ?? "",
  }));

  return (
    <div
      className={`flex h-full w-full flex-col ${className}`}
      style={{
        backgroundColor: p.bg,
        padding: "34px 11px 12px",
        fontFamily: "var(--font-manrope), system-ui, sans-serif",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
      data-theme={theme}
      role="img"
      aria-label={`${t.phone.aria} (${theme})`}
    >
      {/* Barre salutation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          backgroundColor: isDark ? darkPalette.surface : lightPalette.surface,
          borderRadius: 14,
          padding: "8px 10px",
          marginBottom: 9,
          boxShadow: p.shadow,
          border: isDark ? `1px solid ${darkPalette.outline}` : "none",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 10,
            background: p.iconTools,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          <Wrench size={14} color="#FFFFFF" strokeWidth={2.2} />
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: p.text,
            lineHeight: 1.25,
          }}
        >
          {t.phone.header}
        </span>
      </div>

      {/* Catégories */}
      <div
        style={{
          backgroundColor: isDark ? darkPalette.surface : lightPalette.surface,
          borderRadius: 18,
          padding: "11px 10px 10px",
          marginBottom: 9,
          boxShadow: p.shadow,
          border: isDark ? `1px solid ${darkPalette.outline}` : "none",
          flexShrink: 0,
        }}
      >
        <SectionTitle
          textColor={p.text}
          iconBg={
            isDark ? "rgba(99, 102, 241, 0.2)" : "rgba(190, 24, 93, 0.1)"
          }
          icon={
            <Shapes
              size={12}
              color={isDark ? darkPalette.indigoLight : "#BE185D"}
              strokeWidth={2.2}
              aria-hidden
            />
          }
        >
          {t.phone.categoriesTitle}
        </SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 6,
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "8px 3px 6px",
                  borderRadius: 12,
                  backgroundColor: cat.selected
                    ? p.selectedBg
                    : isDark
                      ? darkPalette.surfaceMuted
                      : lightPalette.surfaceMuted,
                  border: cat.selected
                    ? `1.5px solid ${p.rating}`
                    : "1.5px solid transparent",
                  boxShadow: cat.selected
                    ? `0 0 12px rgba(245, 158, 11, ${isDark ? 0.35 : 0.12})`
                    : "none",
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    backgroundColor: isDark ? cat.bgDark : cat.bgLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={15} color={cat.color} strokeWidth={2} />
                </span>
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: cat.selected ? 700 : 500,
                    color: p.text,
                    textAlign: "center",
                    lineHeight: 1.1,
                  }}
                >
                  {cat.label}
                </span>
                {cat.selected ? (
                  <span
                    aria-hidden="true"
                    style={{
                      width: 14,
                      height: 2,
                      borderRadius: 2,
                      backgroundColor: p.rating,
                    }}
                  />
                ) : (
                  <span style={{ height: 2 }} aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Description */}
      <div
        style={{
          backgroundColor: isDark ? darkPalette.surface : lightPalette.surface,
          borderRadius: 18,
          padding: "12px 11px 11px",
          marginBottom: 9,
          boxShadow: p.shadow,
          border: isDark ? `1px solid ${darkPalette.outline}` : "none",
          flexShrink: 0,
        }}
      >
        <SectionTitle
          textColor={p.text}
          iconBg={isDark ? "rgba(99, 102, 241, 0.2)" : "transparent"}
          icon={
            <AlignLeft
              size={13}
              color={isDark ? darkPalette.indigoLight : "#1C1917"}
              strokeWidth={2.2}
              aria-hidden
            />
          }
        >
          {t.phone.descTitle}
        </SectionTitle>
        <div
          style={{
            backgroundColor: isDark
              ? darkPalette.surfaceMuted
              : lightPalette.surfaceMuted,
            borderRadius: 14,
            padding: "11px 12px",
            minHeight: 56,
            border: isDark ? `1px solid ${darkPalette.outline}` : "none",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
              fontWeight: 400,
              color: p.textSecondary,
              lineHeight: 1.4,
            }}
          >
            {t.phone.descPlaceholder}
          </p>
        </div>
      </div>

      {/* Message vocal */}
      <div
        style={{
          backgroundColor: isDark ? darkPalette.surface : lightPalette.surface,
          borderRadius: 18,
          padding: "12px 11px 12px",
          marginBottom: 10,
          boxShadow: p.shadow,
          border: isDark ? `1px solid ${darkPalette.outline}` : "none",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              backgroundColor: isDark
                ? "rgba(190, 24, 93, 0.22)"
                : "#FCE7F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
            aria-hidden="true"
          >
            <Mic size={16} color="#BE185D" strokeWidth={2.2} />
          </span>
          <div style={{ minWidth: 0, paddingTop: 1 }}>
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                color: p.text,
                lineHeight: 1.25,
              }}
            >
              {t.phone.voice}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            height: 42,
            borderRadius: 9999,
            backgroundColor: isDark
              ? darkPalette.surfaceMuted
              : lightPalette.surfaceMuted,
            border: isDark ? `1px solid ${darkPalette.outline}` : "none",
          }}
          aria-hidden="true"
        >
          <Mic size={14} color={p.text} strokeWidth={2.2} />
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: p.text,
            }}
          >
            {t.phone.voice}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          marginTop: "auto",
          backgroundColor: p.primary,
          borderRadius: 9999,
          height: 46,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 20px rgba(190, 24, 93, 0.35)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          {t.phone.confirm}
        </span>
      </div>
    </div>
  );
}
