// import axios from "axios";
const axios = require('../../node_modules/axios/index')
const Bmob = require('./bmob')
const utils = require('./utils')

const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    'X-Bmob-SDK-Type': 'hybrid',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey
  }
  return header
}

const request = (route, method = "get", parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)

    const server = axios.create({
      baseURL: Bmob._config.host,
      headers: header,
      validateStatus: (status) => {
        return status < 500; // 状态码在大于或等于500时才会 reject
      }
    })
    // server.interceptors.response.use(response => {
    //   switch (response.data.code) {
    //     case 0:
    //       return response.data;
    //       break;
    //     case 100:
    //       break;
    //   }
    //   return response
    // }, error => {
    //   return Promise.reject(error);
    // });
    const serverData = {
      url: route,
      method: method
    }

    if (serverData.method == 'get') {
      serverData.params = parma
    } else {
      serverData.data = parma
    }

    server(serverData).then(({data}) => {
      if (data.code) {
        reject(data);
      }
      resolve(data);
    }).catch(error => {
      reject(error);
    });

  });

}

module.exports = request
