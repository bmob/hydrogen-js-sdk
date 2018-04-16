const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./index.js')
const packageInfo = require('../package.json');

module.exports = {
  context: config.rootPath,
  entry: './src/main.js',
  output: {
    path: config.staticPath,
    filename: 'Bmob-' + packageInfo.version + '.min.js',
    library: 'Bmob',
    libraryExport: "default",
    libraryTarget: "umd"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html'}),
    new UglifyJsPlugin()
  ],
  devServer: {
    contentBase: config.staticPath,
    compress: true,
    open: true,
    port: 9000,
    overlay: true
  }
}
