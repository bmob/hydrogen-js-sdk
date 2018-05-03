const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const { isObject, isString, isArray } = require('./dataType')
const list = []

class pay {
  constructor() {

  }
  weApp(price, product_name, body, openid) {
    if (!price || !product_name || !body || !openid){
      throw new error(416)
    }
      var data = { "order_price": price, "product_name": product_name, "body": body, "open_id": openid, "pay_type": 4 }
    let route = '/1/pay'
    return request(route, 'post', data)
  }

}

module.exports = pay
