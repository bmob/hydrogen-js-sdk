const request = require("./request");
const Bmob = require("./bmob");
const Error = require("./error");
const { isObject, isString } = require("./dataType");

// --------------小程序SDK-------------------

/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.GENERATECODE;
  return request(route, "post", data);
};

/**
 * 生成小程序二维码
 * @return {Object}
 */
const mediaCheckAsync = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.MEDIACHECKASYNC;
  return request(route, "post", data);
};

/**
 * 获取access_token
 * @return {Object}
 */
const getAccessToken = () => {
  let route = Bmob._config.parameters.GETACCESSTOKEN;
  return request(route, "get");
};

/**
 * 获取微信小程序手机号
 * @param {Object} data 包含code参数的对象
 * @return {Object}
 */
const getPhoneNumber = (data) => {
  if (!isObject(data) || !data.code) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.GETPHONENUMBER;
  return request(route, "post", data);
};

/**
 * 小程序模版信息
 * @return {Object}
 */
const sendWeAppMessage = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.SENDWEAPPMESSAGE;
  return request(route, "post", data);
};

/**
 * 小程序图片上传
 * @return {Object}
 */

/**
 * 微信退款
 * @return {Object}
 */
const refund = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.REFUND;
  return request(route, "post", data);
};

/**
 * 微信主人通知(主人信息推送)
 * @return {Object}
 */
const notifyMsg = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.NOTIFYMSG;
  return request(route, "post", data);
};

// --------------RESTful SDK-------------------

/**
 * 密码重置
 * @return {Object}
 */

// Email 重置
const requestPasswordReset = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.REQUESTPASSWORDRESET;
  return request(route, "post", data);
};

// 短信验证码重置
const resetPasswordBySmsCode = (smsCode, data) => {
  if (!isString(smsCode)) {
    // 参数异常
    throw new Error(415);
  }
  let route = `${Bmob._config.parameters.RESETPASSWORDBYSMSCODE}/${smsCode}`;
  return request(route, "put", data);
};

// 提供旧密码方式安全修改用户密码
const updateUserPassword = (objectId, data) => {
  if (!isObject(data) || !isString(objectId)) {
    // 参数异常
    throw new Error(415);
  }
  let route = `${Bmob._config.parameters.UPDATEUSERPASSWORD}/${objectId}`;
  return request(route, "put", data);
};

// 检测小程序文本是否违法
const checkMsg = (content) => {
  if (!isString(content)) {
    // 参数异常
    throw new Error(415);
  }
  let route = `${Bmob._config.parameters.CHECK_MSG}`;
  const data = { content: content };
  return request(route, "post", data);
};

// 检测小程序文本是否违法
const checkMsg2 = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = `${Bmob._config.parameters.CHECK_MSG}`;
   
  return request(route, "post", data);
};

/**
 * 获取服务器时间
 * @return {Object}
 */

const timestamp = () => {
  let route = Bmob._config.parameters.TIMESTAMP;
  return request(route, "get");
};

/**
 * 推送消息
 * @return {Object}
 */
const push = (data) => {
  if (!isObject(data)) {
    // 参数异常
    throw new Error(415);
  }
  let route = Bmob._config.parameters.PUSH;
  return request(route, "post", data);
};

// ---------------云函数------------------------
/**
 * 云函数
 * @return {Object}
 */
const functions = (funName, data) => {
  // 如果运行的云函数不需要传入参数，注意，"{}"是不能缺的
  if (!data) {
    data = {};
  }
  if (!isString(funName)) {
    // 参数异常
    throw new Error(415);
  }
  const route = `${Bmob._config.parameters.FUNCTIONS}/${funName}`;
  return new Promise((resolve, reject) => {
    request(route, "post", data)
      .then(({ result }) => {
        try {
          resolve(JSON.parse(result));
        } catch (error) {
          resolve(result);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const geoPoint = ({ latitude, longitude }) => {
  const validate = (latitude, longitude) => {
    if (latitude < -90.0) {
      throw new Error(419);
    }
    if (latitude > 90.0) {
      throw new Error(419);
    }
    if (longitude < -180.0) {
      throw new Error(419);
    }
    if (longitude > 180.0) {
      throw new Error(419);
    }
    return { latitude, longitude };
  };
  validate(latitude, longitude);
  return {
    __type: "GeoPoint",
    latitude: latitude,
    longitude: longitude,
  };
};

module.exports = {
  generateCode,
  getAccessToken,
  sendWeAppMessage,
  refund,
  notifyMsg,
  functions,
  timestamp,
  requestPasswordReset,
  resetPasswordBySmsCode,
  updateUserPassword,
  geoPoint,
  checkMsg,
  checkMsg2,
  mediaCheckAsync,
  push,
  getPhoneNumber,
};
