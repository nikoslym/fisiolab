import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the existing WordPress trailing-slash URLs (SEO equity, Decision 3).
  trailingSlash: true,
  images: {
    // Prefer larger candidates for retina / wide hero photos.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    qualities: [75, 90, 92],
  },
  async redirects() {
    return [
      // Legacy WordPress Therapies archive -> new canonical Therapies page.
      {
        source: "/category/therapeies",
        destination: "/therapeies",
        permanent: true,
      },
      {
        source: "/en/category/therapeies",
        destination: "/en/therapeies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
