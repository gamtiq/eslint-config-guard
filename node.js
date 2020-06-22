module.exports = {
    "env": {
        "node": true
    },
    "extends": [
        "plugin:node/recommended"
    ],
    "rules": {
        "no-console": "off",

        // Node.js and CommonJS
        "node/callback-return": "error",
        "node/global-require": "error",
        "node/handle-callback-err": "error",
        "node/no-mixed-requires": "error",
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/no-process-env": "error",
        "node/no-process-exit": "error"
    }
};
