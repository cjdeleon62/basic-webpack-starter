const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const path = require('path');

module.exports = {
  mode: 'none',
  entry: {
    index: './src/index.js',
    route2: './src/route2/route2.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/i,
        use: {
          loader: 'pug-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Basic Webpack Starter',
      filename: 'index.html',
      chunks: ['index'],
      template: './src/index.pug',
    }),
    new HtmlWebpackPlugin({
      title: 'Route 2',
      filename: 'route2.html',
      chunks: ['route2'],
      template: './src/route2/index.pug',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
    }),
    new HtmlInlineCSSWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};
