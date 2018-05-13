const {isString, isArray} = require('./dataType')
const error = require('./error')
const request = require('./request')
const relation = class Relation {
  constructor(tableName) {
    if (!isString(tableName)) {
      throw new error(415)
    }
    this.tableName = tableName
  }
  add(parmas) {
    return operation.call(this, parmas, 'AddRelation')
  }
  remove(parmas) {
    return operation.call(this, parmas, 'RemoveRelation')
  }
}

function operation(parmas, op) {
  if (isString(parmas)) {
    return {
      "__op": op,
      "objects": [
        {
          "__type": "Pointer",
          "className": this.tableName,
          "objectId": parmas
        }
      ]
    }
  } else if (isArray(parmas)) {
    const data = []
    parmas.map(item => {
      if(!isString(item)){
        throw new error(415)
      }
      data.push({"__type": "Pointer", "className": this.tableName, "objectId": item})
    })
    return {"__op": op, "objects": data}
  } else {
    throw new error(415)
  }
}

module.exports = relation
