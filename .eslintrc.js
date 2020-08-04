module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['@imaginary-cloud/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      js: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
  },
}
