const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  devtool:'none',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name]_[hash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,// 第三方包已经转换过了，不必在此转换
        use:  'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|bmp|ico)$/i,
        include: [
          path.resolve(__dirname, '../static/imgs')
        ],
        use: {
          loader: 'url-loader',
          options: {
            limit: 20480,//20k
            name: '[name][hash].[ext]',
            outputPath: 'static/imgs'//拷贝至打包结果下的static/imgs路径下
          }
        },
      },
      {
        test: /\.(eot|ttf|woff|svg)$/i,
        include: [
          path.resolve(__dirname, '../static/font') //src目录下可能有svg资源，在此特别设置inclule为了只打包与字体图标相关的svg资源
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][hash].[ext]',
            outputPath: 'static/fonts',// 输出到打包目录下的static/fonts路径，保持资源间的相对位置不变，也便于管理
          }
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    alias: {
      'static': path.join(__dirname, '..', 'static'),
    }
  }
}