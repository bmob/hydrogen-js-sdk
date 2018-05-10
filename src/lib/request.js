// const Bmob = require('./bmob')
const utils = require('./utils')

let request
// //获取当前应用类型
const type = utils.getAppType()
// h5
if (type == 'h5') {
  request = require('./axiosRequest')
} else if (type == 'wx') {
  // 小程序
  request = require('./wxRequest')
} else if (type == 'hap') {
  //快应用功能
  request = require('./hapRequest')
}else if (type == 'nodejs') {
  //快应用功能
  request = require('./axiosRequest')
}

module.exports = request
