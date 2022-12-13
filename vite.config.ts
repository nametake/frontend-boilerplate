import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
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
