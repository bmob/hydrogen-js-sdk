let Bmob = require('./bmob')
const request = require('./request')
const {isObject, isString, isNumber, isUndefined, isArray} = require('./dataType')
const error = require('./error')
const query = class query {
  constructor(parma) {
    this.tableName = `${Bmob._config.parameters.QUERY}/${parma}`
    this.init()
    this.addArray = {}
    this.setData = {}
  }
  init() {
    this.queryData = {}
    this.andData = {}
    this.orData = {}
    this.limitNum = 100
    this.skipNum = 0
    this.includes = ""
    this.orders = null
    this.keys = null
  }
  get(ObjectId) {
    if (!isString(ObjectId)) {
      throw new error(415)
    }

    let oneData = {}
    const incrementData = {}
    const unsetData = {}
    const addArray = {}

    const add = (key, val) => {
      if (!isString(key) || !isArray(val)) {
        throw new error(415)
      }
      addArray[key] = {
        "__op": "Add",
        "objects": val
      }
    }
    const addUnique = (key, val) => {
      if (!isString(key) || !isArray(val)) {
        throw new error(415)
      }
      addArray[key] = {
        "__op": "AddUnique",
        "objects": val
      }
    }
    const remove = (key, val) => {
      if (!isString(key) || !isArray(val)) {
        throw new error(415)
      }
      addArray[key] = {
        "__op": "Remove",
        "objects": val
      }
    }
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
      if (!isString(key) || !val) {
        throw new error(415)
      }
      oneData[key] = val
    }
    const save = () => {
      const saveData = Object.assign(unsetData, oneData, incrementData, addArray)
      return request(`${this.tableName}/${ObjectId}`, 'put', saveData)
    }
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${ObjectId}`).then(results => {
        Object.defineProperty(results, "set", {value: set})
        Object.defineProperty(results, "unset", {value: unset})
        Object.defineProperty(results, "save", {value: save})
        Object.defineProperty(results, "increment", {value: increment})
        Object.defineProperty(results, "add", {value: add})
        Object.defineProperty(results, "remove", {value: remove})
        Object.defineProperty(results, "addUnique", {value: addUnique})
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
    if (!isString(key) || !val) {
      throw new error(415)
    }
    this.setData[key] = val;
  }
  add(key, val) {
    if (!isString(key) || !isArray(val)) {
      throw new error(415)
    }
    this.addArray[key] = {
      "__op": "Add",
      "objects": val
    }
  }
  addUnique(key, val) {
    if (!isString(key) || !isArray(val)) {
      throw new error(415)
    }
    this.addArray[key] = {
      "__op": "AddUnique",
      "objects": val
    }
  }
  save(parma = {}) {
    if (!isObject(parma)) {
      throw new error(415)
    }
    const saveData = Object.assign(parma, this.setData, this.addArray)
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'post', saveData).then((results) => {
        this.addArray = {}
        this.setData = {}
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  equalTo(key, operator, val) {
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
  containedIn(key,val){
    if(!isString(key) || !isArray(val)){
      throw new error(415)
    }
    return queryData.call(this,key,"$in",val)
  }
  notContainedIn(key,val){
    if(!isString(key) || !isArray(val)){
      throw new error(415)
    }
    return queryData.call(this,key,"$nin",val)
  }
  exists(key){
    if(!isString(key)){
      throw new error(415)
    }
    return queryData.call(this,key,"$exists",true)
  }
  doesNotExist(key){
    if(!isString(key)){
      throw new error(415)
    }
    return queryData.call(this,key,"$exists",false)
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
    if (parma > 1000) {
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
  include(...key) {
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.includes = key.join(',')
  }
  select(...key) {
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.keys = key.join(',')
  }
  find() {
    let oneData = {};
    let parmas = {};
    let items = {};
    if (Object.keys(this.queryData).length) {
      parmas.where = this.queryData
    }
    if (Object.keys(this.andData).length) {
      parmas.where = Object.assign(this.andData, this.queryData)
    }
    if (Object.keys(this.orData).length) {
      parmas.where = Object.assign(this.orData, this.queryData)
    }
    parmas.limit = this.limitNum
    parmas.skip = this.skipNum
    parmas.include = this.includes
    parmas.order = this.orders
    parmas.keys = this.keys

    for (const key in parmas) {
      if (parmas.hasOwnProperty(key) && parmas[key] == null || parmas[key] == 0) {
        delete parmas[key]
      }
    }
    const set = (key, val) => {
      if (!key || !val) {
        throw new error(415)
      }
      oneData[key] = val
    }

    const batch = (method = 'updata') => {
      console.log(method)
      if (items.length < 1) {
        throw new error(416)
      }

      let id,
        k,
        v,
        p,
        m = 'put'
      let key = new Array()
      items.map(item => {

        id = `/${item.objectId}`
        if (id == '/undefined') {
          id = ''
          m = 'post'
        }

        p = {
          "method": m,
          "path": `${this.tableName}${id}`,
          "body": oneData
        };
        if (method == 'delete') {
          p = {
            "method": 'DELETE',
            "path": `${this.tableName}${id}`
          };
        }
        key.push(p)
        return item
      });

      let params = {
        "requests": key
      };
      // 批量操作
      const saveData = Object.assign(oneData)
      return request(`/1/batch`, 'POST', params)
    }

    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', parmas).then(({results}) => {
        this.init()
        Object.defineProperty(results, "set", {value: set})
        Object.defineProperty(results, "saveAll", {value: () => {
          return batch()
        }})
        Object.defineProperty(results, "destroyAll", {value: () => {
          return batch('delete')
        }})
        items = results
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })

    const fetchAll = () => {
      // 批量获取
      const saveData = Object.assign(unsetData, oneData, incrementData, addArray)
      return request(`${this.tableName}/${ObjectId}`, 'put', saveData)
    }
  }
  count() {
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', {count: 1}).then(({count}) => {
        resolve(count)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

function queryData(key,operator,val){
  let parent = {}
  let child = {}
  child[operator] = val
  parent[key] = child
  let newData = parent
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



module.exports = query
