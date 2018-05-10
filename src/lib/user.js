const request = require('./request')
const storage = require('./storage')
const query = require('./query')
const Bmob = require('./bmob')
const error = require('./error')
const { isObject, isString, isNumber } = require('./dataType')

const user = class user extends query {
  constructor() {
    const tableName = '_User'
    super(tableName)
  }
  set(key, val = "") {
    if (isString(key)) {
      this.setData[key] = val;
    }
  }
  requestEmailVerify(email) {
    if (!isString(email)) {
      //异常
      throw new error(415)
    }

    this.setData = Object.assign({}, { email })
    console.log(this.setData)
    let route = Bmob._config.parameters.REQUEST_EMAIL_VERIFY
    return request(route, 'post', this.setData)
  }
  register(parma) {
    if (!isObject(parma)) {
      //异常
      throw new error(415)
    }
    this.setData = Object.assign(this.setData, parma)
    console.log(this.setData)
    let route = Bmob._config.parameters.REGISTER
    return request(route, 'post', this.setData)
  }

  login(username, password) {

    if (!isString(username) || !isString(password)) {
      //异常
      throw new error(415)
    }
    this.setData = Object.assign({}, { username, password })
    let route = Bmob._config.parameters.LOGIN
    return new Promise((resolve, reject) => {
      request(route, 'get', this.setData).then(res => {
        storage.save('bmob', res);
        resolve(res)
      }).catch(err => {
        console.log('登陆失败')
        reject(err)
      })
    })
  }
  users() {
    let route = Bmob._config.parameters.USERS
    return request(route, 'get')
  }
  signOrLoginByMobilePhone(mobilePhoneNumber, smsCode) {
    // 手机号登陆
    if (!isNumber(mobilePhoneNumber) || !isNumber(smsCode)) {
      //异常
      throw new error(415)
    }
    this.setData = Object.assign({}, { mobilePhoneNumber, smsCode })
    let route = Bmob._config.parameters.LOGIN
    return request(route, 'get', this.setData)
  }
  requestOpenId(code) {
    let route = Bmob._config.parameters.WECHAT_APP
    return request(route + code, "POST", {});
  }
  linkWith(data) {
    // 第三方登陆
    let authData = { "authData": data }
    let route = Bmob._config.parameters.USERS
    return request(route, "POST", authData);
  }
  loginWithWeapp(code) {

    return new Promise((resolve, reject) => {
      this.requestOpenId(code).then(res => {
        const data = { "weapp": res }
        const result = this.linkWith(data)
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })

  }
  current() {
    const type = Bmob.utils.getAppType()

    if (Bmob.type != 'hap') {
      const data = storage.fetch('bmob')
      return typeof data == 'object' ? data : JSON.parse(data)
    } else {
      // 快应用功能
      return new Promise((resolve, reject) => {
        return storage.fetch('bmob').then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    }
  }
  upInfo(userInfo) {
    return new Promise((resolve, reject) => {

      var nickName = userInfo.nickName
      var avatarUrl = userInfo.avatarUrl

      var currentUser = this.current()
      if (!currentUser) {
        console.log('未获取到用户信息')
        reject('未获取到用户信息');
      }
      var openid = storage.fetch('openid')
      this.get(currentUser.objectId).then(res => {
        res.set('nickName', nickName)
        res.set('userPic', avatarUrl)
        res.set('openid', openid)
        res.save().then(result => {
          resolve(result);
        }).catch(err => {
          console.log(err)
          reject(err);
        })

      }).catch(err => {
        console.log(err)
        reject(err);
      })
    })
  }
  auth() {
    var that = this;
    return new Promise((resolve, reject) => {
      const login = () => {
        wx.login({
          success: res => {
            that.loginWithWeapp(res.code).then(
              user => {

                if (user.error) {
                  throw new error(415)
                  return
                }
                var openid = user.authData.weapp.openid
                storage.save('openid', openid)
                storage.save('bmob', user)
                //保存用户其他信息到用户表
                resolve(user);
              },
              function (err) {
                reject(err);
              }
            )
          }
        })
      }
      wx.checkSession({
        success: function () {
          console.log('用户在线中')
          resolve('用户在线中');
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