/* eslint-disable */
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const isDevelopment = true;

module.exports = {
  mode: isDevelopment ? "development" : "production",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  entry: path.resolve(__dirname, "src", "./index"),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    hot: true,
    port:
      process.env.PORT ||
      console.log(
        "\x1b[31m%s\x1b[0m",
        "Env PORT não encontrada, usando porta 3000"
      ) ||
      3000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    isDevelopment &&
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ].filter(Boolean),
};
