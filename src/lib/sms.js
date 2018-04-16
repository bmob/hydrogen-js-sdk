// {

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
//       var request = Bmob._request("requestSmsCode", null, null, 'POST', Bmob._encode(data, null, true));
//       return request.then(function (resp) {
//           return Bmob._decode(null, resp);
//       })._thenRunCallbacks(options);

//   },

//   /**
// * 验证短信验证码
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */
//   verifySmsCode: function (mob, verifyCode, options) {
//       var data = {
//           "mobilePhoneNumber": mob
//       };
//       var request = Bmob._request("verifySmsCode/" + verifyCode, null, null, 'POST', Bmob._encode(data, null, true));
//       return request.then(function (resp) {
//           return Bmob._decode(null, resp);
//       })._thenRunCallbacks(options);
//   },

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
