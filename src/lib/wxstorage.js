const { isString } = require('./dataType')

const storage = {
  save (key, value) {
    if (!isString(key) || !value) {
      throw new Error(415)
    }
    return wx.setStorageSync(key, JSON.stringify(value))
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