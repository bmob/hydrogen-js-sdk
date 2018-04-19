const request = require('./request')
const query = require('./query')

const user = class user extends Query {
  constructor(parma) {
    this.tableName = '_User'
    this.setData = {}
    super()
  }

}