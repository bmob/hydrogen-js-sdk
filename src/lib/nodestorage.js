const { isObject, isString, isNumber } = require('./dataType')
const storage = {
  save(key, value) {
  
  },
  fetch(key) {
    return null
  },
  remove(key) {

  },
  clear() {
  }
};
module.exports = storage