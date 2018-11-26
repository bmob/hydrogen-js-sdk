const packageInfo = require('../package.json')
const fs = require('fs')
const path = require('path')

const BmobFile = '../dist/Bmob-' + packageInfo.version + '.min.js'
function HapAmendAsyncPlugin(options) { }

HapAmendAsyncPlugin.prototype.apply = function (compiler) {
  compiler.plugin("done", function (compilation,) {
    // Do something async...
    fs.readFile(path.join(__dirname, BmobFile), 'utf-8', function(error, result){
      const data = result.replace("xxrequire('@system.fetch')xx", "require('@system.fetch')")
      fs.writeFile(path.join(__dirname, BmobFile), data, function (error) {
        console.log('Bmob-' + packageInfo.version + '.min.js  打包成功')
      })
    })
  });
};
module.exports = HapAmendAsyncPlugin; 
