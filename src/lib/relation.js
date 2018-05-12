const {isString, isArray} = require('./dataType')
const error = require('./error')
const request = require('./request')
const relation = class Relation {
  constructor(tableName) {
    if (!isString(tableName)) {
      throw new error(415)
    }
    this.tableName = tableName
    this.whereData = {}
  }
  add(parmas) {
    return operation.call(this, parmas, 'AddRelation')
  }
  remove(parmas) {
    return operation.call(this, parmas, 'RemoveRelation')
  }
  field(tableName,objectId, field) {
    if (!isString(objectId) || !isString(field)) {
      throw new error(415)
    }
    this.whereData.where = {
      "$relatedTo": {
        "object": {
          "__type": "Pointer",
          "className": tableName,
          "objectId": objectId
        },
        "key": field
      }
    }
  }
  find(){
    return new Promise((resolve,reject) => {
      request(`/1/${this.tableName}`,'get',this.whereData).then(({results}) => {
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
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
      data.push({"__type": "Pointer", "className": this.tableName, "objectId": item})
    })
    return {"__op": op, "objects": data}
  } else {
    throw new error(415)
  }
}

module.exports = relation
