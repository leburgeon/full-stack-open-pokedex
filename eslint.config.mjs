import js from '@eslint/js'
import react from 'eslint-plugin-react'
import jest from 'eslint-plugin-jest'

export default [
  ...js.configs.recommended,
  {
    plugins: {
      react,
      jest
    },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        ...js.environments.node.globals,
        ...jest.environments.globals,
        window: 'readonly',
        document: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      eqeqeq: 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'error',
      'react/prop-types': 'off'
    }
  }
]