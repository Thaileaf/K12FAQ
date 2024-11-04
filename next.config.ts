import type { Configuration } from "webpack";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config: Configuration) => {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true
        };
        return config;
    }
};
export default nextConfig;
