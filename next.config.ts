import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.oka-tech.site',
      },
      {
        protocol: 'https',
        hostname: 'oka-tech.site',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'kr.object.ncloudstorage.com',
        pathname: '/oka-tech/images/**', 
      },
    ],
  },
};

export default nextConfig;
