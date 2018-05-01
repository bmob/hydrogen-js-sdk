const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const {isObject, isString} = require('./dataType')
const list = []

class file {
  constructor(name, parma) {
    if (!isString(name)) {
      throw new error(415)
    }
    list.push({route: `${Bmob._config.parameters.FILES}/${name}`, data: parma})
  }
  save() {
    return new Promise((resolve, reject) => {
      const data = []
      for (let item of list) {
        request(item.route, 'post', item.data).then(res => {
          data.push(res)
          if (data.length == list.length) {
            resolve(data)
            reject(data)
          }
        }).catch(err => {
          data.push(err)
        })
      }
    })
  }
}

module.exports = file
