const utils = require('./utils')

let env 
if (utils.getAppType() === 'h5') {
  env = window
}
if (utils.getAppType() === 'nodejs') {
  env = global
}
const Bmob = env.Bmob || {}
Bmob.utils = utils
Bmob._config = utils.getConfig()

Bmob.initialize = (secretKey, securityCode, masterKey) => {
  if (secretKey.length > 16) {
    console.warn(`Bmob初始化失败，2.0以上版本SDK请使用API安全码初始化，文档地址：https://bmob.github.io/hydrogen-js-sdk/#/?id=初始化`)
  }
  Bmob._config.secretKey = secretKey
  Bmob._config.securityCode = securityCode
  Bmob._config.applicationMasterKey = masterKey
}
Bmob.domain= (url) => {
  Bmob._config.host=url
}
// 开启调试
Bmob.debug = (d) => {
  Bmob._config.deBug = d
  Bmob._config = utils.getConfig(d)
}

module.exports = Bmob
