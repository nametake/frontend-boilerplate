module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier', // Must be last
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['error'],
    'no-restricted-imports': ['error', { patterns: ['../*'] }],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'parent',
          },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/resolver': 'webpack',
  },
  overrides: [
    {
      files: ['*.test.{js,jsx,ts,tsx}'],
      rules: {
        'no-restricted-imports': 'off',
      },
    },
  ],
};
