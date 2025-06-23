const base = require('./base')
const samIslamPrettierNextConfig = {
  ...base,
  plugins: ['./node_modules/prettier-plugin-jsdoc/dist/index.js', 'prettier-plugin-tailwindcss'],
}
module.exports = samIslamPrettierNextConfig
