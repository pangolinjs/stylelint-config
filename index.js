module.exports = {
  extends: 'stylelint-config-sass-guidelines',
  rules: {
    'comment-word-blacklist': [['/^TODO:/i', '/^FIX:/i', '/^FIXME:/i'], {
      severity: 'warning'
    }],
    'declaration-no-important': true,
    'function-parentheses-space-inside': 'never-single-line',
    'function-parentheses-newline-inside': 'always-multi-line',
    'max-nesting-depth': [3, {
      severity: 'warning'
    }],
    'no-duplicate-selectors': true,
    'no-unknown-animations': true,
    'order/properties-alphabetical-order': null,
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'selector-class-pattern': ['^[a-z0-9\\_-]+$', {
      message: 'Selector should be written in lowercase with underscores or hyphens'
    }],
    'selector-nested-pattern': ['^(?!(&__)|(&--)).+', {
      message: 'Creating BEM classes with Sass nesting is not allowed'
    }],
    'string-quotes': 'double'
  }
}
