"use client";

import { useId } from "react";

/** Icônes App Store & Google Play */

type IconProps = {
  className?: string;
};

/**
 * Logo Google Play multicolore (style badge officiel).
 */
export function GooglePlayLogo({ className }: IconProps) {
  const gid = useId().replace(/:/g, "");
  const blueId = `gp-blue-${gid}`;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={blueId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C3FF" />
          <stop offset="100%" stopColor="#1A73E8" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${blueId})`}
        d="M2.25 2.8c0-.9.5-1.7 1.25-2.1L13.2 12 3.5 23.3c-.75-.4-1.25-1.2-1.25-2.1V2.8z"
      />
      <path
        fill="#EA4335"
        d="M16.55 8.35 13.2 12 3.5.7c.35-.2.75-.3 1.15-.3.45 0 .9.15 1.25.4l10.65 7.55z"
      />
      <path
        fill="#34A853"
        d="M13.2 12 16.55 15.65 5.9 23.2c-.35.25-.8.4-1.25.4-.4 0-.8-.1-1.15-.3L13.2 12z"
      />
      <path
        fill="#FBBC04"
        d="m16.55 8.35 4.6 2.6c.9.5.9 1.8 0 2.3l-4.6 2.4L13.2 12l3.35-3.65z"
      />
    </svg>
  );
}

export function AppleLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}
