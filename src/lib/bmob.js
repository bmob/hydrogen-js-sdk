const utils = require('./utils')

const Bmob = global.Bmob || {}
Bmob.utils = utils
Bmob._config = utils.getConfig()
Bmob.initialize = (applicationId, applicationKey, masterKey) => {
  Bmob._config.applicationId = applicationId
  Bmob._config.applicationKey = applicationKey
  Bmob._config.applicationMasterKey = masterKey
}

module.exports = Bmob
