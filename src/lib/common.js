const request = require('./request').request.request
const Bmob = require('./bmob')
/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data, options) => {
  let route = Bmob._config.parameters.GENERATECODE
  return request(route,null,null,'post')
}

const sendMessage = (data, options) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));
  return 1
}

// 这是一个测试获取一条记录
const testGetData =()=>{

  // 这个url定义到config里面去
  const route ='/1/classes/test999/Fg2elllC';
  return request(route,null,null,'get')
}


module.exports = {generateCode,sendMessage,testGetData};
