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
        "project": '**/tsconfig.json',
        "ecmaVersion": 'latest',
        "sourceType": 'module'
    },
    "plugins": [
        'react'
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        // "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/no-misused-promises": "off", // HOF를 배우고 나서 wrapAsync 함수로 해결 가능(그 전까지는 off 할 것)
        // 새로운 api인 pratice의 몇가지 규칙 임시로 꺼줌
        // "@typescript-eslint/consistent-type-definitions": "off",
        // "@typescript-eslint/array-type": "off",
        // "@typescript-eslint/consistent-indexed-object-style": "off",
        // / 새로운 api인 pratice의 몇가지 규칙 임시로 꺼줌
    },
    // "parser": "@babel/eslint-parser",
    "ignorePatterns": [".eslintrc.js"],
}
