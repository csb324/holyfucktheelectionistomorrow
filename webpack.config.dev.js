const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry:   [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index.jsx'
  ],
  output:  {
    path:     path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    /**
     * This is where the magic happens! You need this to enable Hot Module Replacement!
     */
    new webpack.HotModuleReplacementPlugin(),
    /**
     * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
     * there are errors during compiling - essentially, assets that include errors
     * will not be emitted. If you want your webpack to 'fail', you need to check out
     * the bail option.
     */
    new webpack.NoEmitOnErrorsPlugin(),
    /**
     * DefinePlugin allows us to define free variables, in any webpack build, you can
     * use it to create separate builds with debug logging or adding global constants!
     * Here, we use it to specify a development build.
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),

    new HtmlWebpackPlugin({
      inject:   false,
      template: './src/index.html'
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
        test:    /\.jsx?/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
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
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test:   /\.svg$/,
        loader: 'url-loader?limit=8192!svgo-loader'
      }
    ]
  }
};
