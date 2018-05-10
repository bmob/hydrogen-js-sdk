
const request = require('./request')
const Bmob = require('./bmob')
const error = require('./error')
const { isObject, isString } = require('./dataType')

//   /**
// * 请求短信验证码
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */

    const requestSmsCode = (data, options) => {
        if (!isObject(data)) {
            //参数异常
            throw new error(415)
        }
        let route = Bmob._config.parameters.REQUESTSMSCODE
        return request(route,'post',data)
    }
//   /**
// * 验证短信验证码
// * @param {Object} 相应的参数
// * @param {Object} Backbone-style options 对象。 options.success, 如果设置了，将会处理云端代码调用成功的情况。 options.error 如果设置了，将会处理云端代码调用失败的情况。 两个函数都是可选的。两个函数都只有一个参数。
// * @return {Bmob.Promise}
// */
    const verifySmsCode = (smscode, data, options) => {
        if (!isString(smscode)) {
            //参数异常
            throw new error(415)
        }
        if (!isObject(data)) {
            //参数异常
            throw new error(415)
        }
        let route = `${Bmob._config.parameters.VERIFYSMSCODE}/${smscode}`
        return request(route,'post', data)
    }

module.exports = {requestSmsCode,verifySmsCode};