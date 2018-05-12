const {isString} = require('./dataType')
const error = require('./error')
const pointer = class Pointer {
  constructor(tableName) {
    if (!isString(tableName)) {
      throw new error(415)
    }
    this.tableName = tableName
  }
  set(objectId) {
    if (!isString(objectId)) {
      throw new error(415)
    }
    return {"__type": "Pointer", "className": this.tableName, "objectId": objectId}
  }
}

module.exports = pointer
