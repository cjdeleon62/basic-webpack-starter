const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const path = require('path');

module.exports = {
	mode: "none",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'index.js',
		chunkFilename: '[id].chunk.js'
	},
	module: {
		rules: [
		{
				test: /.jsx?$/i,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Handlebars Webpack Demo",
			filename: "index.html",
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
		new HtmlInlineCSSWebpackPlugin(),
	],
}
