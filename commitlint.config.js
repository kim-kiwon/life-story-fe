module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+):\s(.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-pattern': (parsed) => {
          const { type, subject } = parsed

          if (!type || !subject) {
            return [false, 'header must be in format "type: subject" => e.g. chore: add eslint config']
          }

          return [true, '']
        },
      },
    },
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'comment',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'remove',
        'revert',
        'style',
        'test',
        'try',
      ],
    ],
    'header-match-pattern': [2, 'always'],
  },
}
