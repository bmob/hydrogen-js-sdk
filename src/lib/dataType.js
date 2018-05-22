const isObject = targe => Object.prototype.toString.call(targe) === '[object Object]'
const isNumber = targe => Object.prototype.toString.call(targe) === '[object Number]'
const isString = targe => Object.prototype.toString.call(targe) === '[object String]'
const isUndefined = targe => Object.prototype.toString.call(targe) === '[object Undefined]'
const isBoolean = targe => Object.prototype.toString.call(targe) === '[object Boolean]'
const isArray = targe => Object.prototype.toString.call(targe) === '[object Array]'
const isFunction = targe => Object.prototype.toString.call(targe) === '[object Function]'

module.exports = {
  isObject,
  isNumber,
  isString,
  isUndefined,
  isBoolean,
  isArray,
  isFunction
}
