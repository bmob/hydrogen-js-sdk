const request = require('./request')
const Bmob = require('./bmob')
const Error = require('./error')

class pay {
  weApp (price, productName, body) {
    let openid = wx.getStorageSync('openid')
    if (!price || !productName || !body || !openid) {
      throw new Error(416)
    }
    // 传参数金额，名称，描述,openid
    let data = { 'order_price': price, 'product_name': productName, 'body': body, 'open_id': openid, 'pay_type': 4 }

    let route = Bmob._config.parameters.PAY
    return request(route, 'post', data)
  }

  /**
   * 微信虚拟支付 - 创建虚拟支付订单
   * 对应后端接口：POST /1/wxvp/createOrder
   *
   * @param {Object} options
   * @param {number} [options.env=0]          环境：0-正式，1-沙箱，未传默认 0
   * @param {string} options.mode             支付类型：short_series_goods 或 short_series_coin（必填）
   * @param {number} options.goods_price      商品单价，单位：分，>0（必填）
   * @param {number} [options.buy_quantity=1] 购买数量
   * @param {string} [options.product_id]     道具 ID，mode=short_series_goods 时必填
   * @param {string} [options.currency_type]  货币类型，默认 CNY
   * @param {string} [options.attach]         透传字段
   * @param {string} [options.name]           商品名称，仅存入本地订单记录
   * @param {string} [options.biz_meta]       业务透传数据
   * @param {string} [options.openid]         用户 openid，默认从本地缓存读取
   * @param {string} [options.session_key]    用户 session_key，默认从本地缓存读取
   * @returns {Promise<Object>}               返回创建的虚拟支付订单信息
   */
  wxvpCreateOrder (options = {}) {
    const current = Bmob.User.current()
    // 优先 options（本地 wx.login + loginWithWeapp openid 未 link 时用）
    let sessionKey = options.session_key
    let openid = options.openid
    if (!sessionKey || !openid) {
      if (current && current.authData && current.authData.weapp) {
        sessionKey = sessionKey || current.authData.weapp.sk
        openid = openid || current.authData.weapp.openid
      }
    }

    console.log('sessionKey', sessionKey)
    console.log('openid', openid)
    console.log('wxvpCreateOrder options', options)

    if (!openid || !sessionKey) {
      throw new Error(416, '请用户登录后再进行支付.')
    }
  
    const env = options.env !== undefined && options.env !== null ? options.env : 0
    if (!options.mode) {
      throw new Error(416, 'mode is required.')
    }
    if (!options.goods_price) {
      throw new Error(416, 'goods_price is required.')
    }

    if (options.mode === 'short_series_goods' && !options.product_id) {
      throw new Error(416, 'product_id is required when mode is short_series_goods.')
    }

    const data = {
      openid,
      sk: sessionKey,
      env,
      mode: options.mode,
      goods_price: options.goods_price,
      buy_quantity: options.buy_quantity || 1,
      product_id: options.product_id,
      currency_type: options.currency_type,
      attach: options.attach,
      name: options.name,
      biz_meta: options.biz_meta
    }

    const route = Bmob._config.parameters.WXVP_CREATE_ORDER
    return request(route, 'post', data)
  }

  /**
   * 微信虚拟支付 - 查询用户代币余额（有价 + 赠送）
   * 对应后端接口：POST /1/wxvp/queryUserBalance
   * 支付前可调用以确认余额是否充足。
   *
   * @param {Object} [options]
   * @param {string} [options.openid]      用户 openid，默认从当前登录用户读取
   * @param {number} [options.env=0]       环境：0-正式，1-沙箱，未传默认 0
   * @param {string} [options.sk]          登录返回的 sk，默认与 wxvpCreateOrder 同源（session_key）
   * @param {string} [options.session_key] 同 sk，与 wxvpCreateOrder 一致
   * @returns {Promise<Object>} errcode/errmsg 及 balance、present_balance、sum_save 等字段
   */
  wxvpQueryUserBalance (options = {}) {
    const current = Bmob.User.current()
    let sk = options.sk || options.session_key
    let openid = options.openid
    if (!sk || !openid) {
      if (current && current.authData && current.authData.weapp) {
        sk = sk || current.authData.weapp.sk
        openid = openid || current.authData.weapp.openid
      }
    }
    if (!openid || !sk) {
      throw new Error(416, '请用户登录后再查询余额.')
    }
    const env = options.env !== undefined && options.env !== null ? options.env : 0
    const data = { openid, env, sk }
    const route = Bmob._config.parameters.WXVP_QUERY_USER_BALANCE
    return request(route, 'post', data)
  }

  /**
   * 微信虚拟支付 - 查询现金订单状态
   * 对应后端接口：POST /1/wxvp/queryOrder
   *
   * 用于查询现金订单（道具直购或代币充值）的当前状态及结算信息。
   *
   * @param {Object} options
   * @param {string} [options.openid]      用户 openid，默认从当前登录用户读取
   * @param {number} [options.env=0]       环境：0-正式，1-沙箱，未传默认 0
   * @param {string} [options.order_id]    业务订单号，与 wx_order_id 二选一
   * @param {string} [options.wx_order_id] 微信内部单号，与 order_id 二选一
   * @returns {Promise<Object>}            返回 errcode、errmsg 及 order 订单详情对象
   */
  wxvpQueryOrder (options = {}) {
    const current = Bmob.User.current()
    let openid = options.openid

    if (!openid && current && current.authData && current.authData.weapp) {
      openid = current.authData.weapp.openid
    }

    if (!openid) {
      throw new Error(416, '请用户登录后再查询订单.')
    }

    // env 默认为 0（正式环境），与其它 wxvp 接口保持一致
    const env = options.env !== undefined && options.env !== null ? options.env : 0

    if (!options.order_id && !options.wx_order_id) {
      throw new Error(416, 'order_id 与 wx_order_id 必须二选一传入.')
    }

    const data = {
      openid,
      env,
      order_id: options.order_id,
      wx_order_id: options.wx_order_id
    }

    const route = Bmob._config.parameters.WXVP_QUERY_ORDER
    return request(route, 'post', data)
  }

  /**
   * 微信虚拟支付 - 代币扣减支付
   * 对应后端接口：POST /1/wxvp/currencyPay
   *
   * 从用户代币账户中扣减指定数量的代币，用于代币支付场景。
   * 扣减成功后应立即为用户发货。
   *
   * @param {Object} options
   * @param {string} [options.openid]   用户 openid，默认从当前登录用户读取（必填）
   * @param {number} [options.env=0]    环境：0-正式，1-沙箱，未传默认 0（必填）
   * @param {string} [options.sk]       登录返回的 sk（必填，默认从当前登录用户 weapp.sk 读取）
   * @param {number} options.amount     支付的代币数量，>0（必填）
   * @param {string} options.order_id   业务订单号，全局唯一（必填）
   * @param {string} [options.payitem]  物品信息 JSON 字符串（选填）
   * @param {string} [options.remark]   备注信息（选填）
   * @returns {Promise<Object>}         errcode、errmsg、order_id、balance、used_present_amount
   */
  wxvpCurrencyPay (options = {}) {
    const current = Bmob.User.current()
    let sk = options.sk
    let openid = options.openid

    if ((!sk || !openid) && current && current.authData && current.authData.weapp) {
      sk = sk || current.authData.weapp.sk
      openid = openid || current.authData.weapp.openid
    }

    if (!openid || !sk) {
      throw new Error(416, '请用户登录后再进行代币支付.')
    }

    const env = options.env !== undefined && options.env !== null ? options.env : 0

    if (!options.amount || options.amount <= 0) {
      throw new Error(416, 'amount must be greater than 0.')
    }
    if (!options.order_id) {
      throw new Error(416, 'order_id is required.')
    }

    const data = {
      openid,
      env,
      sk,
      amount: options.amount,
      order_id: options.order_id,
      payitem: options.payitem,
      remark: options.remark
    }

    const route = Bmob._config.parameters.WXVP_CURRENCY_PAY
    return request(route, 'post', data)
  }

  /**
   * 微信虚拟支付 - 代币支付退款
   * 对应后端接口：POST /1/wxvp/cancelCurrencyPay
   *
   * 对 `currencyPay` 接口产生的代币支付订单发起退款（逆操作），将代币退还给用户。
   *
   * @param {Object} options
   * @param {string} [options.openid]       用户 openid，默认从当前登录用户读取（必填）
   * @param {number} [options.env=0]       环境：0-正式，1-沙箱，未传默认 0（必填）
   * @param {string} [options.sk]          登录返回的 sk（必填，默认从当前登录用户 weapp.sk 读取）
   * @param {string} options.pay_order_id  原 `currencyPay` 调用时传入的 `order_id`（必填）
   * @param {string} options.order_id      本次退款单的单号，需全局唯一（必填）
   * @param {number} options.amount        退款代币数量，须大于 0（必填）
   * @returns {Promise<Object>}            errcode、errmsg、order_id
   */
  wxvpCancelCurrencyPay (options = {}) {
    const current = Bmob.User.current()
    let sk = options.sk
    let openid = options.openid

    if ((!sk || !openid) && current && current.authData && current.authData.weapp) {
      sk = sk || current.authData.weapp.sk
      openid = openid || current.authData.weapp.openid
    }

    if (!openid || !sk) {
      throw new Error(416, '请用户登录后再进行代币退款.')
    }

    const env = options.env !== undefined && options.env !== null ? options.env : 0

    if (!options.pay_order_id) {
      throw new Error(416, 'pay_order_id is required.')
    }
    if (!options.order_id) {
      throw new Error(416, 'order_id is required.')
    }
    if (!options.amount || options.amount <= 0) {
      throw new Error(416, 'amount must be greater than 0.')
    }

    const data = {
      openid,
      env,
      sk,
      pay_order_id: options.pay_order_id,
      order_id: options.order_id,
      amount: options.amount
    }

    const route = Bmob._config.parameters.WXVP_CANCEL_CURRENCY_PAY
    return request(route, 'post', data)
  }
}

module.exports = pay
