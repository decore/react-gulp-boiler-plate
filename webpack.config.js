var path = require("path");
var webpack = require("webpack");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  entry: {
           app: ['app.tsx']
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
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
		]
	}

}
