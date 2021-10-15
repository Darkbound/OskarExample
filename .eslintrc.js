module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  plugins: [
    "better-styled-components",
    "styled-components-a11y",
    "simple-import-sort",
    "jsx-a11y",
    "import",
    "@typescript-eslint",
    "react",
    "prettier",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:styled-components-a11y/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "simple-import-sort/imports": 1,
    "simple-import-sort/exports": 1,
    "react-hooks/exhaustive-deps": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "react/prop-types": 0,
    "react/display-name": 0,
    "no-console": 2,
    "prettier/prettier": 1,
    "sort-keys": [1, "asc", { caseSensitive: true, minKeys: 2 }],
  },
  globals: { React: "writable" },
};
