// import axios from "axios";

const Bmob = require('./bmob')
const utils = require('./utils')

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
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)
    wx.request({
      url: Bmob._config.host+route, //仅为示例，并非真实的接口地址
      method:method,
      data: parma,
      header: header,
      success: res=> {
        console.log(res.data)
        resolve(res.data);
      },
      fail: err=> {
        console.log(err)
      }
    })
  })
}

module.exports = request