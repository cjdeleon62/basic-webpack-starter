const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlRoutes = [
  {
    name: 'index',
    path: 'index.pug',
  },
  {
    name: 'route2',
    path: 'route2/index.pug',
  },
];

const generateHTMLConfig = () => (
  htmlRoutes.map((route) => (
    new HtmlWebpackPlugin({
      title: route.name,
      filename: `${route.name}.html`,
      chunks: route.name,
      template: `src/${route.path}`,
    })
  ))
);

module.exports = {
  generateHTMLConfig,
};
