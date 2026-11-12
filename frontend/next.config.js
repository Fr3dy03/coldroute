/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Vercel automatically handles image domain optimization
  // No need to restrict localhost - Vercel handles this
  images: {
    // Unrestricted for Vercel deployment
    domains: [],
  },
};

module.exports = nextConfig;
