const request = require('./request')
const {isObject, isString} = require('./dataType')
const query = class query {
  constructor(parma) {
    this.tableName = parma
    this.setData = {}
  }
  get(parma) {
    return new Promise((resolve, reject) => {
      request(`/1/classes/${this.tableName}/${parma}`).then(results => {
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
    return request(`/1/classes/${this.tableName}`, 'post', this.setData)
  }
  find() {
    return new Promise((resolve, reject) => {
      request(`/1/classes/${this.tableName}`).then(({results}) => {
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

module.exports = query
