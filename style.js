module.exports = {
    "rules": {
        // Stylistic Issues
        "array-bracket-spacing": [
            "error",
            "never",
            {
                "arraysInArrays": true,
                "objectsInArrays": true
            }
        ],
        "block-spacing": "error",
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "camelcase": "error",
        "comma-dangle": [
            "error",
            {
                "arrays": "only-multiline",
                "objects": "only-multiline",
                "imports": "only-multiline",
                "exports": "only-multiline",
                "functions": "never"
            }
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": [
            "error",
            "never",
            {
                "enforceForClassMembers": true
            }
        ],
        "consistent-this": [
            "error",
            "that"
        ],
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": [
            "error",
            "as-needed"
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                "before": true,
                "after": true
            }
        ],
        "max-nested-callbacks": [
            "error",
            10
        ],
        "max-params": [
            "error",
            3
        ],
        "max-statements-per-line": [
            "error",
            {
                "max": 1
            }
        ],
        "multiline-ternary": "error",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": [
            "error",
            {
                "ignoreNonDeclaration": true
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 2
            }
        ],
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-unneeded-ternary": [
            "error",
            {
                "defaultAssignment": false
            }
        ],
        "no-whitespace-before-property": "error",
        "one-var-declaration-per-line": [
            "error",
            "initializations"
        ],
        "padding-line-between-statements": [
            "error",
            { "blankLine": "always", "prev": "directive", "next": "*" },
            { "blankLine": "any", "prev": "directive", "next": "directive" },
            { "blankLine": "always", "prev": "*", "next": "return" }
        ],
        "quote-props": [
            "error",
            "as-needed",
            {
                "keywords": true,
                "numbers": true,
                "unnecessary": false
            }
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "semi-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "space-before-blocks": "error",
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "never",
                "named": "never",
                "asyncArrow": "always"
            }
        ],
        "space-infix-ops": "error",
        "space-unary-ops": [
            "error",
            {
                "words": true,
                "nonwords": false,
                "overrides": {
                    "!": true,
                    "!!": true
                }
            }
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "exceptions": ["-", "+", "*"]
            }
        ]
    }
};
