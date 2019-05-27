const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HapAmendAsyncPlugin = require('./hap.amend')
const config = require('./index.js')
const packageInfo = require('../package.json')

module.exports = {
  context: config.rootPath,
  entry: './src/lib/app.js',
  output: {
    path: config.staticPath,
    filename: 'Bmob-' + packageInfo.version + '.min.js',
    library: 'Bmob',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HapAmendAsyncPlugin(),
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin()
  ]
}