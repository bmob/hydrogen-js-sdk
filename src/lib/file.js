const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const {isObject, isString, isArray} = require('./dataType')
const list = []

class file {
  constructor(name, parma) {
    if(name && parma){
      if (!isString(name)) {
        throw new error(415)
      }
      list.push({route: `${Bmob._config.parameters.FILES}/${name}`, data: parma})
    }
  }
  save() {
    if(!list.length){
      throw new error(417)
    }
    return new Promise((resolve, reject) => {
      const data = []
      for (let item of list) {
        request(item.route, 'post', item.data).then(({url}) => {
          data.push(url)
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
  destroy(parma){
    if(isString(parma)){
      return request(`${Bmob._config.parameters.FILES}/upyun/${parma.split('.com/')[1]}`,'delete')
    }else if(isArray(parma)){
      const data = []
      parma.map(item => {
        data.push(item.split('.com/')[1])
      })
      return request(Bmob._config.parameters.DELFILES,'post',{"upyun":data})
    }else{
      throw new error(415)
    }
  }
}

module.exports = file
