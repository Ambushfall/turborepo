
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },


}
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme-config.tsx',
})

module.exports = withNextra(nextConfig)
