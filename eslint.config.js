import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // This is the crucial part for auto-formatting on save
    rules: {
      // You can customize these rules as needed
      "indent": ["error", 2, { "SwitchCase": 1 }], // Example: 2-space indentation, switch case indentation
      "react/jsx-indent": ["error", 2], // Indentation for JSX
      "react/jsx-indent-props": ["error", 2], // Indentation for JSX props
      "quotes": ["error", "single"],
      "semi": ["error", "always"], // Enforce semicolons
      "trailingComma": ["error", "es5"], // Trailing commas
      "jsx-a11y/accessible-emoji": "off", // You might want to disable this rule for emoticons
    },
  },
];