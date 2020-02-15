# <img alt="" src="https://cdn.jsdelivr.net/gh/pangolinjs/brand@master/icon/icon.svg" width="24"> Pangolin.js stylelint config

[![NPM version][npm-image]][npm-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![JavaScript Standard Style][standard-image]][standard-url]

Shareable stylelint config for Pangolin.js based on [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

## Installation

```bash
npm install @pangolinjs/stylelint-config --save-dev
```

## Usage

Create a [stylelint configuration](https://stylelint.io/user-guide/configuration/) either as a JSON or a JavaScript file:

### `.stylelintrc.json`

```json
{
  "extends": [
    "@pangolinjs/stylelint-config"
  ]
}
```

### `stylelint.config.js`

```js
module.exports = {
  extends: [
    '@pangolinjs/stylelint-config'
  ]
}
```

### Modifying config

Overwrite any rule from this config:

```json
{
  "extends": [
    "@pangolinjs/stylelint-config"
  ],
  "rules": {
    "number-leading-zero": null
  }
}
```

stylelint has an extensive [list of rules](https://stylelint.io/user-guide/rules/). Additional rules are provided by the following plugins:

- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss).

## Configured rules

This config sets a few extra rules in addition to the ones from `stylelint-config-sass-guidelines`:

- [`comment-word-blacklist`](https://stylelint.io/user-guide/rules/comment-word-blacklist/): Highlight comments starting with `TODO:`, `FIX:`, and `FIXME` (warning).
- [`declaration-no-important`](https://stylelint.io/user-guide/rules/declaration-no-important/): Disallow `!important`.
- [`max-nesting-depth`](https://stylelint.io/user-guide/rules/max-nesting-depth/): Limit the nesting depth to 3 (warning).
- [`no-duplicate-selectors`](https://stylelint.io/user-guide/rules/no-duplicate-selectors/): Disallow duplicate selectors.
- [`no-unknown-animations`](https://stylelint.io/user-guide/rules/no-unknown-animations/): Disallow unknown animations.
- [`order/properties-alphabetical-order`](https://github.com/hudochenkov/stylelint-order/tree/master/rules/properties-alphabetical-order): Allow any ordering style.
- [`scss/dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dollar-variable-colon-space-after): Enforce space after variable colon for single line declarations.
- [`selector-class-pattern`](https://stylelint.io/user-guide/rules/selector-class-pattern/): Only allow lowercase classes with underscores or hyphens.
- [`selectore-nested-pattern`](https://stylelint.io/user-guide/rules/selector-nested-pattern/): Don’t allow BEM-style class names through nesting ([concatenation for class names is considered bad practice](https://csswizardry.com/2017/02/code-smells-in-css-revisited/#string-concatenation-for-classes))
- [`string-quotes`](https://stylelint.io/user-guide/rules/string-quotes/): Only allow double quotes to align with the official specs and MDN.

[npm-image]: https://img.shields.io/npm/v/@pangolinjs/stylelint-config.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@pangolinjs/stylelint-config
[dependencies-url]: https://www.npmjs.com/package/@pangolinjs/stylelint-config?activeTab=dependencies

[dependencies-image]: https://img.shields.io/david/pangolinjs/stylelint-config.svg?style=flat-square

[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://standardjs.com
