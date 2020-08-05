# eslint-config-guard

Set of configuration files ([shareable configs](https://eslint.org/docs/developer-guide/shareable-configs))
for [ESLint](https://eslint.org) to guard/protect from problems in different areas of JavaScript development.

Includes:

* `guard` - contains rules for possible errors, best practices, strict mode and variables; extends `eslint:recommended`;
* `guard/editor` - rules corresponding to editor preferences (like [`editorconfig`](https://editorconfig.org/))
    such as `eol-last`, `linebreak-style`, `no-trailing-spaces`;
* `guard/esnext` - configuration for ECMAScript 6/2015+ features;
* `guard/indent` - configuration of `indent` rule;
* `guard/jsdoc` - contains rules related to [JSDoc](https://jsdoc.app/);
* `guard/no-prettier` - adds `"prettier/prettier": "off"` to rules; can be helpful to use with [TSDX](https://github.com/jaredpalmer/tsdx);
* `guard/node` - configuration related to Node.js and CommonJS;
* `guard/proper-arrows` - configuration for stylistic rules related to arrow functions (see [`@getify/eslint-plugin-proper-arrows`](https://github.com/getify/eslint-plugin-proper-arrows));
* `guard/react` - configuration for React and JSX; extends [`plugin:react/recommended`](https://github.com/yannickcr/eslint-plugin-react);
* `guard/style` - rules for stylistic issues;
* `guard/test` - appropriate for use in tests (relaxes some rules from other configs);
* `guard/test-jest` - appropriate for use in [Jest](https://jestjs.io/) tests; extends `guard/test`;
* `guard/test-mocha` - appropriate for use in [Mocha](https://mochajs.org/) tests; extends `guard/test`;
* `guard/typescript` - configuration for TypeScript; extends `guard/esnext` and [`plugin:@typescript-eslint/recommended`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin);
* `guard/typescript-ext` - configuration for TypeScript containing type-aware rules; extends `guard/typescript` and [`plugin:@typescript-eslint/recommended-requiring-type-checking`](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md);
  to use the configuration you should specify `parserOptions.project` in ESLint config file (see [details](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)).

The following files are combined configs which extend other configs:

* `guard/ext-style` - extends `guard/indent` and `guard/style`;
* `guard/optimum` - extends `guard` and `guard/ext-style`;
* `guard/optimum-next` - extends `guard/optimum` and `guard/esnext`.

## Installation

    npm install eslint-config-guard --save-dev

If you are going to use `guard/proper-arrows` you should install [`@getify/eslint-plugin-proper-arrows`](https://github.com/getify/eslint-plugin-proper-arrows):

    npm install @getify/eslint-plugin-proper-arrows --save-dev

If you are going to use `guard/react` you should install [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react):

    npm install eslint-plugin-react --save-dev

If you are going to use `guard/typescript` or `guard/typescript-ext` you should install [`@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin):

    npm install @typescript-eslint/eslint-plugin --save-dev

## Usage

In a `.eslintrc.json` file:

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
            "guard/proper-arrows",
            "guard/react"
        ]
    }
}
```

## License
Copyright (c) 2016-2020 Denis Sikuler  
Licensed under the MIT license.
