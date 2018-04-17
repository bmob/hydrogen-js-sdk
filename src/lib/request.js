
import utils from './utils'


// Bmob._config = utils.getConfig()

let request
// //获取当前应用类型
const type = utils.getAppType()
// h5
if (type == 'h5') {
  request = require('./axiosRequest')
} else if (Bmob._config.type == 'wx') {
  // 小程序

} else if (Bmob._config.type == 'hap') {
  //快应用功能
}

export { request }
// module.exports = {request}
