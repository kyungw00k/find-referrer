/* global require, module */

module.exports = function (base) {
  return function (config) {
    base.browsers = ['PhantomJS']
    config.set(base)
  }
}
