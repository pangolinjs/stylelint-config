# <img alt="" src="https://cdn.jsdelivr.net/gh/pangolinjs/brand@main/icon/icon.svg" width="24"> Pangolin.js stylelint config

Shareable stylelint config for Pangolin.js based on [stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

## Installation

Install the configuration and all peer dependencies with one command:

```bash
npm install --save-dev \
  @pangolinjs/stylelint-config \
  stylelint \
  stylelint-order \
  stylelint-scss
```

## Usage

### Create a config

Create a [stylelint configuration](https://stylelint.io/user-guide/configuration/) either as a JSON or a JavaScript file:

#### `.stylelintrc.json`

```json
{
  "extends": [
    "@pangolinjs/stylelint-config"
  ]
}
```

#### `stylelint.config.js`

```js
module.exports = {
  extends: [
    '@pangolinjs/stylelint-config'
  ]
}
```

### Modifying config and rules

Overwrite rules from the default config:

#### JSON configuration file

```json
{
  "extends": [
    "@pangolinjs/stylelint-config"
  ],
  "rules": {
    "number-leading-zero": false
  }
}
```

#### JavaScript configuration file

```js
module.exports = {
  extends: [
    '@pangolinjs/stylelint-config'
  ],
  rules: {
    'number-leading-zero': false
  }
}
```

stylelint has an extensive [list of rules](https://stylelint.io/user-guide/rules/). Additional rules are provided by the following plugins:

- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss).
