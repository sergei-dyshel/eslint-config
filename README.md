Shared base ESlint config used for my projects.

# Usage

```shell
npm install --save-dev @sergei-dyshel/eslint-config
```

Add `.eslintrc.js`:

```js
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ["@sergei-dyshel"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
```
