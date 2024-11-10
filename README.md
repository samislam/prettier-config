# @samislam/prettier-config

A custom Prettier configuration for consistent code formatting across projects.

## Installation

To install `samislamPrettierConfig` as a dependency in your project, run:

```
$ npm install samislamPrettierConfig --save-dev
```
Or if you're using Yarn:

```
$ yarn add samislamPrettierConfig --dev
```
Or with pnpm:

```
$ pnpm add -D samislamPrettierConfig
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

# Configuration Details

- **Semi-colons:** Disabled (semi: false)
- **Tab Width:** 2 spaces (tabWidth: 2).
- **Print Width:** 100 characters (printWidth: 100).
- **Single Quotes:** Enabled (singleQuote: true).
- **Trailing Commas:** Enabled for ES5-compatible features (trailingComma: "es5").
- **JSdoc Plugin:** Integrates prettier-plugin-jsdoc for formatting JSDoc comments.

# License

MIT
