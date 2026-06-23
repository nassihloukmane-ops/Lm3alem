/** @type {import('next').NextConfig} */

// Hostinger shared hosting → static export (upload "out/" to public_html)
// Hostinger Node.js app  → set HOSTINGER_NODE=true (uses standard next start)
const isStaticExport = process.env.HOSTINGER_STATIC === "true";
const isHostingerNode = process.env.HOSTINGER_NODE === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
  // Standalone only for VPS/Docker — not for Hostinger Node.js apps
  ...(!isStaticExport && !isHostingerNode && !process.env.VERCEL
    ? { output: "standalone" }
    : {}),
};

export default nextConfig;
