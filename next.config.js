/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [],
  },
}

module.exports = nextConfig 