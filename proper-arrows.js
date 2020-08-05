module.exports = {
    "plugins": [
        "@getify/proper-arrows"
    ],
    "rules": {
        "@getify/proper-arrows/name": "off",
        "@getify/proper-arrows/params": [
            "error",
            {
                "unused": "trailing",
                "count": 3,
                "length": 2,
                "allowed": [ "e" ]
            },
        ],
        "@getify/proper-arrows/return": [
            "error",
            {
                "chained": true,
                "object": true,
                "sequence": true,
                "ternary": 1
            }
        ],
        "@getify/proper-arrows/this": [
            "error",
            "never-global"
        ],
        "@getify/proper-arrows/where": "error"
    }
};
