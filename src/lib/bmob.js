import utils from './utils'

const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()

Bmob.initialize = (applicationId, applicationKey, masterKey)=>{
  Bmob._config.applicationId=applicationId
  Bmob._config.applicationKey=applicationKey
}

// 生成二维码
Bmob.generateCode = require('./common').generateCode
// 发送模板消息
Bmob.sendMessage = require('./common').sendMessage

export default Bmob;
