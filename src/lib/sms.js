const request = require('./request')
const Bmob = require('./bmob')

//   /**
// * 请求发送短信内容
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise} 
// */
//   requestSms: function (data, options) {
//       var request = Bmob._request("requestSms", null, null, 'POST', Bmob._encode(data, null, true));
//       return request.then(function (resp) {
//           return Bmob._decode(null, resp);
//       })._thenRunCallbacks(options);

//   },

//   /**
// * 请求短信验证码
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */
//   requestSmsCode: function (data, options) {
    const requestSmsCode = (data, options) => {
        let route = Bmob._config.parameters.REQUESTSMSCODE
        return request(route,'post',data)
    }
//   /**
// * 验证短信验证码
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */
    const verifySmsCode = (data, options) => {
        let route = `${Bmob._config.parameters.VERIFYSMSCODE}/${data}`
        return request(route,'post')
    }
//   /**
// * 查询短信状态
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */
//   querySms: function (smsId, options) {
//       var request = Bmob._request("querySms/" + smsId, null, null, 'GET', null);
//       return request.then(function (resp) {
//           return Bmob._decode(null, resp);
//       })._thenRunCallbacks(options);
//   }
// }
module.exports = {requestSmsCode,verifySmsCode};