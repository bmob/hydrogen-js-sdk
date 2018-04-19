const ROOT = require('../../package.json')
const HOST = 'https://api.bmob.cn'
const APPLICATION_ID = ''
const APPLICATION_KEY = ''
const VERSION = `v${ROOT.version}`

// 1.h5 2.小程序 3.快应用
const TYPE = 1

const PARAMETERS = {
  GENERATECODE:'/1/wechatApp/qr/generatecode',// 生成二维码
  GETACCESSTOKEN: '/1/wechatApp/getAccessToken',// 获取access_token
  SENDWEAPPMESSAGE: '/1/wechatApp/SendWeAppMessage',// 小程序模版消息
  REQUESTSMSCODE: '/1/requestSmsCode',// 请求短信验证码
  VERIFYSMSCODE: '/1/verifySmsCode', // 验证短信验证码
  REFUND: '/1/pay/refund', // 退款
  LOGIN:'/1/login',//登陆
  REGISTER:'/1/users',//注册
  REQUEST_EMAIL_VERIFY:'/1/requestEmailVerify',//注册
}

module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version:VERSION,
  type:TYPE
}
