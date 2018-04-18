// import axios from "axios";
const axios = require('../../node_modules/axios/index')
const Bmob = require('./bmob')
const utils = require('./utils')


const setHeader = (config) => {
  let header = {
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey,
  }
  return header
}

const request = (route, method = "get",data = null) => {
  return new Promise((resolve, reject) => {
      const header = setHeader(Bmob._config)
      console.log(data)
      axios({
        method: method,
        url: `${Bmob._config.host}/1/classes/${route}`,
        headers: header,
        data: data
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        console.log(error);
        reject(error);
      });
    }
  );


}

module.exports = request
