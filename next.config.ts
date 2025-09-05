import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
  },
  allowedDevOrigins: ["192.168.7.5", "192.168.163.57", "192.168.7.6"],
};

export default nextConfig;
