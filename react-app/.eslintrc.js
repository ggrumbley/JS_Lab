module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react-hooks',
  ],
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': false,
  },
  rules: {
    'arrow-body-style': ['off'],
    'indent': ['error', 2],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': [
      'warn',
      {
        'code': 100,
        'tabWidth': 2,
        'comments': 100,
        'ignoreComments': false,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ]
  }
}