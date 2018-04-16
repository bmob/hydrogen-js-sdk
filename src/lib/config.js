const ROOT = require('../../package.json')
const HOST = 'https://apitest.bmob.cn'
const APPLICATION_ID = ''
const APPLICATION_KEY = ''
const VERSION = `v${ROOT.version}`

// 1.h5 2.小程序 3.快应用
const TYPE = 1

const PARAMETERS = {
  GET_ONE: '111'
}

module.exports = {
  host: HOST,
  applicationId: APPLICATION_ID,
  applicationKey: APPLICATION_KEY,
  parameters: PARAMETERS,
  version:VERSION,
  type:TYPE
}
