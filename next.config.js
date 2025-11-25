/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true, // Temporary for demo
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporary for demo
  },
  transpilePackages: ['@anylayer/sdk', '@anylayer/shared'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  env: {
    NEXT_PUBLIC_ANYLAYER_API_URL: process.env.NEXT_PUBLIC_ANYLAYER_API_URL || 'https://api.anylayer.org/v1',
    NEXT_PUBLIC_DEFAULT_CHAIN_ID: process.env.NEXT_PUBLIC_DEFAULT_CHAIN_ID || '8453',
  }
};

module.exports = nextConfig;
