var path = require("path");
var webpack = require("webpack");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
      // .js is required for react imports.
      // .tsx is for our app entry point.
      // .ts is optional, in case you will be importing any regular ts files.
      extensions: ['', '.js', '.ts', '.tsx']
  },
  entry: {
           app: ['./app.tsx']
         },
  output: {
    path: path.join(basePath, "dist"),
    filename: 'bundle.js'
  },
  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
		]
	}

}
