const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      title: 'Ambitionbox Typescript',
    })
  ]
};