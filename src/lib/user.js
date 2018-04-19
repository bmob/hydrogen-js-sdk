const request = require('./request')
const query = require('./query')
const Bmob = require('./bmob')
const {isObject, isString} = require('./dataType')

const user = class user extends query {
  constructor() {
    const tableName = '_User'
    // this.setData = {}
    super(tableName)
    // super.tableNmae
  }
  set(key, val = "") {
    if (isString(key)) {
      this.setData[key] = val;
    }
  }
  save(parma) {
    if (isObject(parma)) {
      this.setData = Object.assign({parma}, this.setData)
    }
    return request(`${this.tableName}`, 'post', this.setData)
  }

  login(username,password){
    if (!isString(username) || !isString(password)) {
        //异常
        console.log('error')
        return
    }
    this.setData = Object.assign({}, {username,password})
    let route = Bmob._config.parameters.LOGIN
    // return request(route, 'get',this.setData)
    return new Promise((resolve, reject) => {
      request(route, 'get',this.setData).then(results => {
        let oneData = {}
        console.log(results)
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }

}

module.exports = user