const request = require('./request')
const {isObject, isString, isNumber, isUndefined} = require('./dataType')
const error = require('./error')
const query = class query {
  constructor(parma) {
    this.tableName = `/1/classes/${parma}`
    this.setData = {}
    this.queryData = {}
    this.andData = {}
    this.orData = {}
  }
  get(ObjectId) {
    if (!isString(ObjectId)) {
      throw new error(415)
    }

    let oneData = {}
    const incrementData = {}
    const unsetData = {}

    const increment = (key, val = 1) => {
      if (!isString(key) || !isNumber(val)) {
        throw new error(415)
      }
      incrementData[key] = {
        "__op": "Increment",
        "amount": val
      }
    }
    const unset = (key) => {
      if (!isString(ObjectId)) {
        throw new error(415)
      }
      unsetData[key] = {
        "__op": "Delete"
      }
    }
    const set = (key, val) => {
      if (!isString(key) || !isString(val)) {
        throw new error(415)
      }
      oneData[key] = val
    }
    const save = () => {
      if (Object.keys(incrementData).length) {
        oneData = Object.assign(incrementData, oneData)
      }
      if (Object.keys(unsetData).length) {
        oneData = Object.assign(unsetData, oneData)
      }
      return request(`${this.tableName}/${ObjectId}`, 'put', oneData)
    }
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${ObjectId}`).then(results => {
        Object.defineProperty(results, "set", {value: set})
        Object.defineProperty(results, "unset", {value: unset})
        Object.defineProperty(results, "save", {value: save})
        Object.defineProperty(results, "increment", {value: increment})
        Object.defineProperty(results, "destroy", {
          value: () => this.destroy(ObjectId)
        })
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  destroy(ObjectId) {
    if (!isString(ObjectId)) {
      throw new error(415)
    }
    return request(`${this.tableName}/${ObjectId}`, 'delete')
  }
  set(key, val = "") {
    if (!isString(key) || !isString(val)) {
      throw new error(415)
    }
    this.setData[key] = val;
  }
  save(parma = {}) {
    if (!isObject(parma)) {
      throw new error(415)
    }
    this.setData = Object.assign(parma, this.setData)
    return request(`${this.tableName}`, 'post', this.setData)
  }
  terms(key, operator, val) {
    if (!isString(key)) {
      throw new error(415)
    }
    const judge = (key, operator, val) => {
      let data = {},value = null
      switch (operator) {
        case '==':
          data[key] = val
          break;
        case '!=':
          data[key] = {
            "$ne": val
          }
          break;
        case '<':
          data[key] = {
            "$lt": val
          }
          break;
        case '<=':
          data[key] = {
            "$lte": val
          }
          break;
        case '>':
          data[key] = {
            "$gt": val
          }
        case '>=':
          data[key] = {
            "$gte": val
          }
          break;
        default:
          throw new error(415)
      }
      return data
    }
    let keys = false;
    for (let item in this.queryData) {
      if (key == item) {
        keys = true
      }
    }
    const newData = judge(key, operator, val)

    if (!isUndefined(this.queryData.$and)) {
      this.queryData.$and.push(newData)
    } else {
      if (keys) {
        this.queryData = {
          "$and": [this.queryData, newData]
        }
      } else {
        this.queryData = Object.assign(newData, this.queryData)
      }
    }
    return newData
  }
  or(...querys) {
    querys.map((item, i) => {
      if (!isObject(item)) {
        throw new error(415)
      }
    })
    const queryData = this.queryData.$and
    if (!isUndefined(queryData)) {
      for (let i = 0; i < queryData.length; i++) {
        for (let k = 0; k < querys.length; k++) {
          if(JSON.stringify(queryData[i]) == JSON.stringify(querys[k])){
            this.queryData.$and.splice(i,1)
          }
        }
      }
    }
    this.orData = {
      "$or": querys
    }
  }
  and(...querys) {
    querys.map((item, i) => {
      if (!isObject(item)) {
        throw new error(415)
      }
    })
    this.andData = {
      "$and": querys
    }
  }
  find() {
    let whereData = {};
    if (Object.keys(this.queryData).length) {
      whereData.where = this.queryData
    }
    if (Object.keys(this.andData).length) {
      whereData.where = Object.assign(this.andData, this.queryData)
    }
    if (Object.keys(this.orData).length) {
      whereData.where = Object.assign(this.orData, this.queryData)
    }
    console.log(whereData.where)
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', whereData).then(({results}) => {
        this.equalToData = {}
        this.notEqualToData = {}
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

module.exports = query
