const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const root = path.resolve(__dirname, '../');

module.exports = webpackMerge(baseConfig, {
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: path.resolve(root, 'src'),
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[local]__[hash:base64:8]'
            },
          }
        }, 'postcss-loader', 'less-loader'],
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(root, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
