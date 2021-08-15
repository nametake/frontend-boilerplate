/* eslint-disable import/no-extraneous-dependencies */
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
/* eslint-enable */

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const isDevelopment = process.env.NODE_ENV !== 'production';

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// const isPlugin = (plugin: unknown): plugin is WebpackPluginInstance =>
//   Boolean(plugin);

const config: Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.[t]sx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-modules-commonjs',
              ],
            },
          },
          {
            loader: 'ts-loader',
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'assets', 'index.html'),
    }),
    ...(isDevelopment
      ? [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]
      : []),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
