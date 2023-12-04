module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [
        "node"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'node/no-unpublished-require': ['error', { allowModules: ['koa', 'koa-logger', 'koa-body', '@koa/cors'] }],
        'node/no-missing-require': ['error', { allowModules: ['koa', 'koa-logger', 'koa-body', '@koa/cors'] }],
        'no-unused-vars': 'off',
    }
}
