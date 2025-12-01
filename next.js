const base = require('./base')
const samIslamPrettierNextConfig = {
  ...base,
  plugins: [
    require.resolve('@homer0/prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
}
module.exports = samIslamPrettierNextConfig
