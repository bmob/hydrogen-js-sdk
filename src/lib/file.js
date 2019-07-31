const request = require('./request')
let Bmob = require('./bmob')
const Error = require('./error')
const utils = require('./utils')
let md5 = require('./md5')
const requestHap = "xxrequire('@system.request')xx"
const { isString, isArray } = require('./dataType')
let list = []

class file {
  constructor (name, parma) {
    if (name && parma) {
      if (!isString(name)) {
        throw new Error(415)
      }
      let ext = name.substring(name.lastIndexOf('.') + 1)
      list.push({ name: name, route: `${Bmob._config.parameters.FILES}/${Bmob._config.secretKey}.${ext}`, data: parma })
    }
  }
  save () {
    if (!list.length) {
      throw new Error(417)
    }
    let fileObj
    // //获取当前应用类型
    const type = utils.getAppType()

    // h5
    if (type === 'h5' || type === 'nodejs') {
      fileObj = new Promise((resolve, reject) => {
        const data = []
        for (let item of list) {
          request(item.route, 'post', item.data).then((url) => {
            data.push(url)
            if (data.length === list.length) {
              list = []
              resolve(data)
              reject(data)
            }
          }).catch(err => {
            data.push(err)
          })
        }
      })
    } else if (type === 'wx') {
      // 小程序
      fileObj = new Promise((resolve, reject) => {
        if (undefined === Bmob.User) {
          Bmob = require('./bmob')
        }

        let sessionToken = 'bmob'
        let current = Bmob.User.current()
        if (current) {
          sessionToken = current.sessionToken
        }

        const data = []

        const t = Math.round(new Date().getTime() / 1000)
        const rand = Bmob.utils.randomString()
        const route = list[0].route
        console.log('rand', rand, Bmob, route)

        const sign = md5.hexMD5(route + t + Bmob._config.securityCode + rand)
        const key = {
          'content-type': 'application/json',
          'X-Bmob-SDK-Type': 'wechatApp',
          'X-Bmob-Safe-Sign': sign,
          'X-Bmob-Safe-Timestamp': t,
          'X-Bmob-Noncestr-Key': rand,
          'X-Bmob-Session-Token': sessionToken,
          'X-Bmob-Secret-Key': Bmob._config.secretKey
        }
        const formData = Object.assign({ '_ContentType': 'text/plain', 'mime_type': 'text/plain', 'category': 'wechatApp', '_ClientVersion': 'js3.6.1', '_InstallationId': 'bmob' }, key)
        for (let item of list) {
          wx.uploadFile({
            url: Bmob._config.host + item.route, // 仅为示例，非真实的接口地址
            filePath: item.data,
            name: 'file',
            header: key,
            formData: formData,
            success: function (res) {
              let url = JSON.parse(res.data)
              data.push(url)
              if (data.length === list.length) {
                list = []
                resolve(data)
                reject(data)
              }
            },
            fail: function (err) {
              data.push(err)
            }
          })
        }
      })
    } else if (type === 'hap') {
      // 快应用功能
      fileObj = new Promise((resolve, reject) => {
        if (undefined === Bmob.User) {
          Bmob = require('./bmob')
        }
        let sessionToken = 'bmob'
        let current = Bmob.User.current()
        if (current) {
          sessionToken = current.sessionToken
        }

        const data = []
        const t = Math.round(new Date().getTime() / 1000)
        const rand = Bmob.utils.randomString()
        const route = list[0].route
        console.log('rand', rand, Bmob, route)

        const sign = md5.hexMD5(route + t + Bmob._config.securityCode + rand)
        const key = {
          'content-type': 'application/json',
          'X-Bmob-SDK-Type': 'wechatApp',
          'X-Bmob-Safe-Sign': sign,
          'X-Bmob-Safe-Timestamp': t,
          'X-Bmob-Noncestr-Key': rand,
          'X-Bmob-Session-Token': sessionToken,
          'X-Bmob-Secret-Key': Bmob._config.secretKey
        }
        const formData = Object.assign({ '_ContentType': 'text/plain', 'mime_type': 'text/plain', 'category': 'wechatApp', '_ClientVersion': 'js3.6.1', '_InstallationId': 'bmob' }, key)
        for (let item of list) {
          requestHap.upload({
            url: Bmob._config.host + item.route,
            files: [
              {
                uri: item.data,
                name: 'file',
                filename: item.name
              }
            ],
            header: {
              'X-Bmob-SDK-Type': 'wechatApp'
            },
            data: formData,
            success: function (res) {
              console.log('handling success' + data)
              let url = res.data
              data.push(url)
              if (data.length === list.length) {
                list = []
                resolve(data)
                reject(data)
              }
            },
            fail: function (data, code) {
              console.log(`handling fail, code = ${code}`)
            }
          })
        }
      })
    }
    return fileObj
  }
  destroy (parma) {
    if (isString(parma)) {
      return request(`${Bmob._config.parameters.FILES}/upyun/${parma.split('.com/')[1]}`, 'delete')
    } else if (isArray(parma)) {
      const data = []
      parma.map(item => {
        data.push(item.split('.com/')[1])
      })
      return request(Bmob._config.parameters.DELFILES, 'post', { 'upyun': data })
    } else {
      throw new Error(415)
    }
  }
}

module.exports = file
