// import axios from "axios";
const axios = require('../../node_modules/axios/index')
const Bmob = require('./bmob')
const utils = require('./utils')


const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': 'hybrid',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey,
  }
  return header
}

const request = (route, method = "get", parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)



    const server = axios.create({
      baseURL: Bmob._config.host,
      // baseURL: 'http://192.168.0.66:8088',
      // timeout: 20000,
      headers: header,
      validateStatus: function (status) {
        return status < 500; // 状态码在大于或等于500时才会 reject
      },
    })

    // 添加响应拦截器
    server.interceptors.response.use(response => {
      switch (response.data.code) {
        case 0:
          return response.data;
          break;
        case 100:
          break;
      }
      return response
    }, error => {
      console.log("请求内容错误",error.message.config)
      return Promise.reject(error);
    });

    if (method == 'get') {
      server({
        
        url: route,
        method: method,
        params: parma,
      }).then(({ data }) => {
        if(data.code){
          reject(data);
        }
        resolve(data);
      }).catch(error => {
        console.log(error, 999);
        reject(error);
      });
    } else {
      server({
        url: route,
        method: method,
        data:parma,

      }).then(({ data }) => {
        resolve(data);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    }


  }
  );


}

module.exports = request
