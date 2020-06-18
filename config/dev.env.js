/*
 * @Author: your name
 * @Date: 2019-07-02 09:41:29
 * @LastEditTime: 2020-06-18 17:36:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bmob-js-sdk-es6/config/dev.env.js
 */ 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./index.js')
const packageInfo = require('../package.json');

module.exports = {
  context: config.rootPath,
  devtool: 'eval-source-map',
  entry: './build/main.js',
  output: {
    path: config.staticPath,
    filename: 'Bmob-' + packageInfo.version + '.min.js',
    library: 'Bmob',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html'})
  ],
  devServer: {
    contentBase: config.staticPath,
    compress: true,
    open: true,
    port: 9000,
    overlay: true
  }
}
