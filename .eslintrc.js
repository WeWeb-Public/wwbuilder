module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        wwLib: 'readonly',
        _: 'readonly'
    }
};
