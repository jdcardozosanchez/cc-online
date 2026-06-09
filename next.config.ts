import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export 100% estático: `next build` genera archivos planos en `out/`,
  // sin servidor encendido. Listo para Cloudflare Pages (y casi gratis).
  output: "export",
};

export default nextConfig;
