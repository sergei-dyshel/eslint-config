// @ts-check

import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const off = "off";
const never = "never";
const warn = "warn";
const always = "always";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  {
    ignores: ["out/", "dist/"],
  },
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
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
      "no-mixed-spaces-and-tabs": [warn, "smart-tabs"],
      /* TODO: remove if not used */
      "@typescript-eslint/no-empty-function": [
        warn,
        { allow: ["private-constructors", "protected-constructors", "overrideMethods"] },
      ],
      "@typescript-eslint/no-explicit-any": off,
      "@typescript-eslint/ban-types": off,
      "@typescript-eslint/no-namespace": off,
      "no-inner-declarations": off,
    },
  },
);
