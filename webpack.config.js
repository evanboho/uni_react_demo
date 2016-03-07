var webpack = require('webpack');
var port = 4321;

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    './src/client/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: 'http://localhost:' + port + '/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loaders: [
          'babel?cacheDirectory,presets[]=es2015,presets[]=stage-2,presets[]=react',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    publicPath: 'http://localhost:' + port + '/',
    port: port,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
  },
};
