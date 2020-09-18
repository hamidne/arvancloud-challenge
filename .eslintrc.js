module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['vue', 'nuxt'],
        threshold: 5,
        custom: ['validations'],
      },
    ],
    'vue/no-unregistered-components': [
      'error',
      {
        ignorePatterns: ['nuxt(-\\w+)?', 'b-\\w+'],
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props'],
      },
    ],
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    'vue/order-in-components': [
      'warn',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          'watchQuery',
          'layout',
          'middleware',
          'validate',
          'head',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'emits',
          'setup',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError',
          'fetch',
          'asyncData',
        ],
      },
    ],
  },
}
