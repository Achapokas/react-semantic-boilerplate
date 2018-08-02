//localIdentName 
  //[name] = component; 
  // local = class/id 
  //hash = [unique id]

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
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
        test: /\.css$/,
        use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: "[name_[local]_[hash:base64]]",
            sourceMap: true,
            minimze: true
          }
        }
       ]
     }
    ]
  },
  plugins: [htmlPlugin]
};