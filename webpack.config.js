'use strict';
var path = require('path');

module.exports = {
  context: __dirname + '/src',
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        query: {
          presets: ['es2015']
        }
      },
      {
        loader: 'json',
        test: /\.json$/
      }
    ]
  }
};
