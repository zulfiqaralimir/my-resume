/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // helps catch errors in development
  experimental: {
    serverActions: false, // disables experimental features that may break on Vercel
  },
  images: {
    domains: [], // add domains if you load remote images
  },
};

module.exports = nextConfig;
