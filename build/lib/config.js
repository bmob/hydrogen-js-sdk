/*
 * @Author: your name
 * @Date: 2018-07-17 10:37:55
 * @LastEditTime: 2020-03-11 16:22:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /bmob-js-sdk-es6/src/lib/config.js
 */
let ROOT;
let VERSION;
try {
    ROOT = require('../../package.json');
    // 这行在小程序引入app.js报错
    VERSION = `v${ROOT.version}`;
}
catch (e) {
    // 这行在小程序引入app.js报错
    VERSION = `v1.0.0`;
}
const HOST = 'https://api.bmobcloud.com';
const SECRET_KEY = '';
const SECURITY_CODE = '';
const APPLICATION_MASTER_KEY = '';
// 1.h5 2.小程序 3.快应用 4.nodejs
const TYPE = 3;
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
    secretKey: SECRET_KEY,
    securityCode: SECURITY_CODE,
    applicationMasterKey: APPLICATION_MASTER_KEY,
    parameters: PARAMETERS,
    version: VERSION,
    serverVersion: 10,
    deBug: false,
    type: TYPE
};
