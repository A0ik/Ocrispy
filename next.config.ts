import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
