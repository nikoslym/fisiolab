import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve the existing WordPress trailing-slash URLs (SEO equity, Decision 3).
  trailingSlash: true,
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
