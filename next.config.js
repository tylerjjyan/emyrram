const withPlugins = require('next-compose-plugins')
const withVideos = require('next-videos')
const ESLintPlugin = require('eslint-webpack-plugin')
const optimizedImages = require('next-optimized-images')
const { i18n } = require('./next-i18next.config')
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  webpack5: true,
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: '@svgr/webpack'
        },
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
            publicPath: '/_next/'
          }
        },
        {
          loader: 'svgo-loader'
        }
      ]
    })

    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    })

    config.plugins.push(
      new ESLintPlugin({
        exclude: ['node_modules']
      })
    )

    return config
  },
  env: {
    buildEnv: process.env.BUILD_ENV
  },
  images: {
    disableStaticImages: true
  },
  basePath: process.env.APP_PATH || '',
  assetPrefix: process.env.APP_PATH || '',
  outputFileTracing: false
}

module.exports = withPlugins(
  [
    withVanillaExtract,
    [
      optimizedImages,
      { optimizeImages: false, handleImages: ['jpeg', 'png', 'webp', 'gif'] }
    ],
    [withVideos]
  ],
  nextConfig
)
