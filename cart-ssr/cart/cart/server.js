var config = require('./src/config/config'),
  isProd = typeof process.env.NODE_ENV != 'undefined' && process.env.NODE_ENV == 'production',
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  webpackConfig = './webpack-dev.config',
  port = config.dev.port,
  webpackOptions = {
    contentBase: './src/static/',
    historyApiFallback: true,
    inline: true,
    hot: true
  };

if (isProd) {
  webpackConfig = './webpack.config';
  webpackOptions.contentBase = '/build';
  port = config.prod.port;
}
webpackConfig = require(webpackConfig);
new WebpackDevServer(webpack(webpackConfig), webpackOptions)
  .listen(port, 'localhost', function(err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at ' + config.protocol + config.host + ':' + port + '/');
  });
