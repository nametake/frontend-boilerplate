/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
/* eslint-enable */

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.[t]sx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'assets', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
