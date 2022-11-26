module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:css-import-order/recommended',
    'plugin:solid/typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'solid',
    'import',
    'css-import-order',
    'boundaries',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'boundaries/elements': [
      {
        type: 'globals',
        pattern: 'globals/*',
      },
      {
        type: 'shared',
        pattern: 'shared/*',
      },
      {
        type: 'entities',
        pattern: 'entities/*',
      },
      {
        type: 'features',
        pattern: 'features/*',
      },
      {
        type: 'widgets',
        pattern: 'widgets/*',
      },
      {
        type: 'pages',
        pattern: 'pages/*',
      },
      {
        type: 'processes',
        pattern: 'processes/*',
      },
      {
        type: 'app',
        pattern: 'app/*',
      },
    ],
  },
  rules: {
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandLast: true,
      },
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'parent',
          ['sibling', 'internal'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/max-dependencies': [
      'error',
      {
        max: 30,
        ignoreTypeImports: false,
      },
    ],

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'max-len': [1, 80, 2],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'eol-last': ['error', 'always'],

    'boundaries/no-private': 'error',
    'boundaries/no-unknown': 'error',
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        message: '${file.type} is not allowed to import ${dependency.type}',
        rules: [
          {
            from: 'globals',
            allow: ['globals', 'shared', 'entities', 'features', 'widgets'],
          },
          {
            from: 'shared',
            allow: ['shared'],
            message:
              'Do not import ${report.specifiers} from ' +
              '${dependency.source} in helpers',
          },
          {
            from: 'entities',
            allow: ['globals', 'shared'],
          },
          {
            from: 'features',
            allow: ['globals', 'shared', 'entities'],
          },
          {
            from: 'widgets',
            allow: ['globals', 'shared', 'entities', 'features'],
          },
          {
            from: 'pages',
            allow: ['globals', 'shared', 'entities', 'features', 'widgets'],
          },
          {
            from: 'processes',
            allow: [
              'globals',
              'shared',
              'entities',
              'features',
              'widgets',
              'pages',
            ],
          },
          {
            from: 'app',
            allow: [
              'shared',
              'entities',
              'features',
              'widgets',
              'pages',
              'processes',
            ],
          },
        ],
      },
    ],
  },
};
