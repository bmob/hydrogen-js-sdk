const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const { isObject, isString } = require('./dataType')

/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data, options) => {
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
const getAccessToken = (data, options) => {
  let route = Bmob._config.parameters.GETACCESSTOKEN
  return request(route,'get')
}

/**
 * 小程序模版信息
 * @return {Object}
 */
const sendWeAppMessage = (data, options) => {
    if (!isObject(data)) {
      //参数异常
      throw new error(415)
    }
    let route = Bmob._config.parameters.SENDWEAPPMESSAGE
    return request(route,'post',data)
}

const sendMessage = (data, options) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));
  return 1
}

/**
 * 小程序图片上传
 * @return {Object}
 */

 /**
 * 退款
 * @return {Object}
 */
const refund = (data, options) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.REFUND
  return request(route,'post',data)
}

 /**
 * 微信主人通知
 * @return {Object}
 */
const notifyMsg = (data, options) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.NOTIFYMSG 
  return request(route,'post',data)
}


/**
 * 云函数
 * @return {Object}
 */
const functions = (funName, data, options) => {
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

module.exports = {generateCode,sendMessage,getAccessToken,sendWeAppMessage,refund,notifyMsg,functions};