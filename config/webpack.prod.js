const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const root = path.resolve(__dirname, '../');

module.exports = WebpackMerge(baseConfig, {
  output: {
    path: path.resolve(root, 'dist'),
    filename: 'index.[hash:10].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include: path.resolve(root, 'src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:8]'
              },
            }
          }, 'postcss-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJsPlugin({
      parallel: true
    }),
    new ExtractTextPlugin({
      filename: 'index.[hash:10].css',
      allChunks: true
    })
  ]
});
