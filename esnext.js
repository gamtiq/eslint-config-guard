module.exports = {
    "env": {
        "es6": true
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        // ECMAScript 6
        "arrow-body-style": [
            "error",
            "as-needed",
            {
                "requireReturnForObjectLiteral": true
            }
        ],
        "arrow-parens": [
            "error",
            "always"
        ],
        "arrow-spacing": "error",
        "default-param-last": "error",
        "generator-star-spacing": [
            "error",
            "before"
        ],
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-constructor-return": "error",
        "no-duplicate-imports": "error",
        "no-import-assign": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "warn",
        "no-useless-rename": "error",
        "no-var": "error",
        "prefer-arrow-callback": [
            "error",
            {
                "allowNamedFunctions": true
            }
        ],
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "rest-spread-spacing": [
            "error",
            "never"
        ],
        "symbol-description": "error",
        "yield-star-spacing": [
            "error",
            "before"
        ]
    }
};
