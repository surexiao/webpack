const webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: '/build/', // 服务器路径
    path: __dirname + '/dist/js', // 编译到当前目录
    filename: '[name].js' // 编译后的文件名字
  }
};