module.exports = {
  env: {
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: ['prettier', 'eslint-config-airbnb-base'],
  plugins: ['prettier', 'eslint-plugin-prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
  },
  rules: {
    'class-methods-use-this': 'off',
    'prettier/prettier': 'error',
  },
};
