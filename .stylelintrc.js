module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'block-no-empty': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'color-hex-case': 'lower',
    'function-name-case': null,
    'declaration-colon-newline-after': null,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-no-unknown': null,
    'value-no-vendor-prefix': null,
    'value-keyword-case': null,
    'property-no-vendor-prefix': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': null,
    'function-comma-newline-after': null,
    'no-eol-whitespace': null,
    'function-parentheses-newline-inside': null,
  },
}
