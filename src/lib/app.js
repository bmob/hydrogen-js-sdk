
const Bmob = require('./bmob')
const {generateCode, sendMessage,testGetData} = require('./common')


// 生成二维码
Bmob.generateCode = generateCode
// 发送模板消息
Bmob.sendMessage = sendMessage
//测试请求函数
Bmob.testGetData = testGetData

if(typeof global.Bmob==undefined){
   global.Bmob = Bmob
 }

 module.exports = Bmob
 