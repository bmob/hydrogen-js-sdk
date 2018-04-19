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

/**
 * 小程序图片上传
 * @return {Object}
 */

 /**
 * 退款
 * @return {Object}
 */
const refund = (data, options) => {
  let route = Bmob._config.parameters.REFUND
  console.log(route)
  return request(route,'post',data)
}
module.exports = {generateCode,sendMessage,getAccessToken,sendWeAppMessage,refund};

// curl -X POST \
//   -H "X-Bmob-Application-Id: 2b649fbd9928d8ceab191b37112d86bd"          \
//   -H "X-Bmob-REST-API-Key: e7b62774b531365c15fc809dfbed67dc"        \
//   -H "Content-Type: application/json" \
//   -d '{
//         "order_no": "1cc2592e9903d9994be7f9a8c2cjsapi",
//         "refund_fee": 0.01,
//         "desc":"退款"
//       }' 