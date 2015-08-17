var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'thunder.min.js',
    path: './dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
