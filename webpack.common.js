const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
      favicon: path.resolve(__dirname, 'src/assets/fav.png'),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][hash][ext]',
        },
      },
    ],
  },
};
