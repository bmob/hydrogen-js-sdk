const { isString } = require('./dataType')
const storage = {
  save (key, value) {
    if (!isString(key) || !value) {
      throw new Error(415)
    }
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    if (!isString(key)) {
      throw new Error(415)
    }
    return JSON.parse(localStorage.getItem(key)) || null
  },
  remove (key) {
    if (!isString(key)) {
      throw new Error(415)
    }
    localStorage.removeItem(key)
  },
  clear () {
    localStorage.clear()
  }
}
module.exports = storage
