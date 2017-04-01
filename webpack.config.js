const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
    ]
  }
};
