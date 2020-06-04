'use strict'

const webpack = require('webpack')
const validate = require('webpack-validator')

const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = validate({

  entry: common.entry,
  output: common.output,

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin(common.htmlPluginConfig('template-dev.html'))
  ],

  module: {
    preLoaders: [common.standardPreLoaders],

    loaders: [
      common.jsLoader, 
      Object.assign({}, common.cssLoader, {
        loaders: undefined,
        loader: ExtractTextPlugin.extract(common.cssLoader.loaders[0], common.cssLoader.loaders[1])
      })
    ]
  },

  resolve: common.resolve
})
