
const Bmob = require('./bmob')

const query = require('./query')
const user = require('./user')
const file = require('./file')
const pay = require('./pay')
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
// APP推送
Bmob.push = push


Bmob.Pay = new pay()
Bmob.User =  new user()
Bmob.Query = parma => new query(parma)

Bmob.File = (name,object) => new file(name,object)
Bmob.request = require('./request') 

try {
  window.Bmob = Bmob
}
catch(err) {
    wx.Bmob = Bmob
}

 module.exports = Bmob
