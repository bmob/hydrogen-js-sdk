/*
 * @Author: magic
 * @Date: 2019-03-27 10:02:03
 * @LastEditTime: 2020-06-17 18:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmob-js-sdk-es6/src/lib/wxRequest.js
 */
let Bmob = require('./bmob')
let md5 = require('./utf8md5')
let sdkType = 'wechatApp'
if (typeof (tt) !== 'undefined') {
  sdkType = 'toutiao'
} else if (typeof (qq) !== 'undefined') {
  sdkType = 'qqApp'
}

const setHeader = (config, route, method, parma) => {
  const t = Math.round(new Date().getTime() / 1000)
  const rand = Bmob.utils.randomString()
  let body = (method === 'get' || method === 'delete') ? '' : JSON.stringify(parma)

  const sign = md5.utf8MD5(route + t + config.securityCode + rand + body + config.serverVersion)
  // const sign = md5.utf8MD5(route + t + config.securityCode + rand)
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': sdkType,
    'X-Bmob-Safe-Sign': sign,
    'X-Bmob-Safe-Timestamp': t,
    'X-Bmob-Noncestr-Key': rand,
    'X-Bmob-SDK-Version': config.serverVersion,
    'X-Bmob-Secret-Key': config.secretKey
  }
  if (config.applicationMasterKey) {
    header['X-Bmob-Master-Key'] = config.applicationMasterKey
  }
  return header
}

const request = (route, method = 'get', parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config, route, method, parma)

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



    var wxurl = Bmob._config.host + route
    if (undefined!=parma.where){
      if (method == 'get' && sdkType == 'toutiao') {
        parma.where =
          JSON.stringify(parma.where)
        const queryParams = new URLSearchParams(parma);
        wxurl += "?" + queryParams.toString()
        parma = {}
      }
    }

    wx.request({
      url: wxurl,
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