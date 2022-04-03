/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
    API_URL: process.env.API_URL,
    APP_SECRET: process.env.APP_SECRET,
  },
};

module.exports = nextConfig;
