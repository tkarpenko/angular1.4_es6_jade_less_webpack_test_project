'use strict';

const webpack            = require('webpack');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');


const loadersList = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel?presets=es2015'
  },
  { 
    test: /\.jade$/, 
    loader: 'jade' 
  },
  { 
    test: /(\.css|\.less)$/, 
    loader: ExtractTextPlugin.extract('style', 'css!less')
  },
  {
    test: /\.(jpg|png)$/,
    loader: 'url?name=[path][name].[ext]&limit=100000!img?progressive=true'
    // ,
    // publicPath: '/img/'
  },
  {
    test: /\.html$/,
    loader: 'html-loader?attrs[]=video:src'
  }, {
    test: /\.mp4$/,
    loader: 'url?name=[path][name].[ext]&limit=10000&mimetype=video/mp4'
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'url?name=[path][name].[ext]&limit=100000'
  }
];

const preloadersList = [
];

const HtmlWebpackPluginOpt = {
  filename: 'index.html',
  template: './index.jade',
  inject: 'body'
};

const devServerOpt = {
  port: 3000,
  hot: true,
  historyApiFallback:true,
}

const vendor = [
  'angular',
  'angular-ui-router',
  'angular-animate',
  'jquery',
  'js-cookie',
  'scriptjs',
  './libs/ng-scrollable.js',
  './libs/ct-ui-router-extras.js'
];


const webpackConfig = {
  context: __dirname + '/src',

  entry: {
    app: './index.js',
    vendor: vendor
  },
  
  output: {
    path          : __dirname + '/',
    publicPath    : '/',
    filename      : '[name].js',
    chunkFilename : '[name].js'
  },

  watch: true,

  module: {
    preLoaders: preloadersList,
    loaders:    loadersList
  },

  resolve: {
    root: __dirname + '/src',
    extensions: ['', '.js', '.svg', '.eot', '.ttf', '.woff', '.woff2']
  },

  plugins: [
    new HtmlWebpackPlugin( HtmlWebpackPluginOpt ),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ],

  devServer: devServerOpt,
};


module.exports = webpackConfig;