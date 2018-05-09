const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const { isObject, isString, isArray } = require('./dataType')
const list = []

class pay {
  constructor() {
    // 初始化
  }
  weApp(price, product_name, body) {
    var openid = wx.getStorageSync('openid');
    if (!price || !product_name || !body || !openid) {
      throw new error(416)
    }
    //传参数金额，名称，描述,openid
    var data = { "order_price": price, "product_name": product_name, "body": body, "open_id": openid, "pay_type": 4 }

    let route = Bmob._config.parameters.PAY
    return request(route, 'post', data)
  }

}

module.exports = pay
