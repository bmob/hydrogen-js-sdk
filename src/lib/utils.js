let config

config = require('./config')

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
const getConfig = (d = false) => {
  if (d === true) {
    config.host = require('./config.dev').host
  }
  return config
}
// 获取SDK类型
const getAppType = () => {
  const config = getConfig()
  let type
  // h5
  if (typeof wx !== 'undefined') {
    // 小程序
    type = 'wx'
  } else if (typeof window !== 'undefined') {
    type = 'h5'
  } else if (process === global.process) {
    // 快应用功能
    type = 'nodejs'
  } else if (config.type === 3) {
    // 快应用功能
    type = 'hap'
  } else {
    // 默认H5
    type = 'h5'
  }
  return type
}

// 生成16位随机字符串
const randomString = () => {
  let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let nums = ''
  for (let i = 0; i < 16; i++) {
    let id = parseInt(Math.random() * 61)
    nums += chars[id]
  }
  return nums
}
module.exports = { randomString, getConfig, getAppType }
