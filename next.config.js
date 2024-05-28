/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
  images: {
      domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;

// const withVideos = require('next-videos')

// module.exports = withVideos()
