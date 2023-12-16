module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'standard-with-typescript',
        'plugin:react/recommended',
        'prettier'
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                '.eslintrc.{js,cjs}'
            ],
            "parserOptions": {
                "sourceType": 'script'
            }
        }
    ],
    "parserOptions": {
        "project": '**\tsconfig.json',
        "ecmaVersion": 'latest',
        "sourceType": 'module'
    },
    "plugins": [
        'react'
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        // "@typescript-eslint/consistent-type-imports": "off"
    },
    // "parser": "@babel/eslint-parser",
    // "ignorePatterns": [".eslintrc.js"],
}
