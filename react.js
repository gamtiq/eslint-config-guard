module.exports = {
    "extends": [
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        // React
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-array-index-key": "error",
        "react/no-arrow-function-lifecycle": "error",
        "react/no-danger": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-invalid-html-attribute": "error",
        "react/no-multi-comp": [
            "error",
            {
                "ignoreStateless": true
            }
        ],
        "react/no-unused-prop-types": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
        "react/no-namespace": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-this-in-sfc": "error",
        "react/no-typos": "error",
        "react/no-unsafe": "error",
        "react/no-unused-state": "error",
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": false
            }
        ],
        "react/sort-comp": "error",
        "react/sort-prop-types": [
            "warn",
            {
                "callbacksLast": true,
                "ignoreCase": true,
                "requiredFirst": true
            }
        ],
        "react/void-dom-elements-no-children": "error",

        // JSX
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-newline": [
            "error",
            "consistent"
        ],
        "react/jsx-equals-spacing": [
            "error",
            "never"
        ],
        "react/jsx-handler-names": "error",
        "react/jsx-indent": [
            "error",
            4,
            {
                "checkAttributes": true,
                "indentLogicalExpressions": true
            }
        ],
        "react/jsx-key": [
            "error",
            {
                "checkFragmentShorthand": true,
                "warnOnDuplicates": true
            }
        ],
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 1,
                "when": "multiline"
            }
        ],
        "react/jsx-no-bind": [
            "error",
            {
                "ignoreRefs": true
            }
        ],
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-duplicate-props": [
            "error",
            {
                "ignoreCase": true
            }
        ],
        "react/jsx-no-leaked-render": "error",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-target-blank": [
            "error",
            {
                "warnOnSpreadAttributes": true
            }
        ],
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-one-expression-per-line": [
            "error",
            {
                "allow": "single-child"
            }
        ],
        "react/jsx-pascal-case": "error",
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-sort-default-props": "warn",
        "react/jsx-tag-spacing": "error",
        "react/jsx-wrap-multilines": "error"
    }
};
