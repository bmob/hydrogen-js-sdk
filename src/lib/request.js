
import utils from './utils'

const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()

let request

// h5
if (Bmob._config.type == 1) {
  request = require('./axiosRequest')
} else if (Bmob._config.type == 2) {
  // 小程序

} else if (Bmob._config.type == 3) {
  //快应用功能
}else{
  request = require('./axiosRequest')
}

export { request }
// module.exports = {request}
