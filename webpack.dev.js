const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
});
