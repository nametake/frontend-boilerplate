import { StorybookViteConfig } from '@storybook/builder-vite';
import react from '@vitejs/plugin-react';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    // https://github.com/storybookjs/builder-vite/issues/210
    config.plugins = config.plugins?.filter(
      (plugin) =>
        !(
          Array.isArray(plugin) &&
          plugin.some((p) => {
            const pp = p as { name: string };
            return pp.name.includes('vite:react');
          })
        )
    );

    config.plugins?.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      })
    );

    config.esbuild = {
      // Fixed: [vite] warning: Top-level "this" will be replaced with undefined since this file is an ECMAScript module
      // https://github.com/vitejs/vite/issues/8644
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    };

    return config;
  },
};

module.exports = config;
