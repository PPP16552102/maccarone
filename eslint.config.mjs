import { defineConfig } from "eslint/config";
import { node, es2023 } from "globals";
import jseslint from "@eslint/js";
import tseslint from "typescript-eslint";
import EslintPluginUnicorn from "eslint-plugin-unicorn";
import EslintPluginPrettierRecommended from "eslint-plugin-prettier";

export default defineConfig([
  {
    ignores: ["**/node_modules/**", "**/dist/**"],
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
      },
      globals: {
        ...node,
        ...es2023,
      },
    },
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prefer-string-raw": "off",
    },
    extends: [
      jseslint.configs.recommended,
      tseslint.configs.recommended,
      EslintPluginUnicorn.configs.recommended,
      EslintPluginPrettierRecommended,
    ],
  },
]);
