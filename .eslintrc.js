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
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-relative-parent-imports': 'error',
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
};
