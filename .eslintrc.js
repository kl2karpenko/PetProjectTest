module.exports = {
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "import/order": ["warn", {
      "groups": ["external", "builtin", "internal", "parent", "sibling", "index"],
      "newlines-between": "always"
    }]
  }
};
