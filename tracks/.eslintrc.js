module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    browser: true,
    es6: true
  },
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'import/first': 'error',
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 80 }],
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'linebreak-style': 0,
    'react/jsx-closing-bracket-location': [1, 'line-aligned']
  },
  overrides: [
    {
      files: ['babel-*', 'metro*', '*-test.js', '*.spec.js'],
      rules: {}
    }
  ]
};
