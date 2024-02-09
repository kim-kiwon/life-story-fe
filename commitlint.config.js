module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(#\d+|no\-issue)\]\s(\w+):\s(.+)$/,
      headerCorrespondence: ['issue', 'type', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-pattern': (parsed) => {
          const { issue, type, subject } = parsed

          if (!issue || !type || !subject) {
            return [
              false,
              'header must be in format "[#IssueNo|no-issue] type: subject" => e.g. [#1] chore: add eslint config',
            ]
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
