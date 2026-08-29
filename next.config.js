/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vortexone',
  assetPrefix: '/vortexone/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
