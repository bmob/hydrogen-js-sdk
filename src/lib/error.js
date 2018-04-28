class error {
  constructor(code, msg) {
    let error = new Error()

    error.code = code
    error.message = msg ? `Bmob.Error:${code} ${msg}` : `Bmob.Error:${code} ${this.errorMsg(code)}`

    return error
  }

  errorMsg(code) {
    switch (code) {
    case 415:
      // 参数类型不正确
      return 'incorrect parameter type'
    case 416:
      // 参数为空
      return 'Parameter is null'
    default:
      return 'unknown error'
    }
  }
}

module.exports = error
