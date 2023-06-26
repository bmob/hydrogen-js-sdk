/*
 * @Author: your name
 * @Date: 2019-03-27 10:02:03
 * @LastEditTime: 2022-06-24 15:08:38
 * @LastEditors: magic
 * @Description: In User Settings Edit
 * @FilePath: /hydrogen-js-sdk/src/lib/config.dev.js
 */
// const ROOT = require('../../package.json')
// const HOST = "https://api.bmobcloud.com";
// const HOST = 'http://127.0.0.1:8080'
// const HOST = "https://apitest.bmob.cn";
const HOST = 'http://website-restful.bmobapp.com'
const APPLICATION_ID = "";
const APPLICATION_KEY = "";
// const VERSION = `v${ROOT.version}`
// 注意小程序开发时，这个地方一定记得写死
const VERSION = 1;
// 1.h5 2.小程序 3.快应用
const TYPE = 1;

const PARAMETERS = {
  GENERATECODE: "/1/wechatApp/qr/generatecode", // 生成二维码
  GETACCESSTOKEN: "/1/wechatApp/getAccessToken", // 获取access_token
  SENDWEAPPMESSAGE: "/1/wechatApp/SendWeAppMessage", // 小程序模版消息
  NOTIFYMSG: "/1/wechatApp/notifyMsg", // 微信主人通知
  REFUND: "/1/pay/refund", // 微信退款
  REQUESTSMSCODE: "/1/requestSmsCode", // 请求短信验证码
  VERIFYSMSCODE: "/1/verifySmsCode", // 验证短信验证码
  Ai: "/1/ai/", // 验证短信验证码
  FUNCTIONS: "/1/functions", // 云函数
  REQUESTPASSWORDRESET: "/1/requestPasswordReset", // 重置密码(email)
  RESETPASSWORDBYSMSCODE: "/1/resetPasswordBySmsCode", // 重置密码(短信)
  UPDATEUSERPASSWORD: "/1/updateUserPassword", // 重置密码(登录状态下旧密码换新密码)
  PUSH: "/1/push", // APP推送
  FILES: "/2/files", // 单个文件上传/删除
  FILESCHECK: "/1/wechatApp/checkImg", // 单个文件上传/删除
  DELFILES: "/2/cdnBatchDelete", // 批量删除
  TIMESTAMP: "/1/timestamp", // 获取服务器时间
  LOGIN: "/1/login", // 登陆
  REGISTER: "/1/users", // 注册
  REQUEST_EMAIL_VERIFY: "/1/requestEmailVerify", // 注册
  USERS: "/1/users", // 查询用户
  USERSV1: "/1/usersv1", // 查询用户
  PAY: "/1/pay", // 支付
  WECHAT_APP: "/1/wechatAppv1/", // 获取openid
  BATCH: "/1/batch", // 获取openid
  CHECK_MSG: "/1/wechatApp/checkMsg", // 检测文本内容
  DECRYPTION: "/1/wechatApp/decryptionv1", // 检测文本内容
  MEDIACHECKASYNC: "/1/wechatApp/asyncCheckWechatMedia", // 检测文本内容
  QUERY: "/1/classes", // 查询数据
};

module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version: VERSION,
  serverVersion: 10,
  deBug: false,
  type: TYPE,
};
