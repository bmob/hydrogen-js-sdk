const Bmob = require('./bmob')
const Pointer = require('./pointer')
const Relation = require('./relation')
const Query = require('./query')
const User = require('./user')
const File = require('./file')
const Pay = require('./pay')
const Socket = require('./socket')

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
  geoPoint,
  checkMsg,
  push
} = require('./common')
const {requestSmsCode, verifySmsCode} = require('./sms')

// 生成二维码
Bmob.GeoPoint = geoPoint
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
// 检测文本
Bmob.checkMsg = checkMsg
// 微信主人通知
Bmob.notifyMsg = notifyMsg
// 请求短信验证码
Bmob.requestSmsCode = requestSmsCode
// 验证短信验证码
Bmob.verifySmsCode = verifySmsCode
// 云函数
Bmob.run = Bmob.functions = functions
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
Bmob.Pay = new Pay()
// 用户对象
Bmob.User = new User()
// 通讯
Bmob.Socket = () => new Socket()
// 数据操作
Bmob.Query = parmas => new Query(parmas)
// 文件操作
Bmob.File = (name, object) => new File(name, object)
// 网络请求
Bmob.request = require('./request')
// 平台判断
Bmob.type = Bmob.utils.getAppType()
// 数据关联(一对一)
Bmob.Pointer = parmas => new Pointer(parmas)
// 数据关联(一对多，多对多)
Bmob.Relation = parmas => new Relation(parmas)

if (Bmob.type === 'wx') {
  if (typeof (tt) !== 'undefined') {
    tt.Bmob = Bmob
  }
  wx.Bmob = Bmob
  
} else if (Bmob.type === 'h5') {
  window.Bmob = Bmob
} else if (Bmob.type === 'hap') {
  // 快应用功能
  global.Bmob = Bmob
} else if (Bmob.type === 'nodejs') {
  // nodejs
  global.Bmob = Bmob
}

module.exports = Bmob
