/** @type {import('prettier').Config} */
const samislamPrettierConfig = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: [require.resolve('@homer0/prettier-plugin-jsdoc')],
}

module.exports = samislamPrettierConfig
