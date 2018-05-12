const Bmob = require('./bmob')
const pointer = require('./pointer')
const relation = require('./relation')
const query = require('./query')
const user = require('./user')
const file = require('./file')
const pay = require('./pay')
const socket = require('./socket')
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
  push
} = require('./common')
const {requestSmsCode, verifySmsCode} = require('./sms')

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
// 小程序支付
Bmob.Pay = new pay()
// 用户对象
Bmob.User = new user()
// 通讯
Bmob.Socket = socket
// 数据操作
Bmob.Query = parmas => new query(parmas)
// 文件操作
Bmob.File = (name, object) => new file(name, object)
// 网络请求
Bmob.request = require('./request')
// 平台判断
Bmob.type = Bmob.utils.getAppType()
// 数据关联(一对一)
Bmob.Pointer = parmas => new pointer(parmas)
// 数据关联(一对多，多对多)
Bmob.Relation = parmas => new relation(parmas)

if (Bmob.type == 'wx') {
  wx.Bmob = Bmob
} else if (Bmob.type == 'h5') {
  window.Bmob = Bmob
} else if (Bmob.type == 'hap') {
  // 快应用功能
} else if (Bmob.type == 'nodejs') {
  // nodejs
}

module.exports = Bmob
