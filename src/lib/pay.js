const request = require('./request')
const Bmob = require('./bmob')
const Error = require('./error')

class pay {
  weApp (price, productName, body) {
    var openid = wx.getStorageSync('openid')
    if (!price || !productName || !body || !openid) {
      throw new Error(416)
    }
    // 传参数金额，名称，描述,openid
    var data = { 'order_price': price, 'product_name': productName, 'body': body, 'open_id': openid, 'pay_type': 4 }

    let route = Bmob._config.parameters.PAY
    return request(route, 'post', data)
  }
}

module.exports = pay
