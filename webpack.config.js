var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
      // .js is required for react imports.
      // .tsx is for our app entry point.
      // .ts is optional, in case you will be importing any regular ts files.
      extensions: ['', '.js', '.ts', '.tsx']
  },

  entry: [
    './components/app.tsx', './site.css'
  ],

  output: {
    path: path.join(basePath, "dist"),
    filename: 'bundle.js'
  },

  //https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli
  devServer: {
    contentBase: './dist', //Content base
    inline: true, //Enable watch and live reload
    host: 'localhost',
    port: 8080
  },

  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: 'source-map',

  module: {
		loaders: [
			{
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
		]
	},

  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html' //Name of template in ./src
    })
  ]
}
