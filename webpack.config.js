const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/build/', // 服务器路径
    path: __dirname + '/build', // 编译到当前目录
    filename: 'index.js' // 编译后的文件名字
  }
};