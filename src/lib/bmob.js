const utils = require('./utils')
const query = require('./query')
const user = require('./user')

const Bmob = global.Bmob || {}
Bmob._test=1
Bmob._config = utils.getConfig()

Bmob.initialize = (applicationId, applicationKey, masterKey) => {
  Bmob._config.applicationId = applicationId
  Bmob._config.applicationKey = applicationKey
}

Bmob.User =  new user()
Bmob.Query = parma => new query(parma)


module.exports = Bmob
