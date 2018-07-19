var CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  path = require('path'),
  webpack = require('webpack');

var plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    hash: true,
    template: path.join(__dirname, 'src', 'index.tpl.html')
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true, // enable source maps to map errors (stack traces) to modules
    output: {
      comments: false // remove all comments
    }
  }),
  new CopyWebpackPlugin([{
    from: './src/static/images',
    to: 'images'
  },
  {
    from: './src/static/fonts',
    to: 'fonts'
  }
  ]),
  new ExtractTextPlugin("css/style.css"),
  new OptimizeCssAssetsPlugin()
];

//clean build directory only before producing build
if (typeof process.env.NODE_ENV == 'undefined') {
  plugins.push(
    new CleanWebpackPlugin(['build'], {
      verbose: true,
      dry: false,
      preview: true,
    })
  );
}
module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, './src/entry.js')
    ]
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: 'js/[name]-[hash].js'
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/

    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader"
      })
    },
    {
      test: /\.(jpeg|jpg|gif|png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }
    ]
  },
  plugins: plugins
};
