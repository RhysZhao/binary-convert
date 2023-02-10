/*
 * Author  rhys.zhao
 * Date  2022-01-28 15:24:07
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 11:29:58
 * Description 生产环境webpack配置
 */
const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: resolve(__dirname, '../src/index.js'),
  output: {
    path: resolve(__dirname, '../lib/'),
    filename: 'index.js',
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default' // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: resolve(__dirname, '../src'),
        loader: 'babel-loader'
      }
    ]
  }
};
