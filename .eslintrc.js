module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {
        node: { paths: ['src'] },
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.slice.ts'],
      rules: {
        'no-param-reassign': 0,
      },
    },
  ],
  rules: {
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.tsx'] }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        depth: 3,
        assert: 'nesting',
      },
    ],
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'import/prefer-default-export': 0,
    'import/no-named-as-default-member': 0,
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'class',
        next: 'class',
      },
      {
        blankLine: 'any',
        prev: ['let', 'const'],
        next: ['let', 'const'],
      },
      {
        blankLine: 'any',
        prev: 'expression',
        next: 'expression',
      },
      {
        blankLine: 'any',
        prev: ['import', 'export'],
        next: ['import', 'export'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        trailingComma: 'all',
        semi: true,
        singleQuote: true,
        jsxSingleQuote: true,
        useTabs: false,
        tabWidth: 2,
        arrowParens: 'always',
      },
    ],
  },
};
