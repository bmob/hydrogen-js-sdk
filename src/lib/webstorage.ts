const { isString } = require('./dataType')

let lt
if (typeof cc !== 'undefined') {
  lt = cc.sys.localStorage
} else {
  lt = localStorage
}
const storage = {
  save (key, value) {
    if (!isString(key) || !value) {
      throw new Error(415)
    }
    lt.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    if (!isString(key)) {
      throw new Error(415)
    }
    return JSON.parse(lt.getItem(key)) || null
  },
  remove (key) {
    if (!isString(key)) {
      throw new Error(415)
    }
    lt.removeItem(key)
  },
  clear () {
    lt.clear()
  }
}
module.exports = storage
