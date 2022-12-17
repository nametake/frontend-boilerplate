/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
/* eslint-enable */

const config = defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
});

// eslint-disable-next-line import/no-default-export
export default config;
