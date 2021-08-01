/* eslint-disable */
const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [
      withAntdLess,
      {
        modifyVars: {
          '@primary-color': '#0d2',
          '@border-radius-base': '10px',
          '@border-color-base': '#ff00',
          '@component-background': '#ff00',
        },
      },
    ],
  ],
  {
    webpack5: true,
  }
)

// module.exports = withAntdLess({
//   modifyVars: {
//     '@primary-color': '#0d2',
//     '@border-radius-base': '10px',
//     '@border-color-base': '#ff00',
//     '@component-background': '#ff00'
//   },

//   // Other NextConfig Here...
//   webpack(config) {
//     return config;
//   },

//   // NextFuture
//   webpack5: true,

// });
