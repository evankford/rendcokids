const path = require('path'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'
const buster = process.env.npm_package_config_buster || '';
  
  
module.exports = {
  context: __dirname,
  entry: {
    frontend: './src/index.js',
    customizer: './src/customizer.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]-bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader', 
          { 
            loader: 'sass-loader',
            options: {
              implementation: require("node-sass")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '../style.css' }),
    new BrowserSyncPlugin({
      files: '**/*.php',
      // injectChanges: true,
      proxy: 'https://rendcokids:8890'
    })
  ],
  optimization: {
    minimizer: [new UglifyJSPlugin(), new OptimizeCssAssetsPlugin()]
  } 
};