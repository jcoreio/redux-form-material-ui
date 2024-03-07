/* eslint-env node, es2018 */
module.exports = {
  extends: [require.resolve('@jcoreio/toolchain/eslint.config.cjs')],
  rules: {
    'jsx-a11y/href-no-hash': 0,
  },
}
