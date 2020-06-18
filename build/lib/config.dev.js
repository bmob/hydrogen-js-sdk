/*
 * @Author: your name
 * @Date: 2019-03-27 10:02:03
 * @LastEditTime: 2020-03-12 16:06:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmob-js-sdk-es6/src/lib/config.dev.js
 */
// const ROOT = require('../../package.json')
// const HOST = 'https://api.bmobcloud.com'
// const HOST = 'http://127.0.0.1:8080'
const HOST = 'https://apitest.bmob.cn';
// const HOST = 'http://apis.feipin-ge.com'
const APPLICATION_ID = '';
const APPLICATION_KEY = '';
// const VERSION = `v${ROOT.version}`
// 注意小程序开发时，这个地方一定记得写死
const VERSION = 1;
// 1.h5 2.小程序 3.快应用
const TYPE = 1;
const PARAMETERS = {
    GENERATECODE: '/1/wechatApp/qr/generatecode',
    GETACCESSTOKEN: '/1/wechatApp/getAccessToken',
    SENDWEAPPMESSAGE: '/1/wechatApp/SendWeAppMessage',
    NOTIFYMSG: '/1/wechatApp/notifyMsg',
    REFUND: '/1/pay/refund',
    REQUESTSMSCODE: '/1/requestSmsCode',
    VERIFYSMSCODE: '/1/verifySmsCode',
    FUNCTIONS: '/1/functions',
    REQUESTPASSWORDRESET: '/1/requestPasswordReset',
    RESETPASSWORDBYSMSCODE: '/1/resetPasswordBySmsCode',
    UPDATEUSERPASSWORD: '/1/updateUserPassword',
    PUSH: '/1/push',
    FILES: '/2/files',
    FILESCHECK: '/1/wechatApp/checkImg',
    DELFILES: '/2/cdnBatchDelete',
    TIMESTAMP: '/1/timestamp',
    LOGIN: '/1/login',
    REGISTER: '/1/users',
    REQUEST_EMAIL_VERIFY: '/1/requestEmailVerify',
    USERS: '/1/users',
    PAY: '/1/pay',
    WECHAT_APP: '/1/wechatApp/',
    BATCH: '/1/batch',
    CHECK_MSG: '/1/wechatApp/checkMsg',
    DECRYPTION: '/1/wechatApp/decryption',
    QUERY: '/1/classes' // 查询数据
};
module.exports = {
    host: HOST,
    applicationId: APPLICATION_ID,
    applicationKey: APPLICATION_KEY,
    parameters: PARAMETERS,
    version: VERSION,
    serverVersion: 10,
    deBug: false,
    type: TYPE
};
