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

    // axios({
    //   method: method,
    //   url: `${Bmob._config.host}${route}`,
    //   params: parma,
    //   headers: header,
    //   data: parma,
    //   // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    //   transformResponse: [function (data) {
    //     // 对 data 进行任意转换处理
    //     const obj = JSON.parse(data)
    //     if (obj.code) {
    //       reject(data);
    //     }
    //     return data;
    //   }],

    // }).then(({ data }) => {
    //   resolve(data);
    // }).catch(error => {
    //   console.log(error);
    //   reject(error);
    // });



    const server = axios.create({
      baseURL: Bmob._config.host,
      // baseURL: 'http://192.168.0.66:8088',
      // timeout: 20000,
      headers: header
    })

    // 添加响应拦截器
    server.interceptors.response.use(response => {
      console.log('sss', response.data.code)
      switch (response.data.code) {
        case 0:
          return response.data;
          break;
        case 100:
          break;
      }
      return response.data
    }, error => {
      console.log("请求内容错误")
      return Promise.reject(error,999);
    });

    if (method == 'get') {
      server({
        url: route,
        method: method,
        params: parma,
      }).then(({ data }) => {
        resolve(data);
      }).catch(error => {
        console.log(error,999);
        reject(error);
      });
    } else {
      server({
        url: route,
        method: method,
        parma,

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
