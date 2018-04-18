const request = require('./request')
const Bmob = require('./bmob')
/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data, options) => {
  let route = Bmob._config.parameters.GENERATECODE
  return request(route,null,null,'post')
}

const sendMessage = (data, options) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));
  return 1
}

module.exports = {generateCode,sendMessage};
