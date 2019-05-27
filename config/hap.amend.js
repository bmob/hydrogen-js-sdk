const packageInfo = require('../package.json')
const fs = require('fs')
const path = require('path')

const BmobFile = path.join(__dirname, '../dist/Bmob-' + packageInfo.version + '.min.js')

function HapAmendAsyncPlugin(options) {}

HapAmendAsyncPlugin.prototype.apply = function (compiler) {
  compiler.plugin("done", function () {
    // Do something async...
    fs.readFile(BmobFile, 'utf-8', function (error, result) {
      const time = new Date().toLocaleDateString()
      const auth = `
/* !
* hydrogen-js-sdk
* Bmob.min.js v${packageInfo.version}
* updated date ${time}
*/
`
      const data = auth + result.replace("xxrequire('@system.fetch')xx", "require('@system.fetch')")

      fs.writeFile(BmobFile, data, function (error) {
        console.log('Bmob-' + packageInfo.version + '.min.js  Compile successfully')
      })
    })
  });
};
module.exports = HapAmendAsyncPlugin;