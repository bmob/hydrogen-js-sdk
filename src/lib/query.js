const request = require('./request')
const query = class query {
  constructor(parma){
    this.tableName = parma
  }
  get(parma){
    return request(`${this.tableName}/${parma}`)
  }
}

module.exports = query
