const request = require('./request')
const {isObject, isString, isNumber, isUndefined} = require('./dataType')
const error = require('./error')
const query = class query {
  constructor(parma) {
    this.tableName = `/1/classes/${parma}`
    this.init()
  }
  init(){
    this.setData = {}
    this.queryData = {}
    this.andData = {}
    this.orData = {}
    this.limitNum = 10
    this.skipNum = 0
    this.orders = ""
    this.keys = ""
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
      let data = {},
        value = null
      if (key == "createdAt" || key == "updateAt") {
        value = {
          "__type": "Date",
          "iso": val
        }
      } else {
        value = val
      }
      switch (operator) {
        case '==':
          data[key] = value
          break;
        case '!=':
          data[key] = {
            "$ne": value
          }
          break;
        case '<':
          data[key] = {
            "$lt": value
          }
          break;
        case '<=':
          data[key] = {
            "$lte": value
          }
          break;
        case '>':
          data[key] = {
            "$gt": value
          }
        case '>=':
          data[key] = {
            "$gte": value
          }
          break;
        default:
          throw new error(415)
      }
      return data
    }
    const newData = judge(key, operator, val)
    if (Object.keys(this.queryData).length) {
      if (!isUndefined(this.queryData.$and)) {
        this.queryData.$and.push(newData)
      } else {
        this.queryData = {
          "$and": [this.queryData, newData]
        }
      }
    } else {
      this.queryData = newData
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
          if (JSON.stringify(queryData[i]) == JSON.stringify(querys[k])) {
            this.queryData.$and.splice(i, 1)
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
  limit(parma) {
    if (!isNumber(parma)) {
      throw new error(415)
    }
    if(parma > 1000){
      parma = 1000
    }
    this.limitNum = parma
  }
  skip(parma) {
    if (!isNumber(parma)) {
      throw new error(415)
    }
    this.skipNum = parma
  }
  order(...key) {
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.orders = key.join(',')
  }
  select(...key){
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.keys = key.join(',')
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
    whereData.limit = this.limitNum
    whereData.skip = this.skipNum
    whereData.order = this.orders
    whereData.keys = this.keys
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', whereData).then(({results}) => {
        this.init()
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  count() {
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', {count:1}).then(({count}) => {
        resolve(count)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

module.exports = query
