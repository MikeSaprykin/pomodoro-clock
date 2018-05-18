const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join } = require('path');

const { isProduction } = require('./env');

const template = join('src', 'index.pug');

const commonPlugins = [
  new HtmlWebpackPlugin({
    template
  })
];

const developmentPlugins = [...commonPlugins];

const productionPlugins = [
  ...commonPlugins,
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
];

const plugins = isProduction ? productionPlugins : developmentPlugins;

module.exports = plugins;
