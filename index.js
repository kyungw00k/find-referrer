/* global module */

/**
 * Returns referrer from current page
 *
 * @returns {string} - referrer of current page
 */
function findReferrer () {
  var oFrame = window
  var exception = false

  if (oFrame.top === oFrame.self) {
    return oFrame.location.href
  } else {
    try {
      while (oFrame.parent.document !== oFrame.document) {
        // Check if document property is accessible.
        if (oFrame.parent.document) {
          oFrame = oFrame.parent
        } else {
          // If document was not set, break the loop and set exception flag.
          exception = true
          break
        }
      }
    } catch (e) {
      exception = true
    }

    if (exception) {
      return oFrame.document.referrer || oFrame.location.href
    } else {
      return oFrame.location.href
    }
  }
}

module.exports = findReferrer
