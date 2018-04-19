// import axios from "axios";
const axios = require('../../node_modules/axios/index')
const Bmob = require('./bmob')
const utils = require('./utils')


const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey,
  }
  return header
}

const request = (route, method = "get", parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)
    axios({
      method: method,
      url: `${Bmob._config.host}${route}`,
      headers: header,
      params: parma,
      data: parma
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      // console.log(error);
      reject(error);
    });
  }
  );


}

module.exports = request
