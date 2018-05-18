const { isString } = require('./dataType')
const Error = require('./error')
const pointer = class Pointer {
  constructor (tableName) {
    if (!isString(tableName)) {
      throw new Error(415)
    }
    this.tableName = tableName
  }
  set (objectId) {
    if (!isString(objectId)) {
      throw new Error(415)
    }
    return { '__type': 'Pointer', 'className': this.tableName, 'objectId': objectId }
  }
}

module.exports = pointer
