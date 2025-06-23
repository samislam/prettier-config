const base = require('./base')
const samIslamPrettierNextConfig = {
  ...base,
  plugins: [require.resolve('prettier-plugin-jsdoc'), 'prettier-plugin-tailwindcss'],
}
module.exports = samIslamPrettierNextConfig
