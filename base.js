/** @type {import('prettier').Config} */
const samislamPrettierConfig = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  plugins: ['./node_modules/prettier-plugin-jsdoc/dist/index.js'],
}

module.exports = samislamPrettierConfig
