const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./index.js')
const packageInfo = require('../package.json');

module.exports = [{
  context: config.rootPath,
  entry:'./src/lib/bmob.js',
  output: {
    path: config.staticPath,
    filename: 'Bmob-'+ packageInfo.version +'.min.js',
    library: 'SDK',
    libraryTarget: "umd"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin()
  ],
}]
