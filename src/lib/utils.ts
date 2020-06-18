/*
 * @Author: your name
 * @Date: 2019-11-12 15:51:09
 * @LastEditTime: 2020-06-17 18:26:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmob-js-sdk-es6/src/lib/utils.js
 */
let config

config = require('./config')

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
const getConfig = (d = false) => {
  if (d === true) {
    config.host = require('./config.dev').host
  }
  return config
}

// 获取SDK类型
const getAppType = () => {
  const config = getConfig()
  let type
  // 小程序
  if (typeof wx !== 'undefined') {
    type = 'wx'
  }

  // html5
  if (typeof window !== 'undefined' && typeof type !== 'string') {
    type = 'h5'
  }

  // node
  if (typeof process !== 'undefined' && typeof type !== 'string') {
    type = 'nodejs'
  }

  // 快应用
  if (config.type === 3 && typeof type !== 'string') {
    type = 'hap'
  }

  return type
}

// 生成16位随机字符串
const randomString = () => {
  let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let nums = ''
  for (let i = 0; i < 16; i++) {
    let id = parseInt(Math.random() * 61)
    nums += chars[id]
  }
  return nums
}
module.exports = { randomString, getConfig, getAppType }
