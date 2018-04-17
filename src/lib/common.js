const request = require('./request')
/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data, options) => {
  //       var request = Bmob._request("wechatApp/qr/generatecode", null, null, 'POST', Bmob._encode(data, null, true));
console.log(request)
  const url ='http://cloud.bmob.cn/c8bed465c9e6a524/tse';
  // request.request.request(url)
  return request.request.request(url)
}

const sendMessage = (data, options) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));

  return 1
}

// 这是一个测试获取一条记录
const testGetData =()=>{
  // 这个url定义到config里面去
  const url ='http://api.bmobcloud.com/1/classes/test999/Fg2elllC';
  return request.request.request(url,null,null,'get')
}


module.exports = {generateCode,sendMessage,testGetData};
