const utils = require('./utils')

let env 
let appType = utils.getAppType()
console.log('appType', appType)
if (appType === 'h5') {
  env = window
}
if (appType === 'nodejs') {
  env = global
}
if (appType === 'wx') {
  env = wx
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
