
const Bmob = require('./bmob')
const {
  generateCode,
  sendMessage,
  getAccessToken,
  sendWeAppMessage,
  refund,
  notifyMsg,
  functions,
  timestamp,
  requestPasswordReset,
  resetPasswordBySmsCode,
  updateUserPassword,
  push,
  pushfile,
  deletefile
} = require('./common')
const {requestSmsCode,verifySmsCode} = require('./sms')

// 生成二维码
Bmob.generateCode = generateCode
// 发送模板消息
Bmob.sendMessage = sendMessage
// 获取微信token
Bmob.getAccessToken = getAccessToken
// 小程序模版信息
Bmob.sendWeAppMessage = sendWeAppMessage
// 微信退款
Bmob.refund = refund
// 微信主人通知
Bmob.notifyMsg = notifyMsg
//请求短信验证码
Bmob.requestSmsCode = requestSmsCode
// 验证短信验证码
Bmob.verifySmsCode = verifySmsCode
// 云函数
Bmob.functions = functions
// 获取服务器时间
Bmob.timestamp = timestamp
// 密码重置(Email)
Bmob.requestPasswordReset = requestPasswordReset
// 密码重置(短信)
Bmob.resetPasswordBySmsCode = resetPasswordBySmsCode
// 密码重置(登录状态下更改密码)
Bmob.updateUserPassword = updateUserPassword
// 上传文件
Bmob.pushfile = pushfile
// 删除文件
Bmob.deletefile = deletefile
// APP推送
Bmob.push = push
if(typeof global.Bmob==undefined){
   global.Bmob = Bmob
 }

 module.exports = Bmob
