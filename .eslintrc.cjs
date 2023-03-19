module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sonarjs/recommended",
    "prettier", // should be always last
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint", "sonarjs"],
  rules: {
    "prettier/prettier": ["warn"],
    "@typescript-eslint/no-empty-function": ["off"],
    "@typescript-eslint/no-empty-interface": ["off"],
  },
};
