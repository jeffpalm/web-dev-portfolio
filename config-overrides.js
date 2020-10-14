const { override, addWebpackPlugin } = require('customize-cra');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    })
  )
);
