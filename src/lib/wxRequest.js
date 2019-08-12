let Bmob = require('./bmob')
let md5 = require('./md5')
let sdkType = 'wechatApp'
if (typeof (tt) !== 'undefined') {
  sdkType = 'toutiao'
} else if (typeof (qq) !== 'undefined') {
  sdkType = 'qqApp'
}

const setHeader = (config, route) => {
  const t = Math.round(new Date().getTime() / 1000)
  const rand = Bmob.utils.randomString()
  const sign = md5.hexMD5(route + t + config.securityCode + rand)
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': sdkType,
    'X-Bmob-Safe-Sign': sign,
    'X-Bmob-Safe-Timestamp': t,
    'X-Bmob-Noncestr-Key': rand,
    'X-Bmob-Secret-Key': config.secretKey
  }
  if (config.applicationMasterKey) {
    header['X-Bmob-Master-Key'] = config.applicationMasterKey
  }
  return header
}

const request = (route, method = 'get', parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config, route)

    if (undefined === Bmob.User) {
      Bmob = require('./bmob')
    }
    let current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
    }
    if (Bmob._config.deBug === true) {
      console.log('host:', Bmob._config.host)
      console.log('parma:', parma)
    }
    wx.request({
      url: Bmob._config.host + route,
      method: method,
      data: parma,
      header: header,
      success: res => {
        if ((res.data.code && res.data.error) || res.data.error) {
          reject(res.data)
        }
        resolve(res.data)
      },
      fail: err => {
        console.log(err)
        reject(err)
      }
    })
  })
}

module.exports = request
