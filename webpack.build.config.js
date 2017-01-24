var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/UIReportsNav',
  output: {
    path: __dirname,
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs2'
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [{
      test: /(\.jsx?$|\.js?$)/,
      loaders: ['babel'],
      exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    },
    {
      test: /(\.sass|\.css)/,
      loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
    }]
  }
};