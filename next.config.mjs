/** @type {import('next').NextConfig} */

const isStaticExport = process.env.HOSTINGER_STATIC === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
