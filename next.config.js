/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  generateEtags: false,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    DAY_X: process.env.DAY_X,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
    NETWORK: process.env.NETWORK,
  },
};

module.exports = nextConfig;
