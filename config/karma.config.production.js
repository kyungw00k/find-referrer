/* global require, module, process */

const pkg = require('../package.json')
const testDate = (new Date()).toISOString()
const customLaunchers = require('./browserstack.launchers.js')

Object.keys(customLaunchers).forEach(function (key) {
  customLaunchers[key].base = 'BrowserStack'
})

module.exports = function (base) {
  return function (config) {
    if (!process.env.BROWSERSTACK_USERNAME || !process.env.BROWSERSTACK_ACCESS_KEY) {
      console.log('Make sure the BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY environment variables are set.')
      process.exit(1)
    }

    base.browsers = Object.keys(customLaunchers)
    base.customLaunchers = customLaunchers
    base.reporters = ['mocha', 'BrowserStack']

    base.retryLimit = 2
    base.concurrency = 5
    base.browserDisconnectTolerance = 10
    base.browserDisconnectTimeout = 1000 * 60 * 10
    base.browserNoActivityTimeout = 1000 * 60 * 5
    base.captureTimeout = 720000

    base.browserStack = {}
    base.browserStack.username = process.env.BROWSERSTACK_USERNAME
    base.browserStack.accessKey = process.env.BROWSERSTACK_ACCESS_KEY
    base.browserStack.build = `unit-test-${testDate}`
    base.browserStack.project = pkg.name
    base.browserStack.timeout = 1800
    base.browserStack.captureTimeout = 1800
    base.browserStack.startTunnel = true
    base.browserStack.video = false

    config.set(base)
  }
}
