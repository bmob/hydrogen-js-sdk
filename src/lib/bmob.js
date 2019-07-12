const utils = require('./utils')

const Bmob = global.Bmob || {}
Bmob.utils = utils
Bmob._config = utils.getConfig()

Bmob.initialize = (secretKey, securityCode, masterKey) => {
  Bmob._config.secretKey = secretKey
  Bmob._config.securityCode = securityCode
  Bmob._config.applicationMasterKey = masterKey
}

// 开启调试
Bmob.debug = (d) => {
  Bmob._config.deBug = d
  Bmob._config = utils.getConfig(d)
}

module.exports = Bmob
