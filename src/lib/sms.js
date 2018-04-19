const request = require('./request')
const Bmob = require('./bmob')

//   /**
// * 请求短信验证码
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */

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

module.exports = {requestSmsCode,verifySmsCode};