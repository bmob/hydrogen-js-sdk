import axios from "axios";
const utils = require('./utils')
// const Bmob = require('./bmob')

const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()


let header = {
  'X-Bmob-Application-Id': Bmob._config.applicationId,
  'X-Bmob-REST-API-Key': Bmob._config.applicationKey,
}
console.log(Bmob._config.applicationId,header)

const request = (route, className, objectId, method, dataObject) => {
  // return axios.get(route, { "id": 123 }).then(res => {
  //   console.log(res.data);
  // });
  return axios({
    method: method,
    url: route,
    headers:header,
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });

}

// module.exports = {request}
export { request }