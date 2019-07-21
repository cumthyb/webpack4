const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',// 设置开发模式下
  entry: './src/index.js', //指定入口文件 注意路径是相对与根目录的
  output: {
    filename: 'bundle.js', //指定生成的文件名
    path: path.resolve(__dirname, '../dist') // 指定生成chunk的存放位置，注意路径必须四绝对路径
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          // warnings: false,
          drop_console: true,
          drop_debugger: false,
          pure_funcs: ['console.log']//移除console
        }
      },
      sourceMap: false,
      parallel: true
    }),
  ]
}