/* global require, module */

const env = process.env.NODE_ENV || 'development'

const webpackOptions = require('./webpack.config.js')
delete webpackOptions.entry

const baseConfig = {
  files: [
    'test/test.js'
  ],

  // frameworks to use
  frameworks: ['mocha'],

  preprocessors: {
    'test/test.js': ['webpack']
  },

  reporters: ['mocha'],

  webpack: webpackOptions,

  webpackMiddleware: {
    // webpack-dev-middleware configuration
    noInfo: true
  },

  singleRun: true
}

module.exports = require('./config/karma.config.' + env)(baseConfig)
