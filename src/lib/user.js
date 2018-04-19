const request = require('./request')
const query = require('./query')

const user = class user extends query {
  constructor() {
    // this.tableName = '_User'
    // this.setData = {}
    super()
    // super.tableNmae
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

}

module.exports = user