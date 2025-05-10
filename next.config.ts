import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/179270870?v=4"),
      new URL(
        "https://static.vecteezy.com/system/resources/thumbnails/001/785/195/original/hacker-code-running-down-free-video.jpg"
      ),
    ],
  },
};

export default nextConfig;
