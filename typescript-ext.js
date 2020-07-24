module.exports = {
    extends: [
        "./typescript",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    rules: {
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        "@typescript-eslint/no-unnecessary-condition": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/require-array-sort-compare": [
            "error",
            {
                "ignoreStringArrays": true
            }
        ],
        "@typescript-eslint/restrict-plus-operands": [
            "error",
            {
                "checkCompoundAssignments": true
            }
        ]
    }
};
