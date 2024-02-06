module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    process: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:compat/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      classes: true
    }
  },
  ignorePatterns: [
    '*.js',
    '*.json',
    '*.cjs',
  ],
  settings: {
    'import/resolver': {
      typescript: {}
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/no-named-as-default': 0,
    'padded-blocks': ['error', 'never'],
    'one-var': ['error', 'never'],
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'error',
    quotes: [1, 'single'],
    'no-undef': 2,
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error']
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ],
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    'prefer-const': 'error',
    'global-strict': 0,
    indent: [
      1,
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-extra-semi': 1,
    'no-underscore-dangle': 0,
    'no-trailing-spaces': [
      1,
      {
        skipBlankLines: true
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'export'
      },
      {
        blankLine: 'always',
        prev: 'export',
        next: 'export'
      },
      {
        blankLine: 'always',
        prev: 'export',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if'
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: 'const',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'const'
      },
      {
        blankLine: 'always',
        prev: 'let',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'let'
      },
      {
        blankLine: 'always',
        prev: 'var',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'var'
      },
      {
        blankLine: 'always',
        prev: 'const',
        next: 'let'
      },
      {
        blankLine: 'never',
        prev: 'const',
        next: 'const'
      },
      {
        blankLine: 'never',
        prev: 'let',
        next: 'let'
      },
      {
        blankLine: 'never',
        prev: 'var',
        next: 'var'
      },
      {
        blankLine: 'always',
        prev: 'const',
        next: 'let'
      },
      {
        blankLine: 'always',
        prev: 'const',
        next: 'var'
      },
      {
        blankLine: 'always',
        prev: 'let',
        next: 'var'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'cjs-import'
      },
      {
        blankLine: 'always',
        prev: 'cjs-import',
        next: '*'
      },
      {
        blankLine: 'never',
        prev: 'cjs-import',
        next: 'cjs-import'
      }
    ],
    'no-unreachable': 1,
    'no-alert': 1,
    semi: 1,
    'import/no-unused-modules': [
      1,
      {
        unusedExports: true,
        src: ['./src']
      }
    ]
  }
};
