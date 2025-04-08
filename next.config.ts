import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    domains: ["cryptospro.com.br"],
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
