const { mode, isProduction } = require('./config/env');
const { loader } = require('mini-css-extract-plugin');
const plugins = require('./config/plugins');

const entry = './src/index.ts';

module.exports = {
  mode,
  entry,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isProduction ? loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.pug/,
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  },
  plugins
};
