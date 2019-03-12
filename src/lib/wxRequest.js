let Bmob = require('./bmob')

let sdkType = 'wechatApp'
if (typeof (tt) !== 'undefined') {
  sdkType = 'toutiao'
}

const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': sdkType,
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey
  }
  if (config.applicationMasterKey) {
    header['X-Bmob-Master-Key'] = config.applicationMasterKey
  }
  return header
}

const request = (route, method = 'get', parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)

    if (undefined === Bmob.User) {
      Bmob = require('./bmob')
    }
    let current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
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
