const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Handlebars Webpack Demo",
			filename: "index.html"
		})
	],
	module: {
		rules: [
			{
				test: /.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
}
