module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['!craco.config.ts'],
      },
    ],
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@components', './src/components'],
          ['@layout', './src/components/layout'],
          ['@UI', './src/components/UI'],
          ['@sections', './src/components/sections'],
          ['@common', './src/components/common'],
          ['@utils', './src/utils'],
          ['@types', './src/types'],
          ['@services', './src/services'],
          ['@screens', './src/screens'],
          ['@redux', './src/redux'],
          ['@features', './src/redux/features'],
        ],
      },
      typescript: {
        alwaysTryTypes: true,
        project: 'packages/*/tsconfig.json',
      },
    },
  },
};
