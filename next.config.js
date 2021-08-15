/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const options = {
  withBundleAnalyzer: {},

  withPwa: {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
}

module.exports = withPlugins(
  [
    [withBundleAnalyzer, options.withBundleAnalyzer],
    [withPWA, options.withPwa],
  ],

  {
    webpack5: true,
  }
)
