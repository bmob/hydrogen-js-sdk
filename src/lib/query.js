let Bmob = require('./bmob')
const request = require('./request')
const {isObject, isString, isNumber, isUndefined, isArray} = require('./dataType')
const error = require('./error')
const query = class query {
  constructor(parmas) {
    this.tableName = `${Bmob._config.parameters.QUERY}/${parmas}`
    this.className = parmas
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
    this.queryReilation = {}
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
      if (!isString(key) || isUndefined(val)) {
        throw new error(415)
      }
      const {filename,cdn,url} = val
      if(!isUndefined(filename) && !isUndefined(cdn) && !isUndefined(url)){
        oneData[key] = {
          "__type": "File",
          "group": cdn,
          "filename": filename,
          "url": url
        }
      }else{
        oneData[key] = val
      }
    }
    const save = () => {
      const saveData = Object.assign(unsetData, oneData, incrementData, addArray)
      return request(`${this.tableName}/${ObjectId}`, 'put', saveData)
    }

    const associated = {}
    if(this.includes != ""){
      associated.include = this.includes
    }
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${ObjectId}`,'get',associated).then(results => {
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
  set(key,val) {
    if (!isString(key) || isUndefined(val)) {
      throw new error(415)
    }
    const {filename,cdn,url} = val
    if(!isUndefined(filename) && !isUndefined(cdn) && !isUndefined(url)){
      this.setData[key] = {
        "__type": "File",
        "group": cdn,
        "filename": filename,
        "url": url
      }
    }else{
      this.setData[key] = val
    }
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
  save(parmas = {}) {
    if (!isObject(parmas)) {
      throw new error(415)
    }

    let method = this.setData.id ? 'PUT' : 'POST';
    let objectId = this.setData.id ? this.setData.id : ''
    const saveData = Object.assign(parmas, this.setData, this.addArray)
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${objectId}`, method, saveData).then((results) => {
        this.addArray = {}
        this.setData = {}
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  saveAll(items) {
    if (!isArray(items)) {
      throw new error(415)
    }
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
        "body": item.setData
      }
      key.push(p)
      return item
    })

    let params = {
      "requests": key
    }
    let route = Bmob._config.parameters.BATCH
    // 批量操作
    return request(route, 'POST', params)

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
  limit(parmas) {
    if (!isNumber(parmas)) {
      throw new error(415)
    }
    if (parmas > 1000) {
      parmas = 1000
    }
    this.limitNum = parmas
  }
  skip(parmas) {
    if (!isNumber(parmas)) {
      throw new error(415)
    }
    this.skipNum = parmas
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
  field(key,objectId){
    if(!isString(key) || !isString(objectId)){
      throw new error(415)
    }
    this.queryReilation.where = {
      "$relatedTo": {
        "object": {
          "__type": "Pointer",
          "className": this.className,
          "objectId": objectId
        },
        "key": key
      }
    }
  }
  relation(tableName){
    if(!isString(tableName)){
      throw new error(415)
    }
    if(tableName == '_User'){
      tableName = 'users'
    }
    return new Promise((resolve,reject) => {
      request(`/1/${tableName}`,'get',this.queryReilation).then(({results}) => {
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
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
      if (!key || isUndefined(val)) {
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
      let route = Bmob._config.parameters.BATCH
      return request(route, 'POST', params)
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
    const parmas = {}
    if (Object.keys(this.queryData).length) {
      parmas.where = this.queryData
    }
    if (Object.keys(this.andData).length) {
      parmas.where = Object.assign(this.andData, this.queryData)
    }
    if (Object.keys(this.orData).length) {
      parmas.where = Object.assign(this.orData, this.queryData)
    }
    parmas.count = 1
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', parmas).then(({count}) => {
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
