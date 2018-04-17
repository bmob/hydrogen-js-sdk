import axios from "axios";

import utils from './utils'


const Bmob = global.Bmob || {}
Bmob._config = utils.getConfig()


// let header = {
//   'X-Bmob-Application-Id': Bmob._config.applicationId,
//   'X-Bmob-REST-API-Key': Bmob._config.applicationKey,
// }
// "39ee83f92ff3a195130596a4eaec5ddf","a1223fca87f5d229953817f5c2493446"
let header = {
  'X-Bmob-Application-Id': '39ee83f92ff3a195130596a4eaec5ddf',
  'X-Bmob-REST-API-Key': 'a1223fca87f5d229953817f5c2493446',
}
console.log(Bmob._config.applicationId, header)

const request = (route, className, objectId, method, dataObject) => {

  // return axios({
  //   method: method,
  //   url: route,
  //   headers: header,
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });

  return new Promise(
    /* executor */
    function (resolve, reject) {
      axios({
        method: method,
        url: route,
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
