const { defineConfig } = require('eslint/config')

module.exports = defineConfig([
  ...require('@jcoreio/toolchain/eslintConfig.cjs'),
  {
    files: ['example/**'],
    rules: {
      'import/no-webpack-loader-syntax': 0,
      'jsx-a11y/href-no-hash': 0,
    },
  },
])
