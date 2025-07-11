# @samislam/prettier-config

A custom Prettier configuration for consistent code formatting across projects.

## Installation

> 🚧❗ **IMPORTANT:** THIS PACKAGE **ONLY** WORKS WITH PRETTIER VERSION 3.0.3!!!

To install `samislamPrettierConfig` as a dependency in your project, run:

```
$ npm install --save-dev --save-exact @samislam/prettier-config prettier@3.0.3 prettier-plugin-jsdoc prettier-plugin-tailwindcss
```
Or if you're using Yarn:

```
$ yarn add --dev --exact @samislam/prettier-config prettier@3.0.3 prettier-plugin-jsdoc prettier-plugin-tailwindcss
```
Or with pnpm:

```
$ pnpm add -D -E @samislam/prettier-config prettier@3.0.3 prettier-plugin-jsdoc prettier-plugin-tailwindcss
```

# Usage

To use this Prettier configuration, add the following line in your project's package.json:
```json
{
  "prettier": "@samislam/prettier-config"
}
```
Or, you can create a .prettierrc.js file in the root of your project with:
```js
module.exports = require("@samislam/prettier-config");
```

# Available configurations:

**default configuration**

- **Semi-colons:** Disabled (semi: false)
- **Tab Width:** 2 spaces (tabWidth: 2).
- **Print Width:** 100 characters (printWidth: 100).
- **Single Quotes:** Enabled (singleQuote: true).
- **Trailing Commas:** Enabled for ES5-compatible features (trailingComma: "es5").
- **JSdoc Plugin:** Integrates prettier-plugin-jsdoc for formatting JSDoc comments.

**nextjs/react configuration**
- same as the default configurations.
- integrations with the `prettier-plugin-tailwindcss` plugin to automatically sort tailwindcss classes.

You can use this configuration by including it in your package.json as follows:
```json
{
  "prettier": "@samislam/prettier-config/next.js"
}
```
Or if you're using `.prettierrc.js` you can directly import it:
```js
module.exports = require("@samislam/prettier-config/next");
```



# License

MIT
