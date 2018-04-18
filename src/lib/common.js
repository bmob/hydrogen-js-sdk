const request = require('./request')
const Bmob = require('./bmob')
/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data, options) => {
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
    let route = Bmob._config.parameters.SENDWEAPPMESSAGE
    return request(route,'post',data)
}

const sendMessage = (data, options) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));
  return 1
}

module.exports = {generateCode,sendMessage,getAccessToken,sendWeAppMessage};
