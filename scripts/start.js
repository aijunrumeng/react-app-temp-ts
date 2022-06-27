const path = require('path');
const config = require('./config');
const { merge } = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    hot: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    devMiddleware: {
      index: true,
    },
    proxy: {
      '/xxx': {
        target: 'xxx',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '': '' },
      },
    },
    static: ['src'],
  },
};
module.exports = merge(config, devConfig);
