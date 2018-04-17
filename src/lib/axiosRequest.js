import axios from "axios";
const Bmob = require('./bmob')
const utils = require('./utils')


const setHeader = (config) => {
  let header = {
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey,
  }
  return header
}

const request = (route, className, objectId, method, dataObject) => {

  let url = Bmob._config.host+route
  return new Promise(

    /* executor */
    function (resolve, reject) {
      const header = setHeader(Bmob._config)
      axios({
        method: method,
        url: url,
        headers: header,
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      }).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        console.log(error);
        reject(error);
      });
    }
  );


}

// module.exports = {request}
export { request }
