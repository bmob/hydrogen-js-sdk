let Bmob = require('./bmob')
const utils = require('./utils')
const fetch = "xxrequire('@system.fetch')xx"

const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    // 'X-Bmob-SDK-Type': 'hybrid',
    'X-Bmob-SDK-Type': 'wechatApp',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey
  }
  return header
}

const request = (route, method = "get", parma = {}) => {
  console.log("request")
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)

    if (undefined == Bmob.User) {
      Bmob = require('./bmob')
    }
    var current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
    }
    // wx.request({
    //   url: Bmob._config.host + route, //仅为示例，并非真实的接口地址
    //   method: method,
    //   data: parma,
    //   header: header,
    //   success: res => {
    //     resolve(res.data);
    //   },
    //   fail: err => {
    //     console.log(err)
    //   }
    // })

    fetch.fetch({
      url: Bmob._config.host + route,
      header: header,
      method: method,
      data: parma,
      success: function (res) {
        resolve(JSON.parse(res.data));
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
        reject(data);
      }
    })
  })
}

module.exports = request