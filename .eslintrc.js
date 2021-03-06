module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {},
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
