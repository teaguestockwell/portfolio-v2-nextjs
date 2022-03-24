/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const {withContentlayer} = require('next-contentlayer')

const options = {
  withBundleAnalyzer: {},

  withPwa: {
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development',
    },
    // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.RuntimeCachingEntry
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 1000,
          },
        },
      },
    ],
  },

  withContentLayer: {
    swcMinify: true,
    reactStrictMode: true,
  },
}

module.exports = withPlugins(
  [
    [withBundleAnalyzer, options.withBundleAnalyzer],
    [withPWA, options.withPwa],
    [withContentlayer, options.withContentLayer],
  ],

  {
    webpack: (config, {dev, isServer}) => {
      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }

      return config
    },
  }
)
