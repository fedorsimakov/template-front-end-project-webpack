const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins
const path = require('path');


module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
  ]
};
