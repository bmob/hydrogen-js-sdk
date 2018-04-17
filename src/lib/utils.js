const Bmob = require('./bmob')
let config
try {
  config = require('./config')
} catch (e) {
  config = require('./config.dev')
}

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
const getConfig = () => {
  return config
}

// 获取SDK类型
const getAppType = () => {
  Bmob._config = getConfig()
  let type;
  // h5
  if (Bmob._config.type == 1) {
    type = 'h5'
  } else if (Bmob._config.type == 2) {
    // 小程序
    type = 'wx'
  } else if (Bmob._config.type == 3) {
    //快应用功能
    type = 'hap'
  } else {
    // 默认H5
    type = 'h5'
  }
  return type
}

module.exports = { getConfig, getAppType }
