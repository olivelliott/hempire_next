/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withImages = require('next-images')

module.exports = withImages({
  images: {
    domains: [
      'images.unsplash.com',
    ],
    disableStaticImages: true
    
  },
  experimental:{
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  }
  
})
