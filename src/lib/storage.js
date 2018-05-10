// const Bmob = require('./bmob')
const utils = require('./utils')

let storage
// //获取当前应用类型
const type = utils.getAppType()
// h5
if (type == 'h5') {
  storage = require('./webstorage')
} else if (type == 'wx') {
  // 小程序
  storage = require('./wxstorage')
} else if (type == 'hap') {
  storage = require('./hapStorage')
  //快应用功能
}else if (type == 'nodejs') {
  //快应用功能
  storage = require('./nodestorage')
}

module.exports = storage
