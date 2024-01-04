const off = "off";
const never = "never";
const warn = "warn";
const always = "always";

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",

  rules: {
    // handled by tsc
    "@typescript-eslint/no-unused-vars": off,
    "@typescript-eslint/no-namespace": off,
  },
};
