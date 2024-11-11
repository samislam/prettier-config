const base = require('./base')
const samIslamPrettierNextConfig = {
  ...base,
  plugins: ['prettier-plugin-jsdoc', 'prettier-plugin-tailwindcss'],
}
module.exports = samIslamPrettierNextConfig
