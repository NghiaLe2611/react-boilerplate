import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            // Bỏ qua hoặc chỉ cảnh báo cho no-explicit-any
            '@typescript-eslint/no-explicit-any': 'warn', // Hoặc 'off' để bỏ qua hoàn toàn
            // Bỏ qua hoặc chỉ cảnh báo cho no-unused-vars
            '@typescript-eslint/no-unused-vars': ['warn', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_'
            }],
            // Bỏ qua hoặc chỉ cảnh báo cho react/display-name
            'react/display-name': 'warn', // Hoặc 'off' để bỏ qua hoàn toàn
            // Bỏ qua hoặc chỉ cảnh báo cho explicit-function-return-type
            '@typescript-eslint/explicit-function-return-type': 'warn', // Hoặc 'off' để bỏ qua hoàn toàn
        },
    },
])
