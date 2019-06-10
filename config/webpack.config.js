const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;


module.exports = {
  mode: 'development',
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
        test: /\.(png|jpg|jpeg|bmp|ico|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20480,//20k
            name: '[name][hash].[ext]',
            outputPath: 'static/imgs'
          }
        },
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less/i,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}