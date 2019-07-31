/* eslint-disable */
const axios = require('./axios/lib/axios')
let Bmob = require('./bmob')
let md5 = require('./md5')

const setHeader = (config,route) => {
  let type = 'wechatApp'
  if (Bmob.type === 'nodejs') {
    type = 'cloudcode'
  }
  const t=Math.round(new Date().getTime()/1000);
  
  const rand =  Bmob.utils.randomString()
  const sign =md5.hexMD5(route+t+config.securityCode+rand)
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': type,
    'X-Bmob-Safe-Sign':sign,
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
    if (undefined === Bmob.User) {
      Bmob = require('./bmob')
    }

    const header = setHeader(Bmob._config,route)

    var current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
    }
    const server = axios.create({
      baseURL: Bmob._config.host,
      headers: header,
      validateStatus: (status) => {
        return status < 500 // 状态码在大于或等于500时才会 reject
      }
    })
    const serverData = {
      url: route,
      method: method
    }
    if (serverData.method === 'get') {
      serverData.params = parma
    } else {
      serverData.data = parma
    }
    if(Bmob._config.deBug===true){
      console.log('host:',Bmob._config.host)
      console.log('parma:',parma)
    }
    server(serverData).then(({ data }) => {
      if ((data.code && data.error) || data.error) {
        reject(data)
      }
      resolve(data)
    }).catch(err => {
      reject(err)
    })
  })
}

module.exports = request
