let config
try {
  config = require('./config')
} catch (e) {
  config = require('./config.dev')
}

console.log(config)

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
const getConfig = () => {
  return config
}

export default {getConfig}
