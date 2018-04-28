const webpack = require('webpack');
const webpackCli = require('webpack-cli');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: ["./root/index.jsx"],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use:{
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};