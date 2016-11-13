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
    "rules": {
        // React
        "react/no-children-prop": "error",
        "react/no-danger": "error",
        "react/no-danger-with-children": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-multi-comp": [
            "error",
            {
                "ignoreStateless": true
            }
        ],
        "react/no-string-refs": "warn",
        "react/no-unescaped-entities": "error",
        "react/no-unused-prop-types": "error",
        "react/prefer-es6-class": "error",
        "react/prefer-stateless-function": "error",
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

        // JSX
        "react/jsx-equals-spacing": [
            "error",
            "never"
        ],
        "react/jsx-handler-names": "error",
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 1
            }
        ],
        "react/jsx-no-bind": [
            "error",
            {
                "ignoreRefs": true
            }
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-duplicate-props": [
            "error",
            {
                "ignoreCase": true
            }
        ],
        "react/jsx-no-target-blank": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-space-before-closing": "error",
        "react/jsx-wrap-multilines": "error"
    }
};
