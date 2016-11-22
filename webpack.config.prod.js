const path                          = require('path');
const webpack                       = require('webpack');
const autoprefixer                  = require('autoprefixer');
const ExtractTextPlugin             = require('extract-text-webpack-plugin');
const OfflinePlugin                 = require('offline-plugin');
const HtmlWebpackPlugin             = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:   [
    './src/index.jsx'
  ],
  output:  {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    /**
     * This plugin assigns the module and chunk ids by occurence count. What this
     * means is that frequently used IDs will get lower/shorter IDs - so they become
     * more predictable.
     */
    new webpack.optimize.OccurrenceOrderPlugin(),
    /**
     * See description in 'webpack.config.dev' for more info.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new LodashModuleReplacementPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug:    false
    }),

    new ExtractTextPlugin('styles.css'),

    new HtmlWebpackPlugin({
      production: true,
      inject:     false,
      template:   './src/index.html'
    }),

    /**
     * Add a service worker
     */
    new OfflinePlugin({
      ServiceWorker: {events: true},
      AppCache:      false
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias:      {
      'react':     'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module:  {
    loaders: [
      {
        test:    /\.jsx?$/,
        loaders: ['babel-loader'],
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, './node_modules/preact-compat')
        ]
      },
      {
        test:    /\.(jpg|jpeg|png)$/,
        loaders: [
          'file-loader?name=static/[name].[hash].[ext]'
        ],
        include: path.join(__dirname, 'static')
      },
      {
        test:   /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader:         [
            {loader: 'css-loader'},
            {loader: 'postcss-loader'},
            {loader: 'sass-loader'}
          ]
        })
      },
      {
        test:   /\.svg$/,
        loader: 'url-loader?limit=8192!svgo-loader'
      }
    ]
  }
};
