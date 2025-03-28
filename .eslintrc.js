module.exports = {
    root: true,
    extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    overrides: [
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                'prettier/prettier': 'warn',
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        argsIgnorePattern: '^_',
                        varsIgnorePattern: '^_'
                    }
                ],
                'comma-dangle': 'off',
                'no-shadow': 'off',
                'no-undef': 'off',
                'no-empty-pattern': 'off'
            }
        }
    ]
};
