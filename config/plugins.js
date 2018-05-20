const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWepbackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')
const { join } = require('path');

const { isProduction } = require('./env');

const template = join('src', 'index.html');

const commonPlugins = [
  new HtmlWepbackPlugin({
    template
  }),
  new CheckerPlugin()
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
