const ROOT = require('../../package.json')
const HOST = 'https://api.bmobcloud.com'
const APPLICATION_ID = ''
const APPLICATION_KEY = ''
// 这行在小程序引入app.js报错
const VERSION = `v${ROOT.version}`
// 1.h5 2.小程序 3.快应用 4.nodejs
const TYPE = 3

const PARAMETERS = {
  GENERATECODE:'/1/wechatApp/qr/generatecode',// 生成二维码
  GETACCESSTOKEN: '/1/wechatApp/getAccessToken',// 获取access_token
  SENDWEAPPMESSAGE: '/1/wechatApp/SendWeAppMessage',// 小程序模版消息
  NOTIFYMSG: '/1/wechatApp/notifyMsg', // 微信主人通知
  REFUND: '/1/pay/refund', // 微信退款
  REQUESTSMSCODE: '/1/requestSmsCode',// 请求短信验证码
  VERIFYSMSCODE: '/1/verifySmsCode', // 验证短信验证码
  FUNCTIONS: '/1/functions', // 云函数
  REQUESTPASSWORDRESET: '/1/requestPasswordReset', // 重置密码(email)
  RESETPASSWORDBYSMSCODE: '/1/resetPasswordBySmsCode',// 重置密码(短信)
  UPDATEUSERPASSWORD: '/1/updateUserPassword',// 重置密码(登录状态下旧密码换新密码)
  PUSH: '/1/push', //APP推送
  FILES: '/2/files', // 单个文件上传/删除
  DELFILES: '/2/cdnBatchDelete', // 批量删除
  TIMESTAMP: '/1/timestamp', // 获取服务器时间
  LOGIN:'/1/login',//登陆
  REGISTER:'/1/users',//注册
  REQUEST_EMAIL_VERIFY:'/1/requestEmailVerify',//注册
  USERS: '/1/users',// 查询用户
  PAY: '/1/pay',// 支付
  WECHAT_APP: '/1/wechatApp/',// 获取openid
  BATCH: '/1/batch',// 获取openid
  QUERY: '/1/classes' // 查询数据
}
module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version:VERSION,
  type:TYPE
}
