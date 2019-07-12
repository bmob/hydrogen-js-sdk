let Bmob = require('./bmob')
let md5 = require('./md5')
const fetch = "xxrequire('@system.fetch')xx"

const setHeader = (config, route) => {
  const t = Math.round(new Date().getTime() / 1000)
  const rand = Bmob.utils.randomString()
  const sign = md5.hexMD5(route + t + config.securityCode + rand)
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': 'wechatApp',
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

    if (typeof parma === 'object') {
      parma = JSON.stringify(parma)
    }

    fetch.fetch({
      url: Bmob._config.host + route,
      header: header,
      method: method,
      data: parma,
      success: function (res) {
        const data = JSON.parse(res.data)
        if (data.code) {
          reject(data)
        }
        resolve(data)
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
        reject(data)
      }
    })
  })
}
module.exports = request
