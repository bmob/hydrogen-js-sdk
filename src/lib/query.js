const request = require('./request')
const {isObject, isString} = require('./dataType')
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
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${parma}`).then(results => {
        let oneData = {}
        Object.defineProperty(results, "set", {
          value: (key, val) => {
            if (!isString(key) || !isString(val)) {
              throw new error(415)
            }
            oneData[key] = val
          },
          enumerable: false
        })
        Object.defineProperty(results, "save", {
          value: () => {
            return request(`${this.tableName}/${parma}`, 'put', oneData)
          },
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
