# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.0.0](https://github.com/pangolinjs/stylelint-config/compare/v3.0.1...v4.0.0) (2022-12-31)


### ⚠ BREAKING CHANGES

* Complete overhaul for the linting rules.
* Suit CSS naming convention.
* Indentation with tabs.
* Consistent whitespaces.

### Features

* Overhauled linting rules ([e4a3809](https://github.com/pangolinjs/stylelint-config/commit/e4a3809fbd6eb269782321b2d221854ff9e593f1))


### Bug Fixes

* selector-class-pattern regex for modifiers ([dca7fad](https://github.com/pangolinjs/stylelint-config/commit/dca7fad4a0456aed45b64fc3e7de9fea928a46d6))

### [3.0.1](https://github.com/pangolinjs/stylelint-config/compare/v3.0.0...v3.0.1) (2022-03-26)

## [3.0.0](https://github.com/pangolinjs/stylelint-config/compare/v2.0.6...v3.0.0) (2021-10-23)


### ⚠ BREAKING CHANGES

* Stylelint 14 no longer automagically guesses the CSS syntax based on file extension.

Please add postcss-scss to your development dependencies:

```sh
npm install --save-dev postcss-scss
```

### Features

* Update to Stylelint 14 ([c3ba480](https://github.com/pangolinjs/stylelint-config/commit/c3ba480e6e635436022bdfb2f83bb32eac00af4e))

### [2.0.6](https://github.com/pangolinjs/stylelint-config/compare/v2.0.5...v2.0.6) (2021-06-18)

### [2.0.5](https://github.com/pangolinjs/stylelint-config/compare/v2.0.4...v2.0.5) (2021-04-07)


### Bug Fixes

* Don’t be strict about import extensions ([baef046](https://github.com/pangolinjs/stylelint-config/commit/baef046a212e9eb91eb33e0a7e6243faabf8c4e1))

### [2.0.4](https://github.com/pangolinjs/stylelint-config/compare/v2.0.3...v2.0.4) (2020-12-08)

### [2.0.3](https://github.com/pangolinjs/stylelint-config/compare/v2.0.2...v2.0.3) (2020-09-01)


### Bug Fixes

* Replace deprecated rules ([e1ab62e](https://github.com/pangolinjs/stylelint-config/commit/e1ab62e175328dc0d2f34ae6a3f815e4f1b2a146))

### [2.0.2](https://github.com/pangolinjs/stylelint-config/compare/v2.0.1...v2.0.2) (2020-07-08)

### [2.0.1](https://github.com/pangolinjs/stylelint-config/compare/v2.0.0...v2.0.1) (2020-05-26)


### Bug Fixes

* Make nesting depth a bit more liberal ([e5b6c18](https://github.com/pangolinjs/stylelint-config/commit/e5b6c18c4024eab7ebefcf100c115ecc5627b2ce))

## [2.0.0](https://github.com/pangolinjs/stylelint-config/compare/v1.8.1...v2.0.0) (2020-05-20)


### ⚠ BREAKING CHANGES

* Move dependencies to peerDependencies. This allows independent dependency updates for the package consumer. But it requires manual installation of these peers.

### Features

* Add tons of cosmetic changes ([d282a94](https://github.com/pangolinjs/stylelint-config/commit/d282a9452bc09306429fd8edc4354f0f3c4c4148))
* Make dependencies peers ([1677b87](https://github.com/pangolinjs/stylelint-config/commit/1677b87011e9eacb6ec353b2177688610163a7fa))

### [1.8.1](https://github.com/pangolinjs/stylelint-config/compare/v1.8.0...v1.8.1) (2020-03-31)

## [1.8.0](https://github.com/pangolinjs/stylelint-config/compare/v1.7.1...v1.8.0) (2020-02-15)


### Features

* Re-license under Hippocratic License ([fcfb2a3](https://github.com/pangolinjs/stylelint-config/commit/fcfb2a3b0271835d3fa99d3bc666a6700f7dca29))
* Update dependencies ([167ebf3](https://github.com/pangolinjs/stylelint-config/commit/167ebf3d10d3ac1ac9b32e29942920e420f27b32))

### [1.7.1](https://github.com/pangolinjs/stylelint-config/compare/v1.7.0...v1.7.1) (2020-01-07)

## [1.7.0](https://github.com/pangolinjs/stylelint-config/compare/v1.6.0...v1.7.0) (2019-10-27)


### Features

* Update for Sass Modules compatibility ([61d2510](https://github.com/pangolinjs/stylelint-config/commit/61d2510))

## [1.6.0](https://github.com/pangolinjs/stylelint-config/compare/v1.5.0...v1.6.0) (2019-09-20)


### Features

* Rename to `@pangolinjs/stylelint-config` ([69d39b3](https://github.com/pangolinjs/stylelint-config/commit/69d39b3))

## [1.5.0](https://github.com/pangolinjs/stylelint-config/compare/v1.4.2...v1.5.0) (2019-07-11)


### Features

* Rename `index.js` to `stylelint.config.js` ([e5519f1](https://github.com/pangolinjs/stylelint-config/commit/e5519f1))



### [1.4.2](https://github.com/pangolinjs/stylelint-config/compare/v1.4.1...v1.4.2) (2019-06-19)



### [1.4.1](https://github.com/pangolinjs/stylelint-config/compare/v1.4.0...v1.4.1) (2019-05-25)


### Bug Fixes

* Don't include npm-shrinkwrap.json and yarn.lock in distribution ([84ef7e8](https://github.com/pangolinjs/stylelint-config/commit/84ef7e8))



## 1.4.0
2019-03-12

- Allow multiline functions
- Update dependencies



## 1.3.0
2019-01-15

- Remove npm shrinkwrap
- Update dependencies



## 1.2.0
2018-12-21

- Update dependencies



## 1.1.0
2018-08-28

- Update dependencies



## 1.0.1
2018-07-27

- Update and include lockfiles



## 1.0.0
2018-07-27

- Setup
