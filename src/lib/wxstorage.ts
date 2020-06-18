const { isString, isObject } = require('./dataType')

const storage = {
  save (key, value) {
    if (!isString(key) || !value) {
      throw new Error(415)
    }
    value = !isObject(value) ? value : JSON.stringify(value)
    return wx.setStorageSync(key, value)
  },
  fetch (key) {
    if (!isString(key)) {
      throw new Error(415)
    }
    return wx.getStorageSync(key) || null
  },
  remove (key) {
    if (!isString(key)) {
      throw new Error(415)
    }
    return wx.removeStorageSync(key)
  },
  clear () {
    return wx.clearStorageSync()
  }
}
module.exports = storage
