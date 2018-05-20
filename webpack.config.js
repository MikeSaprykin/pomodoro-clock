const { mode, isProduction } = require('./config/env');
const { loader } = require('mini-css-extract-plugin');
const plugins = require('./config/plugins');

const entry = './src/index.tsx';

module.exports = {
  mode,
  entry,
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          isProduction ? loader : 'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'awesome-typescript-loader'
      }
    ]
  },
  plugins,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
};
