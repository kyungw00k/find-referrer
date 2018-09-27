require('./polyfill/es5')

var testsContext = require.context('.', true, /spec$/)
testsContext.keys().forEach(testsContext)
