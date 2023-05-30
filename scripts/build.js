const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');

const config = require('./config');

const prodConfig = {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'assets/js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/js',
          to: 'assets/js',
        },
      ],
    }),
  ],
};
module.exports = merge(config, prodConfig);
