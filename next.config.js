/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = {
    devIndicators: {
        buildActivity: false
    },
    experimental: {
      images: {
        allowFutureImage: true,
      },
    },
    images: {
      domains: ['res.cloudinary.com'],
    },
}

