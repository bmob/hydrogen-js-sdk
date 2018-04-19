const ROOT = require('../../package.json')
const HOST = 'https://apitest.bmob.cn'
const APPLICATION_ID = ''
const APPLICATION_KEY = ''
const VERSION = `v${ROOT.version}`

// 1.h5 2.小程序 3.快应用
const TYPE = 1

const PARAMETERS = {
  GENERATECODE:'/1/wechatApp/qr/generatecode',// 生成二维码
  GETACCESSTOKEN: '/1/wechatApp/getAccessToken',// 获取access_token
  SENDWEAPPMESSAGE: '/1/wechatApp/SendWeAppMessage',// 小程序模版消息
  LOGIN:'/1/login',//登陆
}

module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version:VERSION,
  type:TYPE
}
