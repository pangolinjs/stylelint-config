/** @type {import('stylelint').Config} */
module.exports = {
	plugins: [
		'stylelint-order',
	],
	rules: {
		// Animations
		'keyframe-declaration-no-important': true,
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',

		// at-rules
		'at-rule-empty-line-before': ['always', {
			except: ['blockless-after-same-name-blockless', 'first-nested'],
			ignore: ['after-comment'],
		}],
		'at-rule-name-case': 'lower',
		'at-rule-name-newline-after': 'always-multi-line',
		'at-rule-name-space-after': 'always-single-line',
		'at-rule-no-unknown': true,
		'at-rule-no-vendor-prefix': true,
		'at-rule-semicolon-newline-after': 'always',
		'at-rule-semicolon-space-before': 'never',

		// Blocks
		'block-closing-brace-empty-line-before': 'never',
		'block-closing-brace-newline-before': 'always',
		'block-no-empty': true,
		'block-opening-brace-newline-after': 'always',
		'block-opening-brace-space-before': 'always',

		// Colors
		'alpha-value-notation': 'percentage',
		'color-function-notation': 'modern',
		'color-hex-case': 'lower',
		'color-hex-length': 'short',
		'color-no-invalid-hex': true,
		'hue-degree-notation': 'angle',

		// Comments
		'comment-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['after-comment', 'stylelint-commands'],
		}],
		'comment-no-empty': true,
		'comment-whitespace-inside': 'always',
		'comment-word-disallowed-list': [
			['/^TODO:/i', '/^FIX:/i', '/^FIXME:/i'],
			{ severity: 'warning' },
		],
		'no-invalid-double-slash-comments': true,

		// Custom properties
		'custom-property-no-missing-var-function': true,

		// Declarations
		'declaration-bang-space-after': 'never',
		'declaration-bang-space-before': 'always',
		'declaration-block-no-shorthand-property-overrides': true,
		'declaration-block-semicolon-newline-after': 'always',
		'declaration-block-semicolon-space-before': 'never',
		'declaration-block-single-line-max-declarations': 0,
		'declaration-block-trailing-semicolon': 'always',
		'declaration-colon-newline-after': 'always-multi-line',
		'declaration-colon-space-after': 'always-single-line',
		'declaration-colon-space-before': 'never',
		'declaration-no-important': true,
		'declaration-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['after-comment', 'after-declaration'],
		}],

		// Fonts
		'font-family-name-quotes': 'always-unless-keyword',
		'font-family-no-duplicate-names': true,
		'font-family-no-missing-generic-family-keyword': true,
		'font-weight-notation': 'named-where-possible',

		// Functions
		'function-calc-no-unspaced-operator': true,
		'function-comma-newline-after': 'always-multi-line',
		'function-comma-newline-before': 'never-multi-line',
		'function-comma-space-after': 'always-single-line',
		'function-comma-space-before': 'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines': 0,
		'function-name-case': 'lower',
		'function-no-unknown': true,
		'function-parentheses-newline-inside': 'always-multi-line',
		'function-parentheses-space-inside': 'never-single-line',
		'function-url-no-scheme-relative': true,
		'function-url-quotes': 'always',
		'function-whitespace-after': 'always',

		// Imports
		'import-notation': 'string',
		'no-duplicate-at-import-rules': true,
		'no-invalid-position-at-import-rule': true,

		// Media queries
		'media-feature-colon-space-after': 'always',
		'media-feature-colon-space-before': 'never',
		'media-feature-name-case': 'lower',
		'media-feature-name-no-unknown': true,
		'media-feature-name-no-vendor-prefix': true,
		'media-feature-parentheses-space-inside': 'never',
		'media-feature-range-operator-space-after': 'always',
		'media-feature-range-operator-space-before': 'always',
		'media-query-list-comma-newline-after': 'always-multi-line',
		'media-query-list-comma-newline-before': 'never-multi-line',
		'media-query-list-comma-space-after': 'always-single-line',
		'media-query-list-comma-space-before': 'never',

		// Numbers
		'number-leading-zero': 'always',
		'number-no-trailing-zeros': true,

		// Properties
		'property-case': 'lower',
		'property-no-unknown': true,
		'property-no-vendor-prefix': true,
		'shorthand-property-no-redundant-values': true,

		// Selectors
		'no-duplicate-selectors': true,
		'selector-attribute-brackets-space-inside': 'never',
		'selector-attribute-operator-space-after': 'never',
		'selector-attribute-operator-space-before': 'never',
		'selector-attribute-quotes': 'always',
		'selector-class-pattern': ['^(u(-[a-z]+)?|is|has|([A-Z][a-z]+)+)(--?[a-z][A-Za-z]*)?$', {
			message: 'Expected selector format ComponentName[-descendantName|--modifierName], u-[condition-]utilityName, {is|has}-stateName',
		}],
		'selector-combinator-space-after': 'always',
		'selector-combinator-space-before': 'always',
		'selector-descendant-combinator-no-non-space': true,
		'selector-list-comma-newline-after': 'always',
		'selector-list-comma-newline-before': 'never-multi-line',
		'selector-max-empty-lines': 1,
		'selector-max-id': 0,
		'selector-no-qualifying-type': true,
		'selector-no-vendor-prefix': true,
		'selector-not-notation': 'complex',
		'selector-pseudo-class-case': 'lower',
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-class-parentheses-space-inside': 'never',
		'selector-pseudo-element-case': 'lower',
		'selector-pseudo-element-colon-notation': 'double',
		'selector-pseudo-element-no-unknown': true,
		'selector-type-case': 'lower',
		'selector-type-no-unknown': [true, {
			ignore: ['custom-elements'],
		}],

		// Units
		'unit-case': 'lower',
		'unit-no-unknown': true,
		'length-zero-no-unit': true,

		// Values
		'value-keyword-case': 'lower',
		'value-list-comma-newline-after': 'always-multi-line',
		'value-list-comma-newline-before': 'never-multi-line',
		'value-list-comma-space-after': 'always-single-line',
		'value-list-comma-space-before': 'never',
		'value-list-max-empty-lines': 0,
		'value-no-vendor-prefix': true,

		// Whitespace
		indentation: 'tab',
		linebreaks: 'unix',
		'max-empty-lines': [1, {
			ignore: ['comments'],
		}],
		'no-empty-first-line': true,
		'no-empty-source': true,
		'no-eol-whitespace': true,
		'no-irregular-whitespace': true,
		'no-missing-end-of-source-newline': true,
		'rule-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['after-comment'],
		}],
		'string-no-newline': true,

		// Miscellaneous
		'annotation-no-unknown': true,
		'named-grid-areas-no-invalid': true,
		'no-extra-semicolons': true,
		'string-quotes': 'double',

		// Order
		'order/order': [
			'custom-properties',
			'declarations',
			'rules',
		],
	},
}
