const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devtool: 'source-map',

  module: {
    rules: [
      /* =====================
         SCSS
      ====================== */
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },

      /* =====================
         IMAGES
      ====================== */
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][ext]',
        },
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false, // 👈 prevents Sass warnings blocking UI
      },
    },
  },
});
