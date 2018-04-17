const utils = require('./utils')
const query = require('./query')

const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()

Bmob.initialize = (applicationId, applicationKey, masterKey) => {
  Bmob._config.applicationId = applicationId
  Bmob._config.applicationKey = applicationKey
}

Bmob.Query = obj => new query(obj)

module.exports = Bmob
