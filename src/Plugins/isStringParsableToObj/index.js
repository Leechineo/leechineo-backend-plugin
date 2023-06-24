const isStringParsableToObj = (str) => {
  try {
    JSON.parse(str)
    return true
  } catch (e) {
    return false
  }
}

module.exports = isStringParsableToObj
