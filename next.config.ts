import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack5: true,
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
