const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',

  entry: {
    app: path.resolve(__dirname, '../src/main.ts'),
  },

  output: {
    path: path.join(__dirname, '../build'),
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
    
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },


  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                toplevel: true,
                compress: {
                    drop_debugger: true,
                },
                mangle: {
                    properties: {
                        keep_quoted: true,
                        debug: true,
                    },                       
                },
            }
        }),
    ],
  },

  output: {
    filename: 'webpack_bundle.js',
    path: path.resolve(__dirname, '../.dist'),
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