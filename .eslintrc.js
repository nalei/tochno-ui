module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Разрешил пустые лямбда функции
    '@typescript-eslint/no-empty-function': 'off',
    // Отключил проверку на запрет использования "!"
    '@typescript-eslint/no-non-null-assertion': 'off',
    // Отключил проверку на обязательный возврвщаемый тип функции (: void не нужен)
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Отступы 2 пробела в тегах script и style внутри компонентов vue
    'vue/script-indent': ['warn', 2, { baseIndent: 1, switchCase: 1 }],
    // Отключил импорт правил prettier внутрь eslint чтобы не подсвечивал в ide
    'prettier/prettier': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
