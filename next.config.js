/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/vortexone',
  assetPrefix: '/vortexone/',
  trailingSlash: true,
};

module.exports = nextConfig;
