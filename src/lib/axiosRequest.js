import axios from "axios";
const request = (route, className, objectId, method, dataObject) => {
  return axios.get(route, { "id": 123 }).then(res => {
    console.log(res.data);
  });

}

// module.exports = {request}
export { request }