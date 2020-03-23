const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const {
  BUILD_DIR,
  BUILD_DIR_PUBLIC,
} = require('../config')

module.exports = {
  output: {
    publicPath: '/',
    filename: '[name]-[hash].min.js',
    path: path.resolve(__dirname, '..', '..', BUILD_DIR, BUILD_DIR_PUBLIC),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['./node_modules', './src'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/, /build/, /__test__/],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './favicon.ico'
    }),
  ],
}
