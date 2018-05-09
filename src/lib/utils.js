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
  const config = getConfig()
  let type;
  // h5
  if (typeof wx != 'undefined') {
    // 小程序
    type = 'wx'
  } else if (typeof window != 'undefined') {
    type = 'h5'
  } else if (config.type == 3) {
    //快应用功能
    type = 'hap'
  }else if (process === global.process) {
    //快应用功能
    type = 'nodejs'
  } else {
    // 默认H5
    type = 'h5'
  }
  return type
}

module.exports = { getConfig, getAppType }
