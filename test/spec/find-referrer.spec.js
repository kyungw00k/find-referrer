/* global require, describe, it */

var assert = require('assert')
var findReferer = require('../../index')

describe('findReferer', function () {
  it('should be working', function () {
    var referer = findReferer()
    assert.ok(referer)
  })
})
