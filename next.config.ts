import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "lumiere-a.akamaihd.net",
      port: '',
      pathname: '/**'
    }]
  }
};

export default nextConfig;
