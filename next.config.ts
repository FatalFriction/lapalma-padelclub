import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.(glsl|frag|vert)$/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
