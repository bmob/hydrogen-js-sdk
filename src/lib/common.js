const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const { isObject, isString } = require('./dataType')

// --------------小程序SDK-------------------

/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.GENERATECODE
  return request(route,'post',data)
}

/**
 * 获取access_token
 * @return {Object}
 */
const getAccessToken = (data) => {
  let route = Bmob._config.parameters.GETACCESSTOKEN
  return request(route,'get')
}

/**
 * 小程序模版信息
 * @return {Object}
 */
const sendWeAppMessage = (data) => {
    if (!isObject(data)) {
      //参数异常
      throw new error(415)
    }
    let route = Bmob._config.parameters.SENDWEAPPMESSAGE
    return request(route,'post',data)
}

const sendMessage = (data) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));
  return 1
}

/**
 * 小程序图片上传
 * @return {Object}
 */

 /**
 * 微信退款
 * @return {Object}
 */
const refund = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.REFUND
  return request(route,'post',data)
}

 /**
 * 微信主人通知(主人信息推送)
 * @return {Object}
 */
const notifyMsg = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.NOTIFYMSG
  return request(route,'post',data)
}


// --------------RESTful SDK-------------------


 /**
 * 密码重置
 * @return {Object}
 */

//Email 重置
const requestPasswordReset = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.REQUESTPASSWORDRESET
  return request(route,'post',data)
}


// 短信验证码重置
const resetPasswordBySmsCode = (smsCode,data) => {
  if (!isString(smsCode)) {
    //参数异常
    throw new error(415)
  }
  let route = `${Bmob._config.parameters.RESETPASSWORDBYSMSCODE}/${smsCode}`
  return request(route,'put',data)
}

// 提供旧密码方式安全修改用户密码
const updateUserPassword = (objectId,data) => {
  if (!isObject(data) || !isString(objectId)) {
    //参数异常
    throw new error(415)
  }
  let route = `${Bmob._config.parameters.UPDATEUSERPASSWORD}/${objectId}`
  return request(route,'put',data)
}

 /**
 * 获取服务器时间
 * @return {Object}
 */

 const timestamp = () => {
   let route = Bmob._config.parameters.TIMESTAMP
   return request(route,'get')
 }

 /**
 * 推送消息
 * @return {Object}
 */
const push = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.PUSH
  return request(route,'post',data)
}


// ---------------云函数------------------------
/**
 * 云函数
 * @return {Object}
 */
const functions = (funName, data) => {
  // 如果运行的云函数不需要传入参数，注意，"{}"是不能缺的
  if (!data) {
    data = {}
  }
  if (!isString(funName)) {
    //参数异常
    throw new error(415)
  }
  let route = `${Bmob._config.parameters.FUNCTIONS}/${funName}`
  return request(route,'post',data)
}

module.exports = {
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
};
