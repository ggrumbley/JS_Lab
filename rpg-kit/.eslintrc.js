module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'jest', 'jest-dom', 'testing-library'],
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    /*
     * https://github.com/prettier/eslint-config-prettier/#max-len
     * Because Prettier cannot format code comments, we set an ESLint rule to
     * display error for comments greater than 100. Prettier will handle our
     * line lengths for code, so we don't need an ESLint rule for it. So we
     * override the default max-len value for 'code' and set it to 999 to
     * prevent ESLint red squiggles on our pre-prettier-formatted code.
     */
    'max-len': ['error', { code: 999, comments: 100, ignoreUrls: true }],

    // Multiline comments should be starred block style
    'multiline-comment-style': ['error', 'starred-block'],

    /*
     * https://github.com/prettier/eslint-config-prettier/#lines-around-comment
     * eslint-config-prettier disables ESLint rules about blank lines before
     * and after comments, so we re-enable them here
     */
    'lines-around-comment': [
      'error',
      {
        /*
         * Prettier won't let you have a blank line before a block comment,
         * so this must be set to false
         */
        beforeBlockComment: false,

        afterBlockComment: false,

        /*
         * Prettier won't let you have a blank line before a line comment,
         * so this must be set to false
         */
        beforeLineComment: false,

        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,

        /*
         * Prettier won't let you have a blank line before comments at object
         * start, so this must be set to true
         */
        allowObjectStart: true,

        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
      },
    ],

    // Project preference: a file with a single export will not enforce using default
    'import/prefer-default-export': 'off',

    // Lambda Callbacks > Named Function Expressions
    'react/display-name': 'off',

    // We live dangerously in the Blockiverse and use dangerouslySetInnerHTML for WYSIWYG data
    'react/no-danger': 'off',

    // Not needed in React 18: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',

    // Not needed in React 18: https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/react-in-jsx-scope': 'off',

    // Not needed as we are using TS and default params
    'react/require-default-props': 'off',

    // Not needed as we are using TS instead of prop-types
    'react/prop-types': 'off',

    // Prop spreading is useful in a component library context
    'react/jsx-props-no-spreading': 'off',

    // Project preference: allow arrow fn functional components
    'react/function-component-definition': 'off',

    // Fragments are sometimes needed to safely pass children in expressions
    'react/jsx-no-useless-fragment': [
      2,
      {
        allowExpressions: true,
      },
    ],

    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['S.StyledInput'],
      },
    ],
  },
  overrides: [
    // Overrides for TS
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        // Allow importing from devDependencies in matching files
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.test.{ts,tsx}',
              'src/setupTests.ts',
              '**/*.stories.{tsx,mdx}',
              'commitlint.config.ts',
            ],
          },
        ],
        /*
         * Allow creating an interface that extends another interface but doesn't
         * provide any additional properties.
         *
         * `interface A extends b {}` ✅
         * `interface A extends b, c {}` ✅
         * `interface A {}` ❌
         *
         * Without this, we will end up with an inconsistent mix of `type`s and
         * `interface`s.
         */
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
      },
    },
    // Overrides for Jest tests
    {
      files: ['*.test.?(ssr.){ts,tsx}'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
    },
    // Overrides for Storybook stories
    {
      files: ['*.stories.tsx'],
      extends: ['plugin:storybook/recommended', 'plugin:storybook/csf'],
      rules: {
        // We sometimes use `alert` to quickly demonstrate an `onClick`.
        'no-alert': 'off',
      },
    },
    // Overrides for Storybook config
    {
      files: ['.storybook/**/*'],
      rules: {
        // Unable to get import/* rules to work as expected.
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        // Storybook wants .js
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
        // ESLint complains about unused "React", but removing causes runtime error.
        'no-unused-vars': ['error', { varsIgnorePattern: 'React' }],
      },
    },
    // Prettier must go last
    {
      files: ['*'],
      extends: ['prettier'],
    },
  ],
}
