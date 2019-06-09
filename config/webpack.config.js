const path=require('path')

module.exports={
  mode:'development',// 设置开发模式下
  entry:'./src/index.js', //指定入口文件 注意路径是相对与根目录的
  output:{
    filename:'bundle.js', //指定生成的文件名
    path:path.resolve(__dirname,'../dist') // 指定生成chunk的存放位置，注意路径必须四绝对路径
  }
}