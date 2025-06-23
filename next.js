const base = require('./base')
const samIslamPrettierNextConfig = {
  ...base,
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
}
module.exports = samIslamPrettierNextConfig
