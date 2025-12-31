const {withContentlayer} = require('next-contentlayer2')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  publicExcludes: ['!robots.txt', '!manifest.json'],
  buildExcludes: [/middleware-manifest\.json$/, /middleware-runtime\.js$/],
  dynamicStartUrl: false,
  workboxOptions: {
    manifestTransforms: [
      async (manifestEntries) => {
        const manifest = manifestEntries.filter(
          (entry) => !entry.url.includes('dynamic-css-manifest.json')
        )
        return {manifest, warnings: []}
      },
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {}, // Silence Turbopack warning for Next.js 16+
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    qualities: [100, 75],
  },
}

module.exports = withContentlayer(withBundleAnalyzer(withPWA(nextConfig)))
