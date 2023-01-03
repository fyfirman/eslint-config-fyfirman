/**
 * Basic ESlint configuration
 * Use "off", "warn", "error" rather than 0,1,2 to read easier
 * 
 * Ref: https://github.com/kentcdodds/eslint-config-kentcdodds/blob/main/index.js
 */
module.exports = {
  "extends": [
    "plugin:prettier/recommended",
    "prettier",
    "kentcdodds",
    "kentcdodds/react",
    "kentcdodds/jsx-a11y",
    "plugin:@next/next/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "plugins": ["prettier"],
  "rules": {
    "@babel/new-cap": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "import/extensions": [
      "warn",
      "never",
      {
        "css": "ignorePackages",
        "json": "ignorePackages",
        "md": "ignorePackages"
      }
    ],
    "import/default": "error",
    "import/export": "error",
    "import/namespace": "error",
    "import/named": "error",
    "import/newline-after-import": "error",
    "import/no-unresolved": ["error", { "commonjs": true, "amd": true }],
    "import/no-cycle": "warn",
    "import/no-extraneous-dependencies": "error",
    "import/order": "error",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/jsx-sort-props": ["warn", { "reservedFirst": ["key"] }],
    "react/react-in-jsx-scope": ["off"],
    "@babel/no-unused-expressions": "off",
    "no-negated-condition": "off",
    "no-console": "warn",
    "@next/next/no-img-element": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "testing-library/no-container": "off",
    "testing-library/no-node-access": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  },
  "overrides": [
    {
      "files": ["**/*.(d.)?ts(x)?"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "project": "./tsconfig.json"
      },
      "rules": {}
    }
  ],
  "ignorePatterns": ["public/**/*.js"]
}
