const utils = require('./utils')

console.log(utils)
const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()

Bmob.initialize = (applicationId, applicationKey, masterKey)=>{
  Bmob._config.applicationId=applicationId
  Bmob._config.applicationKey=applicationKey
}

module.exports = Bmob
console.log(Bmob._config)