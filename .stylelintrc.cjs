module.exports = {
  root: true,
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-idiomatic-order",
    "stylelint-prettier/recommended",
  ],
  ignoreFiles: ["public/**/*.css"],
  rules: {
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "no-irregular-whitespace": true
  }
}

