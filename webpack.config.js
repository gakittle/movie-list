var path = require('path');
module.exports = {
  entry: path.resolve(_dirname, './client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(_dirname, './public')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
