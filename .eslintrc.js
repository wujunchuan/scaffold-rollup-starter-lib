// 参考：https://ts.xcatliu.com/engineering/lint#zai-typescript-zhong-shi-yong-eslint
// 参考：https://github.com/forthealllight/blog/issues/45
// 参考：https://www.jianshu.com/p/fed0fbf95172
module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        //指定代码的运行环境
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        'prettier/prettier': 1,
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        eqeqeq: ['warn', 'always'],
        'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],
        '@typescript-eslint/indent': ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        '@typescript-eslint/no-unused-vars': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-triple-slash-reference': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/triple-slash-reference': [
            'error',
            { path: 'always', types: 'never', lib: 'never' },
        ],
    },
};
