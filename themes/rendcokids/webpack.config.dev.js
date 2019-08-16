const path = require('path'),
  UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin');

  
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
         'style-loader',
          'css-loader', 
          { 
            loader: 'sass-loader',
            options: {
              implementation: require("node-sass")
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options : {
              outputPath: '/images',
              publicPath: '/public/images'
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      files: '**/*.php',
      injectChanges: true,
      proxy: 'https://rendcokids:8890'
    })
  ],
  optimization: {
    minimizer: [new UglifyJSPlugin(), new OptimizeCssAssetsPlugin()]
  } 
};