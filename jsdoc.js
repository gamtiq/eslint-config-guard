module.exports = {
    "rules": {
        "valid-jsdoc": [
            "error",
            {
                "matchDescription": "\\S{5,}",
                "prefer": {
                    "arg": "param",
                    "argument": "param",
                    "augments": "extends",
                    "returns": "return"
                },
                "preferType": {
                    "Boolean": "boolean",
                    "Number": "number",
                    "String": "string"
                },
                "requireReturn": false
            }
        ],
        "require-jsdoc": [
            "warn",
            {
                "require": {
                    "ClassDeclaration": true,
                    "FunctionDeclaration": true,
                    "MethodDefinition": true
                }
            }
        ]
    }
};
