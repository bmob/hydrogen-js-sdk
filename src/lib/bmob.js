const utils = require('./utils')
const {generateCode, sendMessage,testGetData} = require('./common')

console.log(utils)
const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()

Bmob.initialize = (applicationId, applicationKey, masterKey) => {
  Bmob._config.applicationId = applicationId
  Bmob._config.applicationKey = applicationKey
}

console.log(Bmob._config.applicationId)
// 生成二维码
Bmob.generateCode = generateCode
// 发送模板消息
Bmob.sendMessage = sendMessage

//测试请求函数
Bmob.testGetData = testGetData

export default Bmob;
