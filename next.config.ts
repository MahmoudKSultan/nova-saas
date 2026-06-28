import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure the base path is correct for GitHub Pages
  basePath: '/nova-saas',
};

export default nextConfig;
