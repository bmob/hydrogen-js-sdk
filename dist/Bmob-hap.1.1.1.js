(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Bmob"] = factory();
	else
		root["Bmob"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const utils = __webpack_require__(3)

const Bmob = global.Bmob || {}
Bmob.utils=utils
Bmob._config = utils.getConfig()
Bmob.initialize = (applicationId, applicationKey, masterKey) => {
  Bmob._config.applicationId = applicationId
  Bmob._config.applicationKey = applicationKey
}

module.exports = Bmob

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(11);
var isBuffer = __webpack_require__(22);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {let config
try {
  config = __webpack_require__(17)
} catch (e) {
  config = __webpack_require__(19)
}

/**
 * 获取 SDK 配置信息
 * @return {Object}
 */
const getConfig = () => {
  return config
}


// 获取SDK类型
const getAppType = () => {
  const config = getConfig()
  let type;
  // h5
  if (typeof wx != 'undefined') {
    // 小程序
    type = 'wx'
  } else if (typeof window != 'undefined') {
    type = 'h5'
  } else if (config.type == 3) {
    //快应用功能
    type = 'hap'
  }else if (process === global.process) {
    //快应用功能
    type = 'nodejs'
  } else {
    // 默认H5
    type = 'h5'
  }
  return type
}

module.exports = { getConfig, getAppType }

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(8)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// const Bmob = require('./bmob')
const utils = __webpack_require__(3)

let request
// //获取当前应用类型
const type = utils.getAppType()
// h5
if (type == 'h5') {
  request = __webpack_require__(10)
} else if (type == 'wx') {
  // 小程序
  request = __webpack_require__(39)
} else if (type == 'hap') {
  //快应用功能
  request = __webpack_require__(40)
}else if (type == 'nodejs') {
  //快应用功能
  request = __webpack_require__(10)
}

module.exports = request


/***/ }),
/* 5 */
/***/ (function(module, exports) {

class error {
  constructor(code, msg) {
    let error = new Error()

    error.code = code
    error.message = msg ? `Bmob.Error:{code:${code}, message:${msg}}` : `Bmob.Error:{code:${code}, message:${this.errorMsg(code)}}`

    return error
  }

  errorMsg(code) {
    switch (code) {
      case 415:
        // 参数类型不正确
        return 'incorrect parameter type.'
      case 416:
        // 参数为空
        return 'Parameter is null.'
      case 417:
        // 内容为空
        return 'There is no upload content.'
      case 418:
        // 内容为空
        return 'Log in failure.'
      default:
        return 'unknown error'
    }
  }
}

module.exports = error


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(24);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(12);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(12);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

let Bmob = __webpack_require__(0)
const request = __webpack_require__(4)
const {isObject, isString, isNumber, isUndefined, isArray} = __webpack_require__(2)
const error = __webpack_require__(5)
const query = class query {
  constructor(parma) {
    this.tableName = `${Bmob._config.parameters.QUERY}/${parma}`
    this.init()
    this.addArray = {}
    this.setData = {}
  }
  init() {
    this.queryData = {}
    this.andData = {}
    this.orData = {}
    this.limitNum = 100
    this.skipNum = 0
    this.includes = ""
    this.orders = null
    this.keys = null
  }
  get(ObjectId) {
    if (!isString(ObjectId)) {
      throw new error(415)
    }

    let oneData = {}
    const incrementData = {}
    const unsetData = {}
    const addArray = {}

    const add = (key, val) => {
      if (!isString(key) || !isArray(val)) {
        throw new error(415)
      }
      addArray[key] = {
        "__op": "Add",
        "objects": val
      }
    }
    const addUnique = (key, val) => {
      if (!isString(key) || !isArray(val)) {
        throw new error(415)
      }
      addArray[key] = {
        "__op": "AddUnique",
        "objects": val
      }
    }
    const remove = (key, val) => {
      if (!isString(key) || !isArray(val)) {
        throw new error(415)
      }
      addArray[key] = {
        "__op": "Remove",
        "objects": val
      }
    }
    const increment = (key, val = 1) => {
      if (!isString(key) || !isNumber(val)) {
        throw new error(415)
      }
      incrementData[key] = {
        "__op": "Increment",
        "amount": val
      }
    }
    const unset = (key) => {
      if (!isString(ObjectId)) {
        throw new error(415)
      }
      unsetData[key] = {
        "__op": "Delete"
      }
    }
    const set = (key, val) => {
      if (!isString(key) || isUndefined(val)) {
        throw new error(415)
      }
      if(isObject(val)){
        const {filename,cdn,url} = val
        if(!isUndefined(filename) && !isUndefined(cdn) && !isUndefined(url)){
          oneData[key] = {
            "__type": "File",
            "group": cdn,
            "filename": filename,
            "url": url
          }
        }
      }else{
        oneData[key] = val
      }
    }
    const save = () => {
      const saveData = Object.assign(unsetData, oneData, incrementData, addArray)
      return request(`${this.tableName}/${ObjectId}`, 'put', saveData)
    }
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${ObjectId}`).then(results => {
        Object.defineProperty(results, "set", {value: set})
        Object.defineProperty(results, "unset", {value: unset})
        Object.defineProperty(results, "save", {value: save})
        Object.defineProperty(results, "increment", {value: increment})
        Object.defineProperty(results, "add", {value: add})
        Object.defineProperty(results, "remove", {value: remove})
        Object.defineProperty(results, "addUnique", {value: addUnique})
        Object.defineProperty(results, "destroy", {
          value: () => this.destroy(ObjectId)
        })
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  destroy(ObjectId) {
    if (!isString(ObjectId)) {
      throw new error(415)
    }
    return request(`${this.tableName}/${ObjectId}`, 'delete')
  }
  set(key,val) {
    if (!isString(key) || isUndefined(val)) {
      throw new error(415)
    }
    if(isObject(val)){
      const {filename,cdn,url} = val
      if(!isUndefined(filename) && !isUndefined(cdn) && !isUndefined(url)){
        this.setData[key] = {
          "__type": "File",
          "group": cdn,
          "filename": filename,
          "url": url
        }
      }
    }else{
      this.setData[key] = val
    }
  }
  add(key, val) {
    if (!isString(key) || !isArray(val)) {
      throw new error(415)
    }
    this.addArray[key] = {
      "__op": "Add",
      "objects": val
    }
  }
  addUnique(key, val) {
    if (!isString(key) || !isArray(val)) {
      throw new error(415)
    }
    this.addArray[key] = {
      "__op": "AddUnique",
      "objects": val
    }
  }
  save(parma = {}) {
    if (!isObject(parma)) {
      throw new error(415)
    }

    let method = this.setData.id ? 'PUT' : 'POST';
    let objectId = this.setData.id ? this.setData.id : ''
    const saveData = Object.assign(parma, this.setData, this.addArray)
    return new Promise((resolve, reject) => {
      request(`${this.tableName}/${objectId}`, method, saveData).then((results) => {
        this.addArray = {}
        this.setData = {}
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })
  }
  saveAll(items) {
    if (!isArray(items)) {
      throw new error(415)
    }
    if (items.length < 1) {
      throw new error(416)
    }

    let id,
      k,
      v,
      p,
      m = 'put'
    let key = new Array()
    items.map(item => {

      id = `/${item.objectId}`
      if (id == '/undefined') {
        id = ''
        m = 'post'
      }

      p = {
        "method": m,
        "path": `${this.tableName}${id}`,
        "body": item.setData
      }
      key.push(p)
      return item
    })

    let params = {
      "requests": key
    }
    let route = Bmob._config.parameters.BATCH
    // 批量操作
    return request(route, 'POST', params)

  }
  equalTo(key, operator, val) {
    if (!isString(key)) {
      throw new error(415)
    }
    const judge = (key, operator, val) => {
      let data = {},
        value = null
      if (key == "createdAt" || key == "updateAt") {
        value = {
          "__type": "Date",
          "iso": val
        }
      } else {
        value = val
      }
      switch (operator) {
        case '==':
          data[key] = value
          break;
        case '!=':
          data[key] = {
            "$ne": value
          }
          break;
        case '<':
          data[key] = {
            "$lt": value
          }
          break;
        case '<=':
          data[key] = {
            "$lte": value
          }
          break;
        case '>':
          data[key] = {
            "$gt": value
          }
        case '>=':
          data[key] = {
            "$gte": value
          }
          break;
        default:
          throw new error(415)
      }
      return data
    }
    const newData = judge(key, operator, val)
    if (Object.keys(this.queryData).length) {
      if (!isUndefined(this.queryData.$and)) {
        this.queryData.$and.push(newData)
      } else {
        this.queryData = {
          "$and": [this.queryData, newData]
        }
      }
    } else {
      this.queryData = newData
    }

    return newData
  }
  containedIn(key,val){
    if(!isString(key) || !isArray(val)){
      throw new error(415)
    }
    return queryData.call(this,key,"$in",val)
  }
  notContainedIn(key,val){
    if(!isString(key) || !isArray(val)){
      throw new error(415)
    }
    return queryData.call(this,key,"$nin",val)
  }
  exists(key){
    if(!isString(key)){
      throw new error(415)
    }
    return queryData.call(this,key,"$exists",true)
  }
  doesNotExist(key){
    if(!isString(key)){
      throw new error(415)
    }
    return queryData.call(this,key,"$exists",false)
  }
  or(...querys) {
    querys.map((item, i) => {
      if (!isObject(item)) {
        throw new error(415)
      }
    })
    const queryData = this.queryData.$and
    if (!isUndefined(queryData)) {
      for (let i = 0; i < queryData.length; i++) {
        for (let k = 0; k < querys.length; k++) {
          if (JSON.stringify(queryData[i]) == JSON.stringify(querys[k])) {
            this.queryData.$and.splice(i, 1)
          }
        }
      }
    }
    this.orData = {
      "$or": querys
    }
  }
  and(...querys) {
    querys.map((item, i) => {
      if (!isObject(item)) {
        throw new error(415)
      }
    })
    this.andData = {
      "$and": querys
    }
  }
  limit(parma) {
    if (!isNumber(parma)) {
      throw new error(415)
    }
    if (parma > 1000) {
      parma = 1000
    }
    this.limitNum = parma
  }
  skip(parma) {
    if (!isNumber(parma)) {
      throw new error(415)
    }
    this.skipNum = parma
  }
  order(...key) {
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.orders = key.join(',')
  }
  include(...key) {
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.includes = key.join(',')
  }
  select(...key) {
    key.map(item => {
      if (!isString(item)) {
        throw new error(415)
      }
    })
    this.keys = key.join(',')
  }
  find() {
    let oneData = {};
    let parmas = {};
    let items = {};
    if (Object.keys(this.queryData).length) {
      parmas.where = this.queryData
    }
    if (Object.keys(this.andData).length) {
      parmas.where = Object.assign(this.andData, this.queryData)
    }
    if (Object.keys(this.orData).length) {
      parmas.where = Object.assign(this.orData, this.queryData)
    }
    parmas.limit = this.limitNum
    parmas.skip = this.skipNum
    parmas.include = this.includes
    parmas.order = this.orders
    parmas.keys = this.keys

    for (const key in parmas) {
      if (parmas.hasOwnProperty(key) && parmas[key] == null || parmas[key] == 0) {
        delete parmas[key]
      }
    }
    const set = (key, val) => {
      if (!key || isUndefined(val)) {
        throw new error(415)
      }
      oneData[key] = val
    }

    const batch = (method = 'updata') => {
      console.log(method)
      if (items.length < 1) {
        throw new error(416)
      }

      let id,
        k,
        v,
        p,
        m = 'put'
      let key = new Array()
      items.map(item => {

        id = `/${item.objectId}`
        if (id == '/undefined') {
          id = ''
          m = 'post'
        }

        p = {
          "method": m,
          "path": `${this.tableName}${id}`,
          "body": oneData
        };
        if (method == 'delete') {
          p = {
            "method": 'DELETE',
            "path": `${this.tableName}${id}`
          };
        }
        key.push(p)
        return item
      });

      let params = {
        "requests": key
      };
      // 批量操作
      const saveData = Object.assign(oneData)
      let route = Bmob._config.parameters.BATCH
      return request(route, 'POST', params)
    }
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', parmas).then(({results}) => {
        this.init()
        Object.defineProperty(results, "set", {value: set})
        Object.defineProperty(results, "saveAll", {value: () => {
          return batch()
        }})
        Object.defineProperty(results, "destroyAll", {value: () => {
          return batch('delete')
        }})
        items = results
        resolve(results)
      }).catch(err => {
        reject(err)
      })
    })

    const fetchAll = () => {
      // 批量获取
      const saveData = Object.assign(unsetData, oneData, incrementData, addArray)
      return request(`${this.tableName}/${ObjectId}`, 'put', saveData)
    }
  }
  count() {
    return new Promise((resolve, reject) => {
      request(`${this.tableName}`, 'get', {count: 1}).then(({count}) => {
        resolve(count)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

function queryData(key,operator,val){
  let parent = {}
  let child = {}
  child[operator] = val
  parent[key] = child
  let newData = parent
  if (Object.keys(this.queryData).length) {
    if (!isUndefined(this.queryData.$and)) {
      this.queryData.$and.push(newData)
    } else {
      this.queryData = {
        "$and": [this.queryData, newData]
      }
    }
  } else {
    this.queryData = newData
  }
  return newData
}



module.exports = query


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(20)
let Bmob = __webpack_require__(0)
const utils = __webpack_require__(3)

const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    // 'X-Bmob-SDK-Type': 'hybrid',
    'X-Bmob-SDK-Type': 'wechatApp',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey
  }
  return header
}

const request = (route, method = 'get', parma = {}) => {
  return new Promise((resolve, reject) => {
   

    if(undefined==Bmob.User){
      Bmob = __webpack_require__(0)
    }

    const header = setHeader(Bmob._config)

    var current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
    }
    const server = axios.create({
      baseURL: Bmob._config.host,
      headers: header,
      validateStatus: (status) => {
        return status < 500; // 状态码在大于或等于500时才会 reject
      }
    })
    // server.interceptors.response.use(response => {
    //   switch (response.data.code) {
    //     case 0:
    //       return response.data;
    //       break;
    //     case 100:
    //       break;
    //   }
    //   return response
    // }, error => {
    //   return Promise.reject(error);
    // });
    const serverData = {
      url: route,
      method: method
    }
    if (serverData.method == 'get') {
      serverData.params = parma
    } else {
      serverData.data = parma
    }
    server(serverData).then(({data}) => {
      if (data.code) {
        reject(data);
      }
      resolve(data);
    }).catch(error => {
      reject(error);
    });

  });

}

module.exports = request


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var settle = __webpack_require__(25);
var buildURL = __webpack_require__(27);
var parseHeaders = __webpack_require__(28);
var isURLSameOrigin = __webpack_require__(29);
var createError = __webpack_require__(13);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(30);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(31);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(26);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const Bmob = __webpack_require__(0)

const query = __webpack_require__(9)
const user = __webpack_require__(41)
const file = __webpack_require__(47)
const pay = __webpack_require__(48)
const socket = __webpack_require__(49)
const {
  generateCode,
  sendMessage,
  getAccessToken,
  sendWeAppMessage,
  refund,
  notifyMsg,
  functions,
  timestamp,
  requestPasswordReset,
  resetPasswordBySmsCode,
  updateUserPassword,
  push,
} = __webpack_require__(50)
const {requestSmsCode,verifySmsCode} = __webpack_require__(51)

// 生成二维码
Bmob.generateCode = generateCode
// 发送模板消息
Bmob.sendMessage = sendMessage
// 获取微信token
Bmob.getAccessToken = getAccessToken
// 小程序模版信息
Bmob.sendWeAppMessage = sendWeAppMessage
// 微信退款
Bmob.refund = refund
// 微信主人通知
Bmob.notifyMsg = notifyMsg
//请求短信验证码
Bmob.requestSmsCode = requestSmsCode
// 验证短信验证码
Bmob.verifySmsCode = verifySmsCode
// 云函数
Bmob.functions = functions
// 获取服务器时间
Bmob.timestamp = timestamp
// 密码重置(Email)
Bmob.requestPasswordReset = requestPasswordReset
// 密码重置(短信)
Bmob.resetPasswordBySmsCode = resetPasswordBySmsCode
// 密码重置(登录状态下更改密码)
Bmob.updateUserPassword = updateUserPassword
// APP推送
Bmob.push = push


Bmob.Pay = new pay()
Bmob.User =  new user()
Bmob.Socket =  socket
Bmob.Query = parma => new query(parma)

Bmob.File = (name,object) => new file(name,object)
Bmob.request = __webpack_require__(4) 

Bmob.type = Bmob.utils.getAppType()

if(Bmob.type=='wx'){
  wx.Bmob = Bmob
}else if(Bmob.type=='h5'){
  window.Bmob = Bmob
}else if(Bmob.type=='hap'){
// 快应用功能
}
else if(Bmob.type=='nodejs'){
// nodejs
}

 module.exports = Bmob


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const ROOT = __webpack_require__(18)
const HOST = 'http://api.bmobcloud.com'
const APPLICATION_ID = ''
const APPLICATION_KEY = ''
// 这行在小程序引入app.js报错
const VERSION = `v${ROOT.version}`
// 1.h5 2.小程序 3.快应用 4.nodejs
const TYPE = 3

const PARAMETERS = {
  GENERATECODE:'/1/wechatApp/qr/generatecode',// 生成二维码
  GETACCESSTOKEN: '/1/wechatApp/getAccessToken',// 获取access_token
  SENDWEAPPMESSAGE: '/1/wechatApp/SendWeAppMessage',// 小程序模版消息
  NOTIFYMSG: '/1/wechatApp/notifyMsg', // 微信主人通知
  REFUND: '/1/pay/refund', // 微信退款
  REQUESTSMSCODE: '/1/requestSmsCode',// 请求短信验证码
  VERIFYSMSCODE: '/1/verifySmsCode', // 验证短信验证码
  FUNCTIONS: '/1/functions', // 云函数
  REQUESTPASSWORDRESET: '/1/requestPasswordReset', // 重置密码(email)
  RESETPASSWORDBYSMSCODE: '/1/resetPasswordBySmsCode',// 重置密码(短信)
  UPDATEUSERPASSWORD: '/1/updateUserPassword',// 重置密码(登录状态下旧密码换新密码)
  PUSH: '/1/push', //APP推送
  FILES: '/2/files', // 单个文件上传/删除
  DELFILES: '/2/cdnBatchDelete', // 批量删除
  TIMESTAMP: '/1/timestamp', // 获取服务器时间
  LOGIN:'/1/login',//登陆
  REGISTER:'/1/users',//注册
  REQUEST_EMAIL_VERIFY:'/1/requestEmailVerify',//注册
  USERS: '/1/users',// 查询用户
  PAY: '/1/pay',// 支付
  WECHAT_APP: '/1/wechatApp/',// 获取openid
  BATCH: '/1/batch',// 获取openid
  QUERY: '/1/classes' // 查询数据
}
module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version:VERSION,
  type:TYPE
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {"name":"js-sdk","version":"1.1.1","description":"Bmob SDK","main":"./src/lib/app.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1","build":"webpack --config config/prod.env.js","watch":"webpack --watch --config config/prod.env.js","dev":"webpack-dev-server --config config/dev.env.js"},"repository":{"type":"git","url":"git+https://github.com/bmob/bmob-js-sdk-es6"},"author":"Bmob","license":"ISC","bugs":{"url":"https://github.com/bmob/bmob-js-sdk-es6/issues"},"homepage":"https://github.com/bmob/bmob-js-sdk-es6#readme","dependencies":{"axios":"^0.18.0","node.extend":"^2.0.0","webpack":"^3.10.0"},"devDependencies":{"clean-webpack-plugin":"^0.1.17","html-webpack-plugin":"^2.30.1","uglifyjs-webpack-plugin":"^1.1.6","webpack-dev-server":"^2.9.7"}}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// const ROOT = require('../../package.json')
const HOST = 'https://api.bmobcloud.com'
const APPLICATION_ID = ''
const APPLICATION_KEY = ''
// const VERSION = `v${ROOT.version}`
// 注意小程序开发时，这个地方一定记得写死
const VERSION = 1
// 1.h5 2.小程序 3.快应用
const TYPE = 1

const PARAMETERS = {
  GENERATECODE:'/1/wechatApp/qr/generatecode',// 生成二维码
  GETACCESSTOKEN: '/1/wechatApp/getAccessToken',// 获取access_token
  SENDWEAPPMESSAGE: '/1/wechatApp/SendWeAppMessage',// 小程序模版消息
  NOTIFYMSG: '/1/wechatApp/notifyMsg', // 微信主人通知
  REFUND: '/1/pay/refund', // 微信退款
  REQUESTSMSCODE: '/1/requestSmsCode',// 请求短信验证码
  VERIFYSMSCODE: '/1/verifySmsCode', // 验证短信验证码
  FUNCTIONS: '/1/functions', // 云函数
  REQUESTPASSWORDRESET: '/1/requestPasswordReset', // 重置密码(email)
  RESETPASSWORDBYSMSCODE: '/1/resetPasswordBySmsCode',// 重置密码(短信)
  UPDATEUSERPASSWORD: '/1/updateUserPassword',// 重置密码(登录状态下旧密码换新密码)
  PUSH: '/1/push', //APP推送
  FILES: '/2/files', // 单个文件上传/删除
  DELFILES: '/2/cdnBatchDelete', // 批量删除
  TIMESTAMP: '/1/timestamp', // 获取服务器时间
  LOGIN:'/1/login',//登陆
  REGISTER:'/1/users',//注册
  REQUEST_EMAIL_VERIFY:'/1/requestEmailVerify',//注册
  USERS: '/1/users',// 查询用户
  QUERY: '/1/classes' // 查询数据
}

module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version:VERSION,
  type:TYPE
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(11);
var Axios = __webpack_require__(23);
var defaults = __webpack_require__(7);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(15);
axios.CancelToken = __webpack_require__(37);
axios.isCancel = __webpack_require__(14);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(38);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(7);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(32);
var dispatchRequest = __webpack_require__(33);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(13);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(34);
var isCancel = __webpack_require__(14);
var defaults = __webpack_require__(7);
var isAbsoluteURL = __webpack_require__(35);
var combineURLs = __webpack_require__(36);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(15);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

let Bmob = __webpack_require__(0)
const utils = __webpack_require__(3)

const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    // 'X-Bmob-SDK-Type': 'hybrid',
    'X-Bmob-SDK-Type': 'wechatApp',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey
  }
  return header
}

const request = (route, method = "get", parma = {}) => {
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)

    if (undefined == Bmob.User) {
      Bmob = __webpack_require__(0)
    }
    var current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
    }
    wx.request({
      url: Bmob._config.host + route, //仅为示例，并非真实的接口地址
      method: method,
      data: parma,
      header: header,
      success: res => {
        resolve(res.data);
      },
      fail: err => {
        console.log(err)
      }
    })
  })
}

module.exports = request

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

let Bmob = __webpack_require__(0)
const utils = __webpack_require__(3)
const fetch = require('@system.fetch')

const setHeader = (config) => {
  let header = {
    'content-type': 'application/json',
    // 'X-Bmob-SDK-Type': 'hybrid',
    'X-Bmob-SDK-Type': 'wechatApp',
    'X-Bmob-Application-Id': config.applicationId,
    'X-Bmob-REST-API-Key': config.applicationKey
  }
  return header
}

const request = (route, method = "get", parma = {}) => {
  console.log("request")
  return new Promise((resolve, reject) => {
    const header = setHeader(Bmob._config)

    if (undefined == Bmob.User) {
      Bmob = __webpack_require__(0)
    }
    var current = Bmob.User.current()
    if (current) {
      header['X-Bmob-Session-Token'] = current.sessionToken
    }
    // wx.request({
    //   url: Bmob._config.host + route, //仅为示例，并非真实的接口地址
    //   method: method,
    //   data: parma,
    //   header: header,
    //   success: res => {
    //     resolve(res.data);
    //   },
    //   fail: err => {
    //     console.log(err)
    //   }
    // })

    fetch.fetch({
      url: Bmob._config.host + route,
      header: header,
      method: method,
      data: parma,
      success: function (res) {
        resolve(JSON.parse(res.data));
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
        reject(data);
      }
    })
  })
}

module.exports = request

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

const request = __webpack_require__(4)
const storage = __webpack_require__(42)
const query = __webpack_require__(9)
const Bmob = __webpack_require__(0)
const error = __webpack_require__(5)
const { isObject, isString, isNumber } = __webpack_require__(2)

const user = class user extends query {
  constructor() {
    const tableName = '_User'
    super(tableName)
  }
  set(key, val = "") {
    if (isString(key)) {
      this.setData[key] = val;
    }
  }
  requestEmailVerify(email) {
    if (!isString(email)) {
      //异常
      throw new error(415)
    }

    this.setData = Object.assign({}, { email })
    console.log(this.setData)
    let route = Bmob._config.parameters.REQUEST_EMAIL_VERIFY
    return request(route, 'post', this.setData)
  }
  register(parma) {
    if (!isObject(parma)) {
      //异常
      throw new error(415)
    }
    this.setData = Object.assign(this.setData, parma)
    console.log(this.setData)
    let route = Bmob._config.parameters.REGISTER
    return request(route, 'post', this.setData)
  }

  login(username, password) {

    if (!isString(username) || !isString(password)) {
      //异常
      throw new error(415)
    }
    this.setData = Object.assign({}, { username, password })
    let route = Bmob._config.parameters.LOGIN
    return new Promise((resolve, reject) => {
      request(route, 'get', this.setData).then(res => {
        storage.save('bmob', res);
        resolve(res)
      }).catch(err => {
        console.log('登陆失败')
        reject(err)
      })
    })
  }
  users() {
    let route = Bmob._config.parameters.USERS
    return request(route, 'get')
  }
  signOrLoginByMobilePhone(mobilePhoneNumber, smsCode) {
    // 手机号登陆
    if (!isNumber(mobilePhoneNumber) || !isNumber(smsCode)) {
      //异常
      throw new error(415)
    }
    this.setData = Object.assign({}, { mobilePhoneNumber, smsCode })
    let route = Bmob._config.parameters.LOGIN
    return request(route, 'get', this.setData)
  }
  requestOpenId(code) {
    let route = Bmob._config.parameters.WECHAT_APP
    return request(route + code, "POST", {});
  }
  linkWith(data) {
    // 第三方登陆
    let authData = { "authData": data }
    let route = Bmob._config.parameters.USERS
    return request(route, "POST", authData);
  }
  loginWithWeapp(code) {

    return new Promise((resolve, reject) => {
      this.requestOpenId(code).then(res => {
        const data = { "weapp": res }
        const result = this.linkWith(data)
        resolve(result);
      }).catch(err => {
        reject(err);
      })
    })

  }
  current() {
    const type = Bmob.utils.getAppType()

    if (Bmob.type != 'hap') {
      const data = storage.fetch('bmob')
      return typeof data == 'object' ? data : JSON.parse(data)
    } else {
      // 快应用功能
      return new Promise((resolve, reject) => {
        return storage.fetch('bmob').then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    }
  }
  upInfo(userInfo) {
    return new Promise((resolve, reject) => {

      var nickName = userInfo.nickName
      var avatarUrl = userInfo.avatarUrl

      var currentUser = this.current()
      if (!currentUser) {
        console.log('未获取到用户信息')
        reject('未获取到用户信息');
      }
      var openid = storage.fetch('openid')
      this.get(currentUser.objectId).then(res => {
        res.set('nickName', nickName)
        res.set('userPic', avatarUrl)
        res.set('openid', openid)
        res.save().then(result => {
          resolve(result);
        }).catch(err => {
          console.log(err)
          reject(err);
        })

      }).catch(err => {
        console.log(err)
        reject(err);
      })
    })
  }
  auth() {
    var that = this;
    return new Promise((resolve, reject) => {
      const login = () => {
        wx.login({
          success: res => {
            that.loginWithWeapp(res.code).then(
              user => {

                if (user.error) {
                  throw new error(415)
                  return
                }
                var openid = user.authData.weapp.openid
                storage.save('openid', openid)
                storage.save('bmob', user)
                //保存用户其他信息到用户表
                resolve(user);
              },
              function (err) {
                reject(err);
              }
            )
          }
        })
      }
      wx.checkSession({
        success: function () {
          console.log('用户在线中')
          resolve('用户在线中');
          login()
        },
        fail: () => {
          login()
        }
      })

    })

  }
}

module.exports = user

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// const Bmob = require('./bmob')
const utils = __webpack_require__(3)

let storage
// //获取当前应用类型
const type = utils.getAppType()
// h5
if (type == 'h5') {
  storage = __webpack_require__(43)
} else if (type == 'wx') {
  // 小程序
  storage = __webpack_require__(44)
} else if (type == 'hap') {
  storage = __webpack_require__(45)
  //快应用功能
}else if (type == 'nodejs') {
  //快应用功能
  storage = __webpack_require__(46)
}

module.exports = storage


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

const { isObject, isString, isNumber } = __webpack_require__(2)
const storage = {
  save(key, value) {
    if (!isString(key) || !value) {
      throw new error(415)
    }
    localStorage.setItem(key, JSON.stringify(value));
  },
  fetch(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    return JSON.parse(localStorage.getItem(key)) || null;
  },
  remove(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
};
module.exports = storage

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

const { isObject, isString, isNumber } = __webpack_require__(2)

const storage = {
  save(key, value) {
    if (!isString(key) || !value) {
      throw new error(415)
    }
    return wx.setStorageSync(key, JSON.stringify(value))
  },
  fetch(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    return wx.getStorageSync(key) || null
  },
  remove(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    return wx.removeStorageSync(key)
  },
  clear() {
    return wx.clearStorageSync()
  }
};
module.exports = storage

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

const { isObject, isString, isNumber } = __webpack_require__(2)
const storages = require('@system.storage')
const storage = {
  save(key, value) {
    if (!isString(key) || !value) {
      throw new error(415)
    }
    storages.set({
      key: key,
      value: JSON.stringify(value),
      success: function (data) {
        console.log('handling success')
        return data
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  },
  fetch(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    return new Promise((resolve, reject) => {
      return storages.get({
        key: key,
        success: function (data) {
          resolve(data || null);
        },
        fail: function (data, code) {
          console.log(`handling fail, code = ${code}`)
          reject(data);
        }
      })
    })
  },
  remove(key) {
    if (!isString(key)) {
      throw new error(415)
    }
    storages.delete({
      key: key,
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  },
  clear() {
    storages.clear({
      success: function (data) {
        console.log('handling success')
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })
  }
};
module.exports = storage

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

const { isObject, isString, isNumber } = __webpack_require__(2)
const storage = {
  save(key, value) {
  
  },
  fetch(key) {
    return null
  },
  remove(key) {

  },
  clear() {
  }
};
module.exports = storage

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

const request = __webpack_require__(4)
let Bmob = __webpack_require__(0)
const error = __webpack_require__(5)
const utils = __webpack_require__(3)
const requestHap = require('@system.request')
const { isObject, isString, isArray } = __webpack_require__(2)
let list = []

class file {
  constructor(name, parma) {
    if (name && parma) {
      if (!isString(name)) {
        throw new error(415)
      }
      list.push({ name:name,route: `${Bmob._config.parameters.FILES}/${name}`, data: parma })
    }
  }
  save() {
    if (!list.length) {
      throw new error(417)
    }
    let fileObj
    // //获取当前应用类型
    const type = utils.getAppType()
    // h5
    if (type == 'h5' || type == 'nodejs') {
      fileObj = new Promise((resolve, reject) => {
        const data = []
        for (let item of list) {
          request(item.route, 'post', item.data).then((url) => {
            data.push(url)
            if (data.length == list.length) {
              list = []
              resolve(data)
              reject(data)

            }
          }).catch(err => {
            data.push(err)
          })
        }
      })
    } else if (type == 'wx') {
      // 小程序
      fileObj = new Promise((resolve, reject) => {

        if (undefined == Bmob.User) {
          Bmob = __webpack_require__(0)
        }

        var current = Bmob.User.current()
        if (!current) {
          throw new error(418)
        }

        const data = []
        const key = { '_ApplicationId': Bmob._config.applicationId, '_RestKey': Bmob._config.applicationKey, '_SessionToken': current.sessionToken }
        const formData = Object.assign({ '_ContentType': 'text/plain', 'mime_type': 'text/plain', 'category': 'wechatApp', '_ClientVersion': 'js3.6.1', '_InstallationId': 'bmob' }, key)
        for (let item of list) {
          wx.uploadFile({
            url: Bmob._config.host + item.route, //仅为示例，非真实的接口地址
            filePath: item.data,
            name: 'file',
            header: {
              'X-Bmob-SDK-Type': 'wechatApp'
            },
            formData: formData,
            success: function (res) {
              var url = res.data
              data.push(url)
              if (data.length == list.length) {
                list = []
                resolve(data)
                reject(data)
              }
            },
            fail: function (err) {
              data.push(err)
            }
          })
        }
      })
    } else if (type == 'hap') {
      //快应用功能
      fileObj = new Promise((resolve, reject) => {

        if (undefined == Bmob.User) {
          Bmob = __webpack_require__(0)
        }

        var current = Bmob.User.current()
        if (!current) {
          throw new error(418)
        }

        const data = []
        const key = { '_ApplicationId': Bmob._config.applicationId, '_RestKey': Bmob._config.applicationKey, '_SessionToken': current.sessionToken }
        const formData = Object.assign({ '_ContentType': 'text/plain', 'mime_type': 'text/plain', 'category': 'wechatApp', '_ClientVersion': 'js3.6.1', '_InstallationId': 'bmob' }, key)
        for (let item of list) {
          requestHap.upload({
            url: Bmob._config.host + item.route,
            files: [
              {
                uri: item.data,
                name: 'file',
                filename:item.name
              }
            ],
            header: {
              'X-Bmob-SDK-Type': 'wechatApp'
            },
            data: formData,
            success: function (res) {
              console.log('handling success'+data)
              var url = res.data
              data.push(url)
              if (data.length == list.length) {
                list = []
                resolve(data)
                reject(data)
              }
            },
            fail: function (data, code) {
              console.log(`handling fail, code = ${code}`)
            }
          })
        }
      })
    }
    return fileObj
  }
  destroy(parma) {
    if (isString(parma)) {
      return request(`${Bmob._config.parameters.FILES}/upyun/${parma.split('.com/')[1]}`, 'delete')
    } else if (isArray(parma)) {
      const data = []
      parma.map(item => {
        data.push(item.split('.com/')[1])
      })
      return request(Bmob._config.parameters.DELFILES, 'post', { 'upyun': data })
    } else {
      throw new error(415)
    }
  }
}

module.exports = file


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

const request = __webpack_require__(4)
const Bmob = __webpack_require__(0)
const error = __webpack_require__(5)
const { isObject, isString, isArray } = __webpack_require__(2)
const list = []

class pay {
  constructor() {
    // 初始化
  }
  weApp(price, product_name, body) {
    var openid = wx.getStorageSync('openid');
    if (!price || !product_name || !body || !openid) {
      throw new error(416)
    }
    //传参数金额，名称，描述,openid
    var data = { "order_price": price, "product_name": product_name, "body": body, "open_id": openid, "pay_type": 4 }

    let route = Bmob._config.parameters.PAY
    return request(route, 'post', data)
  }

}

module.exports = pay


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

const Bmob = __webpack_require__(0)
const error = __webpack_require__(5)
const Emitter = {
  setup(target) {
    let listeners = []

    Object.assign(target, {
      on(type, handle) {
        if (typeof handle == 'function') {
          listeners.push([type, handle])
        }
      },
      emit(type, ...params) {
        listeners.forEach(
          ([listenType, handle]) => type == listenType && handle(...params)
        )
      },
      removeAllListeners() {
        listeners = []
      }
    })
  }
}

/**
 * 基于小程序 WebSocket 接口封装信道
 */
module.exports = class socket {
  constructor() {
    if (!Bmob._config.applicationId) {
      throw new error(415)
    }
    this.config = {
      host: 'wss.bmobcloud.com'
    }
    Emitter.setup((this.emitter = {}))
    this.applicationId = Bmob._config.applicationId
    this.initialize()
  }
  handshake() {
    function complete(data) {
      if (data instanceof Error) {
        self.connecting = false
        self.onError(data.message)
      } else {
        return data.split(':')[0]
      }
    }

    var url = 'https://' + this.config.host + '/socket.io/1/?t=' + new Date().getTime()
    var dataObject = {}
    var data = JSON.stringify(dataObject)

    var method = 'GET'

    return new Promise((resolve, reject) => {
      wx.request({
        method: method,
        url: url,
        data: data,
        header: {
          'content-type': 'text/plain'
        },
        success: function (res) {
          if (res.data && res.data.statusCode) {
            return resolve('request error', e)
          } else if (res.statusCode != 200) {
            return resolve('request error', e)
          } else {
            return resolve(complete(res.data))
          }
        },
        fail: function (e) {
          return resolve('request error', e)
        }
      })
    })
  }
  initialize() {
    this.handshake().then(protocol => {
      try {
        this.connect(
          `wss://${this.config.host}/socket.io/1/websocket/` + protocol,
          {}
        )
      } catch (connectError) {
        console.error({ connectError })
        throw connectError
      }
    })
    this.on('close', () => {
      console.log('连接已中断')
    })

    return new Promise((resolve, reject) => {
      this.on('server_pub', data => {
        switch (data.action) {
          case 'updateTable':
            this.onUpdateTable(data.tableName, data.data)
            break
          case 'updateRow':
            this.onUpdateRow(data.tableName, data.objectId, data.data)
            break
          case 'deleteTable':
            this.onDeleteTable(data.tableName, data.data)
            break
          case 'deleteRow':
            this.onDeleteRow(data.tableName, data.objectId, data.data)
            break
        }
      })

      //连接上socket.io服务器后触发的事件
      this.on('client_send_data', resp => {
        this.onInitListen()
      })
    })
  }

  onInitListen() { }

  connect(url, header) {
    // 小程序 wx.connectSocket() API header 参数无效，把会话信息附加在 URL 上
    const query = Object.keys(header)
      .map(key => `${key}=${encodeURIComponent(header[key])}`)
      .join('&')
    const seperator = url.indexOf('?') > -1 ? '&' : '?'
    url = [url, query].join(seperator)

    return new Promise((resolve, reject) => {
      wx.onSocketOpen(resolve)
      wx.onSocketError(reject)
      wx.onSocketMessage(packet => {
        try {
          let filter = function (str) {
            const { name, args } = JSON.parse(str)
            return { name, args }
          }
          let str = packet.data
          let startStr = str.slice(0, 4)
          // 检测心跳
          if ('2:::' === startStr) {
            this.emit(false, true)
          }
          str = str.slice(4)

          // 截取后不能为空
          if (str == null || str == '') {
            return
          }
          const { name, args } = filter(str)
          let data = args == null ? '' : JSON.parse(args[0])
          this.emitter.emit(name, data)
        } catch (e) {
          console.log('Handle packet failed: ' + packet.data, e)
        }
      })
      wx.onSocketClose(() => this.emitter.emit('close'))
      wx.connectSocket({ url, header })
    })
  }

  on(message, handle) {
    this.emitter.on(message, handle)
  }

  emit(message, data) {
    data = data == undefined ? '5:::' : '2:::'
    message = message ? JSON.stringify(message) : ''
    wx.sendSocketMessage({
      data: data + message
    })
  }

  emitData(name, data) {
    data = JSON.stringify(data)
    return { name: name, args: [data] }
  }

  updateTable(tablename) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: '',
      action: 'updateTable'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //取消订阅更新数据表的数据
  unsubUpdateTable(tablename) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: '',
      action: 'unsub_updateTable'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //订阅行更新的数据
  updateRow(tablename, objectId) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: objectId,
      action: 'updateRow'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //取消订阅行更新的数据
  unsubUpdateRow(tablename, objectId) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: objectId,
      action: 'unsub_updateRow'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //订阅表删除的数据
  deleteTable(tablename) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: '',
      action: 'deleteTable'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //取消订阅表删除的数据
  unsubDeleteTable(tablename) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: '',
      action: 'unsub_deleteTable'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //订阅更新数据表的数据
  deleteRow(tablename, objectId) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: objectId,
      action: 'deleteRow'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //订阅更新数据表的数据
  unsubDeleteRow(tablename, objectId) {
    var data = {
      appKey: this.applicationId,
      tableName: tablename,
      objectId: objectId,
      action: 'unsub_deleteRow'
    }
    data = this.emitData('client_sub', data)
    this.emit(data)
  }

  //监听服务器返回的更新数据表的数据，需要用户重写
  onUpdateTable(tablename, data) { }

  //监听服务器返回的更新数据表的数据，需要用户重写
  onUpdateRow(tablename, objectId, data) { }

  //监听服务器返回的更新数据表的数据，需要用户重写
  onDeleteTable(tablename, data) { }

  //监听服务器返回的更新数据表的数据，需要用户重写
  onDeleteRow(tablename, objectId, data) { }
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

const request = __webpack_require__(4)
const Bmob = __webpack_require__(0)
const error = __webpack_require__(5)
const { isObject, isString } = __webpack_require__(2)

// --------------小程序SDK-------------------

/**
 * 生成小程序二维码
 * @return {Object}
 */
const generateCode = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.GENERATECODE
  return request(route,'post',data)
}

/**
 * 获取access_token
 * @return {Object}
 */
const getAccessToken = (data) => {
  let route = Bmob._config.parameters.GETACCESSTOKEN
  return request(route,'get')
}

/**
 * 小程序模版信息
 * @return {Object}
 */
const sendWeAppMessage = (data) => {
    if (!isObject(data)) {
      //参数异常
      throw new error(415)
    }
    let route = Bmob._config.parameters.SENDWEAPPMESSAGE
    return request(route,'post',data)
}

const sendMessage = (data) => {
  //       var request = Bmob._request("wechatApp/SendWeAppMessage", null, null, 'POST', Bmob._encode(data, null, true));
  return 1
}

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
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.REFUND
  return request(route,'post',data)
}

 /**
 * 微信主人通知(主人信息推送)
 * @return {Object}
 */
const notifyMsg = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.NOTIFYMSG
  return request(route,'post',data)
}


// --------------RESTful SDK-------------------


 /**
 * 密码重置
 * @return {Object}
 */

//Email 重置
const requestPasswordReset = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.REQUESTPASSWORDRESET
  return request(route,'post',data)
}


// 短信验证码重置
const resetPasswordBySmsCode = (smsCode,data) => {
  if (!isString(smsCode)) {
    //参数异常
    throw new error(415)
  }
  let route = `${Bmob._config.parameters.RESETPASSWORDBYSMSCODE}/${smsCode}`
  return request(route,'put',data)
}

// 提供旧密码方式安全修改用户密码
const updateUserPassword = (objectId,data) => {
  if (!isObject(data) || !isString(objectId)) {
    //参数异常
    throw new error(415)
  }
  let route = `${Bmob._config.parameters.UPDATEUSERPASSWORD}/${objectId}`
  return request(route,'put',data)
}

 /**
 * 获取服务器时间
 * @return {Object}
 */

 const timestamp = () => {
   let route = Bmob._config.parameters.TIMESTAMP
   return request(route,'get')
 }

 /**
 * 推送消息
 * @return {Object}
 */
const push = (data) => {
  if (!isObject(data)) {
    //参数异常
    throw new error(415)
  }
  let route = Bmob._config.parameters.PUSH
  return request(route,'post',data)
}


// ---------------云函数------------------------
/**
 * 云函数
 * @return {Object}
 */
const functions = (funName, data) => {
  // 如果运行的云函数不需要传入参数，注意，"{}"是不能缺的
  if (!data) {
    data = {}
  }
  if (!isString(funName)) {
    //参数异常
    throw new error(415)
  }
  let route = `${Bmob._config.parameters.FUNCTIONS}/${funName}`
  return request(route,'post',data)
}

module.exports = {
  generateCode,
  sendMessage,
  getAccessToken,
  sendWeAppMessage,
  refund,
  notifyMsg,
  functions,
  timestamp,
  requestPasswordReset,
  resetPasswordBySmsCode,
  updateUserPassword,
  push
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


const request = __webpack_require__(4)
const Bmob = __webpack_require__(0)
const error = __webpack_require__(5)
const { isObject, isString } = __webpack_require__(2)

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
    const verifySmsCode = (data, options) => {
        if (!isString(data)) {
            //参数异常
            throw new error(415)
        }
        let route = `${Bmob._config.parameters.VERIFYSMSCODE}/${data}`
        return request(route,'post')
    }

module.exports = {requestSmsCode,verifySmsCode};

/***/ })
/******/ ]);
});