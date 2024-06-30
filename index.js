// @ts-check

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginExportScope from "eslint-plugin-export-scope";
import eslintPluginImportAccess from "eslint-plugin-import-access/flat-config";
import jsdoc from "eslint-plugin-jsdoc";
import "eslint-plugin-only-warn";
import tseslint from "typescript-eslint";

const off = "off";
const never = "never";
const warn = "warn";
const always = "always";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  jsdoc.configs["flat/recommended-typescript"],
  // @ts-ignore
  eslintConfigPrettier,
  eslintPluginExportScope.configs.flatConfigRecommended,
  {
    ignores: ["out/", "dist/", ".ts-node/", "eslint.config.mjs"],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      jsdoc: jsdoc,
      // TODO: remove ts-ignore after https://github.com/uhyo/eslint-plugin-import-access/issues/49
      // @ts-ignore
      "import-access": eslintPluginImportAccess,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: warn,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [warn, { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-import-type-side-effects": warn,
      "@typescript-eslint/no-unused-vars": [
        warn,
        { varsIgnorePattern: "^_.*", argsIgnorePattern: "^_.*" },
      ],
      "@typescript-eslint/no-non-null-assertion": off,

      // TODO: consider enforcing common style for Array<T> vs T[]
      "@typescript-eslint/array-type": [off],

      // which types are allowed in template expressions
      "@typescript-eslint/restrict-template-expressions": [
        warn,
        { allowAny: true, allowNumber: true, allowArray: true },
      ],

      // allow arrow functions returning void expression
      "@typescript-eslint/no-confusing-void-expression": [warn, { ignoreArrowShorthand: true }],

      // Require .toString() to only be called on objects which provide useful information when stringified.
      "@typescript-eslint/no-base-to-string": warn,

      "no-mixed-spaces-and-tabs": [warn, "smart-tabs"],
      "@typescript-eslint/no-empty-function": [
        warn,
        { allow: ["private-constructors", "protected-constructors", "overrideMethods"] },
      ],
      "@typescript-eslint/no-explicit-any": off,
      "@typescript-eslint/ban-types": off,
      "@typescript-eslint/no-namespace": off,
      "no-inner-declarations": off,
      "arrow-body-style": [warn, "as-needed"],

      "jsdoc/no-undefined-types": warn,
      "jsdoc/require-returns": off,
      "jsdoc/require-param-description": off,
      "jsdoc/require-param": off,
      "jsdoc/require-jsdoc": off,
      "jsdoc/check-tag-names": [warn, { definedTags: ["scopeDefault"] }],
      "jsdoc/check-param-names": [warn, { disableMissingParamChecks: true }],
      "jsdoc/tag-lines": [warn, "never", { startLines: 1 }],

      // TODO: triggers false positives https://github.com/A-Shleifman/eslint-plugin-export-scope/issues/9
      "export-scope/no-imports-outside-export-scope": [off],
      "import-access/jsdoc": [warn],
    },
  },
);
