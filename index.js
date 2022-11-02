module.exports = {
    "extends": [
        "eslint:recommended"
    ],
    "reportUnusedDisableDirectives": true,
    "rules": {
        // Possible Problems
        "no-console": "error",
        "no-constant-binary-expression": "error",
        "no-promise-executor-return": "error",
        "no-template-curly-in-string": "warn",
        "no-unreachable-loop": "error",
        "no-unused-private-class-members": "error",
        "use-isnan": [
            "error",
            {
                "enforceForIndexOf": true,
                "enforceForSwitchCase": true
            }
        ],
        
        // Best Practices
        "accessor-pairs": [
            "error",
            {
                "enforceForClassMembers": true
            }
        ],
        "array-callback-return": "error",
        "block-scoped-var": "error",
        "class-methods-use-this": "warn",
        "consistent-return": "error",
        "default-case-last": "error",
        "dot-location": [
            "warn",
            "property"
        ],
        "dot-notation": [
            "error",
            {
                "allowKeywords": false
            }
        ],
        "eqeqeq": "error",
        "grouped-accessor-pairs": [
            "error",
            "getBeforeSet"
        ],
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": [
            "error",
            {
                "enforceConst": true,
                "ignore": [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 60, 100, 1000],
                "ignoreArrayIndexes": true,
                "ignoreDefaultValues": true
            }
        ],
        "no-multi-spaces": [
            "warn",
            {
                "ignoreEOLComments": true
            }
        ],
        "no-multi-str": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-script-url": "error",
        "no-self-assign": [
            "error",
            {
                "props": true
            }
        ],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unsafe-negation": [
            "error",
            {
                "enforceForOrderingRelations": true
            }
        ],
        "no-unsafe-optional-chaining": [
            "error",
            {
                "disallowArithmeticOperators": true
            }
        ],
        "no-unused-expressions": [
            "error",
            {
                "enforceForJSX": true
            }
        ],
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-void": "warn",
        "no-warning-comments": [
            "warn",
            {
                "terms": ["fixme", "fix me"],
                "location": "anywhere"
            }
        ],
        "prefer-regex-literals": "error",
        "radix": "error",
        "vars-on-top": "error",
        "wrap-iife": [
            "error",
            "inside",
            {
                "functionPrototypeMethods": true
            }
        ],
        "yoda": [
            "error",
            "never",
            {
                "exceptRange": true
            }
        ],

        // Strict Mode
        "strict": "error",

        // Variables
        "no-catch-shadow": "error",
        "no-label-var": "error",
        "no-shadow": [
            "warn",
            {
                "builtinGlobals": true,
                "hoist": "functions"
            }
        ],
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-use-before-define": "error"
    }
};
