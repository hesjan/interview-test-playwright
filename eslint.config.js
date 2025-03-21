const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');
const prettier = require('eslint-config-prettier');

const compat = new FlatCompat();

module.exports = [
  js.configs.recommended,
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:playwright/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'playwright', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    env: {
      node: true,
      es2022: true,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
  }),
  prettier,
];
