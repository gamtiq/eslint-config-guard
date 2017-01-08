# eslint-config-guard

Set of configuration files ([shareable configs](http://eslint.org/docs/developer-guide/shareable-configs))
for [ESLint](http://eslint.org) to guard from problems in different areas of JavaScript development.

Includes:

* `guard` - contains rules for possible errors, best practices, strict mode and variables; extends `eslint:recommended`;
* `guard/editor` - rules corresponding to editor preferences (like [`editorconfig`](http://editorconfig.org/))
    such as `eol-last`, `linebreak-style`, `no-trailing-spaces`;
* `guard/esnext` - configuration for ECMAScript 6 features;
* `guard/indent` - configuration of `indent` rule;
* `guard/jsdoc` - contains rules related to [JSDoc](http://usejsdoc.org/);
* `guard/node` - configuration related to Node.js and CommonJS;
* `guard/react` - configuration for React and JSX; extends [`plugin:react/recommended`](https://github.com/yannickcr/eslint-plugin-react);
* `guard/style` - rules for stylistic issues;
* `guard/test` - appropriate for use in tests (relaxes some rules from other configs);
* `guard/test-mocha` - appropriate for use in [Mocha](http://mochajs.org/) tests; extends `guard/test`.

The following files are combined configs which extend other configs:

* `guard/ext-style` - extends `guard/indent` and `guard/style`;
* `guard/optimum` - extends `guard` and `guard/ext-style`;
* `guard/optimum-next` - extends `guard/optimum` and `guard/esnext`.

## Installation

    npm install eslint-config-guard --save-dev

## Usage

In a `.eslintrc` file:

```json
{
    "extends": [
        "guard",
        "guard/node"
    ]
}
```

In a `package.json`:

```json
{
    "eslintConfig": {
        "extends": [
            "guard/optimum-next",
            "guard/react"
        ]
    }
}
```

## License
Copyright (c) 2016-2017 Denis Sikuler  
Licensed under the MIT license.
