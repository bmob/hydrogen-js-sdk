const utils = require('./utils')
const {generateCode, sendMessage} = require('./common')

const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()

Bmob.initialize = (applicationId, applicationKey, masterKey) => {
  Bmob._config.applicationId = applicationId
  Bmob._config.applicationKey = applicationKey
}

// 生成二维码
Bmob.generateCode = generateCode
// 发送模板消息
Bmob.sendMessage = sendMessage

export default Bmob;
