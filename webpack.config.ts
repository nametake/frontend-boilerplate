import * as path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.[t]sx?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  }
};

export default config;
