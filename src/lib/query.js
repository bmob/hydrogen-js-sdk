const request = require('./request')
const {isObject,isString} = require('./dataType')
const query = class query {
  constructor(parma) {
    this.tableName = parma
    this.setData = {}
  }
  get(parma) {
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${parma}`).then(results => {
        console.log(results)
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  set(key,val = ""){
    if(isString(key)){
      this.setData[key] = val;
    }
  }
  save(){
    return request(`${this.tableName}`,'post',this.setData)
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
