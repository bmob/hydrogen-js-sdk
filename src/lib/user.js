const request = require('./request')
const storage = require('./storage')
const query = require('./query')
const Bmob = require('./bmob')
const Error = require('./error')
const { isObject, isString, isNumber } = require('./dataType')

const user = class user extends query {
  constructor () {
    const tableName = '_User'
    super(tableName)
  }
  set (key, val = '') {
    if (isString(key)) {
      this.setData[key] = val
    }
  }
  requestEmailVerify (email) {
    if (!isString(email)) {
      // 异常
      throw new Error(415)
    }

    this.setData = Object.assign({}, { email })
    console.log(this.setData)
    const route = Bmob._config.parameters.REQUEST_EMAIL_VERIFY
    return request(route, 'post', this.setData)
  }
  register (parma) {
    if (!isObject(parma)) {
      // 异常
      throw new Error(415)
    }
    this.setData = Object.assign({}, parma)
    const route = Bmob._config.parameters.REGISTER
    return request(route, 'post', this.setData)
  }

  login (username, password) {
    if (!isString(username) || !isString(password)) {
      // 异常
      throw new Error(415)
    }
    this.setData = Object.assign({}, { username, password })
    const route = Bmob._config.parameters.LOGIN
    return new Promise((resolve, reject) => {
      request(route, 'get', this.setData).then(res => {
        storage.save('bmob', res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  logout () {
    storage.clear()
  }
  users () {
    const route = Bmob._config.parameters.USERS
    return request(route, 'get')
  }
  decryption (e) {
    let self = this
    return new Promise((resolve, reject) => {
      const i = e.iv ? e.iv : e.detail.iv
      const d = e.encryptedData ? e.encryptedData : e.detail.encryptedData

      // 调用云函数解密
      const current = self.current()
      let s
      if (typeof (tt) !== 'undefined') {
        s = current.authData.toutiao.session_key 
      } else {
        s = current.authData.weapp.session_key
      }
      const data = {
        'sessionKey': s,
        'encryptedData': d,
        'iv': i
      }
      const route = Bmob._config.parameters.DECRYPTION
      request(route, 'POST', data)
        .then((res) => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  signOrLoginByMobilePhone (mobilePhoneNumber, smsCode) {
    // 手机号登陆
    if (!isNumber(mobilePhoneNumber) || !isNumber(smsCode)) {
      // 异常
      throw new Error(415)
    }
    this.setData = Object.assign({}, { mobilePhoneNumber, smsCode })
    const route = Bmob._config.parameters.LOGIN
    return request(route, 'get', this.setData)
  }
  requestOpenId (code, a = '') {
    const route = Bmob._config.parameters.WECHAT_APP
    return request(route + code, 'POST', {'anonymous_code': a})
  }
  linkWith (data) {
    // 第三方登陆
    let authData = { 'authData': data }
    const route = Bmob._config.parameters.USERS
    return request(route, 'POST', authData)
  }
  loginWithWeapp (code, a = '') {
    return new Promise((resolve, reject) => {
      this.requestOpenId(code, a).then(res => {
        let w = { 'weapp': res }
        if (typeof (tt) !== 'undefined') {
          delete res.error
          w = { 'toutiao': res }
        }
        const result = this.linkWith(w)
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  }

  upInfo (userInfo) {
    return new Promise((resolve, reject) => {
      let nickName = userInfo.nickName
      let avatarUrl = userInfo.avatarUrl

      let currentUser = this.current()
      if (!currentUser) {
        throw new Error(415)
      }
      let openid = storage.fetch('openid')
      this.get(currentUser.objectId).then(res => {
        res.set('nickName', nickName)
        res.set('userPic', avatarUrl)
        res.set('openid', openid)
        res.save().then(result => {
          resolve(result)
        }).catch(err => {
          console.log(err)
          reject(err)
        })
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  }
  auth () {
    let that = this
    return new Promise((resolve, reject) => {
      const login = () => {
        wx.login({
          success: res => {
            console.log(res)
            let anonymousCode = ''


            if (typeof (tt) !== 'undefined') {
              anonymousCode = res.anonymousCode
            }
            that.loginWithWeapp(res.code,anonymousCode).then(
              user => {
                if (user.error) {
                  throw new Error(415)
                }
                let openid
                if (typeof (tt) !== 'undefined') {
                  openid = user.authData.toutiao.openid
                } else {
                  openid = user.authData.weapp.openid
                }
                storage.save('openid', openid)
                storage.save('bmob', user)
                // 保存用户其他信息到用户表
                resolve(user)
              },
              function (err) {
                reject(err)
              }
            )
          }
        })
      }

      wx.checkSession({
        success: function () {
          let c = that.current()
          if (c === null) {
            const e = '登陆错误，请在Bmob后台填写小程序AppSecret。'
            reject(e)
          }
          resolve(c)
          login()
        },
        fail: () => {
          login()
        }
      })
    })
  }
}

module.exports = user
