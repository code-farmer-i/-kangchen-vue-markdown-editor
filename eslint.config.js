import tseslint from 'typescript-eslint';
import importX from 'eslint-plugin-import-x';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import eslintPluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import { builtinModules } from 'node:module';

export default tseslint.config(
  // rules
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    rules: eslintConfigPrettier.rules,
  },
  // globals
  {
    languageOptions: {
      globals: globals.es2019,
    },
  },
  {
    plugins: {
      'import-x': importX,
    },
  },
  // rules reset
  {
    rules: {
      quotes: ['warn', 'single'],
      'no-new': 'off',
      'no-shadow': 'off',
      'no-bitwise': 'off',
      'func-names': 'off',
      'no-console': 'off',
      'no-plusplus': 'off',
      'default-case': 'off',
      'prefer-template': 'off',
      'consistent-return': 'off',
      'no-param-reassign': 'off',
      'no-nested-ternary': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-expressions': 'off',
      'no-restricted-globals': 'off',
      'class-methods-use-this': 'off',
      'prefer-destructuring': ['error', { object: true, array: false }],
      // typescript-eslint
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  {
    files: ['packages/**'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // vue
  {
    files: ['**/*.vue'],
    extends: [
      // parser
      {
        languageOptions: {
          parser: vueParser,
          parserOptions: {
            parser: tseslint.parser,
            ecmaVersion: 2019,
            ecmaFeatures: {
              jsx: true,
            },
            sourceType: 'module',
            extraFileExtensions: ['.vue'],
          },
        },
      },
      // rules reset
      {
        rules: {
          'vue/no-v-html': 'off',
          'vue/attributes-order': 'off',
          'vue/require-v-for-key': 'off',
          'vue/require-default-prop': 'off',
          'vue/no-unused-components': 'off',
          'vue/return-in-computed-property': 'off',
          'vue/multi-word-component-names': 'off',
        },
      },
    ],
  },

  // node
  {
    files: ['scripts/**', '**/eslint.config.*', '**/vite.config.*'],
    extends: [
      // globals
      {
        languageOptions: {
          globals: globals.node,
        },
      },
      // rules reset
      {
        rules: {
          'callback-return': 'error',
          eqeqeq: 'error',
          'getter-return': 'error',
          'handle-callback-err': 'error',
          'id-blacklist': 'error',
          'id-match': 'error',
          'max-depth': 'error',
          'max-nested-callbacks': 'error',
          'max-statements-per-line': 'error',
          'no-array-constructor': 'error',
          'no-bitwise': 'error',
          'no-case-declarations': 'error',
          'no-class-assign': 'error',
          'no-compare-neg-zero': 'error',
          'no-cond-assign': 'error',
          'no-const-assign': 'error',
          'no-constant-condition': 'error',
          'no-control-regex': 'error',
          'no-debugger': 'error',
          'no-delete-var': 'error',
          'no-dupe-args': 'error',
          'no-dupe-class-members': 'error',
          'no-dupe-keys': 'error',
          'no-eval': 'error',
          'no-ex-assign': 'error',
          'no-func-assign': 'error',
          'no-global-assign': 'error',
          'no-invalid-regexp': 'error',
          'no-new-wrappers': 'error',
          'no-restricted-globals': 'error',
          'no-restricted-properties': 'error',
          'no-return-await': 'error',
          'no-self-assign': 'error',
          'no-undef-init': 'error',
          'no-undefined': 'error',
          'no-unreachable': 'error',
          'no-unsafe-finally': 'error',
          'no-unsafe-negation': 'error',
          'no-unused-expressions': 'error',
          // import-x
          'import-x/no-nodejs-modules': [
            'error',
            { allow: builtinModules.map((mod) => `node:${mod}`) },
          ],
        },
      },
    ],
  },

  {
    ignores: ['dist', 'node_modules'],
  },
);
