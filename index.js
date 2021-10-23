/** @type {import('stylelint').Config} */
module.exports = {
  customSyntax: 'postcss-scss',
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-disallowed-list': ['debug'],
    'at-rule-name-case': 'lower',
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'block-opening-brace-space-before': 'always',
    'color-function-notation': 'modern',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'comment-word-disallowed-list': [
      ['/^TODO:/i', '/^FIX:/i', '/^FIXME:/i'],
      { severity: 'warning' }
    ],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-unless-keyword',
    'function-calc-no-unspaced-operator': true,
    'function-comma-space-after': 'always-single-line',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'hue-degree-notation': 'angle',
    indentation: 2,
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    linebreaks: 'unix',
    'max-empty-lines': 1,
    'max-nesting-depth': [
      3,
      {
        severity: 'warning',
        ignoreAtRules: [
          'each',
          'media',
          'supports',
          'include'
        ]
      }
    ],
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend'
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true
        },
        'rules'
      ]
    ],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true,
    'shorthand-property-no-redundant-values': true,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': [
      '^[a-z0-9\\_-]+$',
      { message: 'Selector should be written in lowercase with underscores or hyphens' }
    ],
    'selector-list-comma-newline-after': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-nested-pattern': [
      '^(?!(&__)|(&--)).+',
      { message: 'Creating BEM classes with Sass nesting is not allowed' }
    ],
    'selector-no-qualifying-type': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true
  }
}
