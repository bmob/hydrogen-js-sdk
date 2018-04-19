const request = require('./request')
const {isObject, isString, isNumber} = require('./dataType')
const error = require('./error')
const query = class query {
  constructor(parma) {
    this.tableName = `/1/classes/${parma}`
    this.setData = {}
  }
  get(parma) {
    if (!isString(parma)) {
      throw new error(415)
    }

    let oneData = {}
    const incrementData = {}

    const increment = (key, val = 1) => {
      if (!isString(key) || !isNumber(val)) {
        throw new error(415)
      }
      incrementData[key] = {
        "__op": "Increment",
        "amount": val
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
      return request(`${this.tableName}/${parma}`, 'put', oneData)
    }

    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${parma}`).then(results => {
        Object.defineProperty(results, "set", {
          value: set,
          enumerable: false
        })
        Object.defineProperty(results, "save", {
          value: save,
          enumerable: false
        })
        Object.defineProperty(results, "increment", {
          value: increment,
          enumerable: false
        })
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
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

  find() {
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`).then(({results}) => {
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

module.exports = query
