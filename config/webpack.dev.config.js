/*
 * Author  rhys.zhao
 * Date  2022-01-28 15:24:07
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 13:54:09
 * Description 开发环境webpack配置
 */
const { resolve } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: resolve(__dirname, '../example/index.js'),
  output: {
    path: resolve(__dirname, '../example/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    static: resolve(__dirname, '../example/'),
    compress: true,
    host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
    port: 11111, // 启动端口为 11111 的服务
    open: true // 自动打开浏览器
  }
};
