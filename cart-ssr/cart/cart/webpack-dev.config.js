//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var config = require('./src/config/config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, './src/entry.js'),
      'webpack/hot/dev-server',
      'webpack-dev-server/client?' + config.protocol + config.host + ':' + config.port + '/'
    ]
  },
  output: {
    path: path.join(__dirname, 'src/static/js/'),
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].js',
  },
  module: {
    loaders: [{
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/

      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpeg|jpg|gif|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      filename: 'app-[hash].js',
      chunks: ['app'],

    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: path.join(__dirname, 'src', 'index.tpl.html'),
      chunks: ['app']
    }),
    new webpack.HotModuleReplacementPlugin(),
    /*new BundleAnalyzerPlugin({
    	analyzerMode:'server',
    	analyzerPort:3442
    })*/
  ]
};
