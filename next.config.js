/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')
const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const options = {
  withBundleAnalyzer: {},

  withAntDLess: {
    modifyVars: {
      '@primary-color': '#0d2',
      '@border-radius-base': '10px',
      '@border-color-base': '#ff00',
      '@component-background': '#ff00',
    },
  },

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
    [withAntdLess, options.withAntDLess],
    [withPWA, options.withPwa],
  ],

  {
    webpack5: true,
  }
)
