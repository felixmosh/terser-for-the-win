const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    app: path.resolve(__dirname, '../src/main.ts'),
  },

  output: {
    path: path.join(__dirname, '../.dist'),
    filename: 'js/[name].js',
  },

  externals: {
    'jquery': '{default: window.jQuery}'
  },

  module: {
    rules: [
      {
          test: /\.(ts|tsx|js)$/,
          exclude: /node_modules/,
          use: [
              { loader: 'ts-loader', options: { transpileOnly: true } },
          ],
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  performance: {
    hints: false,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
};
