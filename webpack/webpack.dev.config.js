var webpack = require('webpack');
var path = require('path');
var parentDir = path.join(__dirname, '../src');

module.exports = {
    entry: [
      "babel-polyfill", path.join(parentDir, 'index.js')
    ],
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    mode: 'development'
}