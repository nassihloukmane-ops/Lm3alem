/** @type {import('next').NextConfig} */
const nextConfig = {
  // Helps self-hosted Node.js platforms (cPanel, VPS, Railway, etc.)
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
