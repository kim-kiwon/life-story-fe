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
    'selector-pseudo-element-colon-notation': 'double',
  },
}
