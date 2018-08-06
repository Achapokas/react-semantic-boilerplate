//localIdentName 
  //[name] = component; 
  // local = class/id 
  //hash = [unique id]

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
   plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css"
    }),
    htmlPlugin
  ],
  resolve: {
     alias: {
        '../../theme.config$': path.join(__dirname, 'my-semantic-theme/theme.config')  
     }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
       {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
         'file-loader'
       ]
     },
      {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  }
};