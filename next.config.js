/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Laisse false pour être propre. Si tu veux forcer le build en démo, passe à true
  typescript: { ignoreBuildErrors: false },

  // Évite que le linter bloque le build
  eslint: { ignoreDuringBuilds: true }
};

module.exports = nextConfig;
