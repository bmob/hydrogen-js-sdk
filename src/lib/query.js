const request = require('./request')
const {isObject, isString} = require('./dataType')
const query = class query {
  constructor(parma) {
    this.tableName = `/1/classes/${parma}`
    this.setData = {}
  }
  get(parma) {
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${parma}`).then(results => {
        let oneData = {}
        Object.defineProperty(results, "set", {
          value: (key, val) => {
            if (isString(key)) {
              oneData[key] = val
            }
          },
          enumerable: false
        })
        Object.defineProperty(results, "save", {
          value: (key, val) => {
            request(`${this.tableName}/${parma}`, 'put', oneData)
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
    if (isString(key)) {
      this.setData[key] = val;
    }
  }
  save(parma) {
    if (isObject(parma)) {
      this.setData = Object.assign(parma, this.setData)
    }
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
