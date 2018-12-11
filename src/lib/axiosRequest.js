/* eslint-disable */
const axios = require('./axios/lib/axios')
let Bmob = require('./bmob')

const setHeader = (config) => {
  let type = 'wechatApp'
  if (Bmob.type === 'nodejs') {
    type = 'cloudcode'
  }
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': type,
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
    if (undefined === Bmob.User) {
      Bmob = require('./bmob')
    }

    const header = setHeader(Bmob._config)

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
