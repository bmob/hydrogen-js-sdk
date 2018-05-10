const { isObject, isString, isNumber } = require('./dataType')
const storages = "xxrequire('@system.storage')xx"
const storage = {
  save(key, value) {
    if (!isString(key) || !value) {
      throw new error(415)
    }
    storages.set({
      key: key,
      value: JSON.stringify(value),
      success: function (data) {
        console.log('handling success')
        return data
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  },
  fetch(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    return new Promise((resolve, reject) => {
      return storages.get({
        key: key,
        success: function (data) {
          resolve(data || null);
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`)
          reject(data);
        }
      })
    })
  },
  remove(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    storages.delete({
      key: key,
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  },
  clear() {
    storages.clear({
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  }
};
module.exports = storage