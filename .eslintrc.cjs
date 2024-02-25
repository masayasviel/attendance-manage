module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                '.eslintrc.{js,cjs}'
            ],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser'
    },
    plugins: [
        '@typescript-eslint',
        'vue',
        'import',
        'unused-imports'
    ],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 2],
        'eol-last': ['error', 'always'],
        'unused-imports/no-unused-imports': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    [
                        'builtin',
                        'external'
                    ],
                    [
                        'internal',
                        'parent',
                        'sibling'
                    ]
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
            }
        ]
    }
}
