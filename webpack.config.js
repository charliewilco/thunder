const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'thunder.min.js',
    path: './dist/'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.(js|jsx)$/, loader: 'standard' }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'babili']
        }
      }
    ]
  },

  standard: {
    parser: 'babel-eslint'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ]
}
