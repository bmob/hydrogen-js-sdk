
const Bmob = require('./bmob')
const {generateCode, sendMessage,getAccessToken} = require('./common')


// 生成二维码
Bmob.generateCode = generateCode
// 发送模板消息
Bmob.sendMessage = sendMessage
// 获取微信token
Bmob.getAccessToken = getAccessToken

if(typeof global.Bmob==undefined){
   global.Bmob = Bmob
 }

 module.exports = Bmob
