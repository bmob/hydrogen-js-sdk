const isObject = targe => Object.prototype.toString.call(targe) == "[object Object]" ? true : false
const isNumber = targe => Object.prototype.toString.call(targe) == "[object Number]" ? true : false
const isString = targe => Object.prototype.toString.call(targe) == "[object String]" ? true : false
const isUndefined = targe => Object.prototype.toString.call(targe) == "[object Undefined]" ? true : false
const isBoolean = targe => Object.prototype.toString.call(targe) == "[object Boolean]" ? true : false
const isArray = targe => Object.prototype.toString.call(targe) == "[object Array]" ? true : false
const isFunction = targe => Object.prototype.toString.call(targe) == "[object Function]" ? true : false

module.exports = {
  isObject,
  isNumber,
  isString,
  isUndefined,
  isBoolean,
  isArray,
  isFunction
}
