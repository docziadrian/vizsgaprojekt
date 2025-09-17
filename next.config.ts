import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://picsum.photos/200/300")], //Majd töröld ki!
  },
};

export default nextConfig;
