module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-tabs': 'warn', // 不空格改为警告
    'vue/multi-word-component-names': 'off',
    'eqeqeq': ["off"], // 针对“===”的eslint报错
    "no-unused-vars": 'off', // 让未被使用的变量改为警告
    'eol-last': 0 //取消最后一个空行的规则校验
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)'
    ],
    env: {
      jest: true
    }
  }]
}
