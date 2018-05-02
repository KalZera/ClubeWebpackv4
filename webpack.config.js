const webpack = require('webpack');
const webpackCli = require('webpack-cli');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: ["./root/index.jsx"],
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, 
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }, 
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};